import React from 'react'
import Link from 'next/link'
import Avatar from '@material-ui/core/Avatar'
import Container from '@material-ui/core/Container'
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: '10vh',
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
});

const Profile = (props) => {


  const classes = useStyles();

  return (
    <div>
      {!props.user.email_verified && (<div className="alert alert-warning" role="alert">
        You haven't verified your account <Link href='/send_verify'><a>press this link to receive your verification email</a></Link>
      </div>)}


      <Container>
        <Avatar  src={props.user.picture} alt={props.user.displayName} className={classes.bigAvatar} /> 
        <h1>Hello, {props.user.given_name} {props.user.family_name}</h1>

        <Link href="/profile_edit">
          <input className="btn btn-secondary" type='button' value='Edit profile' />
        </Link>
        <p>This is what we know about you:</p>
        <ul>
          <li>First Name: {props.user.given_name}</li>
          <li>Last Name: {props.user.family_name}</li>
          <li>Email: {props.user.email}</li>
          <li>Description: {props.user.user_metadata}</li>
        </ul>
      </Container>


    </div>
  )
}

export default Profile;
