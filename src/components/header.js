// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const toggleThemeModes = event => {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light")
  } else {
    document.documentElement.setAttribute("data-theme", "dark")
  }
}

function movethePage(event, type) {
  // const selectedEle = document.getElementById(type)
  // console.log(selectedEle)
  console.log(event)
}

const showSmallDeviceDropDown = event => {
  const x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

const Header = ({ siteTitle }) => (
  <header className="header-container">
    <div className="topnav" id="myTopnav">
      <Link to="#home" activeClassName="active">
        Home
      </Link>
      <Link to="#about" activeClassName="active">
        About
      </Link>
      <Link to="#experience" activeClassName="active">
        Experience
      </Link>

      <Link to="#contact" activeClassName="active">
        Contact
      </Link>

      <a onClick={toggleThemeModes} className="float-right">
        Toggle
      </a>
      <a className="icon" onClick={showSmallDeviceDropDown}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
