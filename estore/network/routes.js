const express = require('express');
const products = require('../components/products/network');

const routes = function (server){
	server.use('/products', products)
}

module.exports = routes;