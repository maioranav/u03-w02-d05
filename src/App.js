import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { CustNav } from './components/CustNav';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <CustNav />
        <Container>

          <Routes>
            <Route path="/" element="" />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </Container>

      </BrowserRouter>
    </div>
  );
}

export default App;
