import React, { useEffect, useState } from "react";
import { db } from "../Firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import Layout from "../Components/Layout";
import Header from "../Components/Header";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const navigate = useNavigate();

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("adminUser"));
    if (!admin) {
      navigate("/admin");
    } else {
      fetchCustomers();
    }
  }, []);

  const fetchCustomers = async () => {
    const querySnapshot = await getDocs(
      collection(db, "chess-customer-registrations")
    );
    const data = querySnapshot.docs.map((doc) => {
      const record = doc.data();
      return {
        id: doc.id,
        ...record,
      };
    });

    const sortedData = data.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setCustomers(sortedData);
    filterCustomersByDate(sortedData, selectedDate);
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    filterCustomersByDate(customers, newDate);
  };

  const filterCustomersByDate = (data, date) => {
    const filtered = data.filter((c) => {
      const createdDate = new Date(c.createdAt).toISOString().split("T")[0];
      return createdDate === date;
    });
    setFilteredCustomers(filtered);
  };

  const handleDownloadExcel = () => {
    if (filteredCustomers.length === 0) return;

    const formattedData = filteredCustomers.map((c, index) => ({
      "S.No": index + 1,
      Name: `${c.first_name} ${c.last_name}`,
      Email: c.email,
      Phone: c.phone,
      Gender: c.gender || "N/A",
      Role: c.role || "N/A",
      City: c.city,
      State: c.state,
      "Pin Code": c.pin_code,
      "Address 1": c.address1,
      "Address 2": c.address2,
      "Registration Date": new Date(c.createdAt).toLocaleString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Customers");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, `customers-data-${selectedDate}.xlsx`);
  };

  return (
    <Layout>
      <Header
        heading="Registered Customers"
        backToHomePageButton={true}
        showAdminLogoutButton={true}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Date Filter + Download Button */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Date Filter */}
          <div className="flex items-center gap-3">
            <label className="font-medium text-gray-700">Filter by Date:</label>
            <input
              type="date"
              className="border rounded px-3 py-2 text-sm"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>

          {/* Download & Count in a row, even on mobile */}
          <div className="flex justify-between items-center gap-4">
            <div className="text-sm text-gray-700 font-medium whitespace-nowrap">
              Total Registration: {customers.length}
            </div>
            <button
              onClick={handleDownloadExcel}
              className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 text-sm whitespace-nowrap"
            >
              Download Excel
            </button>
          </div>
        </div>

        {filteredCustomers.length === 0 ? (
          <p className="text-center text-gray-600">
            No registrations found for this date.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg shadow-sm text-sm text-left">
              <thead className="bg-blue-100 text-blue-700">
                <tr>
                  <th className="border p-3 font-semibold">S.No</th>
                  <th className="border p-3 font-semibold">Name</th>
                  <th className="border p-3 font-semibold">Email</th>
                  <th className="border p-3 font-semibold">Phone</th>
                  <th className="border p-3 font-semibold">Gender</th>
                  <th className="border p-3 font-semibold">Role</th>
                  <th className="border p-3 font-semibold">City</th>
                  <th className="border p-3 font-semibold">State</th>
                  <th className="border p-3 font-semibold">Pin Code</th>
                  <th className="border p-3 font-semibold">Address 1</th>
                  <th className="border p-3 font-semibold">Address 2</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((c, index) => (
                  <tr
                    key={c.id}
                    className="hover:bg-blue-50 transition duration-200"
                  >
                    <td className="border p-3">{index + 1}</td>
                    <td className="border p-3">
                      {c.first_name} {c.last_name}
                    </td>
                    <td className="border p-3">{c.email}</td>
                    <td className="border p-3">{c.phone}</td>
                    <td className="border p-3">{c.gender || "N/A"}</td>
                    <td className="border p-3">{c.role || "N/A"}</td>
                    <td className="border p-3">{c.city}</td>
                    <td className="border p-3">{c.state}</td>
                    <td className="border p-3">{c.pin_code}</td>
                    <td className="border p-3">{c.address1}</td>
                    <td className="border p-3">{c.address2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CustomerList;
