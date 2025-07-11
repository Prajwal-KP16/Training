import React, { useState, useEffect } from "react";

function EmployeeValidationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    employeeId: "",
    joiningDate: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Validation logic
  const validate = (fieldValues = form) => {
    const newErrors = {};

    if (!/^[A-Za-z ]{4,}$/.test(fieldValues.name)) {
      newErrors.name =
        "Name must be at least 4 characters long and only contain letters and spaces";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValues.email)) {
      newErrors.email = "Email must be a valid email address";
    }

    if (!/^\d{6}$/.test(fieldValues.employeeId)) {
      newErrors.employeeId = "Employee ID must be exactly 6 digits";
    }

    const selectedDate = new Date(fieldValues.joiningDate);
    const today = new Date("2025-04-11");
    if (!fieldValues.joiningDate || selectedDate > today) {
      newErrors.joiningDate = "Joining Date cannot be in the future";
    }

    return newErrors;
  };

  // Check form validity on every change
  useEffect(() => {
    const currentErrors = validate(form);
    setErrors(currentErrors);
    setIsFormValid(Object.keys(currentErrors).length === 0);
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentErrors = validate(form);
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      alert("Form submitted successfully!");
      // Reset form
      setForm({
        name: "",
        email: "",
        employeeId: "",
        joiningDate: "",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="layout-column align-items-center mt-20"
    >
      {/* Name */}
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-name"
      >
        <input
          className="w-100"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          data-testid="input-name-test"
        />
        {errors.name ? <p className="error mt-2">{errors.name}</p> : null}
      </div>

      {/* Email */}
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-email"
      >
        <input
          className="w-100"
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p className="error mt-2">{errors.email}</p>}
      </div>

      {/* Employee ID */}
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-employee-id"
      >
        <input
          className="w-100"
          type="text"
          name="employeeId"
          value={form.employeeId}
          onChange={handleChange}
          placeholder="Employee ID"
        />
        {errors.employeeId && <p className="error mt-2">{errors.employeeId}</p>}
      </div>

      {/* Joining Date */}
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-joining-date"
      >
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={form.joiningDate}
          onChange={handleChange}
          placeholder="Joining Date"
        />
        {errors.joiningDate && (
          <p className="error mt-2">{errors.joiningDate}</p>
        )}
      </div>

      {/* Submit Button */}
      <button data-testid="submit-btn" type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
}

export default EmployeeValidationForm;
