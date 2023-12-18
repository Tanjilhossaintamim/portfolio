"use client";
import { useRef } from "react";
import Discription from "../shared/Description/Discription";
import Title from "../shared/Title/Title";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_d5dfsus",
        "template_8v4ru8g",
        form.current,
        "3vvKd7d0NwxAhcl37"
      )
      .then(
        (result) => {
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={styles.container} id="Contact">
      <div className={styles.wrapper}>
        <Title label={"Contact"} />
        <Discription text="Feel free to reach out to me for any questions or opportunities!" />
        <form
          ref={form}
          onSubmit={handleSubmit}
          className={styles.contact_form}
        >
          <div className="text-2xl mb-[6px] font-semibold text-text_primary">
            Email Me 🚀
          </div>
          <input
            type="email"
            className={styles.input}
            placeholder="Your Email"
            name="from_email"
            required
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Your Name"
            name="from_name"
            required
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Subject"
            name="subject"
            required
          />
          <textarea
            className={styles.input}
            placeholder="Message"
            name="message"
            rows={4}
            required
          />
          <input type="submit" value="Send" className={styles.contact_btn} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
