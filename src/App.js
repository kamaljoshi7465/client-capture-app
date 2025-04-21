import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from './Pages/RegistrationForm';
import HomePage from './Pages/HomePage';
import SuccessPage from './Pages/SuccessPage';
import CustomerList from './Pages/CustomerList';
import AdminLogin from './Pages/AdminLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/customers" element={<CustomerList />} />
      </Routes>
    </Router>
  );
}

export default App;
