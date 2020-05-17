function checkForUrl(inputUrl) {
    const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

    if (urlRegex.test(inputUrl)) {
        return true;
    }
    else {
        return false;
    }
}

export { checkForUrl }