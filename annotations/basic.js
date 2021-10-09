var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Generics
function insertAtBegining(arrayInput, value) {
    var newArray = __spreadArray([value], arrayInput, true);
    return newArray;
}
console.log(insertAtBegining([2, 3, 4], 14));
//Classes
var Student = /** @class */ (function () {
    // firstName: string;
    // lastname: string;
    // age: number;
    // private courses: string[];
    function Student(firstName, lastname, age, courses) {
        this.firstName = firstName;
        this.lastname = lastname;
        this.age = age;
        this.courses = courses;
        this.firstName = firstName;
        this.lastname = lastname;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.courseList = function () {
        return __spreadArray([], this.courses, true);
    };
    return Student;
}());
var stu = new Student('Soujanya', 'Janapatla', 30, ['OOPS']);
stu.enroll('React'); // stu.courses => ['OOPS', 'React']
console.log(stu.courseList());
