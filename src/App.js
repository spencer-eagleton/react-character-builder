import './App.css';

import Home from './views/Home/Home';
import background from './background.jpeg';

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="App">
      <Home />
    </div>
  );
}

export default App;
