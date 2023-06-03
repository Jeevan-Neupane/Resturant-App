import React from "react";
import Layout from "../Components/Layout";
import Banner from "../images/banner.jpeg";
import { Link } from "react-router-dom";
import "../Styles/HomeStyle.css";


function HomePage() {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className="headContainer">
          <h1>Food Website</h1>
          <p>Best Food in Nepal</p>
          <Link to="menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
        
    </Layout>
  );
}

export default HomePage;
