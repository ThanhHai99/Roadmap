class Course {
    private _name: string;
    
    constructor(name: string) {
        this._name = name;
    };

    showCourseInfo(): void {
        console.log(`${this._name}`);
    };

    public get name() : string {
        return this._name;
    }
    
    public set name(name : string) {
        this._name = name;
    }
};

let courseObj = new Course("JS");
console.log(courseObj);
console.log("Name: " + courseObj.name); //JS
courseObj.name = "NodeJS";
console.log("New Name: " + courseObj.name); //NodeJS
