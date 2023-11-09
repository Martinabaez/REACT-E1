import React from 'react'
import { StyledButton } from './styles';

export const Button = ({children, disabled, secondary,}) => {
  return (
    <StyledButton disabled={disabled} secondary={secondary}
     >{children}
     </StyledButton>
  );
};
