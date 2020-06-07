class Api::QuestionsController < ApplicationController
  
  
  def index
    if params[:asker_id]
      @questions = User.find(params[:asker_id]).questions
    else
      @questions = Question.all
    end

    render :index
  end

  def show
    @question = Question.find(params[:id])
    if @question
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def create
    @question = Question.new(question_params)
    user = current_user
    @question.asker_id = user.id

    if @quesion.save
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