import {Routes, Route, Navigate} from "react-router-dom"
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
// import OrderStatusPage from "../Pages/OrderStatusPage"
// import CreateItemsPage from "../Pages/CreateItemsPage"
// import UpdateItemsPage from "../Pages/UpdateItemsPage"
// import AccountPage from "../Pages/AccountPage"
// import AdminPage from "../Pages/AdminPage"
// import CheckoutPage from "../Pages/CheckoutPage"
// import ItemsManagementPage from "../Pages/ItemsManagementPage"
// import BagPage from "../Pages/BagPage";
// import ViewOrderPage from "../Pages/ViewOrderPage";
// import ItemPage from "../Pages/ItemPage";
// import ContactUsPage from "../Pages/ContactUsPage";
// import CustomPrintPage from "../Pages/CustomPrintPage";

const PageRoutes = (props) => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="/order-status" element={<OrderStatusPage />} /> */}
      {/* <Route path="/account" element={<AccountPage />} /> */}
      {/* <Route path="/admin/items/add" element={<CreateItemsPage />} /> */}
      {/* <Route path="/admin/items" element={<ItemsManagementPage />} /> */}
      {/* <Route path="/admin/items/update" element={<UpdateItemsPage />} /> */}
      {/* <Route path="/admin" element={<AdminPage />} /> */}
      <Route path="/redirect" element={<Navigate to="/" />} />
      <Route path="/redirect/admin" element={<Navigate to="/admin" />} />
      {/* <Route path="/bag" element={<BagPage />} /> */}
      {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
      {/* <Route path="/admin/orders" element={<ViewOrderPage />} /> */}
      {/* <Route path="/item/" element={<ItemPage />} /> */}
      {/* <Route path="/contact-us" element={<ContactUsPage />} /> */}
      {/* <Route path="/custom-print" element={<CustomPrintPage />} /> */}
    </Routes>
  );
};

export default PageRoutes
