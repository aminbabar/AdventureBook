

export const fetchPosts = () => {
    debugger;
    return $.ajax({
        url: "/api/posts",
        method: "GET"
    });
};


export const fetchPost = (postId) => {
    debugger;
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: "GET"
    });
};


export const createPost = (formData) => {
    debugger;
    return $.ajax({
        url: `/api/posts`,
        method: "POST",
        data: formData,
        contentType: false,
        processData: false
    });
};


export const deletePost = (postId) => {
    debugger;
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: "DELETE"
    });
};


export const updatePost = (post) => {
    debugger;
    return $.ajax({
        url: `/api/posts/${post.id}`,
        method: "PATCH",
        data: {post}
    });
};


