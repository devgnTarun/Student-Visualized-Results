const express = require('express')
const { getStudents, createStudent, getSingleStudentData } = require('../Controllers/studentController')
const router = express.Router()


router.route('/getStudent').get( getStudents)
router.route('/getStudentData/:id').get( getSingleStudentData)
router.route('/createStudent').post( createStudent)


module.exports = router;