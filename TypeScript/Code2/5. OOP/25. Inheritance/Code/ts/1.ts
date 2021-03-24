class Course3 {
    id: string;
    name: string;
    price: number;

    constructor(id: string, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    };

    showCourseInfo(): void {
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    };
};

class CourseMobile extends Course3 {
    author: string;
    constructor(id: string, name: string, price: number, author: string) {
        super(id, name, price);
        this.author = author;
    };

    showCourseInfo() {
        super.showCourseInfo();
        console.log(this.author);
    };
};

let course3_1 = new Course3("1", "Code", 1000);
console.log(course3_1);
let courseMobile1 = new CourseMobile("1", "Android", 5000, "thanh hai");
console.log(courseMobile1);
