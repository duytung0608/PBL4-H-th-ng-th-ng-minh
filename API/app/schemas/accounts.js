const { channel } = require('diagnostics_channel');
const mongoose = require('mongoose');
const databaseConfig = require(__path_configs + 'database');
var schema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    phone: String,
});
module.exports = mongoose.model(databaseConfig.col_items, schema);
