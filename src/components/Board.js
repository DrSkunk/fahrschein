import React from 'react';
import Station from './Station';
import stations from '../game/stations';
// import stations from '../game/oldStations';
import routes from '../game/routes';
import Route from './Route';

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
        onClick={() => { }}
      />
    });

    const hand = this.props.G.players[0].cards.map((card, i) => (
      <span key={card + i}>{card}</span>
    ));

    const modal = null;
    return (
      <div>
        {openDeck}
        <button onClick={this.drawDeckCard}>Deck</button>
        {hand}
        <div>
          <svg width={1000} height={1000}>
            {routeElements}
            {stationElements}
            {modal}
          </svg>
        </div>
      </div>
    );
  }
}
