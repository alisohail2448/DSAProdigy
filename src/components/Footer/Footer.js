import React from "react";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import "./footer.css";
import {
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { AiFillGithub } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

function Footer({ dark, setDark }) {
  return (
    <div>
      <footer
        className="footer d-flex justify-content-center align-items-center"
        style={{
          height:'30px',
          backgroundColor: dark ? "#393E46" : "",
          backgroundImage: dark
            ? "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
            : "",
        }}
      >
        <div className="d-flex bd-highlight main d-flex justify-content-evenly align-items-center" style={{ width: '20%', height: '100%' }}>
          <div className="p-2 bd-highlight d-flex justify-content-center align-items-center">
            <a
              href="https://github.com/gamaster616/DSA.FAN_DSA_tracker"
              style={{ textDecoration: "none" }}
            >
              <h4
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "600",
                  margin: '0px'
                }}
                className="d-flex justify-content-center align-items-center"
              >
                <AiFillGithub style={{ width: "15px", marginRight: '4px' }} />
                Github
              </h4>
            </a>
          </div>
          <div className="ml-auto p-2 bd-highlight footer-toggle">
            <h4 style={{ margin: "0px" }} className="d-flex justify-content-center align-items-center">
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
                className="d-flex justify-content-center align-items-center"
              >
                <BiUserCircle style={{ fontSize: "16px", marginRight: '2px' }} />
                About 
              </Link>
            </h4>
          </div>
          <div className="ml-auto p-2 bd-highlight footer-toggle">
          <button
                onClick={() => {
                  setDark(!dark);
                  window.localStorage["isDark"] = !dark;
                }}
                style={{
                  cursor: "pointer",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                }}
                className="d-flex justify-content-center align-items-center"
              >
                {dark ? (
                  <SunIcon style={{ width: "22px", color: 'white' }} />
                ) : (
                    <MoonIcon style={{ width: "20px", color: 'white' }} />
                )}
              </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
