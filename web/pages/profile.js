import styled from "styled-components";
import React from 'react'
import Link from 'next/link'

const Picture = styled.img`
border-radius: 50%;
border: 3px solid white;
width: 100px;
`;

const Profile = ({user}) => 
(
      <div>
        <div class="alert alert-success" role="alert">
          <Link href='/tutor_signup'>
          Sign up to be a Tutor Today! Click on this link to apply
          </Link>
        </div>
        <div class="alert alert-warning" role="alert">
         You haven't verified your account <Link href='/send_verify'>press this link to receive your verification email</Link>
        </div>
        
        <h2>
          <Picture src={user.picture} alt={user.displayName} /> Hello, {user.displayName}
        </h2>
        <Link href="/profile_edit">
          <input type='button' value='Edit profile'  />
        </Link>
        <p>This is what we know about you:</p>
        <ul>
          { Object.keys(user).map(key => (
            <li key={key}>{key}: {user[key].toString()}</li>
          ))}
        </ul>
        
      </div>   
  
);

export default Profile;
