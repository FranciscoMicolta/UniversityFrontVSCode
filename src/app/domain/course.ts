export class Course {
    [x: string]: any;
    constructor(
        public CourseID: number,
        public Title: string,
        public Credits: number
    ){}
}
