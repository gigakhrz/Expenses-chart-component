import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { chartRowTypes } from "../types";
import CreateChart from "./CreateChart";

const ChartRow = (): JSX.Element => {
  const [rowData, setRowData] = useState<chartRowTypes[]>([]);
  useEffect(() => {
    const request = async () => {
      const response = await axios.get("/data.json");
      const data = response.data;
      setRowData(data);
    };
    request();
  }, []);

  const amounts: number[] = [];
  for (let i = 0; i < rowData.length; i++) {
    amounts.push(rowData[i]?.amount);
  }

  const maxAmount = Math.max(...amounts);

  return (
    <ExpensesContainer>
      <div className="titleAndColumn">
        <div className="title">
          <h2>Spending - Last 7 days</h2>
        </div>
        <ChartContainer></ChartContainer>
      </div>
      <hr />
      <div className="bottomComponent">
        <div className="total">
          <p>Total this month</p>
          <h1>$478.33</h1>
        </div>

        <div className="lastMonth">
          <h4>+2.4% </h4>
          <p>from last month</p>
        </div>
      </div>
    </ExpensesContainer>
  );
};

export default ChartRow;

const ExpensesContainer = styled.div`
  width: 343px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 20px;
  background: #fffbf6;
  border-radius: 10px;
  @media (min-width: 1024px) {
    width: 540px;
    padding: 32px 40px 41px;
    gap: 32px;
  }

  h2 {
    font-size: 24px;
    line-height: 31.25x;
    font-weight: 700;
    color: #382314;
    @media (min-width: 1024px) {
      font-size: 32px;
      line-height: 41.66px;
    }
  }
  .titleAndColumn {
    display: flex;
    flex-direction: column;
    gap: 52px;
    @media (min-width: 1024px) {
      gap: 66px;
    }
  }
  .title {
    display: flex;
    flex-direction: column;
    gap: 52px;
  }

  hr {
    border: 1px solid #f8e9dd;
    width: 100%;
  }

  .bottomComponent {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .total {
      display: flex;
      flex-direction: column;
      gap: 4px;
      @media (min-width: 1024px) {
        gap: 1px;
      }

      p {
        font-size: 15px;
        line-height: 19.5px;
        font-weight: 400;
        color: #92857a;
        @media (min-width: 1024px) {
          font-size: 18px;
          line-height: 23.44px;
        }
      }

      h1 {
        font-size: 30px;
        font-weight: 700;
        line-height: 39px;
        color: #382314;
        @media (min-width: 1024px) {
          font-size: 48px;
          line-height: 62.5px;
        }
      }
    }

    .lastMonth {
      display: flex;
      flex-direction: column;
      align-items: end;
      gap: 0;
      justify-content: end;
      h4 {
        font-size: 15px;
        line-height: 19.5px;
        font-weight: 700;
        color: #382314;
        @media (min-width: 1024px) {
          font-size: 18px;
          line-height: 23.44px;
        }
      }
      p {
        font-size: 15px;
        line-height: 19.5px;
        font-weight: 400;
        color: #92857a;
        @media (min-width: 1024px) {
          font-size: 18px;
          line-height: 23.44px;
        }
      }
    }
  }
`;

const ChartContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  @media (min-width: 1024px) {
    gap: 17.91px;
  }
`;
