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
let taskList =[]

addBtn.addEventListener("click",addTask)
function addTask(){
    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false,
    }
    taskList.push(task);
    console.log(taskList)
    render();
}

function render(){
    let resultHTML = ''
    for(i=0;i<taskList.length;i++){
        if(taskList[i].isComplete == true){
            resultHTML +=  `<div class="task">
            <div class="taskDone">${taskList[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')">check</button>
                <button onclick="">delete</button>
            </div>
        </div>`  
        }else{
            resultHTML += `<div class="task">
        <div>${taskList[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${taskList[i].id}')">check</button>
            <button onclick="">delete</button>
        </div>
    </div>`
        }
    }

    document.getElementById("taskBoard").innerHTML = resultHTML;
}

function toggleComplete(id){
    for(i=0;i<taskList.length;i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = true;
            break;
        }
    }
    render();
    console.log(taskList)
}

//랜덤 ID 생성
function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}
