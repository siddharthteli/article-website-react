import React from "react";

import Cards from "../Cards/Cards";
import faker from "faker";
import { auto } from "async";
import "./Home.css";
class Home extends React.Component {
  render() {
    console.log("Value of address:" + faker.address.zipCode());
    return (
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
        <Cards
          image={faker.image.fashion()}
          heading={faker.company.catchPhrase()}
          name={faker.name.findName()}
        />
        <Cards
          image={faker.image.food()}
          heading={faker.company.catchPhrase()}
          name={faker.name.findName()}
        />
        <Cards
          image={faker.image.nightlife()}
          heading={faker.company.catchPhrase()}
          name={faker.name.findName()}
        />
      </div>
    );
  }
}

export default Home;
