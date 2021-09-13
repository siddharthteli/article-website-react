import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "../components/CommentDetail.js";

const Content = () => {
  return (
    <div style={{ width: "50%", margin: "auto" }}>
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
};

export default Content;
