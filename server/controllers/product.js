const Product = require('../models/product.js');
function productController() { 
	return {
		async index(req, res) {
			const products = await Product.find();
			return res.render('index', {title: 'Men', products ,displayName: req.user ? req.user.displayName : ''});
		}
	}
}

module.exports = productController;