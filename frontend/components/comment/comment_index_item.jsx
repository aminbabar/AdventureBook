
import React from "react";
import EditCommentContainer  from "./edit_comment_container";
import { BsFillCaretDownFill } from "react-icons/bs";
import Dropdown from "../nav_bar/dropdown";

class CommentIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editBool: false
        };

        this.switchToggle = this.switchToggle.bind(this);
        this.editOrDisplay = this.editOrDisplay.bind(this);
    };

    switchToggle(field) {
        this.setState((prevState) => {
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


    render() {

        const commentId = this.props.comment.id;
        return (
        <div>
            {this.editOrDisplay()}
            <Dropdown icon={<BsFillCaretDownFill size={"15px"} />}>
                <li className="edit-button-now" onClick={() => this.switchToggle("editBool")}>Edit</li>
                <li onClick={() => this.props.deleteComment(commentId)}>Delete</li>
                {/* <li onClick={this.props.logout}>
                    <GrLogout /> <span>Log out</span>
                </li> */}
            </ Dropdown>
        </div>
        );
    };
};

export default CommentIndexItem;