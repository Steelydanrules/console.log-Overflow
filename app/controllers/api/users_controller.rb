class Api::UsersController < ApplicationController

  PROFILE_URLS = [
    "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/mcdonry01-2020.jpg",
    "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/stralan01-2020.jpg",
    "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/stepade01-2020.jpg",
    "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/lundqhe01-2020.jpg",
    "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/zuccama01-2020.jpg",
    "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/brassde01-2020.jpg",
    "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/boylebr01-2020.jpg",
    "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/hagelca01-2020.jpg",
    "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/nashri01-2017.jpg",
    "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/mooredo01-2017.jpg",
    "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/callary01-2020.jpg",
    "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/stlouma01-2015.jpg",
    "https://www.hockey-reference.com/players/m/millejt01.html"
  ]
  
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
    @user.profile_photo_url = PROFILE_URLS.sample
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
