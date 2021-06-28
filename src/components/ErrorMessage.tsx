import * as React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
    color: #D8000C;
    background-color: #FFBABA;
`;


interface ITErrorMessageProps {
    errorFlag: boolean,
    errorMessage: SVGStringList,
    clearError: any
}

function ErrorMessage(prop: ITErrorMessageProps) {
  const { errorFlag, errorMessage, clearError } = prop;

  return (
    errorFlag ? <ErrorContainer onClick={clearError}>{errorMessage}</ErrorContainer> : null
  )
}

export default ErrorMessage;
