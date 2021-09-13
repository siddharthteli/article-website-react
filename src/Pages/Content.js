import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "../components/CommentDetail.js";
import ApprovalCard from "../components/ApprovalCard.js";

const Content = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          name="siddharth"
          comment="Nice pic"
          imageSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="Modi"
          comment="Ache din aane waale hai"
          imageSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        {" "}
        <CommentDetail imageSrc={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  );
};

export default Content;
