import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

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
    // https://yts.mx/api/v2/list_movies.json?limit=3
    try {
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return movieTop3 ? (
    <Container>
      <Text>총점 TOP 3</Text>
      {movieTop3.map(movie => {
        return (
          <MovieContainer
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
