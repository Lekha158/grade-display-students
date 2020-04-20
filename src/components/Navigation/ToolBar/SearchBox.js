import React, { Component } from 'react';
import './SearchBox.scss';

class Toolbar extends Component {

    render() {
        const { filterText, onFilter } = this.props;

        return (
            <header className='headerStyle'>
                <div className='search'>
                  <h4> GRADES </h4>  
                 <input type="text"
                        className='searchbox'
                        placeholder="Type to filter..."
                        value={filterText}
                        onChange={onFilter}
                    />
                </div>

            </header>
        );
    }

}

export default Toolbar;