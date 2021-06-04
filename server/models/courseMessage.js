import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    courseName: String,
    courseNumber: String,
    classNumber: String,
    year: Number,
    semester: Number,
    professor: String,
    students: [String],
    bulletins: [{
        Id: String,
        type: String,
        announce: Boolean,
        title: String,
        content: String,
        createdAt: Date,
    }],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

const CourseMessage = mongoose.model('courseSchema', courseSchema);

export default CourseMessage;