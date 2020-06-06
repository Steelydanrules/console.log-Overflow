class Api::UsersController < ApplicationController
  
  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end

  end
  
  
  
  def create
    @user = User.new(user_params)
    # debugger
    if @user.save
      login(@user)
      # render "api/users/show"
      render :show
    else
      # debugger
      render json: @user.errors.full_messages, status: 422
    end
  end



  def update
    @user = User.find(params[:id])

    if @user == current_user && @user.save
      login(@user)
      render "api/users/show"
    else
      debugger
      render json: @user.errors.full_messages, status: 422
    end
  end



  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
