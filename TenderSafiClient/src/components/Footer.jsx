import React from "react";

export default function Footer() {
  return (
    <section className="footer py-24">
      <div className="footer_items">
        <div className="social_icons">
          <a href="">
            <i className="fab fa-facebook"></i>{" "}
          </a>
          <a href="">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="footer_about footer_col">
          <h1 className="font-jakarta font-bold">About Us</h1>

          <ul className="space-y-4" >
            <li >
              <a className="font-josefin" href="/">Home</a>
            </li>
            <li>
              <a  className="font-josefin"  href="">Features</a>
            </li>
            <li>
              <a className="font-josefin"  href="">Contact Us</a>
            </li>
            <li>
              <a className="font-josefin"  href="/AvailableTenders">Get Started</a>
            </li>
          </ul>
        </div>

        <div className="footer_community footer_col">
          <h1 className="font-jakarta font-bold">Our Community</h1>

          <ul className="space-y-4">
            <li>
              <a className="font-josefin"  href="">Discord</a>
            </li>
            <li>
              <a className="font-josefin"  href="">Telegram</a>
            </li>
            <li>
              <a className="font-josefin"  href="">Twitter</a>
            </li>
          </ul>
        </div>

        <div className="footer_contact footer_col">
          <h1 className="font-jakarta font-bold">Contact Us</h1>

          <ul className="space-y-4">
            <li>
              <a className="font-josefin"  href="">Product</a>
            </li>
            <li>
              <a className="font-josefin"  href="">Pricing</a>
            </li>
            <li>
              <a className="font-josefin"  href="">Template</a>
            </li>
            <li>
              <a className="font-josefin"  href="">Find Job</a>
            </li>
          </ul>
        </div>
      </div>

      
    </section>
  );
}
