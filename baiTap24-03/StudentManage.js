class StudentManage {
    constructor() {
        this.students = [];
        this.limit = 10;
    }
    addStudent(student){
        this.students.push(student);
    }
    showAllStudent(){
        let str = '';
        for (let i = 0; i < this.students.length; i++) {
            str += this.students[i].display();
        }
        return str;
    }
    showStudentOnPage(page) {
        let str = '';
        let index = (page-1)*this.limit;
        for (let i = 0; i < this.limit; i++) {
            str += this.students[i+index].display();
        }
        return str;
    }
}