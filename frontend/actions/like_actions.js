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

const removeLike = (like) => {
    return ({
        type: REMOVE_LIKE,
        like
    });
};


// Thunk action creators
export const createLike = (like) => (dispatch) => {
    return LikeApiUtil.createLike(like)
        .then((like) => dispatch(receiveLike(like)));
};


export const deleteLike = (likeId) => dispatch => {
    return LikeApiUtil.deleteLike(likeId)
        .then((like) => dispatch(removeLike(like)));
};