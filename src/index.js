import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBHsLIWHT8jMD6FCVaeh8P0PKGAc-s3iRQ';

YTSearch({key: API_KEY, term: 'game of throne'}, function(data) {
    console.log(data);
});

// Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
