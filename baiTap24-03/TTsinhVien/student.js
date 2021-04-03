<!-- class Student {
    constructor(toan, ly, hoa) {
        this.mathScore = toan;
        this.physicalScore = ly;
        this.chemicalScore =hoa;

    }
    getGPA(){
        let gpa = (this.mathScore + this.physicalScore + this.chemicalScore) / 3;
        return gpa.toFixed(2);
    }
} -->
class Student {
    constructor() {
        this.mathScore = 0;
        this.physicalScore = 0;
        this.chemicalScore = 0;
    }

    getGPA(){
        let gpa = (this.mathScore + this.physicalScore + this.chemicalScore) / 3;
        return gpa.toFixed(2);
    }

}
