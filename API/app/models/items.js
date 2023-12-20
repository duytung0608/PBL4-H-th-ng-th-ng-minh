const { param } = require('../routers');

const MainModel = require(__path_schemas + 'items');

module.exports = {
    create: (item) => {
        return new MainModel(item).save();
    },
    listItems: (params, option) => {
        if (option.task == 'all') {
            return MainModel.find({}).select('id name status');
        }
        if (option.task == 'one') {
            return MainModel.find({ id: params.id }).select('id name status');
        }
    },
    deleteItem: (params, option) => {
        if (option.task == 'one') {
            return MainModel.deleteOne({ id: params.id });
        }
    },
    editItem: (params, option) => {
        if (option.task == 'edit') {
            return MainModel.updateOne({ id: params.id }, params.body);
        }
    },
};
