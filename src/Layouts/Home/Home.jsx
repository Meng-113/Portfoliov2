import React from 'react';
import Button from '../../components/Button';
import AnimationHero from '../../components/AnimationHero';

const Home = ({ data }) => {
  const name = data?.name || '';
  const title = data?.title || '';
  const intro = data?.intro || '';
  const profileImage = data?.profileImage || '';
  const heroLines =
    Array.isArray(data?.heroLines) && data.heroLines.length > 0
      ? data.heroLines.map((text) => ({ text }))
      : [
          { text: `Hi, I'm ${name}.` },
          { text: 'I love coding.' },
          { text: 'I build interactive websites.' },
        ];

  return (
    <div>
      <div
        id="home"
        className="mx-auto flex w-[80%] flex-row items-center gap-10 mt-20 text-left py-10"
      >
        <div className="flex-1">
          <h1
            id="home-heading"
            className="max-w-3xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            <AnimationHero sequences={heroLines} />
          </h1>
          <p className="mt-4 text-xl font-semibold text-sky-600">
            {title}
          </p>
          <p className="mt-6 max-w-2xl text-base font-normal leading-7 text-slate-600">
            {intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href="#projects"
              variant="primary"
              ariaLabel="View projects section"
            >
              View Projects
            </Button>
            <Button
              href="#design"
              variant="secondary"
              ariaLabel="Go to design section"
            >
              View Design
            </Button>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <div className="card-surface relative aspect-square overflow-hidden rounded-full p-3">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-sky-600 text-4xl font-bold text-white shadow-soft">
              <img
                src={profileImage}
                alt={name || 'Profile'}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
