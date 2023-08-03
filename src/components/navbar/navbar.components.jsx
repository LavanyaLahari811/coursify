import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/">CompanyName</a>
      <div className="infos">
        <a href="/">Discover</a>
        <a href="/">Find Jobs</a>
        <a href="/">Hire Talent</a>
        <a id="login" href="/">Login</a>
        <a id="signup" href="/">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
