import { BrowserRouter,} from 'react-router-dom'
import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import AppRouter from './AppRouter';
import { useEffect, useState,useContext,createContext } from 'react';
import { UserContext } from './Services/CreateContext';

function App() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    const cookieValue = document.cookie.split("=")[1];
    if (cookieValue) {
      try {
        const userData = JSON.parse(cookieValue);
        setUser(userData);
        
      } catch (error) {
        console.error("Error parsing cookie data:", error);
      }
    } else {
      console.log("No user data found in cookie.");
    }
    
  }, [user]);

  return (
    
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;
