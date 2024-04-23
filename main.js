// let str = `Amina Aisha Diyora Malika E'zoza`
// let promt = prompt('ismingizni kiriting!')

// if(str.includes(promt)){
//     console.log(`to'g'ri`)
// }
// else{
//     console.log(`noto'g'ri`);
// }



// let str = promt(`Harf kiriting!`)
// let promt = prompt('ismingizni kiriting!')

// if(str.includes(promt)){
//     console.log(`to'g'ri`)
// }
// else{
//     console.log(`noto'g'ri`);
// }



// let str1 = `Web`
// let str2 = `Brain`
// console.log(str1.replace('Web','Brain'));
// console.log(str2.replace('Brain','Web'));



function checkName(name) {
    let result = "Имя: " + name + "\n";
    let nameLowerCase = name.toLowerCase();
    
    if (name.length >= 2) {
      result += "Вторая буква: " + nameLowerCase[1] + "\n";
    } else {
      result += "Второй буквы нет в имени.\n";
    }
    
    result += "Все буквы: " + nameLowerCase.split('').join(', ');
    
    return result;
  }
  
  let promptName = prompt("Введите имя:");
  alert(checkName(promptName));