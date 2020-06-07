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
    @user.profile_photo_url = "https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg"
    if @user.save
      login(@user)
      # render "api/users/show"
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end



  def update
    @user = User.find(params[:id])

    if @user == current_user && @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end



  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :profile_photo_url)
  end
end
