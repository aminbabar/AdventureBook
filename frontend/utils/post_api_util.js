

export const fetchPosts = (userId, source) => {
    return $.ajax({
        url: `/api/posts?user_id=${userId}&source=${source}`,
        method: "GET"
    });
};


export const fetchPost = (postId) => {
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: "GET"
    });
};


export const createPost = (formData) => {
    return $.ajax({
        url: `/api/posts`,
        method: "POST",
        data: formData,
        contentType: false,
        processData: false
    });
};


export const deletePost = (postId) => {
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: "DELETE"
    });
};


export const updatePost = (formData, id) => {
    return $.ajax({
        url: `/api/posts/${id}`,
        method: "PATCH",
        data: formData,
        contentType: false,
        processData: false
    });
};


