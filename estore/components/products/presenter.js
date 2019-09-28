const response = require('../../network/response');
const controller = require('./controller');


const addProductP = async (req, res) =>{
	await controller.getProducts()
		.then((productList) =>{
			response.success(req,res, productList, 200);
		})
		.catch(e => {
			response.error(req,res, "Unexpected Error", 500, e);
		});
}


const getProductsP = async (req, res) =>{

	await controller.addProduct(
			req.body.name, 
			req.body.price
		)
		.then((fullProduct) => {
			response.success(req,res, fullProduct, 201);
		})
		.catch(e => {
			response.error(req,res, "información invalida", 400, "Error en el controller");
		});

}



module.exports = {
	getProductsP,
	addProductP,
};