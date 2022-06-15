class Api::PostsController < ApplicationController
    def index
        @posts = Post.all.includes(:author, :photo_blob, :photo_attachment, author: [:profile_photo_blob, :profile_photo_attachment])
        render :index
    end

    def create

        @post = Post.new(post_params)
        @post.author_id = current_user.id
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end 
    end

    def destroy
        @post = current_user.posts.find_by(id: params[:id])

        if @post
            @post.destroy
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def show
        @post = Post.find_by(id: params[:id])
        render :show
    end

    def update
        @post = current_user.posts.find_by(id: params[:id])
        if @post && @post.author_id == current_user.id
            @post.update(post_params)
            render :show
        else
            render @post.errors.full_messages, status: 422
        end
    end

    private

    def post_params
        params.require(:post).permit(:body, :photo, :author_id)
    end
end
