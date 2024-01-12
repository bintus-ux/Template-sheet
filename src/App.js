import { Routes, Route } from 'react-router-dom'
import SignInForm from './components/FormScreens/SignInForm'
import SignUpForm from './components/FormScreens/SignUpForm'
import Home from './components/FormScreens/Home'

const App = () => {
  return (
    <>
      <div className='layout'>
        <Routes>
          <Route path='/' element={<SignInForm />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
