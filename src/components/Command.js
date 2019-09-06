import styled from '@emotion/styled';
import Hidden from '@material-ui/core/Hidden';
import React from 'react';
import Monospace from './Monospace';

const CommandContainer = styled.div`
  position: relative;
`;

const CommandText = styled(Monospace)`
  ::before {
    position: absolute;
    left: calc(-1ex - 1vw);
    content: '>';
  }
`;

const CommandDesktop = props => (
  <CommandContainer>
    <CommandText {...props} />
  </CommandContainer>
);

const CommandMobile = styled(Monospace)`
  ::before {
    content: '>';
    margin-right: 0.3ex;
  }
`;

const Command = props => (
  <>
    <Hidden implementation="css" lgUp>
      <CommandMobile {...props} />
    </Hidden>
    <Hidden implementation="css" mdDown>
      <CommandDesktop {...props} />
    </Hidden>
  </>
);

export default Command;
