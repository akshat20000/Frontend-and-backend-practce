// let input1:HTMLInputElement = document.createElement('input')
// input1.id = 'input1';
// document.body.appendChild(input1);
// let input2:HTMLInputElement = document.createElement('input')
// input2.id = 'input2';
// document.body.appendChild(input2);
// let button:HTMLButtonElement = document.createElement('button')
// button.textContent = 'Submit';
// document.body.appendChild(button);
// button.addEventListener('click', function(){
// let inp1 = document.getElementById('input1')as HTMLInputElement
// let inp2 = document.getElementById('input2')as HTMLInputElement
// let num1:any=inp1.value
// let num2:any=inp2.value
// let val1=isNaN(Number(num1))? num1:Number(num1);
// let val2=isNaN(Number(num2))? num1:Number(num2);
// if(typeof val1 === 'number' && typeof val2 === 'number'){
//     console.log(val1 + val2)
// }
// else if(typeof val1 === 'string' && typeof val2 === 'string'){
//     console.log(val1 + val2)
// }
// else if(typeof val1 === 'number' && typeof val2 === 'string'){
//     console.log(val1 + val2)
// }
// else if(typeof val1 === 'string' && typeof val2 === 'number'){
//     console.log(val1 + val2)
// }
// })
// //basic tuple
// let user:[string,number,string?]
// //labelled tuple
// type labelled=[name:string,age:number]
// //generic
// function greet <T,U>(x:T,y:U):T{ 
// return x
// }
// greet<number,string>(10,"abc")
// greet<number,number>(10,10)
// ///////////////////////
// type UserTuple = [string, number, number, number, number, number, number];
// type ExtractedTuple = [number, number, number, number, number, number];
// function extractData(users: UserTuple[]): ExtractedTuple[] {
//     return users.map(user => [
//         user[1], 
//         user[2], 
//         user[3], 
//         user[4], 
//         user[5], 
//         user[6], 
//     ]);
// }
// const users: UserTuple[] = [
//     ["Alice", 101, 85, 90, 78, 88, 92],
//     ["Bob", 102, 76, 80, 69, 85, 79],
//     ["Charlie", 103, 90, 92, 95, 89, 94]
// ];
// const extractedData: ExtractedTuple[] = extractData(users);
// console.log("Extracted Data (User ID and Marks):");
// extractedData.forEach(user => {
//     console.log(`User ID: ${user[0]}, Marks: [${user.slice(1).join(", ")}]`);
// });
console.log(9);




























































