import React from "react"
import PostIndexItem from "./post_index_item";
import CreatePostContainer from "./create_post_container";
import CreatePost from "./create_post";

class PostIndex extends React.Component {

    

    render() {

        const {users, currentUserId, source, userId, deleteLike, deletePost, createLike, openModal} = this.props;

        let postTopComponent;
        if (parseInt(userId) === currentUserId || source === "newsfeed") {
            postTopComponent = <CreatePost />;
        } else {
            postTopComponent = <div className="posts-header-profile">Posts</div>;
        }

        const noPostsMessage = <div className="no-results">No posts to show</div>;

        let posts = this.props.posts.reverse();

        return (
            <div className="newsfeed-middle">
                {postTopComponent}
                {this.props.posts.length === 0 ? noPostsMessage : null}
                <ul>

                    {posts.map((post) => {
                        return (  <PostIndexItem
                                        post={post}
                                        deletePost={deletePost}
                                        postUser = {users[post.author_id]}
                                        currentUser={users[currentUserId]}
                                        openModal={openModal}                                        
                                        key={post.id}
                                        createLike={createLike}
                                        deleteLike={deleteLike}
                                    />
                            );
                    })}
                </ul>
            </div>
        );
    };
};

export default PostIndex;