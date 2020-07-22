class Api::AnswerVotesController < ApplicationController

  def index
    if params[:answer_id]
      @votes = Answer.find(params[:answer_id]).votes
      render :index
    end

  end

  def create
    @vote = Vote.new(vote_params)
    @vote.liker_id = current_user.id
    
    votes = Answer.find(vote_params[:answer_id]).votes
    votes.each do |vote|
      if vote.liker_id == current_user.id
        vote.destroy
      end
    end 

    if @vote.save
      render :show
    else
      render json: @vote.errors.full_messages, status: 422
    end 
  end 

  private

  def vote_params
    params.require(:vote).permit(:like_or_dislike, :answer_id)
  end 

end