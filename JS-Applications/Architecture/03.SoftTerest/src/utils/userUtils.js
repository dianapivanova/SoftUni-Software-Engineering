function getUser() {
    return JSON.parse(sessionStorage.getItem("userData"))
}

function hasUser() {
    return !!getUser();
}

function removeUser() {
    sessionStorage.removeItem("userData");
}

function setUser(data) {
    sessionStorage.setItem("userData", JSON.stringify(data));
}

export {
    getUser,
    hasUser,
    removeUser,
    setUser
}