import "./App.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header_comp/Header"
import Home from "./components/Home_comp/Home"
import List from "./components/MovieList_comp/List"
import List2 from "./components/MovieList_comp/List2"
import List3 from "./components/MovieList_comp/List3"
import  { SkeletonTheme } from "react-loading-skeleton"
function App() {
  
  return (
    <>
     <div className="App">

     <SkeletonTheme baseColor="yellow" highlightColor="green">


      <Router>

     <Header></Header>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path= "movie/:id" element={<h1>Movie Detail page</h1>}></Route>
          <Route path="movie/popular" element={<List></List>}></Route>
          <Route path="movie/top_rated" element={<List2></List2>}></Route>
          <Route path="movie/upcoming" element={<List3></List3>}></Route>
          <Route path="/*" element={<h1> No Page was found</h1>}></Route>
          {/* <Route path="/movie/:id">{<h1>kahadkfladf</h1>}</Route> */}
        </Routes>
      </Router>
     </SkeletonTheme>
     </div>
      
    </>
  )
}

export default App
