

// User signup
export const signup = (user) => {
    debugger;
    return $.ajax ({
        url: '/api/user',
        method: "POST",
        data: {user}
    });
};


// user sign in
export const login = (user) => {
    debugger;
    return $.ajax({
        url: '/api/session',
        method: "POST",
        data: {user}
    });
};

// user logout
export const logout = () => {
    debugger;
    return $.ajax({
        url: '/api/session',
        method: "DELETE"
    });
};

// let user = { fname: "1", lname: "1", email: "1", birthday: 12/12/12, password:"123456" }