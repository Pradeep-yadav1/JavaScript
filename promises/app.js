//CALLBACK HELL
// function saveToDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }

// saveToDb(
//   "hello world",
//   () => {
//     console.log("success:your data is save");
//     saveToDb(
//       "pradeep",
//       () => {
//         console.log("success2:your data2 is save");
//         saveToDb(
//           "heavy Coder",
//           () => {
//             console.log("success3:your data3 is save");
//           },
//           () => {
//             console.log("failure3: weak connection");
//           }
//         );
//       },
//       () => {
//         console.log("failure2: weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("failure:weak connection");
//   }
// );

function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success:data is saved");
    } else {
      reject("failure:weak connection");
    }
  });
}
saveToDb("hello world")
  .then((result) => {
    console.log("data1 saved");
    console.log("result of promise:",result);
    return saveToDb("Heavy Coder");
  })
  .then((result)=>{
    console.log("data2 saved");
    console.log("result of promise:",result);
    return saveToDb("pradeep");
  })
  .then((result)=>{
    console.log("data3 saved");
    console.log("result of promise:",result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise:",error);
  });
