import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesPage from './components/ServicesPage';
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import DashboardPage from './components/DashboardPage';
import HomePage from './components/HomePage'; // Import the HomePage
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} /> {/* Add the HomePage route */}
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/dashboard" element={<DashboardPage />} /> {/* Dashboard route */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
