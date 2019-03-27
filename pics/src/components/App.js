import React from 'react'; 
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {
    state = {
        images: []
    }
    onSearchSubmit = async term => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID bf13ec5984481b1ebb56b855db2d79caf1c2ee28be4ea96d8d7b7b789a88be69'
            } 
        });
        this.setState({images: response.data.results})
    }
   

    render () {
    return (
        <div className='ui container' style={{marginTop: '20px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            Found {this.state.images.length} images
        </div>) 
    }

}

export default App;