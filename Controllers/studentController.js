const Student = require('../Models/studentModel')


// Get all students 

exports.getStudents  = async (req, res , next) => {

        try {   

    const {name  } = req.query;
    let students;

    // Search by name
    if (name) {
      students = await Student.find({
        $or: [
          { first_name: { $regex: name, $options: 'i' } },
          { last_name: { $regex: name, $options: 'i' } },
        ],
      });
    } else {
      students = await Student.find();
    }

    // let students = await Student.find()



    //GET PASSED STUDENT DATA
    const passedStudents = students.filter(student => {
        const totalMarks = student.marks.english + student.marks.maths + student.marks.social_studies + student.marks.science;
        return totalMarks > 150;
      });
    //PERCENTAGE
      const passedPercentage = (passedStudents.length / students.length) * 100;


    //Subject wise pass percentage
    const englishTotal = students.filter(student => {
        return student.marks.english > 33
    })
    const englishPercentage = (englishTotal.length / students.length) * 100 ;

    //Maths
    const mathsTotal = students.filter(student => {
        return student.marks.maths > 33
    })
    const mathsPercentage = (mathsTotal.length / students.length) * 100 ;

    // Social Studies

    const social_studiesTotal = students.filter(student => {
        return student.marks.social_studies > 33
    })
    const social_studiesPercentage = (social_studiesTotal.length / students.length) * 100 ;

    // Science
    const scienceTotal = students.filter(student => {
        return student.marks.science > 33
    })
    const sciencePercentage = (scienceTotal.length / students.length) * 100 ;

    const totalStudent = students.length

    res.status(200).json({ totalStudent ,social_studiesPercentage ,  sciencePercentage  ,  mathsPercentage   , englishPercentage ,passedPercentage  ,  success : true , students })
        } 
        
        catch (error) {
            res.status(400).json({success : false , error : error.message})
        }
}

// Get student data 

exports.getSingleStudentData = async (req, res ) => {

        try {
            
          const id = req.params.id;
          const student = await Student.findOne({id})
          if(!student) {
            res.status(404).json({error : 'Student not found'})
          }
          res.status(200).json({success : true , student})

        } catch (error) {
            res.status(400).json({success : false , error : error.message})
        }
}



// Create student 

exports.createStudent  = async (req, res , next) => {

        try {
    const {first_name , last_name , gender , marks } = req.body

    const student = await Student.create({first_name , last_name , gender , marks})
    
    
    res.status(200).json({success : true , student})
        } catch (error) {
            res.status(400).json({success : false , error : error.message})
        }
    

}