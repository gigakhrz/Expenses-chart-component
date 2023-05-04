import styled from "styled-components";
import LogoImg from "../images/logo.svg";

const BalanceAmount = (): JSX.Element => {
  return (
    <Container>
      <div>
        <h4>My balance</h4>
        <h2>$921.48</h2>
      </div>

      <img src={LogoImg} alt="logo" />
    </Container>
  );
};

export default BalanceAmount;

const Container = styled.div`
  width: 343px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background-color: #ec755d;
  border-radius: 10px;
  @media (min-width: 1024px) {
    width: 540px;
    padding: 27px 39px 25px 32px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h4 {
      font-size: 15px;
      line-height: 19.5px;
      font-weight: 400;
      color: white;
      @media (min-width: 1024px) {
        font-size: 18px;
        line-height: 23.44px;
      }
    }

    h2 {
      font-size: 24px;
      line-height: 31.25x;
      font-weight: 700;
      color: white;
      @media (min-width: 1024px) {
        font-size: 32px;
        line-height: 41.66px;
      }
    }
  }
`;
