import SectionTitle from '../../components/SectionTitle';
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from '../../components/ui/scroll-based-velocity';

const Skills = ({ skillImages = [], skillGroups = [] }) => {
  const images = Array.isArray(skillImages) ? skillImages.filter(Boolean) : [];
  const groups = Array.isArray(skillGroups) ? skillGroups : [];

  if (images.length === 0) {
    return (
      <div className="w-full">
        <div id="skills" className="w-[80%] mx-auto mt-24 text-left">
          <SectionTitle
            id="skills-heading"
            eyebrow="Skills"
            title="What I Work With"
            description="No skill images available yet."
          />
        </div>
      </div>
    );
  }

  const MIN_ITEMS = 24;
  const allImages =
    images.length >= MIN_ITEMS
      ? images
      : Array.from(
          { length: Math.ceil(MIN_ITEMS / images.length) },
          () => images,
        ).flat();

  const half = Math.ceil(allImages.length / 2);
  const firstRow = allImages.slice(0, half);
  const secondRow = allImages.slice(half);

  return (
    <div className="w-full">
      <div id="skills" className="w-[80%] mx-auto mt-24 text-left">
        <SectionTitle
          id="skills-heading"
          eyebrow="Skills"
          title="What I Work With"
          description="Tools and technologies I use."
        />
      </div>

      <div className="w-full">
        <div className="relative flex flex-col items-center justify-center overflow-hidden py-8 inset-x-shadow-black-600 mb-10">
          <ScrollVelocityContainer className="w-full">
            <ScrollVelocityRow baseVelocity={6} direction={1} className="py-4">
              {firstRow.map((src, idx) => (
                <img
                  key={`rowA-${idx}-${src}`}
                  src={src}
                  alt="Skill logo"
                  width={240}
                  height={160}
                  loading="lazy"
                  decoding="async"
                  className="mx-4 inline-block h-20 w-30 opacity-95"
                />
              ))}
            </ScrollVelocityRow>

            <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
              {secondRow.map((src, idx) => (
                <img
                  key={`rowB-${idx}-${src}`}
                  src={src}
                  alt="Skill logo"
                  width={240}
                  height={160}
                  loading="lazy"
                  decoding="async"
                  className="mx-4 inline-block h-20 w-30 opacity-95"
                />
              ))}
            </ScrollVelocityRow>

            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/4 bg-gradient-to-r from-[#f7fbff] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/4 bg-gradient-to-l from-[#f7fbff] to-transparent" />
          </ScrollVelocityContainer>
        </div>
      </div>

      {groups.length > 0 ? (
        <div className="mx-auto mt-4 grid w-[80%] gap-5 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group) => (
            <article key={group.id} className="card-surface min-h-[180px] p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {(group.items || []).map((item) => (
                  <li
                    key={`${group.id}-${item}`}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Skills;
