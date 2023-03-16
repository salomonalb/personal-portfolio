import { contact } from "../data";
import linkIcon from "../images/icons/link-icon.png";
type contactProps = {
  contacts: contact[];
};

function Contact({ contacts }: contactProps) {
  const contactElements = contacts.map((contact) => {
    return (
      <li className="contact">
        <a className="contact__row section__text" href={contact.link} target="_blank">
          <img className="contact__icon" src={contact.icon} alt="" /> {contact.text}{" "}
          <img className="section__link-icon" src={linkIcon} alt="" />
        </a>
      </li>
    );
  });

  return (
    <section className="section">
      <h2 className="section__title">Contact Me :</h2>
      <ul className="contacts-container">{contactElements}</ul>
    </section>
  );
}

export default Contact;
