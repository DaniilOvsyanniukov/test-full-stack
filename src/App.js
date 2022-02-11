import './App.css';
import { Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import FamilyView from './views/FamilyView';


function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<FamilyView/>} />
        {/* <Route path="/product" element={ProductView}/> */}
      </Routes>
    </Container>
  );
}
export default App;
