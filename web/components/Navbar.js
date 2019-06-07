import Link from 'next/link'

const Navbar = () =>
(
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link href='/'><a class="navbar-brand">TutorKwik</a></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link href='tutor-search'><a class="nav-link" >Find a Tutor</a></Link>
      </li>
      <li class="nav-item">
        <Link href=''><a class="nav-link">Features</a></Link>
      </li>
      <li class="nav-item">
        <Link href=""><a class="nav-link" >Pricing</a></Link>
      </li>
      <li class="nav-item">
        <Link href='/about'><a class="nav-link">About</a></Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
);

export default Navbar