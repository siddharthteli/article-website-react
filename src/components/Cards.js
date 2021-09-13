import React from "react";
import "./Cards.css";
class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-wrapper">
        <img src={this.props.image} />
        <div>
          <a href="#">Hello</a>
        </div>
      </div>
    );
  }
}

export default Card;
