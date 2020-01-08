import User from '../../models/User';

class SingInController {
    async logIn(req, res) {
        try {
            const user = await User.checkCrediantialsDb(req.body.email, req.body.password);
            const token = await user.generateAuthToken();
            res.send({ user, token });
        } catch (e) {
            res.status(400).send();
        }

    }
}

export default new SingInController();