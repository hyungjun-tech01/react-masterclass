import styled from "styled-components";

// stlyle 정의  const 로 정의 styled.div(html tag 이름으로 )
// css 비해 바뀌는 게 
// "" 이 없어짐, 각 라인은 ; 로 끝남 
// pixel 은 px로 표기 함.
// backgroundColor -> background-color
// backtik으로 묶어야 함. ``
// 오타 수정이 자동으로 안됨 
const Father = styled.div`
  display :flex ;
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
function App() {
  return (
    <Father>
      <Box bgColor="teal"> 
        <Text>Hello</Text>
      </Box>  
      <Circle bgColor="tomato"/>
     </Father>
  );
}

export default App;
