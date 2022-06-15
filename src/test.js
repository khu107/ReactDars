
const students = [
    { id: 1, status: "BS", name: "Islom Numanov" },
    { id: 2, status: "BS", name: "Ergashev Durbek" },
    { id: 3, status: "CS", name: "Shamirboyev Muhammadbobur" },
    { id: 4, status: "IT", name: "Butaev Khusan" },
    { id: 5, status: "BS", name: "Ahmadaliyeva Dilorom" },
    { id: 6, status: "BS", name: "Mahsudov Ilhom" },
    { id: 7, status: "CS", name: "Shermatova Dilbar" },
    { id: 8, status: "BS", name: "Musurmonkulov Oybek" },
    { id: 9, status: "IT", name: "Mahmudov Asadbek" },
  ];

                            // Create malumot qushish
// let i;
// function addStudent(status,name){
//     for(i = 0; i <students.length + 1; i++){

//     }
//         students.push({
//             id: i,
//             status,
//             name
//         })   
// }
// addStudent("BS","Hayitaliev Oybek")
// addStudent("IT","Eshmatov Hosmat") 


                    
// name da sort lash
// result = students.sort(function (a, b) {
//     let x = a.name.toLowerCase();
//     let y = b.name.toLowerCase();
//     if (x < y) {
//         return -1;
//     }
//     if (x > y) {
//         return 1;
//     }
//     return 0;
// });
 
// console.log(result);


// tepadagi code ni qisqartrilgan formati
// result = students.sort((a, b) => a.status.toLowerCase() < b.status.toLowerCase() ? -1 : 1);
// console.log(result);


// id orqali sort
// result = students.sort(function (a, b) {
//     return a.id - b.id;
// });
 
// console.log(result);

// // qisqartirilgan id orqali sort function
// result = cars.sort((a, b) => a.year - b.year);
// console.log(result);



// Updata
// function chang(i,s,n){
//     students.forEach((v)=>{
//         if(v.id === i ){
//             if(s === "status"){
//                 v.status = n
//             }else if(s === "name"){
//                 v.name = n
//             }
//         }
//     })
// }

// chang(2,"name","Toshmatov Eshmat ")
// console.log(students);