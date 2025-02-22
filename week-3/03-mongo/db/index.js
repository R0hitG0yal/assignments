const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://rgoyal4122:7699865455%40Rg@cluster0.rbdyknl.mongodb.net/courseSelling-1"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  userName: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  userName: String,
  password : String,
  purchasedCourses : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Course',
  }]
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title : String,
  description : String,
  price : Number,
  imageLink : String
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
