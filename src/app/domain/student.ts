export class Student {
    [x: string]: any;
    constructor(
        public ID: number,
        public LastName: string,
        public FirstMidName: string,
        public EnrollmentDate: Date,
        public Name: string
    ) { }
}
