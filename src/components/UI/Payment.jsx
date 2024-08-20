import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import emailjs from 'emailjs-com'; // Import emailjs
import '../../styles/payment.css'; 

const stripePromise = loadStripe('pk_test_51Pi8xzRxAdZAgmGlocOauqIkKC1mq0Nu5Sc3nQQCW4DiRPH4FS5yfASTkHFUsLdcKyRFZOs5TORCXnm5oPq8PA4D00oTb7VeIY');

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    dob: '',
    address: '',
    paymentMethod: 'card'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: formData.name,
        email: formData.email,
        address: {
          line1: formData.address
        }
      }
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage('');
      setPaymentSuccess(true);
      console.log('Received Stripe PaymentMethod:', paymentMethod);

      // Send email on successful payment
      sendEmail();
    }
  };

  const sendEmail = () => {
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: `Payment successful for ${formData.name}. Amount: XXX. Details: ${JSON.stringify(formData)}`
    };

    emailjs.send('service_zs47ahr', 'template_z492tww', templateParams, 'EE4zEb3yxn-Qz00w4')
      .then((result) => {
        console.log('Email sent:', result.text);
      }, (error) => {
        console.log('Email sending error:', error.text);
      });
  };

  return (
    <div className="payment-form">
      {paymentSuccess ? (
        <h2>Transaction Successful</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="paymentMethod">Payment Method</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="card">Card</option>
            </select>
          </div>
          {formData.paymentMethod === 'card' && <CardElement />}
          <button type="submit" disabled={!stripe}>
            Pay
          </button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
      )}
    </div>
  );
};

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default Payment;
