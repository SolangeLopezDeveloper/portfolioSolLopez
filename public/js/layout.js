import React from "react"
import { DarkModeToggle } from "gatsby-plugin-dark-mode"

const Layout = ({ children }) => {
  return (
    <div>
      <DarkModeToggle />
      {children}
    </div>
  )
}

export default Layout