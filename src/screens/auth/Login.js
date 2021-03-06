import React, {useState} from 'react';
import styled from 'styled-components';
import {useInput} from '../../hook';
import {Alert} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../../actions';
import {setIsLoggedin} from '../../store';

const Container = styled.View`
  flex: 0.8;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const TextInput = styled.TextInput`
  width: 300px;
  height: 30px;
`;

const Button = styled.TouchableOpacity`
  width: 350px;
  height: 50px;
  border-radius: 20px;
  background-color: ${({bg}) => bg || 'grey'};
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Login = ({setIsLoggedin}) => {
  const [loading, setLoading] = useState(false);
  const {value: emailVal, onChangeText: onChangeEmail} = useInput('');
  const {value: pwVal, onChangeText: onChangePw} = useInput('');

  const handleLogin = async () => {
    // TODO:
    setIsLoggedin(true);
  };

  return (
    <Container>
      <TextInput
        placeholder="Email"
        value={emailVal}
        onChangeText={onChangeEmail}
      />
      <TextInput placeholder="Pw" value={pwVal} onChangeText={onChangePw} />
      <Button
        bg={loading ? 'grey' : 'lightblue'}
        disabled={loading}
        onPress={handleLogin}>
        <Text>Login</Text>
      </Button>
      {/* <Button bg="yellow">
        <Text>Kakao</Text>
      </Button> */}
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  // TODO:
  setIsLoggedin: isLoggedin => dispatch(setIsLoggedin(isLoggedin)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Login);
