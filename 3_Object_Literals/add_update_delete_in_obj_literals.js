const student = {
    name:"siddhant",
    age:20,
    marks:90
};


//add new property
student.city = "New Delhi";

//update property
student.age = 21;

//delete property
delete student.marks;

console.log(student);