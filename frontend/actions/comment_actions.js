import * as CommentApiUtil from "../utils/comment_api_util";

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";


const receiveComments = (comments) => {
    return ({
        type: RECEIVE_ALL_COMMENTS,
        comments
    });
};



const receiveComment = (comment) => {
    return ({
        type: RECEIVE_COMMENT,
        comment
    });
};



const removeComment = (commentId) => {
    return ({
        type: REMOVE_COMMENT,
        commentId
    });
};


export const fetchComments = () => (dispatch) => {
    return CommentApiUtil.fetchComments()
        .then((comments) => dispatch(receiveComments(comments)));
};


export const createComment = (comment) => (dispatch) => {
    return CommentApiUtil.createComment(comment)
        .then((comment) => dispatch(receiveComment(comment)));
};

export const deleteComment = (commentId) => (dispatch) => {
    return CommentApiUtil.deleteComment(commentId)
        .then((commentId) => dispatch(removeComment(commentId)));
};

export const updateComment = (comment) => (dispatch) => {
    return CommentApiUtil.updateComment(comment)
        .then((comment) => dispatch(receiveComment(comment)));
};