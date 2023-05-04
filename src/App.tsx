import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import BalanceAmount from "./components/BalanceAmount";
import ChartRow from "./components/ChartRow";

function App() {
  return (
    <MainContainer>
      <GlobalStyles />
      <BalanceAmount />
      <ChartRow />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: #f8e9dd;
  @media (min-width: 1024px) {
    gap: 24px;
  }
`;
