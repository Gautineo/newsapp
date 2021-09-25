import React, { Component } from "react";
import { Container } from "react-bootstrap";
import NewsItem from "./NewsItem";
import data from "../data.json";

export class News extends Component {
  constructor() {
    super();
    console.log(`Hello I'm a constructor from News Component`);
    this.state = {
      articles: data.articles,
      loading: false,
    };
  }

  render() {
    return (
      <>
        <Container>
          <h3>Here are top headlines for the day</h3>
          <Container className="row">
            {data.articles.map((article) => {
              return (
                <div className="col-md-4">
                  <NewsItem key={article.source.id} article={article} />
                </div>
              );
            })}
          </Container>
        </Container>
      </>
    );
  }
}

export default News;
