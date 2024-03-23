const Job = require("../models/job");

const allJobs = async (req, res , next) => {
  try {
    await Job.find({})
      .then((data) => res.status(200).json({ data: data }))
      .catch((err) => res.status(401).json({ error: err }));
  } catch (err) {
    next(err);
  }
};

const createJob = async (req, res , next) => {
  try {
    const {
      companyName,
      title,
      description,
      logoUrl,
      salary,
      duration,
      location,
      locationType,
      skills,
      refUserId,
    } = req.body;

    if (
      (!companyName || !title || !description || !logoUrl || !duration,
      !salary || !location || !locationType || !skills)
    ) {
      return res.status(401).json({ message: "Bad Request!" });
    }
    const userId = req.userId;

    const jobDetails = new Job({
      companyName,
      title,
      description,
      logoUrl,
      salary,
      duration,
      location,
      locationType,
      skills,
      refUserId: userId,
    });
    await jobDetails.save();
    res.json({ message: "Job created successfully" });
  } catch (err) {
    next(err);
  }
};

const getJobDetailsById = async (req, res , next) => {
  try {
    const jobId = req.params.jobId;

    const isJobExist = await Job.findById(jobId);

    if (!isJobExist) {
      return res.status(404).json({ message: "Nothing Found!!" });
    }

    res.status(200).json({ data: isJobExist });
  } catch (error) {
    next(error);
  }
};

const updateJobById = async (req, res , next) => {
  try {
    const {
      companyName,
      title,
      description,
      logoUrl,
      salary,
      duration,
      location,
      locationType,
      skills,
      refUserId
    } = req.body;

    const jobId = req.params.jobId;
    const userId = req.userId;
    isJobExist = await Job.findOne({_id : jobId , refUserId: userId });
    if (!isJobExist) {
      return res.status(404).json({ message: "Ownership Not Verified!" });
    }

    if (
      !companyName ||
      !title ||
      !description ||
      !logoUrl ||
      !duration ||
      !salary ||
      !location ||
      !locationType ||
      !skills
    ) {
      return res.status(401).json({ message: "Bad Request!" });
    }

    await Job.updateOne(
      { _id: jobId , refUserId : userId },
      { 
        $set : {
        companyName,
        title,
        description,
        logoUrl,
        salary,
        duration,
        location,
        locationType,
        skills,
        }
      }
    )
      .then(() => res.status(200).json({ message: "updated" }))
      .catch(() => res.status(200).json({ message: "Updation Failed!!" }));
  } catch (error) {
    next(error);
  }
};

const removeJob = async (req, res ,next) => {
  try {
    const jobId = req.params.jobId;
    const userId = req.userId;
    const isJobExist = await Job.findOne({_id : jobId , refUserId : userId});
    if (!isJobExist) {
      return res.status(404).json({ message: "job not found or Doesn't Belongs to you!!" });
    }
    await Job.deleteOne({ _id: jobId  , refUserId : userId});
    res.status(200).json({ message: "Removed!!" });
  } catch (error) {
  next(error);
  }
};

module.exports = {
  createJob,
  getJobDetailsById,
  updateJobById,
  removeJob,
  allJobs,
};
