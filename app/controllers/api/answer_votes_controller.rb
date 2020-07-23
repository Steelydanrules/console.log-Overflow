class Api::AnswerVotesController < ApplicationController

  def index
    if params[:answer_id]
      @answer_votes = Answer.find(params[:answer_id]).answer_votes
    elsif params[:question_id]
      @answer_votes = Answer.find(params[:answer_id]).votes_on_answers
    end 
    render :index
  end

  def show
    @answer_votes = Question.find(params[:id]).votes_on_answers
    render :index

  end

  def create
    @answer_vote = AnswerVote.new(answer_vote_params)
    @answer_vote.liker_id = current_user.id
    answer_votes = Answer.find(answer_vote_params[:answer_id]).answer_votes
    answer_votes.each do |answer_vote|
      if answer_vote.liker_id == current_user.id
        answer_vote.destroy
      end
    end 

    if @answer_vote.save
      render :show
    else
      render json: @answer_vote.errors.full_messages, status: 422
    end 
  end 

  private

  def answer_vote_params
    params.require(:answerVote).permit(:like_or_dislike, :answer_id)
  end 

end