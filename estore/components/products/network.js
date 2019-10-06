const express = require('express');

const response = require('../../network/response');
const presenter = require('./presenter');
const controller = require('./controller');
const {
	productIdSchema,
	createProductSchema
} = require('./schema.js');

const validationHandler = require('../../utils/middlewares/validationHandler');


const router = express.Router();

//router.get('/',presenter.getProducts);

router.route('/')
	.get(presenter.getProducts)
	.post(validationHandler(createProductSchema),
			presenter.createProduct);

router.route('/:productId')
	.get(presenter.showProduct)
	.put(presenter.updateProduct)
	.delete(presenter.deleteProduct);








module.exports = router;