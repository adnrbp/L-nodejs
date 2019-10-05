const express = require('express');

const response = require('../../network/response');
const controller = require('./controller');
const {
	productIdSchema,
	createProductSchema
} = require('./schema.js');

const validationHandler = require('../../utils/middlewares/validationHandler');


const router = express.Router();

/*
const presenter = require('./presenter');
router
	.route("/")
	.get(presenter.getProductsP)
	.post(presenter.addProductP);
*/

router.get('/', function(req, res, next){
	controller.getProducts()
		.then((productList) =>{

			response.success(req,res, productList, 200);
		})
		.catch(e => {
			response.error(req,res, "Unexpected Error", 500, e);
			//next(e);
		});
});

router.post('/', 
	validationHandler(createProductSchema), 
	function(req, res, next){
		const {body: product } = req;

		controller.addProduct({product})
			.then((fullProduct) => {
				response.success(req,res, fullProduct, 201);
			})
			.catch(e => {
				response.error(req,res, "información invalida", 400, "Error en el controller");
			});

});


module.exports = router;