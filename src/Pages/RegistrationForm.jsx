import React, { useState } from "react";
import { db } from "../Firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";
import Header from "../Components/Header";
import { Helmet } from "react-helmet";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    address1: "",
    address2: "",
    pin_code: "",
    role: "",
    gender: "",
    reference_by: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...formData,
        createdAt: new Date().toISOString(),
      };
      await addDoc(collection(db, "chess-customer-registrations"), data);
      navigate("/success");
    } catch (error) {
      console.error("Error saving form:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Register Now | Marathon Noida</title>
        <meta
          name="description"
          content="Fill out the registration form to participate in the Marathon Noida event supporting One Nation One Election."
        />
        <meta
          name="keywords"
          content="Marathon Noida Registration, One Nation One Election, Run for Unity, Fitness Event, India Marathon"
        />
        <meta property="og:title" content="Register for Marathon Noida" />
        <meta
          property="og:description"
          content="Join the movement! Complete your registration for Marathon Noida and support #1Nation1Election."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Layout>
        <Header
          heading="Marathon Noida - Registration Form"
          showBackButton={true}
        />
        <div className="max-w-3xl mx-auto px-4 py-8">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <Input
              name="first_name"
              label="First Name *"
              required
              placeholder="Enter your first name"
              onChange={handleChange}
            />
            <Input
              name="last_name"
              label="Last Name *"
              required
              placeholder="Enter your last name"
              onChange={handleChange}
            />
            <Input
              name="email"
              label="Email *"
              required
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
            <Input
              name="phone"
              label="Phone Number *"
              required
              type="tel"
              placeholder="Enter your phone number"
              onChange={handleChange}
            />
            <Input
              name="city"
              label="City *"
              required
              placeholder="Enter your city"
              onChange={handleChange}
            />
            <Input
              name="state"
              label="State *"
              required
              placeholder="Enter your state"
              onChange={handleChange}
            />
            <Input
              name="address1"
              label="Address Line 1 *"
              required
              placeholder="Enter your address line 1"
              onChange={handleChange}
            />
            <Input
              name="address2"
              label="Address Line 2"
              placeholder="Enter your address line 2"
              onChange={handleChange}
            />
            <Input
              name="pin_code"
              label="Pin Code *"
              required
              placeholder="Enter your pin code"
              onChange={handleChange}
            />
            <Input
              name="reference_by"
              label="Reference by"
              placeholder="Enter who referred you"
              onChange={handleChange}
            />
            <div className="flex flex-col md:col-span-1">
              <label className="font-medium text-sm mb-1">Gender *</label>
              <select
                name="gender"
                required
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col md:col-span-1">
              <label className="font-medium text-sm mb-1">Role *</label>
              <select
                name="role"
                required
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select your role</option>
                <option value="Student">Student</option>
                <option value="Parent">Parent</option>
                <option value="Working Professional">
                  Working Professional
                </option>
                <option value="Athlete">Athlete</option>
                <option value="Fitness Enthusiast">Fitness Enthusiast</option>
                <option value="Coach/Trainer">Coach/Trainer</option>
                <option value="Volunteer">Volunteer</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-[#df670e] hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

const Input = ({ name, label, onChange, required, type = "text", placeholder }) => (
  <div className="flex flex-col">
    <label className="font-medium text-sm mb-1">{label}</label>
    <input
      type={type}
      name={name}
      required={required}
      onChange={onChange}
      placeholder={placeholder} 
      className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default RegistrationForm;
