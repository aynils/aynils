const Section = ({ id, children, image, imagePlacement, backgroundColor }) => {
  return (
    <section className={`py-10 lg:py-20 ${backgroundColor}`} id={id}>
      <container
        className={`"mx-auto mx-auto block grid max-w-7xl px-6 sm:px-16 lg:px-24 ${
          image ? 'lg:grid-cols-3 ' : ''
        }`}
      >
        {image && (
          <div
            className={`h-9/12 mb-0 hidden hidden w-9/12 justify-self-start lg:flex ${
              imagePlacement === 'right' ? 'order-3' : 'order-0'
            } `}
          >
            {image}
          </div>
        )}
        <article className={`${image ? 'lg:col-span-2' : ''}`}>{children}</article>
      </container>
    </section>
  )
}

export default Section
