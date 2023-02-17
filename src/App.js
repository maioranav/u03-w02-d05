import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { CustNav } from './components/CustNav';
import { Dashboard } from './components/Dashboard';
import { Favs } from './components/Favs';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <CustNav />
        <Container>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/weather/:city" element={<Dashboard />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </Container>

      </BrowserRouter>
    </div>
  );
}

export default App;
