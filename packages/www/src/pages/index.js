import React from 'react';
import { Container, Heading, Button, Flex } from 'theme-ui';
import netlifyIdentity from 'netlify-identity-widget';
netlifyIdentity.init({})
export default props => (
  <Container>
    <Flex sx={{ flexDirection: "column", padding: 3 }}>
    <Heading as="h1">Extend your Skills</Heading>
    <Button
      sx={{ marginTop: 2 }}
      onClick={() => {
        // netlifyIdentity.open();
        alert("click");
      }}
    >Log In</Button>
    </Flex>
  </Container>
)