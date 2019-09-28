const express = require('express');

const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

/*
const presenter = require('./presenter');
router
	.route("/")
	.get(presenter.getProductsP)
	.post(presenter.addProductP);
*/

router.get('/', function(req, res){
	controller.getProducts()
		.then((productList) =>{
			response.success(req,res, productList, 200);
		})
		.catch(e => {
			response.error(req,res, "Unexpected Error", 500, e);
		});
});

router.post('/',function(req, res){

	controller.addProduct(
			req.body.name, 
			req.body.price
		)
		.then((fullProduct) => {
			response.success(req,res, fullProduct, 201);
		})
		.catch(e => {
			response.error(req,res, "información invalida", 400, "Error en el controller");
		});

});


module.exports = router;