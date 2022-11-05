export const storageService = {
    // Local Storage:
    localStore(key, value) {
        localStorage[key] = JSON.stringify(value);
    },
    localLoad(key, defaultValue = null) {
        const value = localStorage[key] || defaultValue;
        return JSON.parse(value);
    },
    // Session Storage:
    sessionStore(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    },
    sessionLoad(key) {
        return JSON.parse(sessionStorage.getItem(key));
    }
}
