class Api::VotesController < ApplicationController

  def index
    if params[:question_id]
      @votes = Question.find(params[:question_id]).votes
    end

  end

  def create
    debugger
    @vote = Vote.new(vote_params)
    debugger
    @vote.liker_id = current_user.id

    votes = Question.find(vote_params[:question_id]).votes
    votes.each do |vote|
      if vote.liker_id == current_user.id
        vote.destroy
      end
    end 

    if @vote.save
      return
    else
      render json: @vote.errors.full_messages, status: 422
    end 
  end 

  private

  def vote_params
    params.require(:vote).permit(:like_or_dislike, :question_id)
  end 

end