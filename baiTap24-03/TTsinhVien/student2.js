class Student2 {
    constructor(name) {
        this.name = name;
        this.dateOfBirth = 0;
        this.mathScore = 0;
        this.physicalScore = 0;
        this.chemicalScore = 0;
        this.gpa = 0;
        this.index = 0;
    }

    getGPA(){
        let gpa = (this.mathScore + this.physicalScore + this.chemicalScore) / 3;
        return gpa.toFixed(2);
    }

    addScore(math, phy,chem,){
        this.mathScore = math;
        this.physicalScore = phy;
        this.chemicalScore = chem;
        this.gpa = this.getGPA();
    }

    addDateOfBirth(date){
        this.dateOfBirth = date;
    }

    display(){
        let str = `<tr>
                      <td>${this.name}</td>
                      <td>${this.dateOfBirth}</td>
                      <td>${this.mathScore}</td>
                      <td>${this.physicalScore}</td>
                      <td>${this.chemicalScore}</td>
                      <td>${this.gpa}</td>
                      <td><button onclick="updateStudent(${this.index})">Edit</button> </td>
                      <td><button onclick="deleteStudent(${this.index})">Delete</button> </td>
                  </tr>`
        return str;
    }
    deleteStudent(index) {
        menu.splice(index,1);
        showMenu();
    }
}