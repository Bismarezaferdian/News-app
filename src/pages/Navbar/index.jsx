import { LoginOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div>
      <Header>
        <div className="headerWrapp">
          <div className="logo">
            <Link to={"/"}>
              <h1>Eigen News</h1>
            </Link>
          </div>
          <div className="navWrapp">
            <li>Hot News</li>
            <li>International</li>
            <li>National</li>
            <li>Technology</li>
            <li>Sport</li>
            <li>
              <LoginOutlined />
            </li>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default Navbar;
