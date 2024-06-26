const userAuth = (req, res, next) => {
    let { userid } = req.cookies
    if (userid) {
        next()
    } else {
        return res.redirect('/login')
    }
}

module.exports = userAuth