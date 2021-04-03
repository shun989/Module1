class Student3 {
    constructor(name) {
        this.name = name;
        this.mathScore = 0;
        this.physicalScore = 0;
        this.chemicalScore = 0;
    }

    getGPA(){
        let gpa = (this.mathScore + this.physicalScore + this.chemicalScore) / 3;
        return gpa;
    }
    addScore(math, phy,chem){
        this.mathScore = math;
        this.physicalScore = phy;
        this.chemicalScore = chem;
    }

    display(){
        let str = `<tr>
                      <td>${this.name}</td>
                      <td>${this.mathScore}</td>
                      <td>${this.physicalScore}</td>
                      <td>${this.chemicalScore}</td>
                      <td>${this.getGPA()}</td>
                   </tr>`
        return str;
    }
}
