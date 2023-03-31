import React, { useState } from "react";
import * as F from "./indexStyles";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    body: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <>
      <h1>Contact</h1>

      <F.FormWrapper onSubmit={handleSubmit}>
        <F.InputWrapper>
          <F.InputLabel>Full Name</F.InputLabel>
          <F.Input
            type="text"
            name="name"
            placeholder="Enter your full name"
            minLength="3"
            required
            value={formData.name}
            onChange={handleInputChange}
          />
        </F.InputWrapper>

        <F.InputWrapper>
          <F.InputLabel>Subject</F.InputLabel>
          <F.Input
            type="text"
            name="subject"
            placeholder="Enter the subject"
            minLength="3"
            required
            value={formData.subject}
            onChange={handleInputChange}
          />
        </F.InputWrapper>

        <F.InputWrapper>
          <F.InputLabel>Email</F.InputLabel>
          <F.Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </F.InputWrapper>
        <F.InputWrapper>
          <F.InputLabel>Body</F.InputLabel>
          <F.Textarea
            name="body"
            placeholder="Enter your message"
            minLength="3"
            required
            value={formData.body}
            onChange={handleInputChange}
          />
        </F.InputWrapper>

        <F.Button type="submit">Submit</F.Button>
      </F.FormWrapper>
    </>
  );
};

export default ContactForm;
