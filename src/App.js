import logo from './logo.svg';
import './App.css';

// const InnerComponent = () => {
//   return <div> This is Child component </div>
// }

// function Welcome(props) {
//   return props.children;
  
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Welcome>
          <InnerComponent />
        </Welcome> */}
        
        <h1>
          Hello, World!
        </h1>
      </header>
    </div>
  );
}

export default App;



