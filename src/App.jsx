import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {GlobalStyles} from './styles/GlobalStyles'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import Bookings from './pages/Bookings'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Cabins from './pages/Cabins'
import AppLayout from './ui/AppLayout'

function App() {
  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
        <Route index element={<Dashboard/>} /> 
        {/* // or
        <Route index element={<Navigate replace to="dashboard"/>} />
      */}
        <Route path='dashboard' element={<Dashboard/>} /> 
        <Route path='account' element={<Account/>} /> 
        <Route path='booking' element={<Bookings/>} /> 
        <Route path='users' element={<Users/>} /> 
        <Route path='settings' element={<Settings/>} /> 
        <Route path='cabins' element={<Cabins/>} /> 
        </Route>
        <Route path='login' element={<Login/>} /> 
        <Route path='*' element={<PageNotFound/>} /> 
      </Routes>
    </BrowserRouter>
      </>
  )
}

export default App