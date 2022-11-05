export const utilService = {
    makePassword(length = 8) {
        var text = "";
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    },
    getDeepCopy(value) {
        return JSON.parse(JSON.stringify(value));
    }
}
