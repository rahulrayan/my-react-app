import React from "react";
//import PropTypes from 'prop-types';



export default function Navbar(props) {

  const [mode, setMode] = React.useState(props.mode);

  const handleModes = () => {

    if (mode === 'light') {
      setMode('dark');
     document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
    } else {
      setMode('light');
     document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    }
  }


  return (
    <nav className={`navbar navbar-expand-lg ${mode === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="form-check form-switch">
          <input className="form-check-input" onClick={handleModes} type="checkbox" role="switch" id="switchCheckDefault"/>
          <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark mode</label>
     </div>
      </div>
    </nav>
  );
}


