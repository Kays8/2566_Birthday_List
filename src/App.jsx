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
      <h1>Workshop 1 : Birthday List Project</h1>
      <h2>Thirayut Boonin</h2>
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={clearAll}>Clear All</button>
        </section>
      </main>
    </div>
  );
}

export default App
