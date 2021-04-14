import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ContactForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form id="contact-form" class="tm-contact-form" onSubmit={handleSubmit}>
            <div class="form-group">
                <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Name"
                    class="form-control rounded-0"
                />
            </div>
            <div class="form-group">
                <Field
                    name="email"
                    component="input"
                    type="email"
                    placeholder="Email"
                    class="form-control rounded-0"
                />
            </div>
            <div class="form-group">
                <Field name="inquiry" class="form-control" component="select" id="contact-select">
                    <option value="-">Subject</option>
                    <option value="sales">Sales &amp; Marketing</option>
                    <option value="creative">Creative Design</option>
                    <option value="uiux">UI / UX</option>
                </Field>
            </div>
            <div class="form-group">
                <Field name="message" placeholder="Message" component="textarea" rows="8" class="form-control rounded-0" />
            </div>
            <div class="form-group mb-0">
                <button type="submit" class="btn btn-primary rounded-0 d-block ml-auto mr-0 tm-btn-animate tm-btn-submit tm-icon-submit" disabled={pristine || submitting}><span>Submit</span></button>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'contact',
})(ContactForm);