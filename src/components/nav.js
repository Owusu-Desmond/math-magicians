import { NavLink } from 'react-router-dom';

const Nav = () => {
  const navLinks = [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'Calculator',
      path: '/calculator',
    },
    {
      id: 3,
      name: 'Quotes',
      path: '/quotes',
    },
  ];

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        Math Magicians
      </a>
      <ul className="navbar-nav">
        {navLinks.map(({ id, name, path }) => (
          <li key={id} className="nav-item">
            <NavLink className="nav-link" to={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
