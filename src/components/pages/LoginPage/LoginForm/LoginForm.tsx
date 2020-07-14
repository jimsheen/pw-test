import React, { useState } from 'react';
import {
  Flex,
  Box,
  Button
} from 'rebass';
import {
  Label,
  Input,
} from '@rebass/forms';

type loginFormDataType = {
  label: string,
  placeholder: string,
  type: string,
  name: string,
  value: null | string,
};

type LoginFormTypes = {
  onSubmit: (formValues: loginFormDataType | {}) => void,
};

const formData = [{
  label: 'Email',
  placeholder: 'john@example.com',
  type: 'email',
  name: 'email',
}, {
  label: 'Password',
  placeholder: 'Password',
  type: 'password',
  name: 'password',
}];

const LoginForm: React.FC < LoginFormTypes > = ({ onSubmit }) => {
  const defaultFormValues = formData.reduce((acc, item) => ({
    ...acc,
    [item.name]: null,
  }), {});
  const [formValues, setFormValues] = useState(defaultFormValues);

  const handleInputChange = (value: string, inputName: string) => {
    setFormValues((prevState: any) => ({
      ...prevState,
      [inputName]: value
    }))
  };

  const handleSubmitClick = () => onSubmit(formValues);

  const handleSubmit = (event: React.FormEvent < HTMLElement > ) => {
    event.preventDefault();
    onSubmit(formValues);
  }

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100%"

    >
      <Box
        p={20}
        width={[1,1/2]}
        maxWidth={400}
        backgroundColor="white"
        sx={{
          border: "1px solid lightgray",
        }}
        as="form" 
        onSubmit={handleSubmit}
      >
        {formData.map((item) => (
          <Box mb={3} key={item.name}>
            <Label mb={1} htmlFor={item.name}>{item.label}</Label>
            <Input
              name={item.name}
              type={item.type}
              placeholder={item.placeholder}
              onChange={(e) => handleInputChange(e.target.value, item.name)}
            />
          </Box>
         ))}
        <Button onClick={handleSubmitClick}>Login</Button>
      </Box>
    </Flex>
  )
};

export default LoginForm;
