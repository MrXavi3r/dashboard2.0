import React, { useState, useEffect, useContext } from "react";
import NVD3Chart from "react-nvd3";
import { categories } from "../data";
import { GlobalContext } from "../../context/GlobalState";
// import {transactions} from '../data'

const PieDonutChart = () => {
  const [expenses, setExpenses] = useState([]);
  const [datumValues, setDatumValues] = useState([]);
  const { transactions } = useContext(GlobalContext);

  useEffect(() => {
    let data = transactions.filter((transaction) => transaction.amount < 0);
    setExpenses(data);
  }, []);

  useEffect(() => {
    const categoryHandler = (category) => {
      let categoryColor = category;
      let catArray = expenses.filter((item) => item.category === category);

      switch (categoryColor) {
        case "housing":
          categoryColor = "#ff8a65";
          break;
        case "utilities":
          categoryColor = "#f4c22b";
          break;
        case "food/dining":
          categoryColor = "#04a9f5";
          break;
        case "clothing/apparel":
          categoryColor = "#a389d4";
          break;
        case "entertainment/leisure":
          categoryColor = "#4F5467";
          break;
        case "personal care":
          categoryColor = "#d0d489";
          break;
        case "medical":
          categoryColor = "#89d4ce";
          break;
        case "big ticket items":
          categoryColor = "#db2c0d";
          break;
        case "other":
          categoryColor = "#db9a0d";
          break;
        case "transportation":
          categoryColor = "#6d0ddb";
          break;
        case "health/fitness":
          categoryColor = "#3adb0d";
          break;
        default:
          categoryColor = "#5c5a57";
          break;
      }

      let total = catArray.reduce((acc, { amount }) => {
        return acc + amount;
      }, 0);

      let datemObject = {
        key: category,
        y: +total,
        color: categoryColor,
      };

      return datemObject;
    };

    let datemObjects = [];

    categories.forEach((category) => {
      let obj = categoryHandler(category);
      datemObjects = [...datemObjects, obj];
    });

    let filtered = datemObjects.filter((obj) => {
      return obj.y < 0;
    });

    setDatumValues(filtered);
  }, [expenses]);

  //   const datum = [
  //     { key: "One", y: 29, color: "#ff8a65" },
  //     { key: "Two", y: 0, color: "#f4c22b" },
  //     { key: "Three", y: 32, color: "#04a9f5" },
  //     { key: "Four", y: 196, color: "#3ebfea" },
  //     { key: "Five", y: 2, color: "#4F5467" },
  //     { key: "Six", y: 98, color: "#1de9b6" },
  //     { key: "Seven", y: 13, color: "#a389d4" },
  //     { key: "Eight", y: 5, color: "#FE8A7D" },
  //   ];

  return (
    <NVD3Chart
      id="chart"
      height={400}
      type="pieChart"
      datum={datumValues}
      x="key"
      y="y"
      donut
      labelType="percent"
    />
  );
};

export default PieDonutChart;
