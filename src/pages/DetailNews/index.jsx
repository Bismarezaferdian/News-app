import { Card, Carousel, Col, Row } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import "./detailNews.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Meta from "antd/es/card/Meta";
import Navbar from "../Navbar";
import Footers from "../Footer";

const DetailNews = () => {
  const location = useLocation();
  const item = location.state;
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [newUpdate, setNewsUpdate] = useState();

  useEffect(() => {
    const update = articles.slice(0, 4);
    setNewsUpdate(update);
  }, [articles]);

  function handleItemClick(item) {
    navigate("/detail", { state: item });
    console.log(`Selected value: ${item.title}`);
  }
  //   console.log(newUpdate);

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
            <Row gutter={16} justify="center">
              {newUpdate?.map((item) => (
                <Col>
                  <Card
                    onClick={handleItemClick(item)}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={item.urlToImage} />}
                  >
                    <Meta title={item.title} description="www.instagram.com" />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Content>
      <Footers />
    </div>
  );
};

export default DetailNews;
