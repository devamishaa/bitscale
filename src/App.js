import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import SearchBar from './components/SearchInput';
import DataTable from './components/DataTable';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flexGrow: '1' }}>
        <div style={{ flex: 0.5 }}>
          <SideBar />
        </div>
        <div style={{ flex: 11.5 }}>
          <SearchBar />
          <DataTable/>
        </div>
      </div>
    </div>
  );
}

export default App;
