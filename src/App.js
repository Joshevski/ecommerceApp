import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/home'
import Navigation from './pages/navigation/navigation'
import SignIn from './pages/sign-in/sign-in'
const App = () => {

  const Shop = () => {
    return <h1>SHOPING</h1>   
  }

  

  return (
    <Routes>

        <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path='sign-in' element={<SignIn/>} />

    </Route>
    </Routes>
  )
}

export default App