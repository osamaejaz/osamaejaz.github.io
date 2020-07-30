// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const toggleThemeModes = event => {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light")
  } else {
    document.documentElement.setAttribute("data-theme", "dark")
  }
}

const Header = ({ siteTitle }) => (
  <header className="row">
    <button
      type="button"
      className="btn btn-primary"
      onClick={toggleThemeModes}
    >
      Single toggle
    </button>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
