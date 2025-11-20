import React from "react";
import SellerForm from "./pages/SellerForm";
import Navbar from "./components/Navbar";
import FormOtp from "./pages/FormOtp";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* =================== */}
      <SellerForm />
      {/* <FormOtp/> */}
      {/* =================== */}

      <Footer />
    </div>
  );
};

export default App;
