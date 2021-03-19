import React from 'react';
import stays from '../stays.json';

const Stays = () => {
    return ( 
        <React.Fragment>
            <div className="section-3">
                <div className="wrapper">
                    <div><h3 className="sub-headings">Live anywhere</h3></div>
                    <div className="stays">
                        <div className="row no-gutters">
                            {stays.map(stay => (
                                <div className="col-md-3" key={stay.type}>
                                    <img src={stay.image} alt={stay.alter} width="386.5" height="386.5" className="expnce_arround" />
                                    <h5 className="title">{stay.type}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Stays;