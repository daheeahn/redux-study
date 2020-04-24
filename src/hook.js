import React, {useState} from 'react';

export const useInput = initialVal => {
  const [value, setValue] = useState(initialVal);
  const onChangeText = value => {
    setValue(value);
  };
  return {value, setValue, onChangeText};
};
