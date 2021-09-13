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
        state: {
          heading: this.props.heading,
          image: this.props.image,
          name: this.props.name,
          content: this.props.content,
        },
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
