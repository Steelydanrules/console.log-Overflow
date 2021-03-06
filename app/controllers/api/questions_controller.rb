class Api::QuestionsController < ApplicationController
  
  def index
    if params[:asker_id]
      @questions = User.find(params[:asker_id]).questions

    elsif params[:searchData]
      @questions = []
      questions = Question.all
      questions.each do |question|

        if question.body.downcase.include?(params[:searchData].downcase)
          @questions.push(question)
        end 

      end

    else
      
      @questions = Question.all
    end


    render :index
  end

  def show
    @question = Question.find(params[:id])
    if @question
      @question.site_hits += 1
      @question.save!
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  # def add_view
  #   @question = Question.find(params[:question_id])
  #   @question.site_hits += 1
  # end 

  def create
    @question = Question.new(question_params)
    user = current_user
    @question.asker_id = user.id
    @question.site_hits = 0

    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def update
    @question = Question.find(params[:id])
    user = current_user
    if @question && @question.asker_id == user.id
      @question.update(question_params)
      render :show
    else
      render json: @question.errors.full_messages, status: 401
    end
  end

  def destroy
    @question = Question.find(params[:id])
    user = current_user
    if @question && @question.asker_id == user.id
      @question.destroy
      redirect_to questions_url
    else
      render json: @question.errors.full_messages, status: 401
    end
  end

  private
  def question_params
    params.require(:question).permit(:title, :body, :tag)
  end

end