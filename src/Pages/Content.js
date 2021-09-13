import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "../components/CommentDetail.js";
import { render } from "@testing-library/react";

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(
      "Value of histroy push ----" + this.props.location.state.siddharth
    );
    return (
      <div style={{ width: "50%", margin: "auto", "margin-top": "70px" }}>
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
