import React from 'react';
import styled from 'styled-components';

const WithPaddingTop = styled.div`
  padding: 6rem 0 0 0;
`;

export const ContentPadding = props => <WithPaddingTop {...props} />;
