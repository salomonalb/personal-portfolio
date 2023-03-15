type AboutProps = {
  text: string
}

function About({text}: AboutProps) {

  const paragraphs = text.split('.').map(paragraph => {
    return (
      <p>{paragraph}.</p>
    )
  })

  return (
    <section>
      <h2>About Me :</h2>
      {paragraphs}
    </section>
  )
}

export default About