// Palindrome Checker
function palindrome(str) {
  let arr = str.toLowerCase().split('');
  arr = arr.filter(a => a.match(/[^\s&&^.,\/#!$%\^&\*;:{}=\-_`~()]/));
  for(let i=0; i<arr.length; i++) {
    if(arr[i]!=arr[arr.length-i-1]) {
      return false;
    }
  }
  return true;
}

// Roman Numeral Converter
function convertToRoman(num) {
  let conv=[{dec: "1000", rom: "M"}, {dec: "900", rom: "CM"}, {dec: "500", rom: "D"}, {dec: "400", rom: "CD"}, {dec: "100", rom: "C"}, {dec: "90", rom: "XC"}, {dec: "50", rom: "L"}, {dec: "40", rom: "XL"}, {dec: "10", rom: "X"}, {dec: "9", rom: "IX"}, {dec: "5", rom: "V"}, {dec: "4", rom: "IV"}, {dec: "1", rom: "I"}];
  let str=[];
  let i=0;
  while(num!=0) {
    if(num>=conv[i].dec) {
      str.push(conv[i].rom);
      num-=conv[i].dec;
    } else {
      i++;
    }
  }
 return str.join('');
}

// Caesar cipher
// (Decoding Caesar shift cipher, in which values of letters are shifted by 13 places, e.g. A<->N)
function rot13(str) {
  let arr = str.split('');
  for (let i=0; i<arr.length; i++) {
    if(arr[i].match(/\w/)) {
      if(arr[i].charCodeAt(0)>(90-13)) {
        arr[i] = String.fromCharCode(arr[i].charCodeAt(0)-13);
      } else {
        arr[i] = String.fromCharCode(90+(arr[i].charCodeAt(0)-64)-13);
      }
    }
  }
  return arr.join('');
}

// Telephone Number Validator
function telephoneCheck(str) {
  if(!str[0].match(/\d|[(]/)) {
    return false;
  }
  let arr = str.split('').filter(a => a.match(/\d|[()]/));
  if(arr.length==10 || (arr.length==11&&arr[0]==1) || ((arr.length==12||arr.length==13)&&((arr.indexOf('(')==0||arr.indexOf('(')==1)&&arr.indexOf('(')==arr.indexOf(')')-4)&&(arr[0]==1||(arr[0]=='('&&arr[1]==1)||arr.length==12))) {
    return true;
  } 
  return false;
}

// Cash Register
function checkCashRegister(price, cash, cid) {
  let change = [];
  let balance = cash-price;
  let curr = [0.01,0.05,0.1,0.25,1,5,10,20,100];
  let cidtemp=JSON.parse(JSON.stringify(cid));
  let i=0;
  while(curr[i]<=balance) {
    i++;
  }
  let sum=0;
  for(let j=i-1; j>=0; j--) {
    let thiscurr=0;
    while(Number.parseFloat(balance).toFixed(2)>=0) {
      if(Number.parseFloat(balance).toFixed(2)>=curr[j] && cidtemp[j][1]-curr[j]>=-0.01) {
        cidtemp[j][1]-=curr[j];
        balance-=curr[j];
        thiscurr+=curr[j];
      } else {
        break;
      }
    }
    sum+=cidtemp[j][1];
    if(thiscurr>0) {
      change.push([cidtemp[j][0],thiscurr]);
    }
  }
  if(Number.parseFloat(balance).toFixed(2)!=0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  if(sum<=0) {
    return {status: "CLOSED", change: cid};
  }
  cid = cidtemp;
  return {status: "OPEN", change: change};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
