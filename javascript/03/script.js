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

function meetAt(year, month, date) {
  let todayYear = year;
  let todayMonth = month;
  let todayDate = date;

  if (todayDate) {
    return `${todayYear}/${todayMonth}/${todayDate}`;
  }
  if (todayMonth) {
    return `${todayYear}년 ${todayMonth}월`;
  }
  if (todayYear) {
    return `${todayYear}년`;
  }

}

console.log(meetAt(2022,1,7))


console.log("==========================5번=============================")

function findSmallestElement(arr) {
	let result = arr[0];
	if (arr.length === 0 ) {
		return 0;
	}
  for (let i = 1;i < arr.length; i++){
		if(result > arr[i]){
			result = arr[i];
		}
	}
	return result;
}

let smallestNumber = findSmallestElement([100,200,3,0,2,1])
console.log(smallestNumber)



