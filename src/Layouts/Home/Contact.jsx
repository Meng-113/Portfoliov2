import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import Social from '../../components/Social';

const Contact = ({ data }) => {
  const fieldClassName =
    'field-surface w-full rounded-xl px-4 py-3 text-sm text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20';
  const labelClassName =
    'mb-2 block text-sm font-semibold uppercase tracking-[0.08em] text-slate-500';
  const contactPoints = Array.isArray(data?.contactPoints) ? data.contactPoints : [];

  return (
    <div className="mx-auto mt-24 w-[80%] text-left text-slate-900" id="contact">
      <SectionTitle
        id="contact"
        eyebrow="Contact"
        title="Let's Connect"
        description="You can reach me by email, social media, or the contact form below."
      />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card-surface p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-slate-900">
            Contact Details
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            {data?.contactDetail}
          </p>
          {contactPoints.length > 0 ? (
            <dl className="mt-6 space-y-3">
              {contactPoints.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3 last:border-b-0 last:pb-0"
                >
                  <dt className="text-sm font-medium uppercase tracking-[0.12em] text-slate-500">
                    {item.label}
                  </dt>
                  <dd className="text-right text-sm font-semibold text-slate-800">
                    {item.href ? (
                      <a href={item.href} className="transition hover:text-sky-600">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
          {data?.contactEmail ? (
            <Button
              href={data.contactEmail}
              variant="primary"
              ariaLabel="Email me"
              size="sm"
              className="mt-7"
            >
              Email Me
            </Button>
          ) : (
            <p className="mt-7 text-sm text-slate-500">
              Contact email is not set yet.
            </p>
          )}
          <h3 className="mt-7 text-s font-semibold uppercase tracking-[0.2em] text-slate-500">
            SOCIAL
          </h3>
          <Social socials={data?.socials} />
        </div>
        <div className="card-surface p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-slate-900">
            Send a Message
          </h3>
          <form action="" className="mt-5 space-y-4">
            <div>
              <label htmlFor="name" className={labelClassName}>
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className={fieldClassName}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClassName}>
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className={fieldClassName}
              />
            </div>
            <div>
              <label htmlFor="message" className={labelClassName}>
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                className={`${fieldClassName} min-h-[12rem] resize-y`}
              ></textarea>
            </div>
          </form>
          <Button
            type="button"
            variant="primary"
            ariaLabel="Send Message"
            size="sm"
            className="mt-4"
          >
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
