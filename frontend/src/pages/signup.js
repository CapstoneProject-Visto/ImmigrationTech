import React from "react";
import Header from "../components/header";
import SignUpForm from "../components/auth/signup";
import Footer from "../components/footer";

function SignupPage() {
  return (
    <>
      <Header />
      <SignUpForm />
      <Footer />
    </>
  );
}

export default SignupPage;
