import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import "./Contact.css"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation for required fields
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First name is required.";
    if (!formData.lastName) formErrors.lastName = "Last name is required.";
    if (!formData.phone) formErrors.phone = "Phone number is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    if (!formData.message) formErrors.message = "Message is required.";
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);  // Show validation errorsp
      return;
    }

    try {
     const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      alert(response.data.message);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
      setErrors({}); // Reset errors if successful
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      alert("There was an error submitting your message. Please try again.");
    }
  };

  return (
    <div className="contact-body">
      <div className="grid-contact">
        <div className="content-box">
          <h1>Contact <b>Us</b></h1>
          <img src="https://media-hosting.imagekit.io//7cb7dd4aba604837/contactheadimg.jpg?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qOJe4Nfsuu-XzXoqa4fOFeafOqueZjVX3F4-NwEdFVdJpkkooVQLHfayVu57-g2f8OPsxzVMSJSoOWYd1lFlUn17SjknV-NRJuqyYGznF6YJAPbs2I5KZbQXb06bRpw4NqOkkopssjuW7YACiTKlGbiPxsM10-0tp3W4AEdoyLlxP~kygEYnuElNJ1Jpi-ZEsIF6HLSuPZ9orUF6Za16uS07JD4TzkwWPBn2mIlvIPVXVQyxusBSNsi~bFhoJfKkRtzmetXrvVIhHDM4TpQ9~SSGJwvlXcEqUWTHbGGu8-RQcbGGBIgDJoB943sgwmtRrYPGAASu2Ayim6t01f4L-w__" alt="" className="cantact-head-img" />
        </div>
      </div>

      <div className="contact-container">
        {/* Left Box: Contact Form */}
        <div className="left-box">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="name-row">
              <label htmlFor="firstName">
                First Name*
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
              </label>
              <label htmlFor="lastName">
                Last Name*
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                {errors.lastName && <span className="error">{errors.lastName}</span>}
              </label>
            </div>

            <div className="contact-row">
              <label htmlFor="phone">
                Phone Number*
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="Phone Number"
                  required
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </label>
              <label htmlFor="email">
                E-Mail*
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </label>
            </div>

            <div className="message-row">
              <label htmlFor="message">Your Message*</label>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn">
              Send
            </button>
          </form>
        </div>

        {/* Right Box: Address and Social Media */}
        <div className="right-box">
          <div className="address-section">
            <h3>Address</h3>
            <p>
              <a
                href="https://www.google.com/maps?q=33rd+Street,+GKM+colony,+kolathur,+Chennai-600082,+Tamilnadu"
                target="_blank"
                rel="noopener noreferrer"
              >
                33rd Street, GKM colony, Kolathur, Chennai-600082, Tamilnadu
              </a>
            </p>
            <h3>Phone Number</h3>
            <p>
              <a href="tel:+917358569113">+91 7358569113</a>
            </p>
            <h3>Email</h3>
            <p>
              <a href="mailto:Blissfuloccasions@gmail.com">
                Blissfuloccasions@gmail.com
              </a>
            </p>
          </div>

          <div className="social-media-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://media-hosting.imagekit.io//576397c93e604ef7/social%203.png?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=f6fKcRM7uqZqK1GdsO8kp~R2wVsDBk0tV3RDWOGKAtC6e8r81H-B1S9kPIfPGgAho43~QQNkAUSRPVdWepOgONktc~RZWailVZCk8p8RR7BoMnVdCle83s-veaUlTLjO57YBzBKDEhyctYoCol-QBfjgX1U3dvR3lVl7kb671JV-OOyJsMRTv3Y-8z2vnfNbC6sGEm8a5CY8cSArXHUpjJuor0kwv7d5NJlVeflk4KOl-IxxBDsRHYJVMxZs5Ixg8aKTMVwQszDqUGHr8w1Jq8KzsisEKs4~2MUdO3mcOBZCIlzaWWhkOtBR-1vzctWhsqK3lQw0GntFsPaZEUXRCg__"
                  alt="Facebook"
                  width="30"
                  height="30"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://media-hosting.imagekit.io//0af7aa29b2c74a0a/social2.png?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QI2vaszH3twLQrCHhzoDqnOWiRGSkdPRRDhe~orszG218CK-aradzc7dFfvo3vdPJZ5zHNJaxtYbMwWp33OBeP~f44KAuFNMdANoGQdfROKcAeR3SGC3pNZjKQssYJaHt~3JZRLOI27x2pumd9JQWZ45MbR-LfooVqVrTjKmLxfyD5Tj~CjcnPytHfC3483VgPUoWxMg3a5ICdlyVkybt~0WIsekJfBfIdGFG87VtO2HOc19wytg~Js2OlUc4Mflb3VV2bow4JCuLNxqpVffbJ5uadkZOOIfTUiUhSDvW-gCH3yZ-xdaJVAndsnvrx3vTdTLhhYtRyJVvwRZXz6ZfQ__"
                  alt="Twitter"
                  width="40"
                  height="40"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://media-hosting.imagekit.io//281ee864adfe4f9a/social1.png?Expires=1837316891&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qXeQS7sIVUhxrrhQcAYMQjuFYB8xWr5he1vD52QSc3F9QiW4iGKJOuNayuDuIlJuqxxc8yWK-BSnVKA3WOSQcBx3RH3k2GyFmRALJTqtXM2774mzZNEVlsqdqgAcVYwWzvg1dJ~abyPoaR~BufngqGhjUnMPo-XlqLWZu4PodVmf08eYEseja-2Idae8TvW5HZ03UGRHWepwkDBEy-FC29aJZA2T5j7T~bBJvnp1pAiPPUW1OC-qEqgUEg~1WBQn7CjHO5MSK8Km9OP7qEebRLo6V3TTkPOLcIBaA6bIuGUoqsTlPZWj5CmViNH9YQgP4rpR5QV92ouC1KzO9ugYZA__"
                  alt="Instagram"
                  width="30"
                  height="30"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
