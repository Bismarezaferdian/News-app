import { Header } from "antd/es/layout/layout";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div>
      <Header style={{ marginBottom: "10px" }}>
        <div className="headerWrapp">
          <div className="logo">
            <Link to={"/"}>
              <h1>Eigen News</h1>
            </Link>
          </div>
          <div className="navWrapp">
            <li>Out Story</li>
            <li>Out Story</li>
            <li>Out Story</li>
            <li>Out Story</li>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default Navbar;
