import './App.css';
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { Route,Routes,BrowserRouter as Router} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'
 const App=()=>{
  const [progress, setProgress] = useState(0)
  const apiKey=process.env.REACT_APP_NEWS_API
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={4}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey}  key='general' pageSize={6} country='in' category='general' />}></Route>
            <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey}   key='business' pageSize={6} country='in' category='business' />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey}  key='entertainment' pageSize={6} country='in' category='entertainment' />}></Route>
            <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey}   key='health' pageSize={6} country='in' category='health' />}></Route>
            <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey}   key='science' pageSize={6} country='in' category='science' />}></Route>
            <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey}   key='sports' pageSize={6} country='in' category='sports' />}></Route>
            <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey}  key='technology' pageSize={6} country='in' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
}
export default App;
