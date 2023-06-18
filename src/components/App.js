import React from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import { useState, useEffect } from "react";

const API = "http://localhost:3000/sushis";

function App() {

  useEffect ( () => {
    fetch (API)
    .then (response => response.json())
    .then (sushiData => setSushis(sushiData))
  },[] )

  const [sushis,setSushis] = useState([])
  const [startingSushiId, setStartingSushiId] = useState(0)
  const [budgetLeft,setBudgetLeft] = useState(100)
  const [inputMoney,setInputMoney] = useState('')
  
  function handleStartingSushiId (id) {
    setStartingSushiId (id)
  }

  function handleEatingSushi (sushiId) {
    if (budgetLeft - sushis[sushiId-1].price >= 0) {
      const copySushis = [...sushis]
      copySushis[sushiId-1].eaten = true
      setBudgetLeft (budgetLeft - copySushis[sushiId-1].price)
      setSushis (copySushis)
    }
  }

  function handleInputMoney (e) {
    e.preventDefault()
    const money = Number(e.target.value)
    // console.log(money)
    if (!isNaN(money)) {
      //console.log(Number(money))
      setInputMoney(money)
    }
  }

  function handleBudgetInc (e) {
    e.preventDefault()
    console.log (budgetLeft,'   ',inputMoney)
    setBudgetLeft(budgetLeft + inputMoney)
  }
  return (
    <div className="app">
      <SushiContainer sushis={sushis.slice(startingSushiId,startingSushiId+4)} handleStartingSushiId={handleStartingSushiId} handleEatingSushi={handleEatingSushi}/>
      <Table plates={sushis.filter(sushi => sushi.eaten === true)} budget={budgetLeft} handleInputMoney={handleInputMoney} inputMoney={inputMoney} handleBudgetInc={handleBudgetInc}/>
    </div>
  );
}

export default App;