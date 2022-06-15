export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

import * as LikeApiUtil from "../utils/like_api_util";


// action creators
const receiveLike = (like) => {
    return ({
        type: RECEIVE_LIKE,
        like
    });
};

const removeLike = (likeId) => {
    return ({
        type: REMOVE_LIKE,
        likeId
    });
};


// Thunk action creators
export const createLike = (like) => (dispatch) => {
    return LikeApiUtil.createLike(like)
        .then((like) => dispatch(receiveLike(like)));
};


export const deleteLike = (likeId) => dispatch => {
    return LikeApiUtil.deleteLike(likeId)
        .then(() => dispatch(removeLike(likeId)));
};