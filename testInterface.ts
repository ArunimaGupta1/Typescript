interface Person{
    fullname:string;

    display();
}

class Employee implements Person{
    fullname:string;
    constructor(fname:string,lname:string){
        this.fullname = fname+" "+lname;
    }
    display(){
        console.log('Employee fullname:'+this.fullname);
    }
}

class Student implements Person{
    fullname:string;
    constructor(fname:string,lname:string){
        this.fullname = fname.toUpperCase()+" "+lname.toUpperCase();
    }
    display(){
        console.log('Student fullname:'+this.fullname);
    }
}


let emp1:Person = new Employee("Arunima","Gupta");
emp1.display();

let stud1:Person = new Student("John","Steve");
stud1.display();