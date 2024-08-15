import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  price: Yup.number().positive('Must be positive').required('Required'),
  description: Yup.string().required('Required')
});

function AddNewItem() {
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    price: '',
    description: ''
  };

  const onSubmit = (values, { setSubmitting }) => {
    axios.post('http://localhost:3001/pizzas', values)
      .then(response => {
        console.log('Pizza added successfully:', response.data);
        navigate('/pizzas');
      })
      .catch(error => console.error('Error adding pizza:', error))
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="container mt-5">
      <h2>Add New Pizza</h2>
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
              <label htmlFor="price">Price</label>
              <Field type="number" name="price" className="form-control" />
              <ErrorMessage name="price" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <Field as="textarea" name="description" className="form-control" />
              <ErrorMessage name="description" component="div" className="text-danger" />
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Adding...' : 'Add Pizza'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddNewItem;