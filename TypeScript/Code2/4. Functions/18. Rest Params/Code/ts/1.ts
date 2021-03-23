function studentInfo(name: string, ...course: Array<string>): string {
    return name + " study " + course.join(", ");
};

console.log(studentInfo("hai", "php", "c#", "js", "nodejs"))
