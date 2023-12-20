const { param } = require('../routers');

const MainModel = require(__path_schemas + 'forecasts');

module.exports = {
    create: (forecast) => {
        return new MainModel(forecast).save();
    },
    listForecasts: (params, option) => {
        if (option.task == 'all') {
            return MainModel.find({}).select('id name avatar disease cause solution  ');
        }
        if (option.task == 'one') {
            return MainModel.find({ id: params.id }).select('id name avatar disease cause solution ');
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
