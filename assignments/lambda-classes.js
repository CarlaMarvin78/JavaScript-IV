// CODE here for your Lambda Classes

class Person{ 
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
}

class Instructor{
    constructor (props) {
        this.specialty = props.specialty;
        this.age = props.age;
        this.catchPhrase = props.catchPhrase;
    }
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