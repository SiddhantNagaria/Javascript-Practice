const student = {
    name: 'John Doe',
    marks: 90,
    prop:this, //global scope
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks:()=>{
        console.log(this); //parent's scope
        return this.marks;
    },
    getInfo1: function(){
        setTimeout(() => {
            console.log(this); //student
        }, 2000);
    },
    getInfo2: function(){
        setTimeout(() => {
            console.log(this); //window
        }, 2000);
    },
};
student.getName();
student.getMarks();
student.getInfo1();
student.getInfo2();