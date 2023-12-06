import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Guesthome from './pages/Guest/Guesthome';
import Login from './pages/Guest/Login';
import Investorreg from './pages/Investor/Investorreg';
import Startupreg from './pages/Startup/Startupreg';
import Singleprojectview from './pages/Investor/Singleprojectview';
import InvestorHome from './pages/Investor/InvestorHome';
import StartupHome from './pages/Startup/StartupHome';
import ProjectAdd from './pages/Startup/ProjectAdd';
import Editproject from './pages/Startup/Editproject';
import { ButTab } from './components/Investorcomp';
import Investconfirm from './pages/Investor/Investconfirm';
import InvestorDashboard from './pages/Investor/InvestorDashboard';
import Status from './pages/Startup/Status';
import Viewinvestors from './pages/Startup/Viewinvestors';
import Adminhome from './pages/Admin/Adminhome';
import Allinvestor from './pages/Admin/Allinvestor';
import Allstartup from './pages/Admin/Allstartup';

function App() {
  return (
    <>   <Routes>

    <Route path='/' element={<Guesthome/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/Investor' element={<Investorreg/>}></Route>
    <Route path='/project/:id' element={<Singleprojectview/>}></Route>
    <Route path='/investorhome' element={<InvestorHome/>}></Route>
    <Route path='/startuphome' element={<StartupHome/>}></Route>
    <Route path='/adminhome' element={<Adminhome/>}></Route>
    <Route path='/allinvestor' element={<Allinvestor/>}></Route>
    <Route path='/allstartupview' element={<Allstartup/>}></Route>
    <Route path='/addproject' element={<ProjectAdd/>}></Route>
    <Route path='/editproject/:id' element={<Editproject/>}></Route>
    <Route path='/Startup' element={<Startupreg/>}></Route>
    <Route path='/dashboard' element={<InvestorDashboard/>}></Route>
    <Route path='/status' element={<Status/>}></Route>
    <Route path='/viewstatusdetail/:projectname/:id' element={<Viewinvestors/>}></Route>
    <Route path='/invest/:projectname/:id' element={<Investconfirm/>}></Route>
    </Routes>
</>
  );
}

export default App;
