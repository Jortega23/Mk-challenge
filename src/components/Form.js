//imports------
import {useFormik} from 'formik'
import axios from 'axios'


//Validation function 
//validates for name, email, and message
const validate = values => {
  const errors = {};
  if(!values.name){
    errors.name ='Required';
  };

  if(!values.email){
    errors.email = 'Required'
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = 'Invalid Email Address'
  };

  if(!values.message){
    errors.message = 'Required'
  }else if(values.message.length > 5){
    errors.message = 'Message must be more than 5 characters long'
  }

  return errors;
};

const Form = () => {
  //setting up formik values/formik hook
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validate,
    onSubmit: values => {
      //submit to aws email api
      //using axios for the post mtehod
      // await axios.post('https://anxxtrd3td.execute-api.us-west-1.amazonaws.com/sendEmail'), {values}
      // alert(JSON.stringify(values))
      axios.post('https://anxxtrd3td.execute-api.us-west-1.amazonaws.com/sendEmail/send-email', {values})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    }
  })

  return (
    <div className='form-style'>
      <h1>Contact Us</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className='name-input'>
          <lable>Full Name: </lable>
          <input 
            type='name'
            name='name'
            placeholder='Enter your Name'
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? <div className='error-message'>{formik.errors.name}</div> : null}
        </div>
        <div className='email-input'>
          <label>Email: </label>
          <input 
            type='email'
            name='email'
            placeholder='Enter your Email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div className='error-message'>{formik.errors.email}</div> : null}
        </div>
        <div className='message-input'>
          <label>Message: </label>
          <textarea 
            type='message'
            name='message'
            placeholder='Type in your message'
            onChange={formik.handleChange}
            value={formik.values.message}
          />
        </div>
        {formik.errors.message ? <div className='error-message'>{formik.errors.message}</div> : null}
        <button className='btn-style'type='submit'>Send Messaged</button>
      </form>
    </div>
  )
}

export default Form
