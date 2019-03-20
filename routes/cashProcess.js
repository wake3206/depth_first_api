var express = require('express');
var router = express.Router();
var cashController = require('../controllers/cashController')

router.use('/orders', cashController.loadAllOrders);
router.use('/save_order', cashController.saveOrder);
router.use('/del', cashController.deleteOrder);
router.use('/menus', cashController.loadMenu);

module.exports = router;
