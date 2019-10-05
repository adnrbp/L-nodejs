const joi = require('@hapi/joi');

// Mongo id based
const productIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}/)

const productNameSchema = joi.string().max(80);
const productPriceSchema = joi.number().min(0.5).max(1000);
const productDescriptionSchema = joi.string().max(300);
const productTagsSchema = joi.array().items(joi.string().max(50));



const createProductSchema = {
	name: productNameSchema.required(),
	price: productPriceSchema.required(),
	description: productDescriptionSchema.required(),
	tags: productTagsSchema
};


const updateProductSchema = {
	name: productNameSchema,
	price: productPriceSchema,
	description: productDescriptionSchema,
	tags: productTagsSchema

};

module.exports = {
	productIdSchema,
	createProductSchema,
	updateProductSchema
};