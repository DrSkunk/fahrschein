import { Client } from 'boardgame.io/react';
import { Fahrschein } from './Game';
import { FahrscheinBoard } from './components/Board';
const App = Client(
  {
    game: Fahrschein,
    board: FahrscheinBoard,
    numPlayers: 3
  }
);

export default App;