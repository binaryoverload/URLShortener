function authMiddleware({ needsAdmin }) {
    // TODO needsAdmin
    return (req, res, next) => {
        if (!req.user || !req.user.oid) {
            // Not logged in!
            return res.redirect("/login?next=" + req.originalUrl);
        }
        if (needsAdmin && !req.user.administrator) {
            return res.status(401).send("<h1>You are not an admin :(</h1>")
        }
        return next();
    };
}

module.exports = {
    authMiddleware
};