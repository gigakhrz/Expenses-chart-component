import styled from "styled-components";
import { chartRowTypes } from "../types";
interface CreateChartProps {
  rowData: chartRowTypes[];
  maxAmount: number;
  index: number;
}
const CreateChart = (props: CreateChartProps): JSX.Element => {
  const height = (props.rowData[props.index]?.amount / props.maxAmount) * 150;

  return (
    <ColumnContainer>
      <Column
        height={height}
        maxAmount={props.maxAmount}
        i={props.rowData[props.index].amount}
        className="column"
      >
        <div className="hoverAmount">
          <h5>{props.rowData[props.index]?.amount}$</h5>
        </div>
      </Column>
      <p>{props.rowData[props.index]?.day}</p>
    </ColumnContainer>
  );
};

export default CreateChart;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  align-items: flex-end;
  justify-content: flex-end;
  @media (min-width: 1024px) {
    gap: 8px;
  }

  p {
    font-size: 15px;
    line-height: 19.5px;
    font-weight: 400;
    color: #92857a;
    align-self: center;
  }
`;

const Column = styled.div<{ height: any; maxAmount: any; i: any }>`
  position: relative;
  width: 33px;
  @media (min-width: 1024px) {
    width: 50.36px;
  }
  height: ${(props) => props.height}px;
  background: ${(props) =>
    props.i === props.maxAmount ? "#76B5BC" : "#EC755D"};
  border-radius: 5px;
  @media (min-width: 1024px) {
    width: 50.36px;
  }

  :hover {
    cursor: pointer;
    background: ${(props) =>
      props.i === props.maxAmount ? "#B4E0E5" : "#FF9B86"};
  }

  :hover .hoverAmount {
    display: flex;
    left: -10.5px;
    top: -48px;
  }

  .hoverAmount {
    width: 75px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #382314;
    border-radius: 5px;
    position: absolute;
    display: none;

    h5 {
      font-size: 18px;
      font-weight: 700;
      line-height: 23px;
      color: white;
    }
  }
`;
