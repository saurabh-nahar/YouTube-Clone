import './App.css';
import Header from './components/Header';
import Body from './components/Body'
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/VideoContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    Path: "/",
    element: <Body/>,
    children:[{
      path: "/",
      element: <MainContainer/>
    },{
      path: "/watch",
      element: <WatchPage/>
    }]
  }
])

function App() {
  return (
    <div className="App">
      <Provider store = {appStore}>
      <Header/>
      <RouterProvider router = {appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
