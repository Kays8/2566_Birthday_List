import { useState } from 'react'
import data from './data'
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  const clearAll = () =>{
    setPeople([]);
  }
  return (
    <div>
      <div className="info">
      <h1>Workshop 1 : Birthday List Project</h1>
      <h1>Thirayut Boonin</h1>
      </div>
      <main>
        <section className="container">
          <div>
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={clearAll}>Clear All</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
