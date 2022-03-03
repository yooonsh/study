console.log("==========================if문=============================")

let input = 1

if(input>0){
    console.log("양성입니다")
}else if(input<0){
    console.log("음성입니다.")
}else{
    console.log("0입니다.")
}

let score = 66
if(score<=100 && score>=90){
    console.log("A")
}else if(score>=80 && score<90){
    console.log("B")
}else if(score>=70 && score<80){
    console.log("C")
}else if(score>=60 && score<70){
    console.log("D")
}else{
    console.log("F")
}

let skills = ["HTML", "Javascript", "React"]
if(skills.includes("Javascript") && skills.includes("React")){
    console.log("합격")
}else if(skills.includes("Javascript") || skills.includes("React")){
    console.log("예비")
}else{
    console.log("탈락")
}

console.log("==========================switch문=============================")

let food = '햄버거'

if(food == '피자'){
  console.log('피자좋아')
}else if(food == '햄버거'){
  console.log('햄버거 좋아')
}else{
  console.log("다 싫어")
}

switch(food){
    case '피자':
        console.log("피자를 주세요")
        break;
    case '햄버거':
        console.log("햄버거를 주세요")
        break;
    default:
        console.log("메뉴에 없는 음식입니다")
}


console.log("==========================반복문=============================")

// 위의 if문을 삼항연산자로 표현하면 
let answer = food =="피자"?"피자좋아":food == '햄버거'?'햄버거 좋아':"다 싫어"
console.log(answer)

//1~100 합
let sum = 0
for(let i=1;i<=100;i++){
 sum+=i
}
console.log(sum)

//홀수만 출력
for(let i=1;i<=100;i+=2){
  console.log(i)
}

//369게임
for(i=1;i<=50;i++){
  let stringvalue = i.toString()
  let result = ""
  for(j=0; j<stringvalue.length;j++){
    if(stringvalue[j] == 3 || stringvalue[j] == 6 || stringvalue[j] == 9){
      result += "짝"
    }
  }
  console.log(result.length>0?result:i)
}

//입력한 숫자가 소수일때 true, 아닐때 false
let n = 1
let prime = true

if(n == 1){//1은 소수가 아님
  prime = false
}

for(i=2;i<n;i++){
  if(n%i == 0){
    prime = false
  }
}
console.log(prime)