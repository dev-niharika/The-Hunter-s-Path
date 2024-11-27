import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/savecontact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "" });
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="py-3 py-md-2 py-xl-8">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <h2 className="mb-4 display-5 text-center">Need Help</h2>
            <hr className="w-50 mx-auto mb-5 border-dark-subtle" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="card border-dark rounded shadow-sm">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      id="email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control"
                      id="phone"
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
