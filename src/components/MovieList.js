import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import MovieDetail from './MovieDetail';

class MovieList extends Component {
    state = { movies: [] };

    componentWillMount() {
        console.log('Will Mount');

        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=2a689d753b3b3289c0543bdc74fd8761&language=en-US&page=1')
            .then((response) => {
                this.setState({ movies: response.data.results });
            });
    }

    renderMovie() {
        if (this.state.movies.length > 0) {
            return this.state.movies.map((movie, index) => 
                <MovieDetail key={index} movie={movie} />
            );
        }
    }

    render() {
        return (
            <ScrollView>
                {this.renderMovie()} 
            </ScrollView>
        );
    }
}

export default MovieList;
