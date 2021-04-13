import React from "react";
import "./App.css";
import { CardList } from "./components/cardList/CardList";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Rohan",
          id: "1",
        },
        {
          name: "Kishan",
          id: "2",
        },
        {
          name: "Pradumna",
          id: "3",
        },
        {
          name: "Riya",
          id: "4",
        },
        {
          name: "Khushi",
          id: "5",
        },
        {
          name: "Sameer",
          id: "6",
        },
        {
          name: "Prem",
          id: "7",
        },
        {
          name: "Kannu",
          id: "8",
        },
        {
          name: "Kushagra",
          id: "9",
        },
        {
          name: "Ishan",
          id: "10",
        },
        {
          name: "Sanju",
          id: "11",
        },
        {
          name: "Shivam",
          id: "12",
        },
      ],

      searchField: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <input
          className="search"
          type="search"
          placeholder="Search monsters"
          onChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
