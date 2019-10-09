const express = require('express');

//const response = require('../../network/response');
const presenter = require('./presenter');
//const controller = require('./controller');

const {
	productIdSchema,
	createProductSchema,
	updateProductSchema
} = require('./schema.js');

const validationHandler = require('../../utils/middlewares/validationHandler');


const router = express.Router();

//router.get('/',presenter.getProducts);

router.route('/')
	.get(presenter.getProducts)
	.post(validationHandler(createProductSchema),
			presenter.createProduct);

router.route('/:productId')
	.get(validationHandler({productId: productIdSchema}, 'params'),
			presenter.showProduct)
	.put(validationHandler({productId: productIdSchema}, 'params'),
			validationHandler(updateProductSchema),
			presenter.updateProduct)
	.delete(validationHandler({productId: productIdSchema}, 'params'),
			presenter.deleteProduct);








module.exports = router;