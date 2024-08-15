import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Contact.css'; // Import the CSS file

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  subject: Yup.string().required('Required'),
  message: Yup.string().required('Required').min(10, 'Message must be at least 10 characters')
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    // Here you would typically send the form data to a server
    console.log('Form submitted:', values);
    setTimeout(() => {
      setSubmitted(true);
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      {submitted ? (
        <div className="alert alert-success">
          Thank you for your message! We'll get back to you soon.
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" className="form-control" />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" className="form-control" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone (optional)</label>
                <Field type="tel" name="phone" className="form-control" />
                <ErrorMessage name="phone" component="div" className="text-danger" />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <Field as="select" name="subject" className="form-control">
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Issue</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage name="subject" component="div" className="text-danger" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <Field as="textarea" name="message" className="form-control" rows="5" />
                <ErrorMessage name="message" component="div" className="text-danger" />
              </div>

              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </Form>
          )}
        </Formik>
      )}

      <div className="mt-5">
        <h3>Our Location</h3>
        <p>123 Pizza Street, Foodville, FL 12345</p>
        <h3>Phone</h3>
        <p>(555) 123-4567</p>
        <h3>Business Hours</h3>
        <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
        <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
      </div>
    </div>
  );
}

export default Contact;
