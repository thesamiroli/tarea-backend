const express = require('express');
const app = express();

const parser = function(){
    app.use(express.urlencoded({
        extended: true
    }));

    app.use(express.json());
}

module.exports = parser;