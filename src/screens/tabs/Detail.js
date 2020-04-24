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

export default ({navigation, route}) => {
  const {movie} = route.params;
  return (
    <Container>
      <Text>Detail</Text>
      <MovieContainer>
        <Image source={{uri: movie.small_cover_image}} />
        <Text>{movie.title}</Text>
        <Text>{movie.rating}</Text>
      </MovieContainer>
    </Container>
  );
};
