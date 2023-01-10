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
const BoxOne = styled.div`
  background-color : teal;
  width:100px;
  height:100px;
  `;
const BoxTwo = styled.div`
  background-color: tomato;
  width:100px;
  height:100px;
`;
const Text = styled.span`
  color : white;
`;
function App() {
  return (
    <Father>
      <BoxOne> 
        <Text>Hello</Text>
      </BoxOne>  
      <BoxTwo/>
     </Father>
  );
}

export default App;
