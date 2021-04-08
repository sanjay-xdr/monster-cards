import React from "react";
import "./App.css";
import { CardList } from "./components/cardList/CardList";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "rohan",
          id: "1",
        },
        {
          name: "kishan",
          id: "2",
        },
        {
          name: "pradumna",
          id: "3",
        },
        {
          name: "pradumna",
          id: "4",
        },
        {
          name: "pradumna",
          id: "5",
        },
        {
          name: "pradumna",
          id: "6",
        },
        {
          name: "pradumna",
          id: "7",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
