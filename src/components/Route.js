import React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import cardType from '../game/cardType';

const Rect = styled.rect`
    fill: white;
    stroke: black;
`;

const Line = styled.line`
    stroke: ${(props) => props.hover ? 'darkGray' : props.color};
    stroke-width: ${(props) => props.double ? '30' : '15'}px;
    cursor: pointer;
`

const Text = styled.text`
    fill: white;
    stroke: black;
    font: bold 20px sans-serif;
`;

const routeColor = {
    [cardType.red]: 'red',
    [cardType.orange]: 'orange',
    [cardType.yellow]: 'yellow',
    [cardType.green]: 'green',
    [cardType.blue]: 'blue',
    [cardType.purple]: 'purple',
    [cardType.black]: 'black',
    [cardType.white]: 'lightGray',
    [cardType.wild]: 'gray',
}

export default class Route extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        }
    }

    handleStop = (e, { x, y }) => {
        console.log('Event: ', e);
        console.log('Data: ', x, y);
    }

    render() {
        // return <Draggable><Rect width={35} height={12} /></Draggable>
        // console.log(this.props)
        const { route, onDragStop, routeIndex } = this.props;
        const { start, end } = route;

        const width = 35;
        const height = 12;

        const wagons = route.wagons.map(({ x, y, r }, wagonIndex) => {
            // console.log(x, y, r)
            const newX = ((start.x + end.x) / 2) - (width / 2);
            const newY = ((start.y + end.y) / 2) - (height / 2);
            const newR = 0;
            return (
                <Draggable
                    defaultPosition={{ x: newX, y: newY }}
                    onStop={(e, data) => { onDragStop(route, routeIndex, wagonIndex, data.x, data.y) }}
                >
                    <Rect width={width}
                        height={height}
                        transform={`translate(${newX},${newY}) rotate(${newR})`}
                    />
                </Draggable>
            );
        })
        return (
            <g>
                {wagons}
            </g>
        );


        // let line;
        // const { route, onClick } = this.props;
        // if (route.double) {
        //     line = <Line
        //         x1={route.start.x}
        //         y1={route.start.y}
        //         x2={route.end.x}
        //         y2={route.end.y}
        //         double={route.double}
        //         hover={this.state.hover}
        //         onMouseEnter={() => { this.setState({ hover: true }) }}
        //         onMouseLeave={() => { this.setState({ hover: false }) }}
        //         onClick={onClick}
        //         color={routeColor[route.type[0]]}
        //     />
        // }
        // else {
        //     line = <Line
        //         x1={route.start.x}
        //         y1={route.start.y}
        //         x2={route.end.x}
        //         y2={route.end.y}
        //         double={route.double}
        //         hover={this.state.hover}
        //         onMouseEnter={() => { this.setState({ hover: true }) }}
        //         onMouseLeave={() => { this.setState({ hover: false }) }}
        //         onClick={onClick}
        //         color={routeColor[route.type]}
        //     />
        // }
        // let amountOfWagons;
        // if (route.double) {
        //     amountOfWagons = route.wagons[0].length;
        // } else {
        //     amountOfWagons = route.wagons.length;
        // }
        // const textX = (route.start.x + route.end.x) / 2
        // const textY = (route.start.y + route.end.y) / 2

        // let locomotivesText = null;
        // if (route.locomotives) {
        //     locomotivesText = ":" + route.locomotives;
        // }
        // return <g>
        //     {line}
        //     <Text x={textX} y={textY}>{amountOfWagons}{locomotivesText}</Text>
        // </g>
    }
}
// transform: `rotate(-30, ${nameCoordinates.x}, ${nameCoordinates.y})`,
