const { param } = require('../routers');

const MainModel = require(__path_schemas + 'forecast');

module.exports = {
    create: (forecast) => {
        return new MainModel(forecast).save();
    },
    listForecast: (params, option) => {
        if (option.task == 'all') {
            return MainModel.find({}).select('name avatar disease cause solution id ');
        }
        if (option.task == 'one') {
            return MainModel.find({ id: params.id }).select('name avatar disease cause solution id ');
        }
    },
    deleteForecast: (params, option) => {
        if (option.task == 'one') {
            return MainModel.deleteOne({ id: params.id });
        }
    },
    editForecast: (params, option) => {
        if (option.task == 'edit') {
            return MainModel.updateOne({ id: params.id }, params.body);
        }
    },
};
