import React from "react";
import App, { Container as NextContainer } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import fetch from 'isomorphic-fetch'
import '../static/css/empty.css'

class MyApp extends App {
 
  static async getInitialProps({ Component, ctx }) 
  {
    
    let pageProps = {};
    if (Component.getInitialProps) 
    {
      pageProps = await Component.getInitialProps(ctx);
    }
    
    if (ctx.req && ctx.req.session.passport)
    {
      pageProps.user = ctx.req.session.passport.user

      var bearer = 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5FUkRPREE1TlRCRk5UTkdRMFUwTVRVek1qaEZPVVF3T0RkRFFUTTVOa1ZGTlRaRk56azVSZyJ9.eyJpc3MiOiJodHRwczovL2Rldi1sdXFtNnV0eS5hdXRoMC5jb20vIiwic3ViIjoidTFTcU02MVRTenFMZzJFcndGbUlyN1VkMTA2ckFKVTBAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZGV2LWx1cW02dXR5LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNTY3MTIwMjA4LCJleHAiOjE1NjcyMDY2MDgsImF6cCI6InUxU3FNNjFUU3pxTGcyRXJ3Rm1JcjdVZDEwNnJBSlUwIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcl90aWNrZXRzIHJlYWQ6Y2xpZW50cyB1cGRhdGU6Y2xpZW50cyBkZWxldGU6Y2xpZW50cyBjcmVhdGU6Y2xpZW50cyByZWFkOmNsaWVudF9rZXlzIHVwZGF0ZTpjbGllbnRfa2V5cyBkZWxldGU6Y2xpZW50X2tleXMgY3JlYXRlOmNsaWVudF9rZXlzIHJlYWQ6Y29ubmVjdGlvbnMgdXBkYXRlOmNvbm5lY3Rpb25zIGRlbGV0ZTpjb25uZWN0aW9ucyBjcmVhdGU6Y29ubmVjdGlvbnMgcmVhZDpyZXNvdXJjZV9zZXJ2ZXJzIHVwZGF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGRlbGV0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGNyZWF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIHJlYWQ6ZGV2aWNlX2NyZWRlbnRpYWxzIHVwZGF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgZGVsZXRlOmRldmljZV9jcmVkZW50aWFscyBjcmVhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIHJlYWQ6cnVsZXMgdXBkYXRlOnJ1bGVzIGRlbGV0ZTpydWxlcyBjcmVhdGU6cnVsZXMgcmVhZDpydWxlc19jb25maWdzIHVwZGF0ZTpydWxlc19jb25maWdzIGRlbGV0ZTpydWxlc19jb25maWdzIHJlYWQ6ZW1haWxfcHJvdmlkZXIgdXBkYXRlOmVtYWlsX3Byb3ZpZGVyIGRlbGV0ZTplbWFpbF9wcm92aWRlciBjcmVhdGU6ZW1haWxfcHJvdmlkZXIgYmxhY2tsaXN0OnRva2VucyByZWFkOnN0YXRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6c2hpZWxkcyBjcmVhdGU6c2hpZWxkcyBkZWxldGU6c2hpZWxkcyByZWFkOmFub21hbHlfYmxvY2tzIGRlbGV0ZTphbm9tYWx5X2Jsb2NrcyB1cGRhdGU6dHJpZ2dlcnMgcmVhZDp0cmlnZ2VycyByZWFkOmdyYW50cyBkZWxldGU6Z3JhbnRzIHJlYWQ6Z3VhcmRpYW5fZmFjdG9ycyB1cGRhdGU6Z3VhcmRpYW5fZmFjdG9ycyByZWFkOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGRlbGV0ZTpndWFyZGlhbl9lbnJvbGxtZW50cyBjcmVhdGU6Z3VhcmRpYW5fZW5yb2xsbWVudF90aWNrZXRzIHJlYWQ6dXNlcl9pZHBfdG9rZW5zIGNyZWF0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIGRlbGV0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIHJlYWQ6Y3VzdG9tX2RvbWFpbnMgZGVsZXRlOmN1c3RvbV9kb21haW5zIGNyZWF0ZTpjdXN0b21fZG9tYWlucyByZWFkOmVtYWlsX3RlbXBsYXRlcyBjcmVhdGU6ZW1haWxfdGVtcGxhdGVzIHVwZGF0ZTplbWFpbF90ZW1wbGF0ZXMgcmVhZDptZmFfcG9saWNpZXMgdXBkYXRlOm1mYV9wb2xpY2llcyByZWFkOnJvbGVzIGNyZWF0ZTpyb2xlcyBkZWxldGU6cm9sZXMgdXBkYXRlOnJvbGVzIHJlYWQ6cHJvbXB0cyB1cGRhdGU6cHJvbXB0cyByZWFkOmJyYW5kaW5nIHVwZGF0ZTpicmFuZGluZyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.cLF7P1y9ubOmuxz8WZ112DrrYDskZuEhIKwRJAVJgEXhcyFwVGr6aoR1bsyPqMFZG1hocz5E2WjUxd2nZyEKIuU0CGJDZotZqAWmREB9MC4j61IRMfoEPKXCU8F11ZnnP7K-p7u8cUrpzy2Dj6u7IU8oYoMbaHQLuvAdoywBUKsbeYURfCUJxNr59Q308G8DG1rFZR96puQQUNKbwmzsWrBjdbqUTYNWe4OBNTiEowXz472TkOJBfWHI7j6VdKrsWVw9uhqQkMgArmY8p6lUU7iJA5sBgg6ghjSWi0UMXN6WYy52QUQfcokVqphQtEHzZbb10w5JPewshqCTU8g4Cw";
      var fuser = 'https://dev-luqm6uty.auth0.com/api/v2/users/'
    fuser += pageProps.user.user_id
     await fetch(fuser, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': bearer
        },
        credentials: "include"
      })
      .then((response) => response.json() )
      .then( function(jsonr) {
        if(jsonr.status >= 400)
        {
          throw new Error('Bad Response from server: ' + jsonr.status + ' ' + jsonr.statusText)
        }
      
       pageProps.user = jsonr;
      
      })
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
          <title>EcommShare</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/> 
          <link rel='stylesheet' href='../static/css/custom.css'/>
          <script src="https://kit.fontawesome.com/84e43a1b84.js"></script>  
        </Head>
        <div className='wrapper'>
        <Navbar user={this.state.user} />
        <div className='page-body'>
            <Component {...props} className='content'/>
        </div>
        <Footer/>
        </div>
      </NextContainer>
     
    );
  }
}

export default MyApp;