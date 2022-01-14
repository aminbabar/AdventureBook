
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
        this.drop = this.drop.bind(this);
        this.editToggle = this.editToggle.bind(this);
    };

    editToggle() {
        this.setState({dropDownBool: false}, () => {
            console.log(this.state.dropDownBool);
            this.switchToggle("editBool");
        });
    };


    dropDown() {
        if (this.state.dropDownBool) {
            const commentId = this.props.comment.id;
            return(
                <div>
                    <div className="edit-button-now" onClick={this.editToggle}>Edit</div>
                    <div onClick={()=> this.props.deleteComment(commentId)}>Delete</div>
                </div>
            );
        };
    };

    switchToggle(field) {
        // if (field == "dropDownBool") {
        //     debugger;
        // }
        // debugger;
        console.log(field);
        this.setState((prevState) => {
            // debugger;
            return{[field]: !prevState[field]};
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

    drop(e) {
        // debugger;
        // console.log(e.target)
        // console.log(this.state.dropDownBool)
        // setTimeout(() => this.switchToggle("dropDownBool"), 1000);

        if (this.state.dropDownBool) {
            console.log("drop");
            this.setState({ dropDownBool: false });
        }
    };


    render() {

        return (
        <div>
            {this.editOrDisplay()}
                <button onClick={() => this.switchToggle("dropDownBool")} onBlur={this.drop} >
                    <div onClick={(e) => e.stopPropagation()}>{this.dropDown()}</div>
                </button>
        </div>
        );
    };
};

export default CommentIndexItem;