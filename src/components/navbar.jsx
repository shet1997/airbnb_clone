import React, { Component } from 'react'

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="d-flex nav_head">
                    <div>
                        <a href="https://www.airbnb.co.in/">airbnb</a>
                    </div> 
                    <div className="explore">
                        <div className="input-group">
                            <input type="text" className="form-control search_box"/>
                            <span className="input-group-addon">
                                <i className="fa fa-search"></i>
                            </span>
                        </div>
                    </div>                   
                    <div>
                        <a href="https://www.airbnb.co.in/">Become a host</a>
                        <a href="https://www.airbnb.co.in/">web</a>
                        <button>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default NavBar;

