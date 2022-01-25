import React from "react";
import Card from './components/Card';
import pokemons from './data'
import './index.css';

class App extends React.Component {
  
  render(){
    return (
      <main>
        <div>
          <h1>Pokedex</h1>
          <section> 
            {
              pokemons.map(item => {
                return <Card key={item.name} itemInfo={item}  />
              })
            }
          </section>
        </div>
      </main>
    );
  }
}

export default App;
