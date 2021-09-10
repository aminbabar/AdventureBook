import React from "react"
import PostIndexItem from "./post_index_item";


class PostIndex extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    };

    render() {
        let posts = this.props.posts.reverse();
        debugger;
        return (
            <div>
                <ul>
                    {posts.map((post) => {
                        return (<PostIndexItem
                                    post={post} 
                                    deletePost={this.props.deletePost}
                                    key={post.id}
                                />
                            );
                    })}
                </ul>
            </div>
        );
    };
};

export default PostIndex;