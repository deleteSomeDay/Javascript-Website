import styled from "styled-components";
import React from 'react'
import Link from 'next/link'

const Picture = styled.img`
border-radius: 50%;
border: 3px solid white;
width: 100px;
`;

class Profile extends React.Component
{
  render()
  {
      return(
      <div>
        <div className="alert alert-success" role="alert">
          <Link href='/tutor_signup'>
          <a>Sign up to be a Tutor Today! Click on this link to apply</a>
          </Link>
        </div>
        {!this.props.user.email_verified && (<div className="alert alert-warning" role="alert">
         You haven't verified your account <Link href='/send_verify'><a>press this link to receive your verification email</a></Link>
        </div> )}
        
        
        <h2>
          <Picture src={this.props.user.picture} alt={this.props.user.displayName} /> Hello, {this.props.user.displayName}
        </h2>
        <Link href="/profile_edit">
          <input type='button' value='Edit profile'  />
        </Link>
        <p>This is what we know about you:</p>
        <ul>
          { Object.keys(this.props.user).map(key => (
            <li key={key}>{key}: {this.props.user[key].toString()}</li>
          ))}
        </ul>
        
      </div>   
      )
  }
}

export default Profile;
