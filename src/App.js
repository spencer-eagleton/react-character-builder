import './App.css';

import Home from './views/Home/Home';
import background from './background.jpeg';

function App() {
  return (
    <div className="body" style={{ backgroundImage: `url(${background})` }}>
      <Home />
    </div>
  );
}

export default App;
