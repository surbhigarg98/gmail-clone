import React ,{useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mail from './Mail'
import './App.css';
import EmailList from './EmailList';
import Header from './Header';
import Sidebar from './Sidebar';
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import {selectUser} from './features/userSlice'
import { login} from './features/userSlice'
import Login from './Login';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
    
  useEffect(()=>{
   auth.onAuthStateChanged(user=>{//to amintain the user logged in even if we refresh the page
     if(user){
    dispatch(login({
      displayName:user?.displayName,
      email:user?.email,
      photoURL:user?.photoURL
    }))
     }
   })
  },[])
  return (
<Router>
  {!user ? (
    <Login/>
  ) : (
<div className="App">
<Header/>
<div className="app__body">
<Sidebar/>
<Switch>
<Route path="/mail">
<Mail/>
</Route>
  <Route path="/">
  <EmailList/>
  </Route>
</Switch>
</div>
{sendMessageIsOpen && <SendMail/>}
</div>
)}
</Router>
  );
}

export default App;
