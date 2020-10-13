import React from 'react';
import styled from 'styled-components';

const Circle = styled.circle`
  fill: white;
  stroke: black;
`;

export default class Station extends React.Component {
  render() {
    // console.log(this.props)
    const { x, y, name } = this.props;
    return (
      <g transform={`translate(${x},${y})`}>
        <Circle r={7} />
        <text>{name}</text>
      </g>
    );
  }
}
// transform: `rotate(-30, ${nameCoordinates.x}, ${nameCoordinates.y})`,
