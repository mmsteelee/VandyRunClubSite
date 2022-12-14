import React, {createContext, useEffect, useState}  from 'react'
import {Routes , Navigate, Route} from 'react-router-dom'
import { useCookies } from 'react-cookie';

import HomePage from './pages/home'
import Auth from './pages/Auth/Auth'
import Links from './pages/Links/links'
import FindYourRun from './pages/FindYourRun/findyourrun.js';
import MeetTheTeam from './pages/MeetTheTeam/meetTheTeam.js';
import CreateARun from './pages/Create/create.js';
import FindARun from './pages/Find/find.js';
import Calendar from './pages/Calendar/calendar';

import PopUpDialog from './components/popup-dialog/popup-dialog';
import LoadingAnimation from './components/loading-animation/loading-animation';
// import Logout from './components/logout-component/logout';

import {user as tokenLogin, exp} from './api/auth'
import NavBar from './components/NavBar-component/NavBar';

// import Create from './components/create';
// import FindARun from './components/find.js';
// import CreateARun from './components/create.js';

export const UserContext = createContext(null)
export const CookieContext = createContext(null)

export default function App() {
  const [user, setUser] = useState(null)
  const [cookies, setCookie, removeCookie] = useCookies(['name'])
  const [openDialog, setOpenDialog]   = useState(false)
  const [loading, setLoading]         = useState(true)
  
  useEffect(() => {
    // fetch user information if token still stored in cookies
    async function auth(){
      await tokenLogin()
        .then(resUser => setUser(resUser.data))
        .catch(err => console.log("ERROR: ", err.json))    
      setLoading(false)
    }
    auth()
  }, [])

  useEffect(()=>{
    async function timeout(){
      await exp()
        .then(res => {
          setTimeout(() => setOpenDialog(true), res.data.exp*1000 + 1000)})
        .catch(err => console.log(err))
    }
    timeout()
  }, [user])

  // useEffect(() => {
  //   async function logout(){
  //     setUser(null);
  //     setOpenDialog(false);
  //   }
  //   logout()
  // }, [user])

  function logout() {
    removeCookie('token')
    setUser(null)
    setOpenDialog(false)
  }

  return (
    <div className='App'>
      <CookieContext.Provider value={{cookies, setCookie}}>
      <UserContext.Provider value={{user, setUser}}>
        { loading ? 
          <LoadingAnimation /> :
          <>
          <div className='main-wrapper'>
          { user &&
            <NavBar handleClick={logout} />
          }
          </div>
          <Routes>
            <Route exact path="/auth" element={<Auth />}></Route>
            <Route exact path="/" element={user ? <HomePage /> : <Navigate to="/auth" />}></Route>
            <Route exact path="/links" element={user ? <Links /> : <Navigate to="/auth" />}></Route>
            <Route exact path="/findyourrun" element={user ? <FindYourRun /> : <Navigate to="/auth" />}></Route>
            <Route exact path="/meettheteam" element={user ? <MeetTheTeam /> : <Navigate to="/auth" />}></Route>
            <Route exact path="/createarun" element={user ? <CreateARun /> : <Navigate to="/auth" />}></Route>
            <Route exact path="/findarun" element={user ? <FindARun /> : <Navigate to="/auth" />}></Route>
            <Route exact path="/calendar" element={user ? <Calendar /> : <Navigate to="/auth" />}></Route>
            <Route exact path="/create" element={user ? <CreateARun /> : <Navigate to="/auth" />}></Route>
            <Route exact path="/find" element={user ? <FindARun /> : <Navigate to="/auth" />}></Route>
            <Route exact path="/auth/logout" element={<Auth />}></Route>
          </Routes>
          </>
        }
        <PopUpDialog
          message={`Session Expired. Please log back in.`} 
          open={openDialog}
          handleClose={logout}
        />
      </UserContext.Provider>
      </CookieContext.Provider>
    </div>
  )
}