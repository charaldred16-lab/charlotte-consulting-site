export default function CharlotteConsultingSite() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* Hero */}
      <section className="bg-rose-100 px-6 py-20 md:px-16 lg:px-24 border-b border-rose-200">
        <div className="max-w-5xl mx-auto">
          <p className="mb-4 text-sm uppercase tracking-widest text-rose-400">
            Charlotte Aldred
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Helping ecommerce brands create better digital experiences that customers love and businesses benefit from.</h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-stone-600">
            I’m a customer-led digital experience and optimisation specialist with 10+ years’ experience helping global ecommerce businesses improve how people discover, use and engage with digital products.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-2xl bg-rose-200 px-6 py-3 text-sm font-medium text-stone-800 transition hover:opacity-90"
            >
              View Services
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-rose-200 px-6 py-3 text-sm font-medium transition hover:bg-rose-100"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-semibold">About me</h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-stone-700">
            <p>
              My background spans experimentation, UX research, product optimisation and digital strategy, with experience leading initiatives at Ocado Technology and Hertz.
            </p>

            <p>
              I’ve worked across ecommerce, customer experience and digital product teams to improve conversion, customer journeys and commercial performance through evidence-led optimisation.
            </p>

            <p>
              What motivates me most is understanding customer behaviour and finding smarter, simpler and more innovative ways to improve digital experiences.
            </p>

            <p>
              I’m naturally adaptable, collaborative and commercially minded, and enjoy working with brands that value curiosity, experimentation and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-stone-100 px-6 py-20 md:px-16 lg:px-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <h2 className="mb-4 text-3xl font-semibold">Services</h2>
            <p className="max-w-3xl text-lg text-stone-600">
              Flexible support for ecommerce and consumer brands looking to improve digital performance, customer experience and conversion.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">
                Discover unmet customer needs and opportunities for growth
              </h3>

              <p className="mb-6 leading-relaxed text-stone-600">
                Research that uncovers opportunities for new products, better experiences and stronger customer engagement.</p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">
                Increase conversion
              </h3>

              <p className="mb-6 leading-relaxed text-stone-600">
                Use experimentation, behavioural insight and customer journey optimisation to remove friction.</p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">
                Shape digital strategy
              </h3>

              <p className="mb-6 leading-relaxed text-stone-600">
                Helping product and digital teams make confident, evidence-based decisions.</p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">
                Fractional Digital Experience Lead
              </h3>

              <p className="mb-6 leading-relaxed text-stone-600">
                Embedded strategic and hands-on support for ecommerce and digital teams on a flexible basis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl font-semibold">
            Case studies
          </h2>

          <div className="grid gap-6">
            <div className="rounded-3xl border border-stone-200 bg-white p-8">
              <p className="mb-2 text-3xl font-semibold">2x</p>
              <p className="text-lg leading-relaxed text-stone-700">
                Doubled conversion rates through customer journey optimisation and experimentation.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-8">
              <p className="mb-2 text-3xl font-semibold">$10+</p>
              <p className="text-lg leading-relaxed text-stone-700">
                Revenue per visitor uplift delivered through digital experience improvements.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-8">
              <p className="mb-2 text-3xl font-semibold">88%</p>
              <p className="text-lg leading-relaxed text-stone-700">
                Organic growth from digital improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-rose-100 px-6 py-20 md:px-16 lg:px-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-semibold leading-tight md:text-5xl">
            Open to fractional, consulting and flexible part-time opportunities.
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-stone-700">
            Interested in improving your digital experience? Whether you need strategic support, UX research or optimisation expertise, I'd love to hear about your project.</p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:charaldred16@gmail.com"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:opacity-90"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/charlotte-aldred-b055151b/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:bg-white/40"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

