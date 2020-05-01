import React, {useEffect, useState} from 'react';
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

export default ({navigation, route}) => {
  console.log(route.params);
  const movie: Movie = route.params.movie;

  return (
    <Container>
      <Text>Detail</Text>
      <MovieContainer>
        <Image source={{uri: ''}} />
        <Text>{movie.title}</Text>
        <Text>{movie.rating}</Text>
      </MovieContainer>
    </Container>
  );
};
