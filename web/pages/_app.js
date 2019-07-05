
import React from "react";
import App, { Container as NextContainer } from "next/app";
import Head from "next/head";
//import Container from "react-bootstrap/Container";
//import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar from "../components/Navbar";
import fetch from 'isomorphic-fetch'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    if (ctx.req && ctx.req.session.passport) {
      pageProps.user = ctx.req.session.passport.user;
    }
    return { pageProps };
  }

  constructor(props) {
    super(props);
    this.state = {
      user: props.pageProps.user
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    const props = {
      ...pageProps,
      user: this.state.user,
    };

    return (
      <NextContainer>
        <Head>
          <title>TutorKwik | Study with a Button</title>
          <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Navbar user={this.state.user} />
            <Component {...props} />
      </NextContainer>
    );
  }
}

export default MyApp;