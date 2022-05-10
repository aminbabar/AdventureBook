class Api::FriendRequestsController < ApplicationController
    before_action :ensure_logged_in

    def index
        debugger
        @friend_requests = current_user.friend_requests
        render :index
    end

    def create
        @friend_request = FriendRequest.new(friend_request_params)
        @friend_request.requester_id = current_user.id

        if @friend_request.save
            render :show
        else
            render json: @friend_request.errors.full_messages, status: 422
        end
    end

    def destroy
        @friend_request = current_user.friend_requests.find(params[:id])

        if @friend_request
            @friend_request.destroy
        else
            render json: @friend_request.errors.full_messages, status: 422
        end
    end

    # def show
    #     @friend_request = FriendRequest.find(params[:id])
    #     render :show
    # end


    private

    def friend_request_params
        params.require(:friend_request).permit(:recipient_id)
    end

end