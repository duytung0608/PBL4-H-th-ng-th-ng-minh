var express = require('express');
var router = express.Router();

const controllerName = 'items';
const MainModel = require(__path_models + controllerName);

router.get('/', async (req, res, next) => {
    try {
        const data = await MainModel.listItems({}, { task: 'all' });
        res.status(200).json({
            success: true,
            data: data,
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const data = await MainModel.listItems({ id: req.params.id }, { task: 'one' });
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
        params.id = makeId(8);
        params.name = req.body.name;
        params.status = req.body.status;

        const data = await MainModel.create(params);

        res.status(201).json({
            success: true,
            data: data,
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
});

router.put('/edit/:id', async (req, res, next) => {
    try {
        let body = req.body;
        const data = await MainModel.editItem({ id: req.params.id, body: body }, { task: 'edit' });
        res.status(200).json({
            success: true,
            data: data,
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
});
router.delete('/delete/:id', async (req, res, next) => {
    try {
        const data = await MainModel.deleteItem({ id: req.params.id }, { task: 'one' });
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
