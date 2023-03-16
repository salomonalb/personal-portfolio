type AboutProps = {
  text: string;
};

function About({ text }: AboutProps) {
  const paragraphs = text.split(".").map((paragraph) => {
    return <p className="section__text">{paragraph}.</p>;
  });

  return (
    <section id="about" className="section about">
      <h2 className="section__title">About Me :</h2>
      {paragraphs}
    </section>
  );
}

export default About;
