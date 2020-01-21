const USER = require('../../models/User');

class AuthController {
    async logIn(req, res) {
        try {
            const user = await USER.checkCrediantialsDb(req.body.email, req.body.password);
            const token = await user.generateAuthToken();
            res.json({ success: true, user, token });
        } catch (e) {
            res.status(400).send();
            console.log(e);
        }
    }
    async registerUser(req, res) {
        var newUser = new USER(req.body);
        newUser.save().then(function () {
            res.send('New Account Registered');
        }).catch(function (e) {
            res.send(e);
        });
    }
    async logOut(req, res) {
        try {
            req.user.tokens = req.user.tokens.filter((token) => { return token.token !== req.token })
            await req.user.save()
            res.send()
        } catch (e) {
            res.status(500).send()
        }
    }
}

module.exports = new AuthController();