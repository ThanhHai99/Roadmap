class Course {
    constructor(name) {
        this._name = name;
    }
    ;
    showCourseInfo() {
        console.log(`${this._name}`);
    }
    ;
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
;
let courseObj = new Course("JS");
console.log(courseObj);
console.log("Name: " + courseObj.name); //JS
courseObj.name = "NodeJS";
console.log("New Name: " + courseObj.name); //NodeJS
