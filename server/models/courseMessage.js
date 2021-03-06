import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    courseName: String,
    courseNumber: String,
    classNumber: String,
    year: Number,
    semester: String,
    professor: String,
    students: [String],
    bulletins: { type : Array , "default" : [] },
    createdAt: Date,
    updatedAt: Date
        
});

const CourseMessage = mongoose.model('CourseMessages', courseSchema);

export default CourseMessage;


/*
bulletins: [{
        Id: String,
        type: String,
        announce: Boolean,
        title: String,
        content: String,
        fileContents: [String],
        createdAt: Date,
        updatedAt: Date
    }],
*/