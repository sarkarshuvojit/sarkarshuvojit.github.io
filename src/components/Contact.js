import { useState } from "react";
import Socials from "../components/Socials";
const getMailtoUrl = ({email, name, phone, msg}) => {
  const body = encodeURIComponent(`Contact Details: ${email} ${name} ${phone} 
===========================

${msg}`)
  return `mailto:shuvojit.s.official@gmail.com?subject=Connect%20W%2F%20Shuvojit&body=${body}`
}
const Contact = () => {
  const [form, setForm] = useState({ email: "", name: "", phone: "", msg: "" });
  const [active, setActive] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { email, name, phone, msg } = form;
  const onSubmit = (e) => {
    e.preventDefault();
    if (email && name && phone && msg) {
      setSuccess(true);
      const mailtoUrl = getMailtoUrl({email, name, phone, msg})
      window.open(mailtoUrl, "_blank");
      setTimeout(() => {
        setForm({ email: "", name: "", phone: "", msg: "" });
        setSuccess(false);
      }, 2000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="roww resumo_fn_contact">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Contact</h3>
            <div className="get_in_touch_header">
              <h3 className="title">Get In Touch</h3>
              <Socials />
            </div>
            <p className="desc"> If you have any suggestions or projects, or even if you want to say “hello”, please fill out the form below, and I will reply to you shortly. </p>
          </div>
          {/* /Main Title */}
          {/* Contact Form */}
          <form className="contact_form" onSubmit={(e) => onSubmit(e)}>
            <div
              className="success"
              data-success="Your message has been received, we will contact you soon."
              style={{ display: success ? "block" : "none" }}
            >
              <span className="contact_success">
                Your message has been received, we will contact you soon.
              </span>
            </div>
            <div
              className="empty_notice"
              style={{ display: error ? "block" : "none" }}
            >
              <span>Please Fill Required Fields!</span>
            </div>
            {/* */}
            <div className="items_wrap">
              <div className="items">
                <div className="item half">
                  <div
                    className={`input_wrapper ${
                      active === "name" || name ? "active" : ""
                    }`}
                  >
                    <input
                      onFocus={() => setActive("name")}
                      onBlur={() => setActive(null)}
                      onChange={(e) => onChange(e)}
                      value={name}
                      name="name"
                      id="name"
                      type="text"
                    />
                    <span className="moving_placeholder">Name *</span>
                  </div>
                </div>
                <div className="item half">
                  <div
                    className={`input_wrapper ${
                      active === "email" || email ? "active" : ""
                    }`}
                  >
                    <input
                      onFocus={() => setActive("email")}
                      onBlur={() => setActive(null)}
                      onChange={(e) => onChange(e)}
                      value={email}
                      name="email"
                      id="email"
                      type="email"
                    />
                    <span className="moving_placeholder">Email *</span>
                  </div>
                </div>
                <div className="item">
                  <div
                    className={`input_wrapper ${
                      active === "phone" || phone ? "active" : ""
                    }`}
                  >
                    <input
                      onFocus={() => setActive("phone")}
                      onBlur={() => setActive(null)}
                      id="phone"
                      onChange={(e) => onChange(e)}
                      value={phone}
                      name="phone"
                      type="text"
                    />
                    <span className="moving_placeholder">Phone</span>
                  </div>
                </div>
                <div className="item">
                  <div
                    className={`input_wrapper ${
                      active === "message" || msg ? "active" : ""
                    }`}
                  >
                    <textarea
                      onFocus={() => setActive("message")}
                      onBlur={() => setActive(null)}
                      name="msg"
                      onChange={(e) => onChange(e)}
                      value={msg}
                      id="message"
                    />
                    <span className="moving_placeholder">Message</span>
                  </div>
                </div>
                <div className="item">
                  {/* <a id="send_message" href="#">
                    Send Message
                  </a> */}
                  <input
                    className="a"
                    type="submit"
                    id="send_message"
                    value="Send Message"
                  />
                </div>
              </div>
            </div>
          </form>
          {/* /Contact Form */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
