class Api::UsersController < ApplicationController


    # def new
    # end

    # CHANGE line 12 render json: @user!!!
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages
        end

    end


    # def destroy
    # end

    private

    def user_params
        params.require(:user).permit(:email, :password, :fname, :lname, :birthday, :city, :work)
    end

end
