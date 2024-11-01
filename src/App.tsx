import { Provider } from 'react-redux';
import './App.css';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:ahmet" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;