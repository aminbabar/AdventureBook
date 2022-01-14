
import React from "react";


class CommentIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };

        this.switchToggle = this.switchToggle.bind(this);
        this.dropDown = this.dropDown.bind(this);
    };


    dropDown() {
        if (this.state.toggle) {
            const commentId = this.props.comment.id;
            return(
                <div>
                    <div>Edit</div>
                    <div onClick={()=> this.props.deleteComment(commentId)}>Delete</div>
                </div>
            );
        } else {
            return <div onClick={this.switchToggle}>dots</div>
        };
    };

    switchToggle() {
        // debugger;
        this.setState((prevState) => {
            return{toggle: !prevState.toggle};
        });
    };


    render() {
        debugger;
        return (
        <div>
            <div>{this.props.comment.body}</div>
            <div>{this.dropDown()}</div>
        </div>
        );
    };
};

export default CommentIndexItem;