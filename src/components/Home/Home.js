import React from "react";

import Cards from "../Cards/Cards";
import faker from "faker";

import "./Home.css";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.State = { cardListNew: null };
    this.cardDetail = {};
    this.card_list = [];
  }

  componentDidMount() {
    for (let i = 0; i < 10; i++) {
      let card = {
        image: faker.image.business(),
        heading: faker.company.catchPhrase(),
        name: faker.name.findName(),
      };
      this.card_list.push(card);
    }

    this.cardDetail = this.card_list;
    this.setState({ cardListNew: this.card_list });
  }

  render() {
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
