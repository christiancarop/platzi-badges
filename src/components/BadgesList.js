import React from 'react';

import './styles/BadgesList.css';
import { Link } from 'react-router-dom';
import Gravatar from '../components/Gravatar';

class BadgesListItem extends React.Component {
  render() {

    return (
      <div className="BadgesListItem">
       {/*  <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        /> */}
        
        <Gravatar
            className="BadgesListItem__avatar"
            email={this.props.badge.email}
            alt="Avatar"
          />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}


function useSearchBadges(badges){
  /**Creo mi HOOK para el buscador*/
  const [ query, setQuery ] = React.useState('');

  /**Creo mi Hook para los filtros */
  const [ filteredBadges, setFilteredBadges ] = React.useState(badges);

  /**Filtramos por nombre, este solución es costosa cuando sean miles de badges
   * es un cuello de botella para nuestra aplicación, para eso usamos otro hook usando useMemo
  */
  React.useMemo(() => {
    const result = badges.filter(badge =>{
    return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());

  })
  setFilteredBadges(result);
  }, [ badges, query ]); /**El segundo argumento de useMemo es una lista */

  return { query, setQuery, filteredBadges }

}

/* class BadgesList extends React.Component los hooks funcionan dentro de componentes funcionales
entonces cambiamos la clase por function y le agregamos props*/

function BadgesList (props) {
  /**render() { Por ser hook en elemento funcional no tenemos método render */
  /**Los this.props también los suprimimos ya que no corresponden a las clases */  
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  
    /* if(badges.length === 0){ */
    if(filteredBadges.length === 0){
      return(
        <div>
          <div className="form-group">
            <label>Filter Badges</label>
            <input type="text" className="form-control"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            
            ></input>
        </div>
          <h3>No encontramos ningún badge!!</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge!
            </Link>
          </div>
      )
    }
    return (
      <div className="BadgesList">
        <div className="form-group">
          <label>Filter Badges</label>
          <input type="text" className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          
          ></input>
        </div>
        <ul className="list-unstyled">
            {filteredBadges.map(badge => {
            return (
              <li key={badge.id}>
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );

}

export default BadgesList;
