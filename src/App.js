
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Registration, Login, Reset, Home, Admin } from './pages/index';

import { familyCardInputs, userInputs } from "./formSource";
import "./style/Dark.css";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import List from "pages/customers/Customers";
import Single from "pages/single/Single";
import New from "pages/new/New";
import Family from "pages/new/Family";
import Aparat from "pages/officer/Officer";





function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
      <Routes>

      <Route path="/">

        
            <Route index element={<Home />} />

            
            <Route path="login" element={<Login />} />
            <Route path="/register" element={<Registration/>}/>
            <Route path="/reset" element={<Reset/>}/>


            <Route path="admin">
              <Route index element={<Admin />} />
              
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add New User" />}
                />
              </Route>

              <Route path="aparat">
                <Route index element={<Aparat />} />
                <Route path="Id" element={<Single />} />
                <Route
                  path="new"
                  element={<Family family={familyCardInputs} title="Add New Family" />}
                />
              </Route>

            </Route>
          

          </Route>
        </Routes>
      </Router>        
    {/* <Footer/> */}
</div>
  );
}

export default App;
