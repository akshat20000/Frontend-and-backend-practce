//Assignment level 2
//task 1:
// function func(a:number|string)
// {
//     if(typeof a === "number"){
//         return fact(a);
//     }else if(typeof a=="string"){
//         console.log(a.length);
//     }
// }
// function fact(n:number){
// if(n==0 || n==1){
//     return 1;
// }
//     return n*fact(n-1);
// }
// console.log(func(5));
// func("Hello World");
//task 2:
// let students:string[]=["Alice","Bob","Charlie"];
// console.log(students.length);
// students.forEach((e)=>{
//     console.log(e.toUpperCase());
// })
//task 3:
// let products:[number,string,number]=[1,"iphone",1000];
// console.log(products);
// Assignment level 3
//task 1:
// interface Student {
//     name: string;
//     marks: number[];
// }
// function calculateGrade(totalMarks: number): string {
//     if (totalMarks >= 450) {
//         return "A";
//     } else if (totalMarks >= 350) {
//         return "B";
//     } else if (totalMarks >= 300) {
//         return "C";
//     } else if (totalMarks >= 250) {
//         return "D";
//     } else {
//         return "F";
//     }
// }
// function getStudentGrade(student: Student): string {
//     const total = student.marks.reduce((sum, mark) => sum + mark, 0);
//     console.log(`${student.name}: Total = ${total}, Grade = ${calculateGrade(total)}`);
//     return calculateGrade(total);
// }
// const students: Student[] = [
//     { name: "Alice", marks: [51, 40, 48,36,50] },
//     { name: "Bob", marks: [75, 80, 78, 68, 90] },
//     { name: "Charlie", marks: [95, 92, 96, 50, 89] },
//     { name: "Diana", marks: [65, 70, 68, 34, 78] },
//     { name: "Eve", marks: [88, 86, 90, 67, 57] }
// ];
// students.forEach((student) => {
//     getStudentGrade(student);
// });
//////////////////////////////////////
var Grade;
(function (Grade) {
    Grade["A"] = "A";
    Grade["B"] = "B";
    Grade["C"] = "C";
    Grade["D"] = "D";
})(Grade || (Grade = {}));
const student1 = {
    name: "Alice",
    marks: [85, 90, 88, 92],
    grade: Grade.A
};
const student2 = {
    name: "Bob",
    marks: [70, 75, 72, 78],
    grade: Grade.B
};
