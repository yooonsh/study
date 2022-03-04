console.log("==========================1번=============================")

function greet(name) {
  console.log("안녕 내 이름은 ",name,"야")
}
greet("에밀리")

console.log("==========================2번=============================")

function greet(name) {
  console.log("안녕 내 이름은 ",name,"야")
}
greet("에밀리")

console.log("==========================3번=============================")

function greet(name) {
  console.log("안녕 내 이름은 ",name,"야")
  return name
}
greet("에밀리")


console.log("==========================4번=============================")

function meetAt(year, month, date){
  if(date){
    return `${year}/${month}/${date}`
  }
  if(month){
    return `${year}년${month}월`
  }
  if(year){
    return `${year}년`
  }
}
console.log(meetAt(2022,1,1))


console.log("==========================5번=============================")

function findSmallestElement(arr){
  if(arr.length == 0){
    return 0
  }
  let result = arr[0]
  for(i=1;i<arr.length;i++){
    if(result > arr[i]){
      result = arr[i]
    }
  }
  return result
}
console.log(findSmallestElement([100,200,3,0,2,1]))


console.log("==========================6번=============================")

let unit = [50000,10000,5000,1000,500,100]
function changeCalculate(money){
  for(i=0;i<unit.length;i++){
    let num = Math.floor(money / unit[i]) //Math.floor : 몫 나눌때 소수점 제거
    money = money - (unit[i] * num)
    console.log(`${unit[i]} X ${num}`)
  }
}
changeCalculate([12300])