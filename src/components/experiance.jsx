import React from 'react';
import experiance from '../experiance.json';

const Experiance = () => {
    return ( 
        <React.Fragment>
            <div className="section-4">
                <div className="wrapper">
                    <div className="headings">
                        <h3 className="sub-headings text-white">Experience the world</h3>
                        <p className="expnce_sub_title">Unique activities with local experts – in person or online.</p>
                    </div>
                    <div className="stays">
                        <div className="row">
                            {experiance.map(expnce => (
                                <div className="col-md-4" key={expnce.id}> 
                                    <img src={expnce.image} alt={expnce.type} height="520.66"  width="520.66" className="expnce_arround" />
                                    <div><h5 className="expnce_title">{expnce.type}</h5></div>
                                    <div><p className="expnce_sub_title">{expnce.alter}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Experiance;