class Api::CommentsController < ApplicationController

    # CHANGE THIS
    def index
        @comments = Comment.all
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.comment_author_id = current_user.id
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        if @comment && @comment.destroy
            render :index
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment && @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    private

    def comment_params
        # hacker might be able to exploit the post_id coming in from frontend
        params.require(:comment).permit(:body, :post_id)
    end

end
