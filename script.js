// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// var i = 0;
// while(i < 10) {
//   console.log(i);
//   i++;
// }


// var i = 10;
// do {
//   console.log(i);
//   i++;
// } while(i< 10);

// function showMessage() {
//   console.log('როგორ მუშაობს ფუნქცია');
// }

// showMessage();

// function showMessageWithParams(param1, param2, ) {
//   // console.log('პირველი პარამეტრი არის: ' + param1 + "\n" + " მეორე პარამეტრი არის: " + param2);
//  if( param1 === 12 && param2 !== "მეორე წიგნი"  ){
//     console.log("პირველი პარამეტრი გადმოეცა სწორად")
//   } else if( param1 !== 12 && param2 === "მეორე წიგნი") {
//     console.log("მეორე პარამეტრი გადმოეცა სწორად")
//   } else if(param1 === 12 && param2 === "მეორე წიგნი") {
//     console.log("ორივე პარამეტრი  გადმოეცა სწორად")
//   } else {
//     console.log("არცერთი გადმოცემული პარამეტრი  არის სწორი")
//   }
// }
// var cvladi = 12;
// showMessageWithParams(0, "")
// function sum(num1, num2) {
//   return num1 + num2;
//   console.log('ar mushaobs');
// }
// var width;
// console.log(sum(1, 7));

function setWidth() {
  var width = 100;
  if (true) {
    let height = 200;
    const weight = 50;
    const human = {
      age: 13,
      height: 180,
      weight: 55
    };

    console.log("global scope var if", width);
    console.log("block scope let function",  height );
    console.log("block scope let function",  weight );
    console.log("\n");
    height = 400;
    width = 80;
    console.log(human)
    human.age = 19;
    console.log(human.age)
    console.log("reassign global scope var if", width);
    console.log("reassign block scope let function", height);
    console.log("reassign block scope let function", weight);
  }
  
  // console.log("global scope var function", width);

  
  // console.log("global scope let function", height);
}
setWidth();

// const averageTemp = [];
// averageTemp[0] = 31.9;
// averageTemp[1] = 37;
// averageTemp[2] = 35;
// averageTemp[3] = 40;

const averageTempMonths = [31.9, 37, 35, 40, 31.9, 37, 35, 40, 31.9, 37, 35, 40, 31.9, 37, 35, 40,   31.9, 37, 35, 40 ];
console.log(averageTempMonths.length);
// console.log(averageTempMonths[0]);
// console.log(averageTempMonths[0]);
// console.log(averageTempMonths[1]);


for (var i = 0; i < averageTempMonths.length; i++ ) {
  console.log(i, "-ინდექსზე მნიშვნლეობა არის", averageTempMonths[i]);
}