

// User signup
export const signup = (user) => {
    return $.ajax ({
        url: '/api/users',
        method: "POST",
        data: {user}
    });
};


// user sign in
export const login = (user) => {
    return $.ajax({
        url: '/api/session',
        method: "POST",
        data: {user}
    });
};

// user logout
export const logout = () => {
    return $.ajax({
        url: '/api/session',
        method: "DELETE"
    });
};

// let user = { first_name: "1", last_name: "1", email: "1", birthday: 12/12/12, password:"123456" }

export const fetchUser = (userId) => {
    return $.ajax({
        url: `/api/users/${userId}`,
        method: "GET"
    });
};
