
import React from "react";
import EditCommentContainer  from "./edit_comment_container";

class CommentIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dropDownBool: false,
            editBool: false
        };

        this.switchToggle = this.switchToggle.bind(this);
        this.dropDown = this.dropDown.bind(this);
        this.editOrDisplay = this.editOrDisplay.bind(this);
    };


    dropDown() {
        if (this.state.dropDownBool) {
            const commentId = this.props.comment.id;
            return(
                <div>
                    <div onClick={() => this.switchToggle("editBool")}>Edit</div>
                    <div onClick={()=> this.props.deleteComment(commentId)}>Delete</div>
                </div>
            );
        } else {
            return <div onClick={()=>this.switchToggle("dropDownBool")}>dots</div>
        };
    };

    switchToggle(field) {
        this.setState((prevState) => {
            return{[field]: !prevState.field};
        });
    };

    editOrDisplay() {
        if (this.state.editBool) {
            return(<EditCommentContainer commentId={this.props.comment.id}/>);
        } else {
            return(<div>{this.props.comment.body}</div>);
        };
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.editBool) {
            this.setState({editBool: false});
        };
    };


    render() {
        return (
        <div>
            {this.editOrDisplay()}
            <div>{this.dropDown()}</div>
        </div>
        );
    };
};

export default CommentIndexItem;