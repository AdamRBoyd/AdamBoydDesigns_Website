import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { useForm } from 'react-hook-form';
import { font, palette } from 'styled-theme';
// import { resetState } from 'react-modal/lib/helpers/ariaAppHider';
// import { resetWarningCache } from 'prop-types/checkPropTypes';
import { ToastContainer, toast, Zoom } from 'react-toastify';
// import emailjs from 'emailjs-com';

import { Paragraph } from '../../components';
import 'react-toastify/dist/ReactToastify.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`;

const StyledForm = styled.form`
  background: white;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 1rem auto 0;
  width: 500px;
  padding: 1rem 3rem 1.5rem;
  box-shadow: 0px 0px 5px 0px ${palette('grayscale', 4)};
`;

const StyledInput = styled.input`
  border: 1px solid transparent;
  border-bottom: 1px solid ${palette('grayscale', 4)};
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding: 0.6rem;
  width: 100%;
`;

const StyledTextArea = styled.textarea`
  border: 1px solid ${palette('grayscale', 4)};
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding: 1rem;
  margin-top: 0.5rem;
  height: 11rem;
  width: 100%;
`;

const StyledLabel = styled.label`
  color: ${palette('primary', 0)};
  display: block;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  margin-top: 1.3rem;
`;

const StyledButton = styled.button`
  background-color: ${palette('primary', 0)};
  border: 1px solid ${palette('grayscale', 2)};
  color: ${palette('grayscale', 6)};
  font-family: sans-serif;
  font-size: 1.3rem;
  margin: 2rem 0 0.5rem;
  align-self: center;
  width: 50%;
  padding: 0.5rem;
`;

const ParagraphWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const StyledToast = styled(ToastContainer)`
  position: absolute;
  top: ${window.innerHeight - 150}px;
  left: 0;
`;

const ContactForm = () => {
  const [disabled, setDisabled] = useState(false);
  const form = useRef();

  const toastifySuccess = () => {
    toast.success('Email Sent!', {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
      theme: 'dark',
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setDisabled(true);
    toastifySuccess();

    // NOTE: Uncomment when ready to send emails
    // emailjs
    //   .sendForm(
    //     "service_ket4hzc", // Service Id
    //     "template_ku5yk77", // Templatye Id
    //     form.current,
    //     "user_R3txnqG2l7Tr7ppVA3csm" // Username
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <Wrapper>
      {disabled ? (
        <ParagraphWrapper>
          <Paragraph>Thank You!</Paragraph>
          <Paragraph>I will get back to you as soon as possible!</Paragraph>
        </ParagraphWrapper>
      ) : (
        <StyledForm ref={form} onSubmit={sendEmail}>
          <StyledLabel>Name: </StyledLabel>
          <StyledInput type='text' name='user_name' required />

          <StyledLabel>Email: </StyledLabel>
          <StyledInput type='email' name='user_email' required />

          <StyledLabel>Subject: </StyledLabel>
          <StyledInput name='subject' required />

          <StyledLabel>Message: </StyledLabel>
          <StyledTextArea name='message' required />

          <StyledButton
            className='submitButton'
            disabled={disabled}
            type='submit'
          >
            Send
          </StyledButton>
        </StyledForm>
      )}
      <StyledToast transition={Zoom} />
    </Wrapper>
  );
};

ContactForm.propTypes = {
  reverse: PropTypes.bool,
};

export default ContactForm;
