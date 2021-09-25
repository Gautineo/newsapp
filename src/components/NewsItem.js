import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export class NewsItem extends Component {
  render() {
    let { title, description, url, urlToImage } = this.props.article;
    return (
      <div>
        <Card style={{ width: "24rem" }}>
          <Card.Img variant="top" src={urlToImage} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button
              variant="outline-primary"
              className="btn-sm"
              onClick={() => window.open(url)}
            >
              Read More.
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default NewsItem;
