import React, { useState } from "react";
import styled from "styled-components";
import profileImg from "../assets/myPhoto.jpg";

const Section = styled.section`
  background-color: rgb(5, 26, 48);
  padding: 6rem 2rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: rgb(243, 244, 247);
  margin-bottom: 1rem;
`;

const Subheading = styled.p`
  font-size: 1.1rem;
  color: #64748b;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-inline: auto;
`;

const FormContainer = styled.form`
  background: white;
  max-width: 700px;
  margin: 0 auto;
  border-radius: 16px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  text-align: left;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const IntroBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1.5rem;

  img {
    width: 50px;
    border-radius: 50%;
  }

  h4 {
    font-weight: bold;
    margin: 0;
    color: #0f172a;
  }

  p {
    margin: 0.3rem 0 0;
    color: #475569;
    font-size: 0.95rem;
  }
`;

const FormFields = styled.div`
  border-top: 1px solid #e2e8f0;
  padding: 2rem;

  label {
    font-weight: 600;
    display: block;
    margin-bottom: 0.3rem;
    color: #0f172a;
    font-size: 1.1rem;
  }

  small {
    color: #64748b;
    display: block;
    margin-bottom: 0.8rem;
  }

  input[type="text"],
  input[type="email"],
  textarea,
  select {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }

  button {
    background-color: #3b82f6;
    color: white;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
  }
`;

export default function ContactProjectForm() {
  const [selectedServices, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    stage: "",
    otherService: "",
    typeOfWebsite: "",
    noOfScreens: "",
    logoStyle: "",
    logoName: "",
    logoTagline: "",
    bugDescription: "",
    bugTech: "",
    contentType: "",
    contentTone: "",
    wordCount: "",
    startingFromScratch: "",
    hasFigmaDesign: "",
    backendExists: "",
    frontendExists: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceChange = (e) => {
    const selected = e.target.value;
    setService(selected);
    setFormData({ ...formData, selectedService: selected });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          stage: "",
          otherService: "",
          typeOfWebsite: "",
          noOfScreens: "",
          logoStyle: "",
          logoName: "",
          logoTagline: "",
          bugDescription: "",
          bugTech: "",
          contentType: "",
          contentTone: "",
          wordCount: "",
          startingFromScratch: "",
          hasFigmaDesign: "",
          backendExists: "",
          frontendExists: "",
          selectedService: ""
        }); //  reset all fields
        setService(""); //  reset selectedServices dropdown
      }
      else {
        alert("Failed to submit form");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while submitting the form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact">
      <Heading>Tell us about your project!</Heading>
      <Subheading>
        We’re ready to hear about your project. Just answer a few questions to
        help us understand your specific needs and we’ll take it from there.
      </Subheading>

      <FormContainer onSubmit={handleSubmit}>
        <IntroBox>
          <img src={profileImg} alt="Shreya Gupta" />
          <div>
            <h4>Hi, I'm Shreya!</h4>
            <p>
              I'm excited to hear about your project! Share details and I’ll get
              back to you as soon as possible.
            </p>
          </div>
        </IntroBox>

        <FormFields>
          <label>Your Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Your Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>What service are you interested in?</label>
          <select name="selectedServices" value={selectedServices} onChange={handleServiceChange} required>
            <option value="">Select one</option>
            <option value="Full Stack Web Development">Full Stack Web Development</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="UI/UX Design">UI/UX Design | Figma</option>
            <option value="Logo Design">Logo Design</option>
            <option value="Bug Fix">Bug Fix</option>
            <option value="Content Writing">Content Writing</option>
            <option value="Other">Other</option>
          </select>

          {selectedServices === "Other" && (
            <>
              <label>Other Service</label>
              <input type="text" name="otherService" value={formData.otherService} onChange={handleChange} />
            </>
          )}

          {(selectedServices === "Full Stack Web Development" || selectedServices === "Frontend Development" || selectedServices === "Backend Development") && (
            <>
              <label>Are you starting from scratch?</label>
              <select name="startingFromScratch" value={formData.startingFromScratch} onChange={handleChange}>
                <option value="">Select one</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </>
          )}

          {selectedServices === "Full Stack Web Development" && (
            <>
              <label>Type of Website (e.g., Portfolio, E-commerce)</label>
              <input type="text" name="typeOfWebsite" value={formData.typeOfWebsite} onChange={handleChange} />
            </>
          )}

          {selectedServices === "Frontend Development" && (
            <>
              <label>Does the backend already exist if needed?</label>
              <select name="backendExists" value={formData.backendExists} onChange={handleChange}>
                <option value="">Select one</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

              <label>Do you already have Figma or Design?</label>
              <select name="hasFigmaDesign" value={formData.hasFigmaDesign} onChange={handleChange}>
                <option value="">Select one</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </>
          )}

          {selectedServices === "Backend Development" && (
            <>
              <label>Does the frontend already exist?</label>
              <select name="frontendExists" value={formData.frontendExists} onChange={handleChange}>
                <option value="">Select one</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </>
          )}

          {selectedServices === "UI/UX Design" && (
            <>
              <label>No. of Screens/Pages</label>
              <input type="text" name="noOfScreens" value={formData.noOfScreens} onChange={handleChange} />
            </>
          )}

          {selectedServices === "Logo Design" && (
            <>
              <label>Logo/Brand Name</label>
              <input type="text" name="logoName" value={formData.logoName} onChange={handleChange} />

              <label>Tagline/Slogan</label>
              <input type="text" name="logoTagline" value={formData.logoTagline} onChange={handleChange} />

              <label>Preferred Logo Style</label>
              <input type="text" name="logoStyle" value={formData.logoStyle} onChange={handleChange} />
            </>
          )}

          {selectedServices === "Bug Fix" && (
            <>
              <label>Description of the Bug</label>
              <textarea name="bugDescription" value={formData.bugDescription} onChange={handleChange} />

              <label>Technology Stack</label>
              <input type="text" name="bugTech" value={formData.bugTech} onChange={handleChange} />
            </>
          )}

          {selectedServices === "Content Writing" && (
            <>
              <label>Type of Content</label>
              <input type="text" name="contentType" value={formData.contentType} onChange={handleChange} />

              <label>Tone of Writing</label>
              <input type="text" name="contentTone" value={formData.contentTone} onChange={handleChange} />

              <label>Word Count (approx)</label>
              <input type="text" name="wordCount" value={formData.wordCount} onChange={handleChange} />
            </>
          )}

          <label>What planning stage are you in right now?</label>
          <select name="stage" value={formData.stage} onChange={handleChange} required>
            <option value="">Select one</option>
            <option value="Just Exploring">Just Exploring</option>
            <option value="Have a Rough Plan">Have a Rough Plan</option>
            <option value="Ready to Start">Ready to Start</option>
          </select>

          <label>Additional Message</label>
          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Share more about your project..."
          />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </FormFields>
      </FormContainer>
    </Section>
  );
}
