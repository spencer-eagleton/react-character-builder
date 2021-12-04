import './App.css';

import Home from './views/Home/Home';
import background from './background.jpeg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className="body" style={{ backgroundImage: `url(${background})` }}>
        <Header />
        <Home />
        <Footer />
      </div>
      <footer />
    </>
  );
}

export default App;
