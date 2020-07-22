class Api::AnswerVotesController < ApplicationController

  def index
    debugger
    if params[:answer_id]
      @answer_votes = Answer.find(params[:answer_id]).votes
      render :index
    end

  end

  def create
    @answer_vote = AnswerVote.new(answer_vote_params)
    @answer_vote.liker_id = current_user.id

    answer_votes = Answer.find(answer_vote_params[:answer_id]).votes
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