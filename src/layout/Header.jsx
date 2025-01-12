const Header = () => {
    return (
      <nav>
        <div className=" headerPadd nav-wrapper teal lighten-2">
          <a href="#" className="brand-logo">
            React Movies
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#">Repo</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  export { Header };
  