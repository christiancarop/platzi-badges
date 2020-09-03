import React from 'react';
import { Link } from 'react-router-dom'

import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function useIncreaseCount(max){
    const [ count, setCount ] = React.useState(0); //este siempre lo inicializamos en cero

    if(count > max){
        setCount(0);
    }

    return [ count, setCount ];
}

function BadgeDetails(props){
    /* const [ count, setCount ] = React.useState(0); Usando el hook nativo*/
    const [ count, setCount ] = useIncreaseCount(4); /*Usando el Hook Custom*/
    const badge = props.badge;

    return(
        <div>
        <div className="BadgeDetails__hero">
            <div className="container">
                <div className="row">
                <div className="col-6">
                   <img src={confLogo} alt="Logo de la Conferencia" /> 
                </div>
                <div className="col-6 BadgeDetil__hero-attendant-name">
                    <h1>{badge.firstName} {badge.LastName}</h1>
                </div>
                </div>
            </div>
        </div>
    
    <div className="container">
        <div className="row">
            <div className="col">
                <Badge firstName={badge.firstName} 
                       LastName={badge.LastName} 
                       email={badge.email} 
                       twitter={badge.twitter}
                       jobtitle={badge.jobtitle}
                />
            </div>
            <div className="col">
                <h2>Actions</h2>
                <button onClick={() => {
                    setCount(count + 1)
                }} className="btn btn-primary mb-4">
                    Increase Count: {count}
                </button>
                
                <div><Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link></div> 
                
                <div><button onClick={props.onOpenModal} className="btn btn-danger">Delete</button></div>
                
                <DeleteBadgeModal 
                    isOpen={props.modalIsOpen} 
                    onClose={props.onCloseModal} 
                    onDeleteBadge={props.onDeleteBadge}
                />
            </div>
        </div>
    </div>
    
    </div>
    )

}

export default BadgeDetails;