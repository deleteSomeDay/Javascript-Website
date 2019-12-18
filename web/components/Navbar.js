import Link from 'next/link'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'

const Navbar = ({ user }) =>
  {
    const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link href='/'><a className="navbar-brand">EcommShare</a></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href='/about'><a className="nav-link">About</a></Link>
          </li>
          <li className="nav-item">
          </li>
          {user && (
            <>
             <Button className="nav-item nav-link" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Profile
      </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem  onClick={handleClose}><a href='/profile'>Profile</a></MenuItem>
                <MenuItem onClick={handleClose}>Payment</MenuItem>
                <MenuItem onClick={handleClose}><Link href="/logout"><a className="nav-link">Log Out</a></Link></MenuItem>
              </Menu>


              
            </>
          )}
          {!user && (
            <Link href="/login">
              <a className="nav-link">Log In</a>
            </Link>
          )}
        </ul>

        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )};

export default Navbar