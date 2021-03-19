import React from 'react';
import places from '../places.json';

function Places() {
    return (
        <div>
            <div className="section-2">
                <div className="wrapper">
                    <div className="row">
                        {places.map(place => (
                            <div className="col-md-3" key={place.name}>
                                <div className="d-flex">
                                    <img src={place.image} alt={place.name} width="64px" height="64px" className="place_arround" />
                                    <div className="places my-auto">
                                        <div>
                                            {place.name}
                                        </div>
                                        <div>
                                            {place.hour}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Places;