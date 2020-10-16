import React from 'react';
import styled from 'styled-components';
import Station from './Station';
import stations from '../game/stations';
// import stations from '../game/oldStations';
import routes from '../game/routes';
import Route from './Route';
import cardType from '../game/cardType';

import europeMap from '../euMap.jpg';

const Map = styled.div`
  background-image: url(${europeMap});
  background-repeat: no-repeat;
  background-size: 1000px 645px;
`

export class FahrscheinBoard extends React.Component {
  state = {
    selectedRoute: null,
    routes
  }

  drawOpenCard = (index) => {
    this.props.moves.drawOpenCard(index);
  };

  drawDeckCard = () => {
    this.props.moves.drawDeckCard();
  };

  onDragStop = (route, routeIndex, wagonIndex, x, y) => {
    console.log(wagonIndex, x, y)
    this.setState(state => (
      {
        routes: [
          ...state.routes.slice(0, routeIndex),
          {
            ...route,
            wagons: [
              ...route.wagons.slice(0, wagonIndex),
              {
                x,
                y,
                r: 90
              },
              ...route.wagons.slice(wagonIndex + 1, route.wagons.length),
            ]
          },
          ...state.routes.slice(routeIndex + 1, state.routes.length),
        ]
      })
    )
  }

  render() {
    console.log("routes", this.state.routes, this.state.routes.length)
    const { G, ctx } = this.props;
    const openDeck = G.openDeck.map((card, i) => (
      <button
        key={'opencard' + i}
        onClick={() => this.drawOpenCard(i)}
        style={{
          backgroundColor: card,
        }}
      >
        {card}
      </button>
    ));

    const stationElements = Object.values(stations).map((station, i) => (
      <Station
        key={"station" + i}
        x={station.x}
        y={station.y}
      />
    ));

    const routeElements = routes.map((route, i) => {
      return <Route
        key={"route" + i}
        route={route}
        onClick={() => { this.setState({ selectedRoute: route }) }}
        onDragStop={this.onDragStop}
        routeIndex={i}
      />
    });

    const hand = G.players[0].cards.map((card, i) => (
      <span key={card + i}>{card}</span>
    ));


    const { selectedRoute } = this.state;
    let modal = null;
    if (selectedRoute) {
      const groupedCards = { [cardType.wild]: 0 };
      G.players[ctx.currentPlayer].cards
        .forEach(function (i) { groupedCards[i] = (groupedCards[i] || 0) + 1; });
      console.log("groupedCards", groupedCards)
      let options = [];
      if (selectedRoute.double) {
        options = getRouteOptions(selectedRoute.type[0], selectedRoute.wagons[0].length, selectedRoute.locomotives, groupedCards);
        if (selectedRoute.type[0] !== cardType.wild) {
          options.push(...getRouteOptions(selectedRoute.type[1], selectedRoute.wagons[0].length, selectedRoute.locomotives, groupedCards));
        }
      } else {
        options = getRouteOptions(selectedRoute.type, selectedRoute.wagons.length, selectedRoute.locomotives, groupedCards);
      }
      modal = <pre>{JSON.stringify(options, null, 2)}</pre>
    }

    return (
      <div>
        {openDeck}
        <button onClick={this.drawDeckCard}>Deck</button>
        {hand}
        {modal}
        <Map>
          <svg width={1000} height={645}>
            {routeElements}
            {stationElements}
          </svg>
        </Map>
        <pre>
          {JSON.stringify(this.state.routes, null, 2)}
        </pre>
      </div>
    );
  }
}

function getRouteOptions(wagonType, routeLength, locomotives, groupedCards) {
  const options = [];
  if (wagonType === cardType.wild) {
    Object.keys(cardType).forEach(color => {
      options.push(...enumerateRouteColorOptions(color, routeLength, locomotives, groupedCards));
    });
  } else {
    options.push(...enumerateRouteColorOptions(wagonType, routeLength, locomotives, groupedCards));
  }
  return options;
}

function enumerateRouteColorOptions(color, routeLength, locomotives, groupedCards) {
  // TODO account for locomotives
  console.log(color, "wagons needed:", routeLength);
  console.log(color, "wagons in hand:", groupedCards[color]);
  console.log("wild wagons in hand:", groupedCards[cardType.wild]);
  const options = [];
  if (groupedCards[color] >= routeLength && !locomotives) {
    options.push(Array(routeLength).fill(color));
  }
  for (let i = 1; i < routeLength; i++) {
    console.log("groupedCards[color] + i", groupedCards[color] + i);
    if (groupedCards[cardType.wild] - i >= 0 && groupedCards[color] + i >= routeLength) {
      const option = Array(Math.max(routeLength - i, 0)).fill(color);
      option.push(...Array(i).fill(cardType.wild));
      options.push(option);
    }
  }
  return options;
}

