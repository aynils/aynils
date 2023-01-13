const Section = ({ id, children }) => {
  return (
    <section className="py-10 lg:py-10" id={id}>
      <container className="mx-auto block max-w-7xl px-6 sm:px-16 lg:px-24">
        <article>{children}</article>
      </container>
    </section>
  )
}

export default Section
