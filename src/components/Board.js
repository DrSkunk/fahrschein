import React from 'react';
import Station from './Station';
import stations from '../game/oldStations';
import routes from '../game/routes';

export class FahrscheinBoard extends React.Component {
  drawOpenCard = (index) => {
    this.props.moves.drawOpenCard(index);
  };

  drawDeckCard = () => {
    this.props.moves.drawDeckCard();
  };

  render() {
    const openDeck = this.props.G.openDeck.map((card, i) => (
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

    const stationElements = stations.map((station) => (
      <Station
        key={station.slug}
        x={station.x}
        y={station.y}
        name={station.name}
      />
    ));

    // routes.map(route => {
    //     if (route.qx && route.qy) {
    //       return new RouteCurved(route);
    //     }
    //     return new RouteStraight(route);
    //   });

    const routeElements = routes.map((route) => {
      const routeStart = stations.find(
        (station) => station.slug === route.start
      );
      const routeEnd = stations.find((station) => station.slug === route.end);

      return (
        <line
          x1={routeStart.x}
          y1={routeStart.y}
          x2={routeEnd.x}
          y2={routeEnd.y}
          stroke="black"
        />
      );
    });

    const hand = this.props.G.players[0].cards.map((card, i) => (
      <span key={card + i}>{card}</span>
    ));
    return (
      <div>
        {openDeck}
        <button onClick={this.drawDeckCard}>Deck</button>
        {hand}
        <div>
          <svg width={1000} height={1000}>
            {routeElements}
            {stationElements}
          </svg>
        </div>
      </div>
    );
  }
}
