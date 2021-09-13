import React from "react";
import "./Cards.css";
import { withRouter } from "react-router-dom";
class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const onClick = () => {
      this.props.history.push({
        pathname: `/article/1`,
        state: { siddharth: "Hello" },
      });
    };
    console.log("Value of id From card:" + this.props.value);
    return (
      <div className="card-wrapper" onClick={onClick}>
        <a>
          <img className="image" src={this.props.image} />
          <div className="heading">{this.props.heading}</div>
          <div class="author">{this.props.name}</div>
        </a>
      </div>
    );
  }
}

export default withRouter(Card);
