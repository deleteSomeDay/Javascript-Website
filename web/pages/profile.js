import styled from "styled-components";
import React from 'react'
import fetch from 'isomorphic-fetch'

const Picture = styled.img`
border-radius: 50%;
border: 3px solid white;
width: 100px;
`;


class Profile extends React.Component {
  static async getInitialProps({user})
  {
  
    var fuser = '/api/v2/users/'
    fuser += user.id
      fetch(fuser)
      .then( response => {
        console.log(response)
      })
  }

  constructor()
  {
    super(props)
    this.state = {
      user: props.pageProps.user
    };
  }

  render() 
  {
    return 
    (
      <div>
       
        <h2>
          <Picture src={user.picture} alt={user.displayName} /> Hello, {user.displayName}
        </h2>
        
        <p>This is what we know about you:</p>
        <ul>
          { Object.keys(user).map(key => (
            <li key={key}>{key}: {user[key].toString()}</li>
          ))}
        </ul>
        
      </div>
    );
  }
  
}

  export default Profile;