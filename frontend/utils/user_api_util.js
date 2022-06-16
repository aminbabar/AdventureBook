export const updateUser = (user) => {
    return $.ajax({
        url: `/api/users/${user.id}`,
        method: "PATCH",
        data: user,
        contentType: false,
        processData: false
    });
};

export const search = (query) => {
    return $.ajax({
        url: `/api/users/search`,
        method: "POST",
        data: {query}
    });
};


