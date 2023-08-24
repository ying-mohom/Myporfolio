import React, { useRef } from 'react';
import "./contact.css";
import emailjs from 'emailjs-com';


function Contact() {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hub6mlm', 'template_1j4h7xq', form.current, 'pSWMd8j5Y6IDQIG1-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };


    return (
        <section className='get_in_touch'>
            <h1 className='title'>get in touch</h1>
            <div className='container'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='contact-form row'>
                        <div className="form-floating mb-5 p-2 col-lg-6">
                            <input type="text" className="form-control" id="floatingInput" placeholder="YingYing" name="from_name" required />
                            <label for="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mb-5 p-2 col-lg-6">
                            <input type="text" className="form-control" id="floatingInput" placeholder="097788..." name="from_phone" />
                            <label for="floatingInput">Contact Number</label>
                        </div>
                        <div className="form-floating mb-5 p-2 col-lg-12">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="from_email" required />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating col-lg-12">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="message"></textarea>
                            <label for="floatingTextarea">Message</label>
                        </div>
                        <div className='form-field text-center col-lg-6'>
                            <button type="submit" className="btn submit-btn" id="message" >SUBMIT</button>

                        </div>



                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
