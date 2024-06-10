
import './App.css';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;

// https://github.com/bvaughn/infinite-list-reflow-examples/blob/master/books.json books data