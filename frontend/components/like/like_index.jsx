import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import {selectLikesForPost} from "../../reducers/selectors";

class LikeIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    likeItem(like) {
        const user = this.props.users[like.author_id];
        return (
            <>
                <Link to={`/users/${like.author_id}`} onClick={this.props.closeModal}>
                    <div className='like-photo'>
                        <img src={user.profilePhoto} />
                    </div>

                    <div>
                        {user.fname + " " + user.lname}
                    </div>

                </Link>
            </>
        );
    }

    likeIndex() {
        return Object.values(this.props.likes).map((like) => {
            return this.likeItem(like);
        });
    };



    render() {
        return (this.likeIndex());
    }
}

// export default LikeIndex;

const mstp = (state, ownProps) => {
    const likesArr = state.entities.posts[ownProps.postOrCommentId].likes;
    const currentUserId = state.session.currentUser;

    return({
        likes: selectLikesForPost(state.entities.likes, likesArr, currentUserId),
        users: state.entities.users
    });
};

const mdtp = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal())
    })
};


export default connect(mstp, mdtp)(LikeIndex);