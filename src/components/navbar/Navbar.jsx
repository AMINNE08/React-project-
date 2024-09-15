import "./Navbar.css"
import { NavLink } from "react-router-dom"
export default function Navbar() {
  return (
    <div>
        <nav>
        <ul>
        <NavLink to={"/home"} className="item-navigation">home</NavLink>
        <NavLink to={"/about"} className="item-navigation">AboutUs</NavLink>
        <NavLink to={"/services"} className="item-navigation">Services</NavLink>
      </ul>
        </nav>
    </div>
  )
}
