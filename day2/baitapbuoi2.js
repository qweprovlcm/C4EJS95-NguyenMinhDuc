
for(i = 0; i < 7; i++){
    console.log(i)
}
let n = prompt('Enter n ');
for(i = 0; i < n; i++){
    console.log(i)
}
for(i = 3; i < n; i++){
    console.log(i)
}
let c = prompt('Enter c ');
for(i = c; i < n; i++){
    console.log(i)
}
for(i = c; i < n; i+3){
    console.log(i)
}
let s = prompt('Enter s ');
for(i = c; i < n; i+s){
    console.log(i)
}

let fractorial = prompt('Enter ');
let sum = 1;
for(i = 0; i <= fractorial; i++){
    sum = sum*1;
}alert('the fractorial of' + fractorial + ' is '+ sum)


let age = prompt('Enter age ');
if(age < 14){
    alert('You are not old enough to view this content')
}else{
    alert('Enjoy!')
}

let n = prompt('Enter n ');
if(n < 9/2){
    alert('lower half of 9')
}else{
    alert('higher half of 9')
}

let x = prompt('Enter X ');
if( x <= n/2){
    alert('lower half of ' + n)
}else{
    alert('higher half of ' + n)
}

if(x % 2 == 0){
    alert(x + ' is even')
}else{
    alert(x + ' is odd')
}

let lh = 6;
for(i = 0;i <= 6/2; i++){
    console.log('L')
}for(i = 0;i <= 6/2; i++){
    console.log('H')
}
let lH = prompt('Enter ');
for( i = 0; i < (lH + 1)/2; i++){
    console.log('L')
}for(i = 0; i < lH/2; i++){
    console.log('H')
}
for(i = 0; i < 8; i++){
    if(i % 2 == 0){
        console.log('0')
    }else{
        console.log('1')
    }
}
let bai9 = prompt('Enter ');
for(i = 0; i < bai9; i++){
    if(i % 2 == 0){
        console.log('0')
    }else{
        console.log('1')
    }
}


let mass = prompt('Enter weight ');
let height = prompt('Enter height ');
let bMI = mass /((height/100)*(height/100));
if(bMI < 16){
    alert('severely underweight')
}else if(16 <= bMI < 18.5){
    alert('underweight')
}else if(18.5 <= bMI < 25){
    alert('normal')
}else if(25 <= bMI < 30){
    alert('overweight')
}else{
    alert('obese')
}

