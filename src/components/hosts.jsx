import React from 'react';
import hosts from '../hosts.json';

const Hosts = () => {
    return ( 
        <React.Fragment>
            <div className="section-5">
                <div>
                    <h3 className="sub-headings">Join millions of hosts on Airbnb</h3>
                </div>
                <div className="row no-gutters">
                    {
                        hosts.map(host => (
                            <div className="col-md-4" key={host.id}>
                                <img src={host.image} alt={host.alter} width="520.66" height="347.09" className="expnce_arround" />
                                <h5 className="title">{host.type}</h5 >
                            </div>
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Hosts;