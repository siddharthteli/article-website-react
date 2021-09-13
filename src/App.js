import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Content from "./Pages/Content.js";
import Cards from "./components/Cards";
import faker from "faker";
class App extends React.Component {
  render() {
    console.log("Value of address:" + faker.address.zipCode());
    return (
      <div>
        <div className="App">
          <Cards
            image={faker.image.sports()}
            heading={faker.company.catchPhrase()}
            name={faker.name.findName()}
          />
          <Cards
            image={faker.image.business()}
            heading={faker.company.catchPhrase()}
            name={faker.name.findName()}
          />
          <Cards
            image={faker.image.nature()}
            heading={faker.company.catchPhrase()}
            name={faker.name.findName()}
          />
        </div>
      </div>
    );
  }
}

export default App;
