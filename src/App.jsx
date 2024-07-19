import ReactDOM from 'react-dom';
import Pet from './Pet';


const App = () => {
  return (
        <div>
      <h1>Adopt Me!</h1>
      <Pet name="Pablo" animal="Dog" breed="Bulldog"/>
      <Pet name="Pepper" animal="Bird" breed="Cockatiel"/>
      <Pet name="Doink" animal="Cat" breed="Mixed"/>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
