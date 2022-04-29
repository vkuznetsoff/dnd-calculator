import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Context } from "../App";
import { RUNTIME } from "../redux/app_reducer";
import "./Calculator.css";
import TargetBoxContainer from "./TargetBoxContainer";



const Calculator = () => {

  return (
    <div className={"calculatorContainer"}>
      <TargetBoxContainer />
    </div>
  );
};

export default Calculator;
