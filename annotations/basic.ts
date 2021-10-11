//Generics
function insertAtBegining<T>(arrayInput: T[], value: T){
  let newArray = [value, ...arrayInput];
  return newArray;  
}

console.log(insertAtBegining([2,3,4], 14));

//Classes

class Student {
    // firstName: string;
    // lastname: string;
    // age: number;
    // private courses: string[];

    constructor(public firstName: string, public lastname: string, public age: number, private courses: string[]){
        this.firstName = firstName;
        this.lastname = lastname;
        this.age = age;
        this.courses = courses;
    }
    enroll(courseName: string){
        this.courses.push(courseName);
    }
    courseList(){
        return [...this.courses];
    }
}

const stu = new Student('Soujanya', 'Janapatla', 30, ['OOPS']);
stu.enroll('React'); // stu.courses => ['OOPS', 'React']
console.log(stu.courseList());

//Typescript

interface Human {
    firstName: string;
    age: number;
    greet: () => void;
}

let max : Human= {
    firstName: 'Soujanya',
    age: 30,
    greet(){
        console.log("Hello!");
    }
}

class Instrustor implements Human {
    firstName: string;
    age: number;
    greet(){
        console.log("Hi!");
    }

}