import Discription from "../shared/Description/Discription";
import Title from "../shared/Title/Title";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={styles.container} id="Contact">
      <div className={styles.wrapper}>
        <Title label={"Contact"} />
        <Discription text="Feel free to reach out to me for any questions or opportunities!" />
        <form className={styles.contact_form}>
          <div className="text-2xl mb-[6px] font-semibold text-text_primary">
            Email Me 🚀
          </div>
          <input
            type="email"
            className={styles.input}
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Your Name"
            required
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Subject"
            required
          />
          <textarea
            className={styles.input}
            placeholder="Message"
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
