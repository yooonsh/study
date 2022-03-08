console.log("================ES6 최신문법=================")

console.log("1. 다음 코드의 es6 문법을 이용하여 재작성 하시오")

// let name="noona's fruit store"
// let fruits = ["banana","apple","mango"]
// let location="Seoul"

// let store = {    name:name,    fruits:fruits,    location:location
// }
// console.log(store)

let store = {
    name:"noona's fruit store",
    fruits: ["banana","apple","mango"],
    location:"Seoul"
}
console.log(store)

console.log("2. es6 문법을 이용하여 다음과 같이 출력하시오")

console.log(`제 가게 이름은 ${store.name} 입니다. 위치는 ${store.location} 에 있습니다`)

console.log("3. 다음 코드를 Destructoring을 이용하여 해결하시오")

// function calculate(obj){    // 함수 안을 바꾸시오
//     return a+b+c
// }
// calculate({a:1,b:2,c:3})

function calculate(obj){ 
    let {a,b,c}=obj   
    return a+b+c
}
calculate({a:1,b:2,c:3})

console.log("4. 다음 문제에 정답이 true가 나오게 하시오")

// let name="noona store"
// let fruits = ["banana","apple","mango"]
// let address={
//     country:"Korea",
//     city:"Seoul"
// }
// function findStore(obj){
//     return name="noona store" && city == "Seoul"
// }
// console.log(findStore({name,fruits,address}))

let name="noona store"
let fruits = ["banana","apple","mango"]
let address={
    country:"Korea",
    city:"Seoul"
}

function findStore(obj){
   let {name,address:{city}} = obj
    return name=="noona store" && city=="Seoul"
}

console.log(findStore({name,fruits,address}))

console.log("5. 다음과같이 프린트되게 코드를 바꾸시오")

// function getNumber(){
//     let array = [1,2,3,4,5,6]    // 여기서부터 바꾸시오
//     return {first,third,forth}
// }
// console.log(getNumber()) //  결과값 { first: 1, third: 3, forth: 4 }

function getNumber(){
    let array = [1,2,3,4,5,6]
    let [first,,third,forth]=array
    
    return {first,third,forth}
}
console.log(getNumber())

console.log("6. 다음의 결과가 true가 되게 하시오")

function getCalendar(first, ...rest) {
    return (
      first === "January" &&
      rest[0] === "Febuary" &&
      rest[1] === "March" &&
      rest[2] === undefined
    );
  }
console.log(getCalendar("January","Febuary","March")); // 여기를 바꾸시오

console.log("7. 두 어레이들중 최소값을 찾는 함수를 완성하시오")

// function getMinimum(){
//     let a= [45,23,78]
//     let b = [54,11,9]
//     return Math.min() // 여기를 바꾸시오
// }
// console.log(getMinimum())

function getMinimum(){
    let a= [45,23,78]
    let b = [54,11,9]
    return Math.min(...a,...b) // 여기를 바꾸시오
}
console.log(getMinimum())

console.log("8. 다음의 함수를 화살표 함수로 바꾸시오")

// function sumNumber() {
//     // 여기서부터 바꾸시오
//     const sum = function (a, b) {
//         return a + b;
//     };
//     return sum(40, 10);
// }

function sumNumber() {
    // 여기서부터 바꾸시오 
    const sum = (a, b)=> a+b
    return sum(40, 10);
}

console.log("9. 다음함수를 화살표 함수로 바꾸시오")

// function sumNumber() {
//     //여기를 바꾸시오
//     return addNumber(1)(2)(3);
//     function addNumber(a) {
//         return function (b) {
//             return function (c) {
//                 return a + b + c;
//             };
//         };
//     }
// }
// console.log(sumNumber());

function sumNumber() {
    //여기를 바꾸시오
    let addNumber=(a)=>(b)=> (c)=> a + b + c;
    return addNumber(1)(2)(3);
}
console.log(sumNumber())

console.log("================배열함수=================")
let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
  ];

console.log("1. map")
  
//모든 이름을 대문자로 바꾸어서 출력하시오.
let data = names.map((item)=>{
    return item.toUpperCase()
}) 
console.log(data)

// /성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
let data1 = names.map((item)=>{
    return item.split(' ')[0]//단어 자르기 split(자르는 기준 ex공백 또는 쉼표)[자를 배열]
})
console.log(data1)

//이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])
let data2 = names.map((item)=>{
    let splitName = item.split(" ")
    let initial = ""
    splitName.forEach((nameItem)=>(initial += nameItem[0]))
    return initial
})
console.log(data2)

console.log("2. filter") // 조건에 해당하는 모든 값 출력

//이름에 a를 포함한 사람들을 출력하시오.
let data3 = names.filter((item)=>{
    return item.includes("a")
})
console.log(data3)

//이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
let data4 =  names.filter((item) => {
    let splitName = item.split("");
    return splitName.some((letter, index) => letter == splitName[index + 1]);
  })

console.log(data4)

console.log("3. some")

//전체 이름의 길이가 20자 이상인 사람이 있는가?
console.log(names.some((item)=>item.length>=20))

//성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
let data5 = names.some((item)=>{
    let splintName = item.split(' ')
    splintName.pop()
    return splintName.some((eachName)=>eachName.toLocaleLowerCase().includes('p')) //toLocaleLowerCase() 소문자로 변환
})
console.log(data5)

console.log("4. every") //모든 값에 조건 true/false

//모두의 전체 이름의 길이가 20자 이상인가?
console.log(names.every((item)=>item.length>=20))
//모두의 이름에 a 가 포함되어 있는가?
console.log(names.every((item)=>item.toLocaleLowerCase().includes('a')))

console.log("5. find") //조건에 해당하는 값 처음 한개 값 출력

//전체 이름의 길이가 20자 이상인 사람을 찾으시오.
console.log(names.find((item)=>item.length>=20))
//미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)
console.log(names.find((item)=>item.split(" ").length>=3))



