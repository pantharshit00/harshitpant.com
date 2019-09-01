import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

const FlexContainer = createGlobalStyle`
.flex-container{
  display: flex;
  align-items: center; /* This will vertically center them */
  justify-content: center; /* This will horizontally center them*/
  width: 300px;
  height: 300px;
  background: blue;
}

  .flex-item {
    height: 50%;
    width: 50%;
    background: red;
  }
`;

const ExampleFlexCenter = () => (
  <div className="flex-container">
    <FlexContainer />
    <div className="flex-item" />
  </div>
);

export default ExampleFlexCenter;
