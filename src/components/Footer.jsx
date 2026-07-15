import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="customer-care">
          <h4>24/7 CUSTOMER CARE</h4>
          <p>Support available anytime</p>
        </div>

        <div className="resend-booking">
          <h4>RESEND BOOKING CONFIRMATION</h4>
          <p>Email your booking details</p>
        </div>

        <div className="subscribe">
          <h4>SUBSCRIBE TO NEWSLETTER</h4>
          <p>Stay updated with latest movies</p>
        </div>
      </div>

      <div className="footer-links">

        <div>
          <h3>Movies</h3>
          <a href="/">Latest Movies</a>
          <a href="/">Coming Soon</a>
          <a href="/">Top Rated</a>
        </div>

        <div>
          <h3>Events</h3>
          <a href="/">Sports</a>
          <a href="/">Concerts</a>
          <a href="/">Comedy Shows</a>
        </div>

        <div>
          <h3>Company</h3>
          <a href="/">About Us</a>
          <a href="/">Contact</a>
          <a href="/">Privacy Policy</a>
        </div>

      </div>

      <div className="social-icons">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
        <FaLinkedinIn />
      </div>

      <div className="copyright">
        © 2026 BookMyShow Clone. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;