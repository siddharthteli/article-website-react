import React from "react";
import faker from "faker";

export default class CommentDetail extends React.Component {
  render() {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={this.props.imageSrc} />
        </a>
        <div className="content">
          <a gref="/" className="author">
            {this.props.name}
          </a>
          <div className="metadata">
            <span className="date">{new Date().toString()}</span>
          </div>
          <div class="text">{this.props.comment}</div>
        </div>
      </div>
    );
  }
}

CommentDetail.defaultProps = {
  name: "siddharth",
  comment: "Chal  ",
  imageSrc: faker.image.avatar(),
};
