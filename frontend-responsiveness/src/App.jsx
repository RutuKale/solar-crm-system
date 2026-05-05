import "./App.css";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers/Customers";
import CustomerForm from "./pages/Customer Form/CustomerForm";
import Workers from "./pages/Workers/Workers";
import ProfileForm from "./pages/Customer Form/ProfileForm";
import ViewCustomer from "./pages/Customers/ViewCustomer";
import OrderForm from "./pages/Customer Form/OrderForm";
import QuotationForm from "./pages/Customer Form/QuotationForm";
import Inventory from "./pages/Inventory/Inventory";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:id" element={<ViewCustomer />} />
          <Route path="/customer-forms" element={<CustomerForm />} />
          <Route path="/customer-forms/profile-form" element={<ProfileForm />} />
          <Route path="/customer-forms/order-form" element={<OrderForm />} />
          <Route path="/customer-forms/quotaion-form" element={<QuotationForm />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
