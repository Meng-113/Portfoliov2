import React from 'react';
import Button from '../../components/Button';
import AnimationHero from '../../components/AnimationHero';
import IconCloud from '../../components/IconCloud';

const Home = ({ data }) => {
  const name = data?.name || '';
  const title = data?.title || '';
  const intro = data?.intro || '';
  const skillImages = Array.isArray(data?.skillImages) ? data.skillImages : [];
  const heroLines =
    Array.isArray(data?.heroLines) && data.heroLines.length > 0
      ? data.heroLines.map((text) => ({ text }))
      : [
          { text: `Hi, I'm ${name}.` },
          { text: 'I love coding.' },
          { text: 'I build interactive websites.' },
        ];

  return (
    <section
      id="home"
      className="mx-auto mt-20 w-full max-w-7xl px-4 py-10 sm:px-6 md:mt-24 lg:px-10"
    >
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1 text-center lg:text-left">
          <h1
            id="home-heading"
            className="mx-auto max-w-xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl lg:mx-0 lg:max-w-3xl lg:text-6xl"
          >
            <AnimationHero sequences={heroLines} />
          </h1>
          <p className="mt-4 text-base font-semibold text-sky-600 sm:text-xl">
            {title}
          </p>
          <p className="mx-auto mt-6 max-w-xl text-sm font-normal leading-7 text-slate-600 sm:text-base lg:mx-0 lg:max-w-2xl">
            {intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button
              href="#projects"
              variant="primary"
              className="w-full sm:w-auto"
              ariaLabel="View projects section"
            >
              View Projects
            </Button>
            <Button
              href="#design"
              variant="secondary"
              className="w-full sm:w-auto"
              ariaLabel="Go to design section"
            >
              View Design
            </Button>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[18rem] sm:max-w-sm md:max-w-[24rem]">
          <div className="relative aspect-square overflow-hidden rounded-full p-1 sm:p-2">
            <div className="flex h-full w-full items-center justify-center rounded-full">
              <IconCloud
                images={skillImages}
                size={420}
                className="h-full w-full rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
