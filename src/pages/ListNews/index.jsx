import React, { useEffect } from "react";
import { Carousel, Col, List, Row } from "antd";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { FieldTimeOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import Footers from "../Footer";

const ListNews = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  const apikey = "815ea8a806314dfca03bb671b777a8db";

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=tesla&from=2023-02-28&sortBy=publishedAt&apiKey=${apikey}`
      );
      console.log(res);
      if (res.status === 200) {
        setArticles(res.data.articles);
      }
    };
    getData();
  }, []);

  function handleItemClick(item) {
    navigate("/detail", { state: item });
    console.log(`Selected value: ${item.title}`);
  }

  return (
    <div>
      <Navbar />
      <Carousel>
        <img src={articles[0]?.urlToImage} alt="img" />
      </Carousel>
      <Content theme="dark">
        <Row justify="center">
          <Col span={24} lg={22}>
            <h3 style={{ marginTop: "10px" }}>
              <FieldTimeOutlined /> Trending on Eigen News
            </h3>
            <List
              onClick={(e) => console.log(e)}
              itemLayout="vertical"
              //   size="large"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 6,
              }}
              dataSource={articles}
              footer={
                <div>
                  <b>ant design</b> footer part
                </div>
              }
              renderItem={(item) => (
                <List.Item
                  key={item.title}
                  extra={<img width={272} alt="logo" src={item.urlToImage} />}
                  onClick={() => handleItemClick(item)}
                >
                  <List.Item.Meta
                    title={<a href={item.href}>{item.title}</a>}
                  />
                  <p>{item.publishedAt}</p>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Content>
      <Footers />
    </div>
  );
};

export default ListNews;
