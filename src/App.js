import GifExpertApp from "./GifExpert/GifExperApp";
import './App.css';

function App() {

  const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
    alert('Complete Cache Cleared')
  };

  return (
    <div className="App">
      <GifExpertApp />
      <button onClick={() => clearCacheData()} >
        Clear Cache Data</button>
    </div>
  );
}

export default App;
