import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Error() {
  return (
    <div className="error">
      <div className="error-number">404</div>
      <span className="notFound">
        Oups ! La page que vous demandez n'existe pas.
      </span>
      <NavLink to="/" className="return">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
}
