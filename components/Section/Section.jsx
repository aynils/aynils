const Section = ({ children }) => {
  return (
    <section className="py-10 lg:py-10">
      <container className="mx-auto block max-w-7xl px-6 sm:px-16 lg:px-24">{children}</container>
    </section>
  )
}

export default Section
