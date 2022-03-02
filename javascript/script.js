let fruit = ["banana", "apple", "grape", "mango"]

console.log(fruit)
console.log(fruit[3])

fruit[0] = "cherry"
console.log(fruit)
fruit[2] = "tomato"
console.log(fruit)

//pop() : 마지막에 있는 아이템을 뺌
fruit.pop()
console.log(fruit)
//push() : 배열값 추가
fruit.push("pineapple")
console.log(fruit)

//includes : 아이템이 있는지 없는지 확인 true/false
console.log(fruit.includes("pear")) 

//indexOf : 아이템 인덱스 번호 알려줌
console.log(fruit.indexOf("apple"))

//slice : 배열 아이템을 잘라내는 역할 (시작점, 끝점-끝점 미포함), 기존배열 건드리지 않음
let extraFruit = fruit.slice(1,3)
console.log(extraFruit)
console.log("original fruit", fruit)

//splice : 배열 아이템을 잘라내는 역할 (시작점, 개수), 기존배열 건드림
fruit.splice(2,1)
console.log(fruit)