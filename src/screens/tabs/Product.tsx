import React, {useEffect, useState} from 'react';
import {} from 'react-native';
import styled from 'styled-components';
import {Movie} from '../../interface';

const Container = styled.View`
  flex: 1;
`;

const MovieContainer = styled.TouchableOpacity``;

const Text = styled.Text``;

const Image = styled.Image`
  width: 100px;
  height: 100px;
`;

export default ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [movieTop3, setMovieTop3] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://yts.mx/api/v2/list_movies.json?limit=3',
      );
      const responseJson = await response.json();
      const {
        data: {movies},
      } = responseJson;
      console.log('movies', movies);
      setMovieTop3(movies);
    } catch (error) {
      //
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // return !loading ? (
  return movieTop3 ? (
    <Container>
      <Text>총점 TOP 3</Text>
      {movieTop3.map((movie: Movie) => {
        return (
          <MovieContainer
            key={movie.id}
            onPress={() => navigation.navigate('Detail', {movie})}>
            <Image source={{uri: movie.small_cover_image}} />
            <Text>{movie.title}</Text>
            <Text>{movie.rating}</Text>
          </MovieContainer>
        );
      })}
    </Container>
  ) : (
    <Text>Loading...</Text>
  );
};
