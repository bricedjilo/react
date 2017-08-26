import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: 'Starting value' };
    }
    render() {
        return (
            <div className="form-group">
                <input type="text" className="form-control"
                    value={this.state.term}
                    onChange={event => this.setState({term: event.target.value})} />
                Value of the input: <output>{this.state.term}</output>
            </div>
        );
    }
}

export default SearchBar;
