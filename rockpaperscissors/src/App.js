import { useState } from "react";
import Box from "./component/Box";
import "./App.css";

//1.박스 두개(타이틀 /사진정보/결과)
//2.가위바위 보 버튼
//3.버튼을 누르면 클릭한 값이 박스에보임 게임이 진행
//4.컴퓨터는 랜덤하게 값을 선택
//5.3 4 의 결과를 가지고 누가 이겼는지를 승패를 따진다.
//6. 승패의 결과에 따라 테두리 색이 바뀐다(이기면초록/지면빨강 비기면 검정)
const choice = {
  rock: {
    name: "Rock",
    img: "https://etherrock.com/3.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://www.ikea.com/kr/en/images/products/sy-scissors__0112301_pe263788_s5.jpg",
  },
  paper: {
    name: "Paper",
    img: "data:image/jpeg;base64,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",
  },
};
const randomChoice = () => {
  let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 배열로 만들어주는 함수이다.
  let randomItem = Math.floor(Math.random() * itemArray.length);
  console.log("randomValue : ", randomItem);
  let final = itemArray[randomItem];
  return choice[final];
};
const judgement = (user, computer) => {
  //user==computer tie
  //user == rock, computer =="scissors" user 이김
  //user == rock, computer =="paer" computer 이김
  //user == scissors, computer =="paper" user 이김
  //user == scissors, computer =="rock" computer 이김
  //user == paper, computer =="rock" user 이김
  //user == paper, computer =="scissors" computer 이김
  if (user.name == computer.name) {
    return "tie";
  } else if (user.name == "Rock")
    return computer.name == "Scissors" ? "win" : "lose";
  else if (user.name == "Scissors")
    return computer.name == "Paper" ? "win" : "lose";
  else if (user.name == "Paper")
    return computer.name == "Rock" ? "win" : "lose";
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]); //상태를 변경하는것은 뒤의 유저값으로
    let computerChoice = randomChoice(); //컴퓨터 랜덤하게
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>

      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
