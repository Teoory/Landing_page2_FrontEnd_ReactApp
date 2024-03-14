import './App.css';
import DefRoutes from './Routes/DefRoutes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <main className="App" id='top'>
      <Navbar />
      <div className="content">
        <DefRoutes />
      </div>
    </main>
  );
}

export default App;
