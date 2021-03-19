import React, { Component } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from 'react-day-picker/moment';
import moment from 'moment';
import Counters from './counters';


class SearchBox extends Component {
    state = { 
        from: '',
        to: '',
        showGuests: false
    }

    showFromMonth() {
        const { from, to } = this.state;
        if (!from) {
            return;
        }
        if (moment(to).diff(moment(from), 'months') < 2) {
            this.to.getDayPicker().showMonth(from);
        }
    }

    handleFromChange = (from) => {
        this.setState({ from: from });
    }

    handleToChange = (to) => {
        this.setState({ to }, this.showFromMonth);
    }

    showGuests = () => {
        this.setState({
            showGuests: true
        })
    }

    render() { 
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        return ( 
            <React.Fragment>
                <form action="">
                    <div className="d-flex search_box">
                        <div className="wrapper_div">
                            <div>Location</div>
                            <input type="text" name="location_search" placeholder="where are you going?" />
                        </div>
                        <div className="wrapper_div InputFromTo">
                            <div>Check in</div>
                            <DayPickerInput
                                value={from}
                                placeholder="From"
                                format="LL"
                                formatDate={formatDate}
                                parseDate={parseDate}
                                dayPickerProps={{
                                    selectedDays: [from, { from, to }],
                                    disabledDays: { after: to },
                                    toMonth: to,
                                    modifiers,
                                    numberOfMonths: 2,
                                    onDayClick: () => this.to.getInput().focus(),
                                }}
                                onDayChange={this.handleFromChange}
                            />
                        </div>
                        <div className="wrapper_div">
                            <div>Check out</div>
                            <span className="InputFromTo-to">
                                <DayPickerInput
                                    ref={el => (this.to = el)}
                                    value={to}
                                    placeholder="To"
                                    format="LL"
                                    formatDate={formatDate}
                                    parseDate={parseDate}
                                    dayPickerProps={{
                                    selectedDays: [from, { from, to }],
                                    disabledDays: { before: from },
                                    modifiers,
                                    month: from,
                                    fromMonth: from,
                                    numberOfMonths: 2,
                                    }}
                                    onDayChange={this.handleToChange}
                                />
                            </span>
                        </div>
                        <div className="wrapper_div">
                            <div>Guests</div>
                            <input type="text" name="Add guests" placeholder="Add guests" onClick={this.showGuests} />
                        </div>
                    </div>
                    { this.state.showGuests ? <Counters /> : null }
                </form>
            </React.Fragment>
         );
    }
}
 
export default SearchBox;