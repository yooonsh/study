// 유저가 값을 입력한다
// + 버튼을 클릭하면, 할일이 추가된다
// delete 버튼을 누르면 할일이 삭제된다
// check 버튼을 누르면 할일이 끝나면서 밑줄이 생긴다
// 1. check버튼을 클릭하는 순간 true => false
// 2. true이면 끝난걸로 간주하고 밑줄 보여주기
// 3. false 이면 안끝난걸로 간주하고 그대로

// 진행중 끝남 탭을 누르면, 언더바가 이동한다
// 끝남탭은, 끝난 아이템만, 진행중인탭은, 진행중인 아이템만
// 전체탭을 누르면 다시 전체아이템으로 돌아옴

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let tabs = document.querySelectorAll(".taskTabs div")
let taskList = []
let mode = "all"
let filterList = []

addBtn.addEventListener("click", addTask)

for (i = 1; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function (event) { 
        filter(event) 
    })
}

function addTask() {
    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false,
    }
    taskList.push(task);
    console.log(taskList)
    render();
}

function render() {
    let list = [];
    if(mode == "all"){
        list = taskList
    }else if(mode == "ongoing" || mode == "done"){
        list = filterList
    }
    let resultHTML = ''
    for (i = 0; i < list.length; i++) {
        if (list[i].isComplete == true) {
            resultHTML += `<div class="task">
            <div class="taskDone">${list[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${list[i].id}')">check</button>
                <button onclick="deleteTask('${list[i].id}')">delete</button>
            </div>
        </div>`
        } else {
            resultHTML += `<div class="task">
        <div>${list[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${list[i].id}')">check</button>
            <button onclick="deleteTask('${list[i].id}')">delete</button>
        </div>
    </div>`
        }
    }

    document.getElementById("taskBoard").innerHTML = resultHTML;
}

function toggleComplete(id) {
    for (i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList[i].isComplete = !taskList[i].isComplete; //반대값
            break;
        }
    }
    render();//UI 업데이트
}

function deleteTask(id) {
    for (i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList.splice(i, 1)
            break;
        }
    }
    render();//UI 업데이트
}



function filter(event){
    console.log("filter 클릭", event.target.id)
    mode = event.target.id
    filterList = []
    if(mode == "all"){
        render();
    }else if(mode == "ongoing"){
        for(i=0;i<taskList.length;i++){
            if(taskList[i].isComplete == false){
                filterList.push(taskList[i]);
            }
        }
        render();
    }else if(mode == "done"){
        for(i=0;i<taskList.length;i++){
            if(taskList[i].isComplete == true){
                filterList.push(taskList[i]);
            }
        }
        render();
    }
}

//랜덤 ID 생성
function randomIDGenerate() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
