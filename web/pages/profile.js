import styled from "styled-components";
import React from 'react'

const Picture = styled.img`
border-radius: 50%;
border: 3px solid white;
width: 100px;
`;

const Profile = ({user}) => 
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

export default Profile;
