module.exports = function(request, response, next) {
    if (request.session.connexion && request.session.connexion.status === true) {
        next()
    } else {
        response.redirect('/login')
    }
}