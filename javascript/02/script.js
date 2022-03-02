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