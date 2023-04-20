import React from 'react'
import Nav from './Components/Nav/nav'
import Footer from './Components/Footer/footer'
import Jobs from './Components/Jobs/jobs'
import Search from './Components/Search/search'
import Value from './Components/Value/value'

const App = () => {
  return (
    <div className="layout">
      <Nav />
      <Footer />
      <Jobs />
      <Search />
      <Value />
    </div>
  )
}

export default App
