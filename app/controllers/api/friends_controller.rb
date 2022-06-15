class Api::FriendsController < ApplicationController
    before_action :ensure_logged_in

    def index
        @friends = current_user.friends
        render :index
    end

    def create
        @friend = Friend.new(friend_params)
        @friend.user_id = current_user.id

        if @friend.save
            render :show
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def destroy
        @friend = current_user.friends.find_by(id: params[:id])
        if @friend
            @friend.destroy
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def update
        @friend =  current_user.friends.find_by(friend_id: params[:id]) || current_user.friends.find_by(user_id: params[:id])
        if @friend
            @friend.update(friend_status: true)
            render :show
        else
            render @friend.errors.full_messages, status: 422
        end
    end

    # def show
    #     @friend = Friend.find(params[:id])
    #     render :show
    # end


    private

    def friend_params
        params.require(:friend).permit(:friend_id)
    end

end