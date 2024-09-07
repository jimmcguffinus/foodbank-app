import React, { useState } from 'react';

// Define a simple Agency structure with just the agency name
type Agency = {
  agency: string;
};

const AgencyForm = () => {
  // Initialize the state with just the agency name
  const [agency, setAgency] = useState<Agency>({
    agency: '',
  });

  // Initialize state for handling form validation errors
  const [errors, setErrors] = useState<Partial<Record<keyof Agency, string>>>({});
  const [submittedData, setSubmittedData] = useState<string | null>(null);

  // Handle text input change for agency name
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAgency(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  // Submit handler for the form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agency.agency) {
      setErrors({ agency: 'Agency Name is required' });
    } else {
      setSubmittedData(agency.agency); // Set the submitted data (Agency Name)
      console.log('Agency Data Submitted:', agency);
    }
  };

  return (
    <div>
      <h2>Agency Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Agency Name */}
        <div>
          <label>Agency Name</label>
          <input
            type="text"
            name="agency"
            value={agency.agency}
            onChange={handleInputChange}
            required
          />
          {errors.agency && <span style={{ color: 'red' }}>{errors.agency}</span>}
        </div>

        {/* Submit */}
        <button type="submit">Submit</button>
      </form>

      {/* Show submitted data */}
      {submittedData && (
        <div>
          <h3>Submitted Agency Name:</h3>
          <p>{submittedData}</p>
        </div>
      )}
    </div>
  );
};

export default AgencyForm;
