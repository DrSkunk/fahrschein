import React from 'react';
import styled from 'styled-components';

const Rect = styled.rect`
    fill: white;
    stroke: black;
`;

const Line = styled.line`
    stroke: ${(props) => props.hover ? 'red' : 'black'};
    stroke-width: ${(props) => props.double ? '30' : '15'}px;
`

export default class Route extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        }
    }

    render() {
        // console.log(this.props)
        // const { route } = this.props;
        // const wagons = route.wagons.map(({ x, y, r }) => {
        //     console.log(x, y, r)
        //     return <Rect width={35} height={12} transform={`translate(${x},${y}) rotate(${r})`} />
        // })
        // return (
        //     <g>
        //         {wagons}
        //     </g>
        // );

        const { route, onClick } = this.props;
        return <Line
            x1={route.start.x}
            y1={route.start.y}
            x2={route.end.x}
            y2={route.end.y}
            double={route.double}
            hover={this.state.hover}
            onMouseEnter={() => { this.setState({ hover: true }) }}
            onMouseLeave={() => { this.setState({ hover: false }) }}
            onClick={onClick}
        />
    }
}
// transform: `rotate(-30, ${nameCoordinates.x}, ${nameCoordinates.y})`,
