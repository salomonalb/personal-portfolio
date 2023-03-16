import { contact } from "../data";
import linkIcon from "../images/icons/link-icon.png";
type contactProps = {
  contacts: contact[];
};

function Contact({ contacts }: contactProps) {
  const contactElements = contacts.map((contact) => {
    return (
      <li>
        <a href={contact.link} target="_blank">
          <img src={contact.icon} alt="" /> {contact.text}{" "}
          <img src={linkIcon} alt="" />
        </a>
      </li>
    );
  });

  return (
    <section>
      <h2>Contact</h2>
      <ul>{contactElements}</ul>
    </section>
  );
}

export default Contact;
