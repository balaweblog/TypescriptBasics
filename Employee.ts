module Cognizant {
    export class Employee1 {
    }
    var name;
    var name1:string;
    var num ="hello";
    var num1:string ="e";
    export class Employee extends Employee1 implements IEmployee {
    
    Name:string;
    Age:number;
    constructor(name:string,age:number){
            super();
            this.Name = name;
            this.Age = age;   
            alert(num + num1);
    }
    
    getdetails(name:string){
        alert(this.Name);
        return true;
    }
 }
 interface  IEmployee{
    getdetails(name);
 }
}