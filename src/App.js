import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home'
import Coins from './components/Coins'
import CoinsDetails from './components/CoinDetails'
import Exchange from './components/Exchange'
import Footer from './components/Footer';


function App() {
  return <Router>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/coin/:id' element={<CoinsDetails/>}/>
      <Route path='/exchange' element={<Exchange/>}/>
    </Routes>
    <Footer/>
  </Router>
}

export default App;
