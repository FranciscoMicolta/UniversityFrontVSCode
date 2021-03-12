export class Instructor {
    [x: string]: any;
    constructor(
        public ID: number,
        public LastName: string,
        public FirstMidName: string,
        public HireDate: Date,
        // public FullName: string
    ) { }
}
