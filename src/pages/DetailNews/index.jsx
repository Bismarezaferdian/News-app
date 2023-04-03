import { Carousel, Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import "./detailNews.scss";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Footers from "../Footer";

const DetailNews = () => {
  const location = useLocation();
  const item = location.state;

  return (
    <div className="container">
      <Navbar />
      <Content justify="center">
        <Row justify="center">
          <Carousel
            style={{ width: "1024px", backgroundColor: "red" }}
            justify="center"
          >
            <img src={item.urlToImage} alt="img" />
          </Carousel>
        </Row>
        <Row>
          <Col xl={24}>
            <div className="contentWrapp">
              <div>
                <span>Title : </span>
                <h1>{item.title}</h1>
              </div>
              <div>
                <span>Author:</span>
                <h1> {item.author}</h1>
              </div>
              <div>
                <span>Description: </span>
                <h1>{item.description}</h1>
              </div>
              <div>
                <span>Content:</span>
                <h1>{item.content}</h1>
              </div>
              <div>
                <span>Publish:</span>
                <span>{item.publishedAt}</span>
              </div>
              <div>
                <span>source:</span>
                <a href={item.url}>{item.url}</a>
              </div>
            </div>
          </Col>
          <Col>
            <Row gutter={16} justify="center"></Row>
          </Col>
        </Row>
      </Content>
      <Footers />
    </div>
  );
};

export default DetailNews;
