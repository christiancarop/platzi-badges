import React from 'react';
import './styles/NotFound.css';
import conNotFound from '../images/grumosa_404.png';
import { Link } from 'react-router-dom';

function NotFound() {
  return (

    <div className="BadgesNF__hero">
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-6 align-self-center">
            <h2 className="text-white">404: Not Found</h2>
              <Link className="btn btn-primary" to="/">
                 Home
              </Link>
            </div>
            <div className="col-6 align-self-center">
            <img
                src={conNotFound}
                alt="Not Found"
                className="img-fluid mb-2"
              />
            </div>
        </div>
      </div>
    </div>

  )
}

export default NotFound;
