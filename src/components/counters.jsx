import React, { useState } from 'react';

function Counters() {

    const [adultCount, setAdultCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);

    return (
        <div className="wrapper_count">
            <div className="d-flex counter_wrapper">
                <div>
                    <h6>Adults</h6>
                    <p>Ages 13 or above</p>
                </div>
                <div className="display_count">
                    <button disabled={adultCount === 0} className="counters_sub" onClick={() => setAdultCount(adultCount - 1)}>-</button>
                    {adultCount}
                    <button className="counters_add" onClick={() => setAdultCount(adultCount + 1)}>+</button>
                </div>
            </div>
            <div className="d-flex counter_wrapper">
                <div>
                    <h6>Children</h6>
                    <p>Ages 2 to 12</p>
                </div>
                <div className="display_count">
                    <button disabled={childrenCount === 0} className="counters_sub" onClick={() => setChildrenCount(childrenCount - 1)}>-</button>
                    {childrenCount}
                    <button className="counters_add" onClick={() => setChildrenCount(childrenCount + 1)}>+</button>
                </div>
            </div>
            <div className="d-flex counter_wrapper">
                <div>
                    <h6>Infants</h6>
                    <p>under 2</p>
                </div>
                <div className="display_count">
                    <button disabled={infantCount === 0} className="counters_sub" onClick={() => setInfantCount(infantCount - 1)}>-</button>
                    {infantCount}
                    <button className="counters_add" onClick={() => setInfantCount(infantCount + 1)}>+</button>
                </div>
            </div>
            <div className="d-flex counter_wrapper">
                <div>
                    <h6>Pets</h6>
                    <p>Are you bringing a pet?</p>
                </div>
                <div className="display_count">                  
                   
                </div>
            </div>           
        </div>
    );
}

export default Counters;