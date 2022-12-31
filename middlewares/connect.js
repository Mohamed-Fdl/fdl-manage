module.exports = function(request, response, next) {
    //console.log(request.url)
    if (request.url === '/login') {
        next()
    } else {
        if (request.session.connexion && request.session.connexion.status === true) {
            next()
        } else {
            response.redirect('/login')
        }
    }
}