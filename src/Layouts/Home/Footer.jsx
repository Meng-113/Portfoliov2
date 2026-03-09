import Social from '../../components/Social';

const Footer = ({ name, socials }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-slate-200 py-8">
      <div className="w-[80%] mx-auto container-main flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-600">
          {'\u00a9'} {currentYear} {name}. All rights reserved.
        </p>
        <Social socials={socials} />
      </div>
    </footer>
  );
};

export default Footer;
