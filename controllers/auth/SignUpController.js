const User =require('../../models/User');

class SingUpController {
    async registerUser(req, res) {
        var newUser = new User(req.body);
        newUser.save().then(function () {
            res.send('New Account Registered');
        }).catch(function (e) {
            res.send(e);
        });

    }
}

module.exports = new SingUpController();