import React, { useState } from "react";
import {
  FormWrapper,
  InputLabel,
  Input,
  Textarea,
  Button,
} from "./indexStyles";

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
    // Here you can submit the form data to your backend or do any other action you need
    console.log(formData);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div>
        {" "}
        <InputLabel>Full Name</InputLabel>
        <Input
          type="text"
          name="name"
          placeholder="Enter your full name"
          minLength="3"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div>
        {" "}
        <InputLabel>Subject</InputLabel>
        <Input
          type="text"
          name="subject"
          placeholder="Enter the subject"
          minLength="3"
          required
          value={formData.subject}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <InputLabel>Email</InputLabel>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        {" "}
        <InputLabel>Body</InputLabel>
        <Textarea
          name="body"
          placeholder="Enter your message"
          minLength="3"
          required
          value={formData.body}
          onChange={handleInputChange}
        />
      </div>

      <Button type="submit">Submit</Button>
    </FormWrapper>
  );
};

export default ContactForm;
