import React from "react";
import "./Cards.css";
class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const onClick = () => {
      this.props.history(`/article/1`);
    };
    return (
      <div className="card-wrapper">
        <a href="#">
          <img className="image" src={this.props.image} />
          <div className="heading">{this.props.heading}</div>
          <div class="author">{this.props.name}</div>
        </a>
      </div>
    );
  }
}

export default Card;
