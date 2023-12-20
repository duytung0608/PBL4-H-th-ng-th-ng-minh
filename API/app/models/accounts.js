const { param } = require('../routers');

const MainModel = require(__path_schemas + 'accounts');

module.exports = {
    create: (account) => {
        return new MainModel(account).save();
    },
    listAccounts: (params, option) => {
        if (option.task == 'all') {
            return MainModel.find({}).select('username password name phone');
        }
        if (option.task == 'one') {
            return MainModel.find({ username: params.username }).select('username password name phone');
        }
    },
    deleteAccount: (params, option) => {
        if (option.task == 'one') {
            return MainModel.deleteOne({ username: params.username });
        }
    },
    editAccount: (params, option) => {
        if (option.task == 'edit') {
            return MainModel.updateOne({ username: params.username }, params.body);
        }
    },
};
