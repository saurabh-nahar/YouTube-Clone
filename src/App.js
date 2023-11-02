import './App.css';
import Header from './components/Header';
import Body from './components/Body'
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <div className="App">
      <Provider store = {appStore}>
      <Header/>
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
