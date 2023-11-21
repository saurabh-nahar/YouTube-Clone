import './App.css';
import Body from './components/Body'
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/VideoContainer';
import WatchPage from './components/WatchPage';
import SearchResPage from './components/SearchResPage';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children:[{
      path: "/",
      element: <MainContainer/>
    },{
      path: "/watch",
      element: <WatchPage/>
    },{
      path: "/results",
      element: <SearchResPage/>
    }
  ]
  }
])

function App() {
  return (
    <div className="App">
      <Provider store = {appStore}>
      <RouterProvider router = {appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
