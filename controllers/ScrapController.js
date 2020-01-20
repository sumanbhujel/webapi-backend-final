const SCRAP = require('../models/Scrap');

class ScrapController {

    async addScrap(req, res) {
        var newScrap = new SCRAP(req.body);
        newScrap.save().then(function () {
            res.send('Scrap details added');
        }).catch(function (e) {
            res.send(e);
            console.log(e);
        });
    }
    async addNewScrap(req, res) {
        var newScrap = new SCRAP(req.body);
        newScrap.save().then(newScrap => {
            res.json({ newScrap })
        }).catch(error => {
            res.json({ error });
        });
    }
    async getScrap(req, res) {
        var scrap = SCRAP.find().populate('user')
            .then(scrap => {
                res.json({ scrap: scrap });
            }).catch(error => {
                res.json({ error });
            });
    }
    async viewScrap(req, res) {
        SCRAP.find().then(function (scrap) {
            res.send(scrap);
        }).catch(function (er) {
            res.send(er);
        });
    }
    async viewScrapById(req, res) {
        SCRAP.findOne({ userId: req.params.id }).then(function (scrap_data) {
            res.send(scrap_data);
        }).catch(function (er) {
            res.send(er);
        });
    }
    async updateScrap(req, res) {
        SCRAP.findByIdAndUpdate(req.params.id, req.body).then(function () {
            res.send('Scrap detail Update Successfully ');
        }).catch(function (er) {
            res.send(er);
        });
    }
    async deleteScrap(req, res) {
        SCRAP.findByIdAndDelete(req.params.id).then(function () {
            res.send('deleted');
        }).catch(function (e) {
            res.send(e);
        });
    }


}

module.exports = new ScrapController();