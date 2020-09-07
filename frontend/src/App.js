import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./main";
import login from "./Home";

function App() {
  return (
    <div className="demo-big-content">
      {login}
      <Layout>
        <Header
          className="header-color"
          title={
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "0px",
              }}
              to="/"
            >
              AWS AMPLIFY TEST
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/login">login</Link>
          </Navigation>
        </Header>
        <Content>
          <div className="page-content"></div>
          <Main />
        </Content>
      </Layout>
    </div>
  );
}
export default App;
