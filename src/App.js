
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"


//COMPONENTS
//PAGES
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from './components/pages/NotFound';
import User from './components/users/User';
import UserNotFound from "./components/users/UserNotFound";

//LAYOUTS
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Alert from "./components/layouts/Alert";
//CONTEXT
import { GithubProvider } from "./context/github/GitHubContext";
import { AlertProvider } from './context/alert/AlertContext';



function App() {
  return ( 
    <div className="App ">
        <GithubProvider>
          <AlertProvider>
            <Router>
            <Alert />
              <div className="flex flex-col justify-between h-screen">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/notfound" element={<NotFound />} />
                  <Route path='/user/:login' element={<User />} />
                  <Route path='/user/error404' element={<UserNotFound />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
                <Footer />
              </div>
            </Router>          
          </AlertProvider>
        </GithubProvider>
    </div>
  );
}

export default App;
