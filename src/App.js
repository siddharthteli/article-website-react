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
      <div className="App">
        <div>
          <Cards
            image={faker.image.sports()}
            heading={faker.company.catchPhrase()}
          />
        </div>

        <div>
          <Cards
            image={faker.image.transport()}
            heading={faker.company.catchPhrase()}
          />
        </div>

        <div>
          <Cards
            image={faker.image.nature()}
            heading={faker.company.catchPhrase()}
          />
        </div>
      </div>
    );
  }
}

export default App;
