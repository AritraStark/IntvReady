import './App.css';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './screens/Home';
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Search from './screens/Search'
import NewPost from './screens/NewPost'
import Post from './screens/Post'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/post/search" element={<Search/>}/>
          <Route exact path="/post/new" element={<NewPost/>}/>
          <Route path="/post/:id" element={<Post/>}/>

          <Route path="/test" element={(
            <div>Test Page</div>
          )}/>
          {/* <Route path="/followers" exact element={}/>*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
