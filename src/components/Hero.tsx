type HeroProps = {
  name: string;
  photo: string;
};

function Hero({ name, photo }: HeroProps) {
  return (
    <section className="section hero">
      <img className="hero__image" src={photo} alt={name} />
      <h1 className="section__title hero__title">{name}</h1>
    </section>
  );
}

export default Hero;
