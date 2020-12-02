// 1. Проекспериментувати з типами даних. 

//  2. Написати конвертер валют - пишете скільки у вас є гривень і які очікуємо можливі конвертації - у долар,
 // євро, нафту(brent), золото. Додатково зробити перевірку чи не обманює вас юзер і перевіряти чи не прийшов вам 
 // null or undefined. 

let sum = prompt('input money');
let val = prompt('In what currency to transfer hryvnia. Input 1- dollar, 2- evro, 3- oil brent, 4- gold');
let rezSum = 0;
 sum = Number(sum);
 val = Number(val);

if ((sum >= 1) || (sum !== null) || (sum !== undefined) || (val <=4) || (val >= 1) || (val !== null) || (val !== undefined)) 
   {
		     switch(val) {
 				case 1:
 				rezSum = sum / 28.5;
 				break;
				case 2:
 				rezSum = sum / 33.9;
 				break;
 				case 3:
 				rezSum = sum / 28.5 / 47.47;
 				break;
 				case 4:
 				rezSum = sum / 867;
 				break;
 				default: console.log("No value found");
 				}
   } else {console.log("Incorrect data");}
 console.log("You can bay " + rezSum + " of value");


// 3. Спитатись у юзера суму замовлення і вивести результат з урахуванням знижки :
// до 500 гривень знижка -1 %, від 500 до 1000 - 5%, більше 1000 - 10% та подарун овий сертифікат на 200 гривень
 // у подарунок! 


 let sum = prompt('Enter the order amount');
 let rezSum = 0;
  sum = Number(sum);
 
 if ((sum >= 1) || (sum !== null) || (sum !== undefined)) 
 {
 	if (sum <= 500) { rezSum = sum - (sum / 100);}	
 	if ((sum <= 1000) && (sum > 500)) { rezSum = sum - (5 * sum / 100);}	
 	if (sum > 1000) { rezSum = sum - (10 * sum / 100) + 200;}	     
  				
 } else {console.log("Incorrect data");}
  console.log(`You amound with discount ${rezSum}`);


// 4. Створити тест на знання будь-чого, юзер має відповісти на 5 питань,
 // вірна відповідь - 1 бал, якщо юзер відповість правильно на всі 5 запитань - додатково додати 1 бонусний бал. 


 let answer1 = prompt('Enter how many wheels are in your car');
 let answer2 = prompt('Enter how many windows are in your car');
 let answer3 = prompt('Enter how many motors are in your car');
 let answer4 = prompt('Enter how many seats are in your car');
 let answer5 = prompt('Enter how many steering wheel are in your car');
 answer1 = Number(answer1);
  answer2 = Number(answer2);
   answer3 = Number(answer3);
    answer4 = Number(answer4);
     answer5 = Number(answer5);
 let i = 0;
 
 if (( answer1>= 1) || (answer1 !== null) || (answer1 !== undefined) || 
 	 ( answer2>= 1) || (answer2 !== null) || (answer2 !== undefined) ||
 	 ( answer3>= 1) || (answer3 !== null) || (answer3 !== undefined) ||
 	 ( answer4>= 1) || (answer4 !== null) || (answer4 !== undefined) ||
 	 ( answer5>= 1) || (answer5 !== null) || (answer5 !== undefined))
 {
    if (answer1 === 4) { i++};
    if (answer2 === 6) { i++};
    if (answer3 === 1) { i++};
    if (answer4 === 4) { i++};
    if (answer5 === 1) { i++};
  				
 } else {console.log("Incorrect data");}
	if (i===5) {i++};

  if (i === 6) {console.log(" You have ze best result. Your test ball is" + i);} 
    else console.log("Your test ball is " + i);


// 5. Запитатись у користувача 3 значне число та сказати чи є у ньому однакові цифри 


let numb = prompt('Input three-digit number');
 numb = Number(numb);
 let numb1 = Math.trunc(numb/100);
 let numb2 = Math.trunc(numb/10) - (numb1 * 10);
 let numb3 = numb - (numb1 * 100) - (numb2 * 10);
 let i = 0;
 if (numb1 === numb2) {console.log("Yes"); i = 1;} 
 if (numb2 === numb3) {console.log("Yes"); i = 1;}
 if (numb1 === numb3) {console.log("Yes"); i = 1;}
 if (i === 0) {console.log("No");}

// 6. Запитатись у юзера одну кнопку від 1 до = на клавіатурі та вивести що буде при нажиманні цифри разом з шифтом.

let inpt = prompt("Push key");
if (inpt === '-') {inpt = 10;}
if (inpt === '=') {inpt = 11;}
inpt = Number(inpt);

switch(inpt) {
 				case 1:
 				console.log("If you push this key with Shift you will get '!'");
 				break;
				case 2:
 				console.log("If you push this key with Shift you will get '@'");
 				break;
 				case 3:
 				console.log("If you push this key with Shift you will get '#'");
 				break;
 				case 4:
 				console.log("If you push this key with Shift you will get '$'");
 				break;
 				case 5:
 				console.log("If you push this key with Shift you will get '%'");
 				break;
 				case 6:
 				console.log("If you push this key with Shift you will get '^'");
 				break;
 				case 7:
 				console.log("If you push this key with Shift you will get '&'");
 				break;
 				case 8:
 				console.log("If you push this key with Shift you will get '*'");
 				break;
 				case 9:
 				console.log("If you push this key with Shift you will get '('");
 				break;
 				case 0:
 				console.log("If you push this key with Shift you will get ')'");
 				break;
 				case 10:
 				console.log("If you push this key with Shift you will get '_'");
 				break;
 				case 11:
 				console.log("If you push this key with Shift you will get '+'");
 				break;
 				default: console.log("Your input is incorect");
 				}

