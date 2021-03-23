function studentInfo(name, ...course) {
    return name + " study " + course.join(", ");
}
;
console.log(studentInfo("hai", "php", "c#", "js", "nodejs"));
