let express = require ('express')
let router = express.Router();
let colorController = require('../controllers/colorController');
 
router.get ("/", colorController.color)
module.exports = router;
