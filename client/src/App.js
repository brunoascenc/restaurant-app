import Checkout from './pages/checkout/checkout';
import GlobalStyle from './global-styles';
import { Switch, Route } from 'react-router-dom';
import Kitchen from './pages/kitchen/kitchen';

import './App.css';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Checkout} />
        <Route path="/kitchen" component={Kitchen} />
      </Switch>
    </div>
  );
}

export default App;
