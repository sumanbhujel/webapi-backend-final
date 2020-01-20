const USER = require('../models/User');

class UserController {
    async viewUsers(req, res) {
        USER.find().then(function (scrap) {
            res.send(scrap);
        }).catch(function (er) {
            res.send(er);
        });
    }
    async viewUserById(req, res) {
        USER.findOne({ _id: req.params.id }).then(function (user_data) {
            res.send(user_data);
        }).catch(function (er) {
            res.send(er);
        });
    }
    async updateUserDetail(req, res) {
        USER.findByIdAndUpdate(req.params.id, req.body).then(function () {
            res.send('User detail Update Successfully ');
        }).catch(function (er) {
            res.send(er);
        });
    }
    async deleteUser(req, res) {
        USER.findByIdAndDelete(req.params.id).then(function () {
            res.send('User account delete');
        }).catch(function (e) {
            res.send(e);
        });
    }

}

module.exports = new UserController();