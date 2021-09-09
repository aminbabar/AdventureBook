class Api::SessionsController < ApplicationController

    # # login form
    # def new
    # end

    # login
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Invalid username or password"], status: 401
        end

    end

    # log a user out
    def destroy
        @user = current_user
        if @user
            logout
            render "api/users/show"
        else
            render json: ["not logged in"], status: 404
        end
    end

end
