import React from 'react';
import Search from './components/Search'
import Footer from './components/Footer'
import Bar from './components/Bar';

function App () {
  // const [count, setCount] = useState(0)

  return (
      <main className='flex-col w-screen'>
          < Bar /> 
          < Search />
          < Footer />
      </main>
  )
}

export default App
