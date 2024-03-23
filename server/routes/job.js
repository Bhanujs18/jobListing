const express = require('express');
const router = express.Router();
const jobController = require('../controller/Job');
const verifyToken = require('../middleware/verifyToken');

router.post("/create" , verifyToken , jobController.createJob);
router.get("/jobDetails/:jobId"   , jobController.getJobDetailsById);
router.get("/allJobs"   , jobController.allJobs);
router.put("/update/:jobId" , verifyToken , jobController.updateJobById);
router.delete("/remove/:jobId" , verifyToken , jobController.removeJob);


module.exports = router;