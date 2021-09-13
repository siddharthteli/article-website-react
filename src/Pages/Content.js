import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "../components/CommentDetail.js";
import { render } from "@testing-library/react";
import "./Content.css";
class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(
      "Value of histrory push ----" + this.props.location.state.heading
    );
    return (
      <div className="wrapper">
        <div>
          <h1>
            {this.props.location.state.heading}-
            <label> {this.props.location.state.name}</label>
          </h1>
          <img src={this.props.location.state.image} />
          <p>{this.props.location.state.content}</p>
        </div>
        <div className="ui  comments">
          <CommentDetail
            name="siddharth"
            comment="Nice pic"
            imageSrc={faker.image.avatar()}
          />
          <CommentDetail
            name="Modi"
            comment="Ache din aane waale hai"
            imageSrc={faker.image.avatar()}
          />{" "}
          <CommentDetail imageSrc={faker.image.avatar()} />
        </div>
      </div>
    );
  }
}

export default Content;
