import React from "react"
import PostIndexItem from "./post_index_item";
import CreatePostContainer from "./create_post_container";
import CreatePost from "./create_post";

class PostIndex extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    };

    render() {

        let posts = this.props.posts.reverse();
        return (
            <div className="newsfeed-middle">
                <CreatePost />
                <ul>
                    {posts.map((post) => {
                        return (  <PostIndexItem
                                        post={post}
                                        deletePost={this.props.deletePost}
                                        postUser = {this.props.users[post.author_id]}
                                        currentUser={this.props.users[this.props.currentUserId]}
                                        openModal={this.props.openModal}                                        
                                        key={post.id}
                                        createLike={this.props.createLike}
                                        deleteLike={this.props.deleteLike}
                                    />
                            );
                    })}
                </ul>
            </div>
        );
    };
};

export default PostIndex;