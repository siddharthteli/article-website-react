import React from "react";

import Cards from "../Cards/Cards";
import faker from "faker";

import "./Home.css";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.cardDetail = {};
    this.card_list = [];
    for (let i = 0; i < 10; i++) {
      let card = {
        image: faker.image.business(),
        heading: faker.company.catchPhrase(),
        name: faker.name.findName(),
      };
      this.card_list.push(card);
    }

    this.cardDetail = this.card_list;
  }

  componentDidMount() {}

  render() {
    console.log("Value of address:" + faker.address.zipCode());
    return (
      <div className="App">
        {this.card_list.map((card) => (
          <Cards image={card.image} heading={card.heading} name={card.name} />
        ))}
      </div>
    );
  }
}

export default Home;
