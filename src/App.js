// 예는 또 왜 이렇게 import 하는겨 ㅠㅠ  
import styled, {keyframes}  from "styled-components";

// stlyle 정의  const 로 정의 styled.div(html tag 이름으로 )
// css 비해 바뀌는 게 
// "" 이 없어짐, 각 라인은 ; 로 끝남 
// pixel 은 px로 표기 함.
// backgroundColor -> background-color
// backtik으로 묶어야 함. ``
// 자동 완성이 안됨 
const Father = styled.div`
  color:${props=>props.theme.textColor};
  background-color:${props=>props.theme.backgroundColor};
  display :flex ;
  flex-direction : column;
  flex-wrap : nowrap;
  `;

// tag 에서부터 값을 받아 오고 싶을때 prop 이용
const Box = styled.div`
  background-color : ${prop => prop.bgColor};
  width:100px;
  height:100px;
  `;
//기존 css를 가지고 확장하고 싶을 때 
const Circle = styled(Box)`
  border-radius:50px;
`;

const Text = styled.span`
  color : white;
`;
// button tag의 변경 button -> a 
const Button = styled.button`
  background-color : tomato;
  border-radius : 10px
`;
//maxLength , required 를 style안에 세팅하면 동작을 안함.. 이건 style이 아님.
// 즉 input tag의 속성을 정의 할 수 있음 .attrs
const Input = styled.input.attrs({required:true , maxLength:10})`
  background-color : tomato;
  required:true;
  maxLength:10
`;
// animation keyframes 
const rotationAnimation = keyframes`
  from {
    transform:rotate(0deg);
    border-radius:0;
  }
  to {
    transform:rotate(360deg);
    border-radius:50px;
  }
`;
const Emoji = styled.div`
    font-size: 36px;
`;

//animation을 위한 Box 
//justify-content:center; : 좌우로 center 
// align-items:center; : 아래위로 center 
const AnimationBox = styled.div`
  height:200px;
  width:200px;
  background-color : yellow;
  display:flex;
  justify-content:center;
  align-items:center;
  animation:${rotationAnimation} 5s linear infinite;
  ${Emoji}:hover{
    font-size:56px;
`;

function App() {
  return (
    <Father>
      <span>Box</span>
      <Box bgColor="teal"> 
        <Text>Hello</Text>
      </Box>  
      <span>Circle from inherit Box </span>
      <Circle bgColor="tomato"/>
      <span>button</span>
      <Button> Log in </Button>
      <span> a tag substitute </span>
      <Button as="a" href="/"> Log in2 </Button>
      <span>input attribute</span>
      <Input /> 
      <span>animation</span>
      <AnimationBox>
        <Emoji>😍</Emoji>
      </AnimationBox>
    </Father>
  );
}
export default App;
