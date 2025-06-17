// let min = +prompt("min number")
// let max = +prompt("max number")





let javob  = confirm("Sizda hozir random sonlar chiqishni boshlaydi👌")

let randomnumber = (Math.random() * 100) + 1;
let random = Math.ceil(randomnumber)

let answer = confirm("Random orqali chiqan son:  " + random);

let plus = confirm("biz random sonni 2 kopaytirmoqchi va bolmoqchimiz!")

let double = randomnumber * 2;
let half = randomnumber / 2;

confirm(
    "   Random orqali chiqan son: " + randomnumber +
    "\nBiz uni 2 kopaytirdik: " + double +
    "\nVa shu soni 2 boldik: " + half
  );