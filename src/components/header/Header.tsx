import { menu } from "pages/menu";
import { Link } from "wouter";
import "./styles/header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <section className="header-section logo">
          <h1>Logo</h1>
        </section>
        <section className="header-section links">
          <nav>
            <ul className="nav-list-links">
              {menu.map((route, index) => (
                <li className="nav-link" key={index}>
                  <Link href={`${route.link}`}>
                    {" "}
                    {route.name.toUpperCase()}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </div>
    </header>
  );
};

export default Header;
