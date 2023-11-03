import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDoctor from './components/users/AddDoctor';
import Addpatient from './components/users/AddPatient';
import DashboardPage from './components/Dashboard';
import Navbar from './components/Navbar';
import Addlab from './components/centers/AddLab';
import Addcenter from './components/centers/AddCenter';
import Addappointment from './components/appointments/AddAppointment';
import Addlabagent from './components/users/AddLabagent';
import Managecenters from './components/centers/ManageCenters';
import Managelabs from './components/centers/Managelabs';
import Managestate from './components/locations/ManageState';
import Managecity from './components/locations/ManageCity';
import Managelocation from './components/locations/Managelocation';
import Managepackage from './components/packages/ManagePackage';
import Addpackage from './components/packages/Addpackage';
import Patientappointment from './components/appointments/PatientAppointment';
import Labappointment from './components/appointments/LabAppointment';

function App() {
  return (
    <div className="App">
      <BrowserRouter  basename="prevmedsol">
        <Navbar />
        <Routes>
          <Route path='/' element={<DashboardPage/>}></Route>
          <Route path='addDoctor' element={<AddDoctor />}></Route>
          <Route path='addPatient' element={<Addpatient />}></Route>
          <Route path='addlabagent' element={<Addlabagent />}></Route>
          <Route path='addlab' element={<Addlab/>}></Route>
          <Route path='addcenter' element={<Addcenter/>}></Route>
          <Route path='managecenters' element={<Managecenters/>}></Route>
          <Route path='managelabs' element={<Managelabs/>}></Route>
          <Route path='addappointment' element={<Addappointment/>}></Route>
          <Route path='patientappointment' element={<Patientappointment/>}></Route>
          <Route path='labappointment' element={<Labappointment/>}></Route>
          <Route path='managestate' element={<Managestate/>}></Route>
          <Route path='managecity' element={<Managecity/>}></Route>
          <Route path='managelocation' element={<Managelocation/>}></Route>
          <Route path='managepackage' element={<Managepackage/>}></Route>
          <Route path='addpackage' element={<Addpackage/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
