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
        image: faker.image.image(),
        heading: faker.company.catchPhrase(),
        name: faker.name.findName(),
        content: faker.lorem.paragraphs() + faker.lorem.paragraphs(),
      };
      this.card_list.push(card);
    }

    this.cardDetail = this.card_list;
    this.setState({ cardListNew: this.card_list });
  }

  render() {
    return (
      <div className="App">
        {this.card_list.map((card, idx) => (
          <Cards
            key={idx}
            value={idx}
            image={card.image}
            heading={card.heading}
            name={card.name}
            content={card.content}
          />
        ))}
      </div>
    );
  }
}

export default Home;
