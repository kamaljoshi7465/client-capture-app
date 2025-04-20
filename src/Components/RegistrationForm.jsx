import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    players_name: "",
    fide_rating: "",
    fide_id: "",
    gender: "",
    whatsapp: "",
    specially_abled: "",
    email: "",
    guardian_name: "",
    dob: "",
    alt_number: "",
    state: "",
    organization: "",
    address: "",
    district: "",
    tshirt_size: "",
    rapid_blitz: 0,
    rapid: 0,
    blitz: 0,
    gm_offer: 0,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "chess-registrations"), formData);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error saving form:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Chess Tournament Registration</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Text Inputs */}
        <Input name="players_name" label="Player's Name *" required onChange={handleChange} />
        <Input name="fide_rating" label="FIDE RATING If you have otherwise write 0000 (Optional)" onChange={handleChange} />
        <Input name="fide_id" label="FIDE ID If you have otherwise write 0000 (Optional)" onChange={handleChange} />
        <Select name="gender" label="Gender *" required onChange={handleChange} options={["Male", "Female", "Other"]} />
        <Input name="whatsapp" label="Whatsapp Number *" required onChange={handleChange} type="tel" />
        <Select name="specially_abled" label="Whether you are Specially abled or not (Optional)" onChange={handleChange} options={["YES", "NO"]} />
        <Input name="email" label="Email *" required onChange={handleChange} type="email" />
        <Input name="guardian_name" label="Guardian Name *" required onChange={handleChange} />
        <Input name="dob" label="Date of Birth *" required onChange={handleChange} type="date" />
        <Input name="alt_number" label="Alternate Number (Optional)" onChange={handleChange} type="tel" />
        <Input name="state" label="State *" required onChange={handleChange} />
        <Input name="organization" label="School/College/Company Name *" required onChange={handleChange} />
        <Input name="address" label="Address *" required onChange={handleChange} />
        <Input name="district" label="District *" required onChange={handleChange} />
        <Select name="tshirt_size" label="T-Shirt Size *" required onChange={handleChange} options={["XS", "S", "M", "L", "XL", "XXL"]} />

        {/* Full width amount inputs */}
        <div className="md:col-span-2 grid gap-4">
          <AmountInput label="Rapid and Blitz Both" name="rapid_blitz" value={formData.rapid_blitz} handleChange={handleChange} price={4000} />
          <AmountInput label="RAPID" name="rapid" value={formData.rapid} handleChange={handleChange} price={3000} />
          <AmountInput label="BLITZ" name="blitz" value={formData.blitz} handleChange={handleChange} price={1500} />
          <AmountInput label="GM/IM/WGM/Veteran/Specially Abled" name="gm_offer" value={formData.gm_offer} handleChange={handleChange} price={2000} />
        </div>

        <div className="md:col-span-2 flex flex-col md:flex-row justify-center items-center gap-4 bg-light">
          <img
            id="fin-logo"
            alt="Payment Methods"
            src="https://cdn.razorpay.com/static/assets/pay_methods_branding.png"
            width="180"
            className="mx-auto md:mx-0 bg-light"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 text-lg w-full md:w-auto"
          >
            Pay ₹{formData.rapid_blitz * 4000 + formData.rapid * 3000 + formData.blitz * 1500 + formData.gm_offer * 2000}
          </button>
        </div>
      </form>
    </div>
  );
};

const Input = ({ name, label, onChange, required, type = "text" }) => (
  <div className="flex flex-col">
    <label className="font-medium text-sm mb-1">{label}</label>
    <input
      type={type}
      name={name}
      required={required}
      onChange={onChange}
      className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const Select = ({ name, label, onChange, required, options }) => (
  <div className="flex flex-col">
    <label className="font-medium text-sm mb-1">{label}</label>
    <select
      name={name}
      required={required}
      onChange={onChange}
      className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">--Select--</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const AmountInput = ({ name, label, value, handleChange, price }) => {
  const formattedPrice = price.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-between border rounded-lg px-4 py-3">
      <div className="flex-1 mb-2 md:mb-0">
        <p className="font-medium">{label} <span className="text-sm text-gray-500">(Optional)</span></p>
        <p className="text-sm text-gray-600">Price: <b>{formattedPrice}</b></p>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() =>
            handleChange({
              target: {
                name,
                value: Math.max(0, value - 1),
                type: "number",
              },
            })
          }
          className="px-3 py-1 bg-gray-200 text-black rounded text-lg"
          disabled={value === 0}
        >-</button>
        <input
          type="text"
          value={value}
          readOnly
          className="text-center w-12 border rounded px-2 py-1 text-lg remove-arrows"
        />
        <button
          type="button"
          onClick={() =>
            handleChange({
              target: {
                name,
                value: value + 1,
                type: "number",
              },
            })
          }
          className="px-3 py-1 bg-gray-200 text-black rounded text-lg"
        >+</button>
      </div>
    </div>
  );
};

export default RegistrationForm;
