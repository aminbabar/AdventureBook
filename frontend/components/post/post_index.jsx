import React from "react"
import PostIndexItem from "./post_index_item";
import CreatePost from "./create_post";

class PostIndex extends React.Component {

    

    render() {
        const {users, currentUserId, source, userId, deleteLike, deletePost, createLike, openModal, posts} = this.props;
        let postTopComponent;
        if (parseInt(userId) === currentUserId || source === "newsfeed") {
            postTopComponent = <CreatePost />;
        } else {
            postTopComponent = <div className="posts-header-profile">Posts</div>;
        }

        const noPostsMessage = <div className="no-results">No posts to show</div>;

        let postOrdering = posts?.orderedPostIds || [];

        return (
            <div className="newsfeed-middle">
                {postTopComponent}
                {postOrdering.length === 0 ? noPostsMessage : null}
                <ul>

                    {postOrdering.map((postId) => {
                        let post = posts[postId];
                        return (  <PostIndexItem
                                        post={post}
                                        deletePost={deletePost}
                                        postUser = {users[post.author_id]}
                                        currentUser={users[currentUserId]}
                                        openModal={openModal}                                        
                                        key={post.id + post.body}
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