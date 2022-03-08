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

function calculate(a,b,c){   
    return a+b+c
}
console.log(calculate(1,2,3))

console.log("4. 다음 문제에 정답이 true가 나오게 하시오")

let name="noona store"
let fruits = ["banana","apple","mango"]
let address={
    country:"Korea",
    city:"Seoul"
}

function findStore(obj){
    return name="noona store" && address.city == "Seoul"
}
console.log(findStore({name,fruits,address}))




