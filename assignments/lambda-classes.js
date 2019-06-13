// CODE here for your Lambda Classes

class Person{ 
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
}
Person.prototype.speak = function () {
console.log (`Hello my name is ${this.name}, I am from ${this.location}`)
}

class Instructor{
    constructor (props) {
        this.specialty = props.specialty;
        this.age = props.age;
        this.catchPhrase = props.catchPhrase;
    }
}
Instructor.prototype.demo = function() {

}
class Students{
    constructor (props){
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }
}

class ProjectManager {
    constructor (props){
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
 }
}