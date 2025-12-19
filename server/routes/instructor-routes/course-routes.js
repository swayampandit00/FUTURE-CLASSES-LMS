const express = require("express");
const {
  addNewCourse,
  getAllCourses,
  getCourseDetailsByID,
  updateCourseByID,
  deleteCourseByID,
} = require("../../controllers/instructor-controller/course-controller");
const authenticateMiddleware = require("../../middleware/auth-middleware");
const router = express.Router();

router.post("/add", authenticateMiddleware, addNewCourse);
router.get("/get", authenticateMiddleware, getAllCourses);
router.get("/get/details/:id", authenticateMiddleware, getCourseDetailsByID);
router.put("/update/:id", authenticateMiddleware, updateCourseByID);
router.delete("/delete/:Id", authenticateMiddleware, deleteCourseByID);

module.exports = router;
