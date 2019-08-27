import React from 'react'
import Link from 'next/link'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles, styled } from '@material-ui/core/styles';

const BigAvatar = styled(Avatar)({
    margin: 10,
    width: 60,
    height: 1000,
});

class Profile extends React.Component {
  
  render()
  {
      return(
      <div>
        {!this.props.user.email_verified && (<div className="alert alert-warning" role="alert">
         You haven't verified your account <Link href='/send_verify'><a>press this link to receive your verification email</a></Link>
        </div> )}
        
        
        <h2>
          <BigAvatar src={this.props.user.picture} alt={this.props.user.displayName} /> Hello, {this.props.user.given_name} {this.props.user.family_name}
        </h2>
        <Link href="/profile_edit">
          <input className="btn btn-dark" type='button' value='Edit profile'  />
        </Link>
        <p>This is what we know about you:</p>
        <ul>
            <li>First Name: {this.props.user.given_name}</li>
            <li>Last Name: {this.props.user.family_name}</li>
            <li>Email: {this.props.user.email}</li>
            <li>Description: {this.props.user.user_metadata}</li>
        </ul>
        
      </div>   
      )
  }
}

export default Profile;
