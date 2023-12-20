var express = require('express');
var router = express.Router();

const controllerName = 'accounts';
const MainModel = require(__path_models + controllerName);

router.get('/', async (req, res, next) => {
    try {
        const data = await MainModel.listAccounts({}, { task: 'all' });
        res.status(200).json({
            success: true,
            data: data,
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
});

router.get('/:username', async (req, res, next) => {
    try {
        const data = await MainModel.listAccounts({ username: req.params.username }, { task: 'one' });
        res.status(200).json({
            success: true,
            data: data,
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
});

router.post('/add', async (req, res, next) => {
    try {
        let params = [];
        params.username = req.body.username;
        params.password = req.body.password;
        params.name = req.body.name;
        params.phone = req.body.phone;

        const data = await MainModel.create(params);

        res.status(201).json({
            success: true,
            data: data,
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
});

router.put('/edit/:username', async (req, res, next) => {
    try {
        let body = req.body;
        const data = await MainModel.editAccount({ username: req.params.username, body: body }, { task: 'edit' });
        res.status(200).json({
            success: true,
            data: data,
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
});
router.delete('/delete/:username', async (req, res, next) => {
    try {
        const data = await MainModel.deleteAccount({ username: req.params.username }, { task: 'one' });
        res.status(200).json({
            success: true,
            data: data,
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
});

module.exports = router;

makeId = (number) => {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for (let i = 0; i < number; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};
