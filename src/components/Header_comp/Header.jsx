
import "./header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <Link to="/"><img className="header_icon"  src="https://www.designmantic.com/blog/wp-content/uploads/2016/07/Netflix-Revamps-Logo.jpg" alt="" /></Link>
        <Link to="/movie/popular"><span>Popular</span></Link>
        <Link to="/movie/top_rated"><span>Top Rated</span></Link>
        <Link to="/movie/upcoming"><span>Upcoming</span></Link>
      </div>
    </div>
  );
}

export default Header;
