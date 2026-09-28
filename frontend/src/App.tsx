import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styles/modern-ui.css';
import AdminLoginComponent from './AdminLoginComponent';
import ChangePassword from './src/pages/migrated-repo/ChangePassword';
import DoctorLoginComponent from './DoctorLoginComponent';
import IndexComponent from './IndexComponent';
import SignupComponent from './SignupComponent';
import UserAppointmentComponent from './UserAppointmentComponent';
import UserLoginComponent from './UserLoginComponent';
import ViewAppointmentComponent from './ViewAppointmentComponent';
import AdminDoctorComponent from './AdminDoctorComponent';
import AdminEditDoctorComponent from './AdminEditDoctorComponent';
import AdminIndexComponent from './AdminIndexComponent';
import AdminNavbarComponent from './AdminNavbarComponent';
import AdminPatientComponent from './AdminPatientComponent';
import AdminViewDoctorComponent from './AdminViewDoctorComponent';
import ComponentAllcssComponent from './ComponentAllcssComponent';
import ComponentFooterComponent from './ComponentFooterComponent';
import FooterSimple from './src/components/layout/FooterSimple';
import ComponentNavbarComponent from './ComponentNavbarComponent';
import DoctorCommentComponent from './DoctorCommentComponent';
import DoctorEditProfileComponent from './DoctorEditProfileComponent';
import DoctorIndexComponent from './DoctorIndexComponent';
import DoctorNavbarComponent from './DoctorNavbarComponent';
import DoctorPatientComponent from './DoctorPatientComponent';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="modern-app-root">
        <header className="modern-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#2563eb' }}>Modernized Application</span>
          </div>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#475569', fontWeight: 500 }}>Home</Link>
          </nav>
        </header>
        <main className="modern-main-content">
          <Routes>
        <Route path="/" element={<AdminLoginComponent />} />
        <Route path="/adminlogin" element={<AdminLoginComponent />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/doctorlogin" element={<DoctorLoginComponent />} />
        <Route path="/index" element={<IndexComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
        <Route path="/userappointment" element={<UserAppointmentComponent />} />
        <Route path="/userlogin" element={<UserLoginComponent />} />
        <Route path="/viewappointment" element={<ViewAppointmentComponent />} />
        <Route path="/admindoctor" element={<AdminDoctorComponent />} />
        <Route path="/admineditdoctor" element={<AdminEditDoctorComponent />} />
        <Route path="/adminindex" element={<AdminIndexComponent />} />
        <Route path="/adminnavbar" element={<AdminNavbarComponent />} />
        <Route path="/adminpatient" element={<AdminPatientComponent />} />
        <Route path="/adminviewdoctor" element={<AdminViewDoctorComponent />} />
        <Route path="/allcss" element={<ComponentAllcssComponent />} />
        <Route path="/footer" element={<ComponentFooterComponent />} />
        <Route path="/footersimple" element={<FooterSimple />} />
        <Route path="/navbar" element={<ComponentNavbarComponent />} />
        <Route path="/doctorcomment" element={<DoctorCommentComponent />} />
        <Route path="/doctoreditprofile" element={<DoctorEditProfileComponent />} />
        <Route path="/doctorindex" element={<DoctorIndexComponent />} />
        <Route path="/doctornavbar" element={<DoctorNavbarComponent />} />
        <Route path="/doctorpatient" element={<DoctorPatientComponent />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
