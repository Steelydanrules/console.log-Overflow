class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Please enter appropriate username/login info"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
    render json: {}
    logout
    end
  end
end