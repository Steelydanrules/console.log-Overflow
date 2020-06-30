class Api::VotesController < ApplicationController

  def index
    @votes = Question.find(params[:question_id]).votes

  end

  def create
    @vote = Vote.new(vote_params)
    @vote.liker_id = current_user.id

    votes = Question.find(params[:question_id]).votes
    votes.each do |vote|
      if vote.liker_id == current_user.id
        delete vote
      end
    end 

    if @vote.save

    else
      render json: @vote.errors.full_messages, status: 422
    end 
  end 

  private

  def vote_params
    params.require(:vote).permit(:type, :question_id)
  end 

end