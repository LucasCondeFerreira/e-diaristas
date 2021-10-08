import React from 'react';
import { SafeEnvironmentContainer } from './SafeEnvironment.style';
import { Container } from '@mui/material/';

const SafeEnvironment = () => {
  return (
  <SafeEnvironmentContainer>
    <Container>
      Ambiente seguro
    </Container>
  </SafeEnvironmentContainer>
  );
};

export default SafeEnvironment;