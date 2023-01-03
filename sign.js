
// 휴대폰 번호 입력 부분
function changePhone1(){
    const phone1 = document.getElementById("phone1").value // 010
    if(phone1.length === 3){
        document.getElementById("phone2").focus();
    }
}
function changePhone2(){
    const phone2 = document.getElementById("phone2").value // 010
    if(phone2.length === 4){
        document.getElementById("phone3").focus();
    }
}
function changePhone3(){
    const phone3 = document.getElementById("phone3").value // 010
    if(phone3.length === 4){
      document.getElementById("sendMessage").focus();
      document.getElementById("sendMessage").setAttribute("style","background-color:yellow;")
      document.getElementById("sendMessage").disabled = false;
    }
}

// 문자인증+타이머 부분
function initButton(){
  document.getElementById("sendMessage").disabled = true;
  document.getElementById("completion").disabled = true;
  document.getElementById("certificationNumber").innerHTML = "0000";
  document.getElementById("timeLimit").innerHTML = "03:00";
  document.getElementById("sendMessage").setAttribute("style","background-color:none;")
  document.getElementById("completion").setAttribute("style","background-color:none;")
}

let processID = -1;

const getToken = () => {

  // 인증확인 버튼 활성화
  document.getElementById("completion").setAttribute("style","background-color:yellow;")
  document.getElementById("completion").disabled = false;

  if (processID != -1) clearInterval(processID);
  //const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");    // 인증번호 6자 등록
  const token = String(Math.floor(Math.random() * 10000)).padStart(4, "0");        // 인증번호 4자 등록
  document.getElementById("certificationNumber").innerText = token;
  let time = 180;
  processID = setInterval(function () {
    if (time < 0 || document.getElementById("sendMessage").disabled) {
      clearInterval(processID);
      initButton();
      return;
    }
    let mm = String(Math.floor(time / 60)).padStart(2, "0");
    let ss = String(time % 60).padStart(2, "0");
    let result = mm + ":" + ss;
    document.getElementById("timeLimit").innerText = result;
    time--;
  }, 50);
};

function checkCompletion(){
  alert("문자 인증이 완료되었습니다.")
  initButton();
  document.getElementById("completion").innerHTML="인증완료"
  document.getElementById("signButton").disabled = false;
  document.getElementById("signButton").setAttribute("style","background-color:yellow;")
}


// 가입부분 체크
function signCheck(){

  let email = document.getElementById("email").value
  let name = document.getElementById("name").value
  let password = document.getElementById("password").value
  let passwordCheck = document.getElementById("passwordCheck").value
  let area = document.getElementById("area").value
  let gender_man = document.getElementById("gender_man").checked
  let gender_woman = document.getElementById("gender_woman").checked
  let check = true; 
  
  if(check){
    document.getElementById("emailError").innerHTML=""
    document.getElementById("nameError").innerHTML=""
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML=""
    document.getElementById("areaError").innerHTML=""
    document.getElementById("genderError").innerHTML=""
    
  }
}
