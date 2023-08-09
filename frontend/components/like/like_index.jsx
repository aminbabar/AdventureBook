import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import {selectLikesForPost} from "../../reducers/selectors";

class LikeIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    likeItem(like, idx) {
        const user = this.props.users[like.author_id];
        return (
            <div key={`${like.id.toString()} ${idx.toString()}`}>
                <Link to={`/users/${like.author_id}`} onClick={this.props.closeModal}>
                    <div className='like-photo'>
                        <img src={user.profilePhoto} />
                    </div>

                    <div>
                        {user.first_name + " " + user.last_name}
                    </div>

                </Link>
            </div>
        );
    }

    likeIndex() {
        return Object.values(this.props.likes).map((like, idx) => {
            return this.likeItem(like, idx);
        });
    };



    render() {
        return (this.likeIndex());
    }
}

// export default LikeIndex;

const mstp = (state, ownProps) => {
    const postOrComment = ownProps.indexType;
    const likesArr = state.entities[postOrComment][ownProps.postOrCommentId].likes;
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