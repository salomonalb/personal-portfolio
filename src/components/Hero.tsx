type HeroProps = {
  name: string;
  photo: string;
};

function Hero({ name, photo }: HeroProps) {
  return (
    <section>
      <img src={photo} alt={name} />
      <h1>{name}</h1>
    </section>
  );
}

export default Hero;
