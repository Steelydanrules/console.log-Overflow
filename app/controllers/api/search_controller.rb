class Api::SearchController < ApplicationController

  def index
    debugger
    @questions = []
    questions = Question.all
    questions.each do |question|
      if question.body.downcase.include?(params[:searchData].downcase)
        @questions.push(question)
      end 
    end 
    render :index
  end

end