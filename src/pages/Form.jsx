import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    resume: null,
    availability: "",
    experience: "",
    salaryExpectation: "",
    startDate: "",
    remoteWork: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const uploadResume = async () => {
    if (!formData.resume) return "";

    const formDataUpload = new FormData();
    formDataUpload.append("file", formData.resume);
    formDataUpload.append("upload_preset", "your_cloudinary_preset"); // Replace with your Cloudinary preset

    const response = await fetch("https://api.cloudinary.com/v1_1/your_cloud_name/upload", {
      method: "POST",
      body: formDataUpload,
    });

    const data = await response.json();
    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resumeURL = await uploadResume();

    const submissionData = {
      ...formData,
      resume: resumeURL,
    };

    const response = await fetch("YOUR_GOOGLE_APPS_SCRIPT_DEPLOYMENT_URL", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submissionData),
    });

    if (response.ok) {
      alert("Application submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        gender: "",
        resume: null,
        availability: "",
        experience: "",
        salaryExpectation: "",
        startDate: "",
        remoteWork: "",
      });
    } else {
      alert("Error submitting application. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-lg bg-white/80 text-black shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Job Application</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Upload Resume (PDF/DOC)</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Availability</label>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select Availability</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Freelance">Freelance/Contract</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Experience</label>
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select Experience</option>
            <option value="6 months - 1 year">6 months - 1 year</option>
            <option value="1 - 2 years">1 - 2 years</option>
            <option value="3 - 4 years">3 - 4 years</option>
            <option value="5+ years">5+ years</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Expected Salary ($ per month)</label>
          <input
            type="number"
            name="salaryExpectation"
            value={formData.salaryExpectation}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Available Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Willing to Work Remotely?</label>
          <select
            name="remoteWork"
            value={formData.remoteWork}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Form;
