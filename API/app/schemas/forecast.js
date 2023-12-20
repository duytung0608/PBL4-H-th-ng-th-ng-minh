const { channel } = require('diagnostics_channel');
const mongoose = require('mongoose');
const databaseConfig = require(__path_configs + 'database');
var schema = new mongoose.Schema({
    name: String,
    avatar: String,
    disease: String,
    cause: String,
    solution: String,
    id: String,
});
module.exports = mongoose.model(databaseConfig.col_items, schema);
