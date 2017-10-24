import React from 'react';
import { View, Text, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const MovieDetail = (props) => {
    const { headerContentStyle } = styles;
    const prefixURI = 'https://image.tmdb.org/t/p/w500';

    return (
        <View>
            <Card>
                <CardSection>
                    <View>
                        <Image
                            style={{ width: 150, height: 75 }} 
                            source={{ uri: prefixURI + props.movie.backdrop_path }}
                        />
                    </View>

                    <View style={headerContentStyle}>
                        <Text>{props.movie.title}</Text>
                        <Text>{props.movie.release_date}</Text>
                        <Text>{props.movie.vote_average}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image 
                        style={{ height: 500, width: '100%', alignItems: 'center' }}
                        source={{ uri: prefixURI + props.movie.poster_path }}
                    />
                </CardSection>

                <CardSection>
                    <Text style={{ padding: 10 }}>{props.movie.overview}</Text>
                </CardSection>

            </Card>
        </View>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 10
    }
};

export default MovieDetail;
