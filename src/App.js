import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ServicesPage from './components/ServicesPage';
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import DashboardPage from './components/DashboardPage';
import ProfilePage from './components/ProfilePage';
import AdminDashboard from './components/AdminDashboard';
import AnalyticsPage from './components/AnalyticsPage';
import UsersPage from './components/UsersPage';
import UserManagementPage from './components/UserManagementPage';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import CarDetailPage from './components/CarDetailPage';
import BikeDetailPage from './components/BikeDetailPage';
import ScooterDetailPage from './components/ScooterDetailPage';
import CycleDetailPage from './components/CycleDetailPage';
import RentCar from './components/RentCar'; // Ensure this file exists
import RentBike from './components/RentBike'; // Ensure this file exists
import RentScooter from './components/RentScooter'; // Ensure this file exists
import RentCycle from './components/RentCycle'; // Ensure this file exists

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/admindashboard" element={<AdminDashboard />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/usermanagement" element={<UserManagementPage />} />
                <Route path="/cardetails" element={<CarDetailPage />} />
                <Route path="/bikedetails" element={<BikeDetailPage />} />
                <Route path="/scooterdetails" element={<ScooterDetailPage />} />
                <Route path="/cycledetails" element={<CycleDetailPage />} />
                <Route path="/rent-car" element={<RentCar />} />
                <Route path="/rent-bike" element={<RentBike />} />
                <Route path="/rent-scooter" element={<RentScooter />} />
                <Route path="/rent-cycle" element={<RentCycle />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
