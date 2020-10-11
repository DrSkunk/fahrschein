import { INVALID_MOVE } from 'boardgame.io/core';
import cardType from './cardType';

export const Fahrschein = {
  setup,
  moves: {
    drawOpenCard,
    drawDeckCard,
    claimRoute,
  },
};

function setup(ctx) {
  const deckSetup = [
    { type: cardType.red, amount: 12 },
    { type: cardType.orange, amount: 12 },
    { type: cardType.yellow, amount: 12 },
    { type: cardType.green, amount: 12 },
    { type: cardType.blue, amount: 12 },
    { type: cardType.purple, amount: 12 },
    { type: cardType.black, amount: 12 },
    { type: cardType.white, amount: 12 },
    { type: cardType.wild, amount: 14 },
  ];

  let deck = [];
  deckSetup.forEach((cardType) => {
    deck.push(...Array(cardType.amount).fill(cardType.type));
  });
  deck = ctx.random.Shuffle(deck);

  const players = {};

  for (let i = 0; i < ctx.numPlayers; i++) {
    const cards = deck.splice(0, 4).sort();
    players[i] = {
      cards,
      trains: 45,
      stations: 3,
    };
  }

  const openDeck = deck.splice(0, 5);

  return {
    routes: [],
    deck,
    openDeck,
    players,
    cardsDrawn: 0,
  };
}

function drawOpenCard(G, ctx, selectedCardIndex) {
  // Get card from open deck
  const selectedCard = G.openDeck[selectedCardIndex];
  G.openDeck.splice(selectedCardIndex, 1);

  // Add to current player deck
  G.players[ctx.currentPlayer].cards.push(selectedCard);
  G.players[ctx.currentPlayer].cards.sort();

  // Fill empty spot with top card from deck
  const newCard = G.deck.pop();
  G.openDeck.splice(selectedCardIndex, 0, newCard);

  // You can only draw one locomotive (wildcard)
  // You can only draw two cards
  if (selectedCard === 'wild' && G.cardsDrawn === 1) {
    return INVALID_MOVE;
  } else if (selectedCard === 'wild' || G.cardsDrawn === 1) {
    G.cardsDrawn = 0;
    ctx.events.endTurn();
  } else if (G.cardsDrawn === 0) {
    G.cardsDrawn++;
  }
}
function drawDeckCard(G, ctx) {
  const card = G.deck.pop();
  G.players[ctx.currentPlayer].cards.push(card);
  G.players[ctx.currentPlayer].cards.sort();

  // You can only draw two cards
  if (G.cardsDrawn === 1) {
    G.cardsDrawn = 0;
    ctx.events.endTurn();
  } else if (G.cardsDrawn === 0) {
    G.cardsDrawn++;
  }
}
function claimRoute(G, ctx) {
  ctx.events.endTurn();
}
