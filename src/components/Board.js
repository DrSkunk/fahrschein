import React from 'react';
import Station from './Station';
import stations from '../stations';

export class FahrscheinBoard extends React.Component {

    drawOpenCard = (index) => {
        this.props.moves.drawOpenCard(index);
    }

    drawDeckCard = () => {
        this.props.moves.drawDeckCard();
    }

    render() {
        const openDeck = this.props.G.openDeck
            .map((card, i) => <button
                key={"opencard" + i}
                onClick={() => this.drawOpenCard(i)}
                style={{
                    backgroundColor: card
                }}
            >
                {card}
            </button>)

        const stationElements = stations.map(station =>
            <Station
                key={station.slug}
                x={station.x * 2}
                y={station.y * 2}
                name={station.name}
            />)

        const hand = this.props.G.players[0].cards.map(card => <span>{card}</span>)
        return (
            <div>
                {openDeck}
                <button onClick={this.drawDeckCard}>Deck</button>
                {hand}
                <div>
                    <svg width={1000} height={1000}>
                        {stationElements}
                    </svg>
                </div>
            </div>
        );
    }
}
