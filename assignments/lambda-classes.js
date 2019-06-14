// CODE here for your Lambda Classes

class Person{ 
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor (props) {
        super(props);
        this.specialty = props.specialty;
        this.age = props.age;
        this.catchPhrase = props.catchPhrase;
    }
    demo (subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'


class Student extends Person {
    constructor (props){
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(subject => console.log(subject));
    }
    PRAssignment(subject) {

    }
    sprintChallenge(subject) {

    }
}

class ProjectManager extends Instructor {
    constructor (props){
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(channel) {

    }
    debugsCode(student, subject) {

    }
}
let student = new Student({name:"Anne", age:22, location:"San Diego", previousBackground: "Realtor", 
                className: "web21", favSubjects: ["HTML","JavaScript"]});
let instructor = new Instructor({age: 35, location:"Palo Alto", specialty: "JavaScript", 
                name: "Bob", catchPhrase: "Always do LESS"});
let projectManager = new ProjectManager({age: 25, location:"Orlando", name:"Sean", specialty: "CSS",
                catchPhrase: "You got this", gradClassName:"CS1", favInstructor: "Dan"});
student.speak();
student.listsSubjects();
instructor.demo("JavaScript");
instructor.grade(student, "JavaScript");