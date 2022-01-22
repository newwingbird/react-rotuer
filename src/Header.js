import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <div>
      <h1>This is Header </h1>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
}
