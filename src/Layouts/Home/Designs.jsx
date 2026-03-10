import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import SectionTitle from '../../components/SectionTitle';
import RevealInView from '../../components/RevealInView';

const imageShapeByFrame = {
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[16/10]',
  wide: 'aspect-[16/9]',
};

const crumbSpecs = [
  {
    top: '10%',
    left: '8%',
    size: 14,
    x: 18,
    y: -20,
    rotate: 18,
    duration: 6.5,
    delay: 0.2,
  },
  {
    top: '18%',
    left: '84%',
    size: 18,
    x: -12,
    y: 16,
    rotate: -20,
    duration: 7.2,
    delay: 0.7,
  },
  {
    top: '32%',
    left: '6%',
    size: 10,
    x: 14,
    y: -14,
    rotate: 24,
    duration: 5.8,
    delay: 1.3,
  },
  {
    top: '36%',
    left: '74%',
    size: 20,
    x: -20,
    y: 18,
    rotate: -26,
    duration: 6.8,
    delay: 0.4,
  },
  {
    top: '58%',
    left: '90%',
    size: 12,
    x: -16,
    y: -18,
    rotate: 22,
    duration: 6.2,
    delay: 1.1,
  },
  {
    top: '70%',
    left: '12%',
    size: 16,
    x: 16,
    y: 18,
    rotate: -18,
    duration: 7.4,
    delay: 0.5,
  },
  {
    top: '84%',
    left: '80%',
    size: 9,
    x: -12,
    y: -16,
    rotate: 20,
    duration: 5.6,
    delay: 0.9,
  },
];

const metaItems = (designSection) =>
  [
    { label: 'Client', value: designSection?.client },
    { label: 'Role', value: designSection?.role },
    { label: 'Tool', value: designSection?.tool },
    { label: 'Year', value: designSection?.year },
    { label: 'Deliverables', value: designSection?.deliverables },
  ].filter((item) => item.value);

const shortenText = (value, maxLength = 110) => {
  const text =
    typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : '';

  if (!text) {
    return '';
  }

  if (text.length <= maxLength) {
    return text;
  }

  const clipped = text.slice(0, maxLength);
  const safeClip = clipped.includes(' ')
    ? clipped.slice(0, clipped.lastIndexOf(' '))
    : clipped;

  return `${safeClip.trimEnd()}...`;
};

const DetailPills = ({ items = [], tone = 'light', limit }) => {
  if (!items.length) {
    return null;
  }

  const visibleItems =
    typeof limit === 'number' ? items.slice(0, limit) : items;

  const baseClass =
    tone === 'dark'
      ? 'border-white/12 bg-white/8 text-[#f7efe7]'
      : tone === 'retro'
        ? 'border-[#cf5b33]/18 bg-white/72 text-[#5b2318]'
        : tone === 'mint'
          ? 'border-[#7eb8c3]/25 bg-white/70 text-[#19343d]'
          : 'border-[#6e4a38]/12 bg-white/55 text-[#4d291b]';

  return (
    <div className="flex flex-wrap gap-2">
      {visibleItems.map((item) => (
        <span
          key={item}
          className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${baseClass}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

const FloatingCrumbs = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {crumbSpecs.map((crumb, index) => (
        <motion.span
          key={`${crumb.top}-${crumb.left}-${index}`}
          className="absolute bg-[#4d291b]/90 shadow-[0_12px_26px_rgba(77,41,27,0.18)]"
          style={{
            top: crumb.top,
            left: crumb.left,
            width: crumb.size,
            height: crumb.size,
            borderRadius: '44% 56% 63% 37% / 39% 46% 54% 61%',
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, crumb.x, 0],
                  y: [0, crumb.y, 0],
                  rotate: [0, crumb.rotate, 0],
                  opacity: [0.72, 1, 0.72],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: crumb.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: crumb.delay,
                }
          }
        />
      ))}
    </div>
  );
};

const ProductAsset = ({
  src,
  alt,
  className,
  floatY = 16,
  floatX = 0,
  rotate = 0,
  duration = 6.4,
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      animate={
        shouldReduceMotion
          ? undefined
          : {
              y: [0, -floatY, 0],
              x: [0, floatX, 0],
              rotate: [rotate, rotate + 1.8, rotate],
            }
      }
      transition={
        shouldReduceMotion
          ? undefined
          : {
              duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }
      }
    />
  );
};

const ImageCard = ({
  design,
  tone = 'light',
  tilt = 0,
  className = '',
  titleClassName = 'packaging-round',
  compact = false,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const frameClass = imageShapeByFrame[design?.frame] || 'aspect-[4/3]';

  if (!design?.image) {
    return (
      <div
        className={`rounded-[2rem] border border-dashed border-[#6e4a38]/20 bg-white/45 p-8 text-center ${className}`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a5642]">
          Image Slot
        </p>
        <p className="mt-3 text-lg font-semibold text-[#4d291b]">
          {design?.placeholderLabel || 'Import design image later'}
        </p>
      </div>
    );
  }

  const wrapperCardClass =
    tone === 'dark'
      ? 'border-white/10 bg-[#2b1810]/80 text-[#f7efe7]'
      : tone === 'retro'
        ? 'border-[#cf5b33]/18 bg-[#fff8ef]/78 text-[#5b2318]'
        : tone === 'mint'
          ? 'border-[#9ed0d8]/45 bg-white/72 text-[#16333b]'
          : 'border-[#6e4a38]/12 bg-white/45 text-[#4d291b]';
  const metaTextClass =
    tone === 'dark'
      ? 'text-[#f7efe7]/60'
      : tone === 'retro'
        ? 'text-[#a04e2e]'
        : tone === 'mint'
          ? 'text-[#47727c]'
          : 'text-[#7a5642]';
  const bodyTextClass =
    tone === 'dark'
      ? 'text-[#f7efe7]/82'
      : tone === 'retro'
        ? 'text-[#6e3321]'
        : tone === 'mint'
          ? 'text-[#25434c]'
          : 'text-[#654737]';
  const supportTextClass =
    tone === 'dark'
      ? 'text-[#f7efe7]/68'
      : tone === 'retro'
        ? 'text-[#8c5b43]'
        : tone === 'mint'
          ? 'text-[#5a7982]'
          : 'text-[#7a5642]';
  const mediaSurfaceClass =
    tone === 'dark'
      ? 'bg-[#251621]/70'
      : tone === 'retro'
        ? 'bg-[#fff4df]'
        : tone === 'mint'
          ? 'bg-[#eef8f8]'
          : 'bg-[#f7efe7]/75';
  const mediaFrameClass =
    tone === 'dark'
      ? 'border-white/18'
      : tone === 'retro'
        ? 'border-[#cf5b33]/20'
        : tone === 'mint'
          ? 'border-[#9ed0d8]/55'
          : 'border-[#c8a18a]/35';
  const titleSizeClass = compact ? 'text-xl' : 'text-2xl';
  const subtitleText = compact ? '' : shortenText(design?.subtitle, 120);
  const descriptionText = compact ? '' : shortenText(design?.description, 112);

  return (
    <motion.article
      whileHover={
        shouldReduceMotion ? undefined : { y: -10, rotate: tilt, scale: 1.012 }
      }
      transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      className={`relative overflow-hidden rounded-[2.2rem] border p-4 shadow-[0_30px_80px_rgba(77,41,27,0.12)] backdrop-blur ${wrapperCardClass} ${className}`}
    >
      <div className="absolute inset-x-10 top-0 h-20 rounded-b-full bg-white/60 blur-2xl" />

      <div
        className={`relative ${frameClass} overflow-hidden rounded-[1.6rem] border p-2 ${mediaFrameClass} ${mediaSurfaceClass}`}
      >
        <div className="absolute inset-x-6 top-0 h-14 rounded-b-full bg-white/70 blur-2xl" />
        <img
          src={design.image}
          alt={design.title}
          className="relative z-10 h-full w-full rounded-[1.1rem] border border-white/45 object-cover"
        />
      </div>

      <div className="relative z-10 mt-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p
            className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${metaTextClass}`}
          >
            {design.category}
          </p>
          <span
            className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${metaTextClass}`}
          >
            {design.year}
          </span>
        </div>
        <h4
          className={`${titleClassName} mt-3 font-bold leading-tight ${titleSizeClass}`}
        >
          {design.title}
        </h4>
        {subtitleText ? (
          <p className={`mt-3 text-sm leading-7 ${bodyTextClass}`}>
            {subtitleText}
          </p>
        ) : null}
        {descriptionText ? (
          <p className={`mt-4 text-sm leading-7 ${supportTextClass}`}>
            {descriptionText}
          </p>
        ) : null}
        <div className="mt-5">
          <DetailPills
            items={design.deliverables}
            tone={tone}
            limit={compact ? 2 : undefined}
          />
        </div>
        {!compact ? (
          <p
            className={`mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] ${metaTextClass}`}
          >
            {(design.tools || []).join(' / ')}
          </p>
        ) : null}
      </div>
    </motion.article>
  );
};

const NutritionBadges = ({ items = [] }) => {
  if (!items.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {items.map((item) => (
        <div
          key={item}
          className="packaging-badge flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-[#fff8f1]/82 px-2 text-center shadow-[0_14px_26px_rgba(77,41,27,0.14)] sm:h-16 sm:w-16 sm:px-3 md:h-20 md:w-20"
        >
          <span className="packaging-round text-[11px] font-extrabold leading-3 text-[#4d291b] sm:text-xs sm:leading-4 md:text-sm">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};

const PackagingHeroStage = ({
  featuredDesign,
  wrapperDesign,
  posterDesign,
  badges,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (!featuredDesign) {
    return null;
  }

  return (
    <div className="packaging-stage relative isolate min-h-[30rem] overflow-hidden rounded-[2.6rem] border border-[#7c5845]/14 px-6 py-8 shadow-[0_34px_90px_rgba(77,41,27,0.18)] sm:min-h-[36rem] sm:px-8">
      <div className="absolute inset-x-[14%] top-0 h-28 rounded-b-[50%] bg-white/70 blur-3xl" />
      <div className="absolute inset-x-[10%] bottom-0 h-20 rounded-t-[50%] bg-[#5d3927]/20 blur-3xl" />

      {posterDesign?.image ? (
        <motion.div
          className="absolute right-6 top-8 hidden w-[26%] max-w-[11rem] overflow-hidden rounded-[1.5rem] border border-white/35 bg-white/55 p-2 shadow-[0_24px_42px_rgba(77,41,27,0.14)] lg:block"
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, -10, 0], rotate: [2, 4, 2] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 7.2, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <img
            src={posterDesign.image}
            alt={posterDesign.title}
            className="aspect-[4/5] w-full rounded-[1rem] object-cover"
          />
        </motion.div>
      ) : null}

      {wrapperDesign?.image ? (
        <div className="absolute bottom-10 left-1 w-[34%] max-w-[12rem] sm:bottom-7 sm:left-4 sm:max-w-[14rem]">
          <ProductAsset
            src={wrapperDesign.image}
            alt={wrapperDesign.title}
            className="w-full drop-shadow-[0_26px_34px_rgba(77,41,27,0.28)]"
            floatY={20}
            floatX={6}
            rotate={-8}
            duration={6.1}
            delay={0.35}
          />
        </div>
      ) : null}

      <div className="absolute bottom-[-18%] right-[6%] w-[72%] max-w-[27rem] sm:bottom-[-12%] sm:right-[8%] sm:max-w-[30rem]">
        <ProductAsset
          src={featuredDesign.image}
          alt={featuredDesign.title}
          className="w-full drop-shadow-[0_30px_46px_rgba(77,41,27,0.3)]"
          floatY={14}
          floatX={6}
          rotate={13}
          duration={7}
        />
      </div>

      <div className="relative z-10 mt-10 max-w-[14rem] sm:mt-14">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7a5642]">
          Hero Packaging
        </p>
        <h4 className="packaging-display mt-4 text-5xl leading-[0.9] text-[#4d291b] sm:text-6xl">
          High Protein
          <br />
          System
        </h4>
      </div>

      <div className="absolute left-4 top-48 z-10 max-w-[11rem] sm:left-6 sm:top-56 sm:max-w-[13rem] md:left-8 md:top-64 md:max-w-[15rem]">
        <NutritionBadges items={badges} />
      </div>
    </div>
  );
};

const WrapperSystemStage = ({ frontDesign, backDesign }) => {
  const shouldReduceMotion = useReducedMotion();
  const hasFront = Boolean(frontDesign?.image);
  const hasBack = Boolean(backDesign?.image);

  if (!hasFront && !hasBack) {
    return null;
  }

  const frontPlacementClass = hasBack
    ? 'absolute bottom-[-4%] left-[-2%] z-20 w-[82%] max-w-[26rem] sm:bottom-[-18%] sm:left-0 sm:w-[88%] sm:max-w-[31rem]'
    : 'absolute left-1/2 top-1/2 z-20 w-[76%] max-w-[25rem] -translate-x-1/2 -translate-y-1/2';
  const backPlacementClass = hasFront
    ? 'absolute right-[6%] top-[18%] z-10 w-[44%] max-w-[15rem] sm:right-[10%]'
    : 'absolute left-1/2 top-1/2 z-10 w-[52%] max-w-[16rem] -translate-x-1/2 -translate-y-1/2';

  return (
    <div className="relative min-h-[18rem] overflow-visible sm:min-h-[29rem]">
      {hasBack ? (
        <motion.div
          className={backPlacementClass}
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, -10, 0], rotate: [7, 9, 7] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 6.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.2,
                }
          }
        >
          <img
            src={backDesign.image}
            alt={backDesign.title}
            className="w-full object-contain drop-shadow-[0_20px_30px_rgba(77,41,27,0.18)]"
          />
        </motion.div>
      ) : null}

      {hasFront ? (
        <motion.div
          className={frontPlacementClass}
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, -12, 0], rotate: [-8, -6, -8] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 6.3, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <img
            src={frontDesign.image}
            alt={frontDesign.title}
            className="w-full object-contain drop-shadow-[0_28px_36px_rgba(77,41,27,0.22)]"
          />
        </motion.div>
      ) : null}
    </div>
  );
};

const CurrencyNoteStage = ({ frontDesign, backDesign }) => {
  const shouldReduceMotion = useReducedMotion();
  const availableSides = [
    frontDesign?.image
      ? {
          key: 'front',
          label: 'Front',
          design: frontDesign,
        }
      : null,
    backDesign?.image
      ? {
          key: 'back',
          label: 'Back',
          design: backDesign,
        }
      : null,
  ].filter(Boolean);
  const defaultSide =
    availableSides.find((item) => item.key === 'front')?.key ||
    availableSides[0]?.key;
  const [activeSide, setActiveSide] = useState(defaultSide);

  if (!frontDesign?.image && !backDesign?.image) {
    return null;
  }

  const activeNote =
    availableSides.find((item) => item.key === activeSide) || availableSides[0];

  return (
    <div className="currency-stage relative min-h-[18rem] overflow-visible sm:min-h-[26rem]">
      <div className="absolute inset-x-[10%] top-0 h-16 rounded-b-[50%] bg-white/72 blur-3xl sm:h-20" />
      <div className="absolute bottom-2 right-6 h-20 w-20 rounded-full bg-[#7dffb0]/18 blur-3xl sm:h-24 sm:w-24" />

      {availableSides.length > 1 ? (
        <div className="absolute left-2 top-0 z-30 flex gap-2 rounded-full border border-[#66d48f]/28 bg-white/76 p-1 shadow-[0_12px_26px_rgba(15,143,80,0.08)] sm:left-6 sm:top-2">
          {availableSides.map((item) => {
            const isActive = item.key === activeNote?.key;

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveSide(item.key)}
                className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition ${
                  isActive
                    ? 'bg-[#0f8f50] text-white shadow-[0_10px_20px_rgba(15,143,80,0.18)]'
                    : 'text-[#188a56] hover:bg-white/85'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      ) : null}

      {availableSides.map((item) => {
        const isActive = item.key === activeNote?.key;
        const wrapperClass = isActive
          ? 'absolute bottom-[10%] left-[3%] z-20 w-[92%] sm:bottom-[6%] sm:left-[7%] sm:w-[84%]'
          : 'absolute right-[3%] top-[18%] z-10 w-[88%] sm:right-[9%] sm:top-[12%] sm:w-[80%]';
        const animation = shouldReduceMotion
          ? undefined
          : isActive
            ? {
                y: [0, -10, 0],
                rotate: item.key === 'front' ? [-2.5, -1, -2.5] : [2.5, 1, 2.5],
              }
            : {
                y: [0, -8, 0],
                rotate:
                  item.key === 'front' ? [-1.5, -0.4, -1.5] : [1.5, 0.4, 1.5],
              };
        const transition = shouldReduceMotion
          ? undefined
          : isActive
            ? { duration: 6.6, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.2 };

        return (
          <motion.div
            key={item.key}
            className={wrapperClass}
            animate={animation}
            transition={transition}
            style={{ opacity: isActive ? 1 : 0.9 }}
          >
            <img
              src={item.design.image}
              alt={item.design.title}
              className={`w-full object-contain ${
                isActive
                  ? 'drop-shadow-[0_28px_42px_rgba(15,143,80,0.16)]'
                  : 'drop-shadow-[0_22px_36px_rgba(15,143,80,0.14)]'
              }`}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

const RetroMusicStage = ({ featuredDesign, supportDesigns = [] }) => {
  const shouldReduceMotion = useReducedMotion();
  const topPoster = supportDesigns[0];
  const leftPoster = supportDesigns[1];
  const rightPoster = supportDesigns[2];

  if (!featuredDesign?.image) {
    return null;
  }

  return (
    <div className="music-stage relative isolate min-h-[32rem] overflow-hidden rounded-[2.6rem] border border-[#cf5b33]/16 px-6 py-8 shadow-[0_34px_90px_rgba(120,40,21,0.15)] sm:min-h-[38rem] sm:px-8">
      <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-white/55 blur-3xl" />
      <div className="absolute right-0 top-20 h-40 w-40 rounded-full bg-[#63d0d6]/22 blur-3xl" />
      <div className="absolute bottom-0 left-[18%] h-44 w-44 rounded-full bg-[#ea4335]/12 blur-3xl" />

      {topPoster?.image ? (
        <motion.div
          className="absolute right-4 top-6 z-10 hidden w-[28%] max-w-[12rem] overflow-hidden rounded-[1.5rem] border border-white/55 bg-white/75 p-2 shadow-[0_20px_42px_rgba(120,40,21,0.12)] lg:block"
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, -8, 0], rotate: [4, 6, 4] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 7, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <img
            src={topPoster.image}
            alt={topPoster.title}
            className="aspect-[4/5] w-full rounded-[1rem] object-cover"
          />
        </motion.div>
      ) : null}

      {leftPoster?.image ? (
        <motion.div
          className="absolute bottom-8 left-4 z-10 w-[32%] max-w-[12rem] overflow-hidden rounded-[1.5rem] border border-white/55 bg-white/78 p-2 shadow-[0_20px_42px_rgba(120,40,21,0.14)]"
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, -10, 0], rotate: [-8, -6, -8] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 6.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.25,
                }
          }
        >
          <img
            src={leftPoster.image}
            alt={leftPoster.title}
            className="aspect-[4/5] w-full rounded-[1rem] object-cover"
          />
        </motion.div>
      ) : null}

      {rightPoster?.image ? (
        <motion.div
          className="absolute bottom-10 right-6 z-10 hidden w-[26%] max-w-[11rem] overflow-hidden rounded-[1.5rem] border border-white/55 bg-white/75 p-2 shadow-[0_20px_42px_rgba(120,40,21,0.12)] md:block"
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, -8, 0], rotate: [6, 8, 6] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 7.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.15,
                }
          }
        >
          <img
            src={rightPoster.image}
            alt={rightPoster.title}
            className="aspect-[4/5] w-full rounded-[1rem] object-cover"
          />
        </motion.div>
      ) : null}

      <motion.div
        className="absolute left-1/2 top-[56%] z-20 w-[58%] max-w-[23rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.8rem] border border-white/60 bg-white/82 p-3 shadow-[0_28px_60px_rgba(120,40,21,0.18)]"
        animate={
          shouldReduceMotion
            ? undefined
            : { y: [0, -10, 0], rotate: [-4, -2.5, -4] }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 6.9, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <img
          src={featuredDesign.image}
          alt={featuredDesign.title}
          className="aspect-[4/5] w-full rounded-[1.25rem] object-cover"
        />
      </motion.div>

      <div className="relative z-10 max-w-[14rem]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a04e2e]">
          Retro Music
        </p>
        <h4 className="packaging-display mt-4 text-5xl leading-[0.9] text-[#5b2318] sm:text-6xl">
          Poster
          <br />
          Set
        </h4>
      </div>
    </div>
  );
};

const SkincareHeroStage = ({
  featuredDesign,
  supportDesign,
  identityDesigns = [],
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (!featuredDesign) {
    return null;
  }

  return (
    <div className="skincare-stage relative isolate min-h-[30rem] overflow-hidden rounded-[2.6rem] border border-[#a8d3d8]/55 px-6 py-8 shadow-[0_34px_90px_rgba(45,89,98,0.16)] sm:min-h-[36rem] sm:px-8">
      <div className="absolute -left-12 top-8 h-36 w-36 rounded-full bg-[#d4eef2]/75 blur-3xl" />
      <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-white/65 blur-2xl" />

      {supportDesign?.image ? (
        <motion.div
          className="absolute right-6 top-24 hidden w-[32%] max-w-[13rem] overflow-hidden rounded-[1.5rem] border border-[#a8d3d8]/60 bg-white/82 p-2 shadow-[0_22px_40px_rgba(45,89,98,0.14)] lg:block"
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, -10, 0], rotate: [2, 4, 2] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 7.4, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <img
            src={supportDesign.image}
            alt={supportDesign.title}
            className="w-full rounded-[1rem] bg-[#eff7f7] object-contain"
          />
        </motion.div>
      ) : null}

      {identityDesigns[0]?.image ? (
        <motion.div
          className="absolute bottom-6 right-4 hidden w-[42%] max-w-[15rem] overflow-hidden rounded-[1.5rem] border border-[#a8d3d8]/50 bg-white/82 p-2 shadow-[0_18px_34px_rgba(45,89,98,0.14)] md:block"
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, -8, 0], rotate: [-5, -3, -5] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 6.7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.25,
                }
          }
        >
          <img
            src={identityDesigns[0].image}
            alt={identityDesigns[0].title}
            className="aspect-[16/10] w-full rounded-[1rem] object-cover"
          />
        </motion.div>
      ) : null}

      {identityDesigns[1]?.image ? (
        <motion.div
          className="absolute bottom-24 right-[21%] hidden w-[34%] max-w-[12rem] overflow-hidden rounded-[1.5rem] border border-[#a8d3d8]/45 bg-white/80 p-2 shadow-[0_18px_34px_rgba(45,89,98,0.12)] md:block"
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, -12, 0], rotate: [5, 3, 5] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }
          }
        >
          <img
            src={identityDesigns[1].image}
            alt={identityDesigns[1].title}
            className="aspect-[16/10] w-full rounded-[1rem] object-cover"
          />
        </motion.div>
      ) : null}

      <div className="absolute bottom-[-8%] left-2 w-[48%] max-w-[18rem] sm:bottom-[-12%] sm:left-4 sm:w-[52%] sm:max-w-[20rem]">
        <ProductAsset
          src={featuredDesign.image}
          alt={featuredDesign.title}
          className="w-full rounded-[2rem] border border-white/60 bg-white/88 p-3 drop-shadow-[0_24px_40px_rgba(45,89,98,0.18)] mt-4"
          floatY={12}
          floatX={-4}
          rotate={-3}
          duration={6.8}
        />
      </div>

      <div className="relative z-10 max-w-[16rem]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5a7982]">
          Featured Skincare
        </p>
        <h4 className="skincare-editorial mt-4 text-4xl font-semibold leading-[0.95] text-[#102028] sm:text-5xl">
          Clean editorial
          <br />
          campaign
        </h4>
      </div>
    </div>
  );
};

const SkincareIdentityStage = ({ identityDesigns = [] }) => {
  const shouldReduceMotion = useReducedMotion();
  const [frontCard, backCard] = identityDesigns;
  const defaultActiveCard = frontCard?.image
    ? 'front'
    : backCard?.image
      ? 'back'
      : null;
  const [activeCard, setActiveCard] = useState(defaultActiveCard);

  if (!frontCard && !backCard) {
    return null;
  }

  return (
    <div className="relative min-h-[20rem] overflow-visible sm:min-h-[26rem]">
      {backCard?.image ? (
        <motion.div
          className="absolute right-4 top-6 w-[82%] max-w-[34rem] rounded-[2rem] border border-white/14 bg-[#ebe7df] p-3 shadow-[0_22px_46px_rgba(2,8,23,0.28)] sm:right-8 sm:top-8"
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, -10, 0], rotate: [2, 3.5, 2] }
          }
          whileHover={
            shouldReduceMotion
              ? undefined
              : {
                  y: -18,
                  rotate: 1.1,
                  scale: 1.025,
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 7.2, repeat: Infinity, ease: 'easeInOut' }
          }
          onHoverStart={() => setActiveCard('back')}
          onHoverEnd={() => setActiveCard(defaultActiveCard)}
          style={{ zIndex: activeCard === 'back' ? 30 : 10 }}
        >
          <div className="overflow-hidden rounded-[1.6rem] border border-black/6 bg-[#f5f3ee] p-1.5">
            <img
              src={backCard.image}
              alt={backCard.title}
              className="h-full w-full rounded-[1.2rem] object-cover"
            />
          </div>
          <div className="absolute right-7 top-4 rounded-full border border-white/35 bg-white/18 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d7e8f2] backdrop-blur">
            Back View
          </div>
        </motion.div>
      ) : null}

      {frontCard?.image ? (
        <motion.div
          className="absolute bottom-5 left-4 w-[82%] max-w-[34rem] rounded-[2rem] border border-white/18 bg-[#efece4] p-3 shadow-[0_26px_56px_rgba(2,8,23,0.34)] sm:bottom-8 sm:left-8"
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, -12, 0], rotate: [-3, -1.5, -3] }
          }
          whileHover={
            shouldReduceMotion
              ? undefined
              : {
                  y: -20,
                  rotate: -0.8,
                  scale: 1.025,
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 6.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.2,
                }
          }
          onHoverStart={() => setActiveCard('front')}
          onHoverEnd={() => setActiveCard(defaultActiveCard)}
          style={{ zIndex: activeCard === 'front' ? 30 : 20 }}
        >
          <div className="overflow-hidden rounded-[1.6rem] border border-black/6 bg-[#f7f5ef] p-1.5">
            <img
              src={frontCard.image}
              alt={frontCard.title}
              className="h-full w-full rounded-[1.2rem] object-cover"
            />
          </div>
          <div className="absolute left-7 top-4 rounded-full border border-white/40 bg-white/22 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#dff2f7] backdrop-blur">
            Front View
          </div>
        </motion.div>
      ) : null}
    </div>
  );
};

const Designs = ({
  designProjects = [],
  designSection,
  skincareProjects = [],
  skincareSection,
  moneyProjects = [],
  moneySection,
  musicProjects = [],
  musicSection,
}) => {
  const items = Array.isArray(designProjects) ? designProjects : [];
  const details = metaItems(designSection);
  const focus = Array.isArray(designSection?.focus) ? designSection.focus : [];
  const palette = Array.isArray(designSection?.palette)
    ? designSection.palette
    : [];
  const badges = Array.isArray(designSection?.badges)
    ? designSection.badges
    : [];

  const featuredDesign =
    items.find((design) => design.category === 'Packaging System') || items[0];
  const campaignPosters = items.filter((design) =>
    ['Campaign Poster', 'Campaign Promotion'].includes(design.category),
  );
  const wrapperViews = items.filter(
    (design) => design.category === 'Wrapper Mockup',
  );
  const wrapperFrontView =
    wrapperViews.find((design) => /front/i.test(design.title)) ||
    wrapperViews[0];
  const wrapperBackView =
    wrapperViews.find((design) => /back/i.test(design.title)) ||
    wrapperViews.find((design) => design.id !== wrapperFrontView?.id);
  const seasonalVariants = items.filter(
    (design) => design.category === 'Seasonal Campaign',
  );
  const skincareItems = Array.isArray(skincareProjects) ? skincareProjects : [];
  const skincareDetails = metaItems(skincareSection);
  const skincareFocus = Array.isArray(skincareSection?.focus)
    ? skincareSection.focus
    : [];
  const skincarePalette = Array.isArray(skincareSection?.palette)
    ? skincareSection.palette
    : [];
  const skincareFeatured = skincareItems[0];
  const skincareBoards = skincareItems.filter(
    (design) =>
      design.category !== 'Identity Design' &&
      design.id !== skincareFeatured?.id,
  );
  const skincareIdentity = skincareItems.filter(
    (design) => design.category === 'Identity Design',
  );
  const moneyItems = Array.isArray(moneyProjects) ? moneyProjects : [];
  const moneyDetails = metaItems(moneySection);
  const moneyPalette = Array.isArray(moneySection?.palette)
    ? moneySection.palette
    : [];
  const moneyFocus = Array.isArray(moneySection?.focus)
    ? moneySection.focus
    : [];
  const moneyFrontNote =
    moneyItems.find((design) => /front/i.test(design.title)) || moneyItems[0];
  const moneyBackNote =
    moneyItems.find((design) => /back/i.test(design.title)) ||
    moneyItems.find((design) => design.id !== moneyFrontNote?.id);
  const musicItems = Array.isArray(musicProjects) ? musicProjects : [];
  const musicDetails = metaItems(musicSection);
  const musicPalette = Array.isArray(musicSection?.palette)
    ? musicSection.palette
    : [];
  const musicFocus = Array.isArray(musicSection?.focus)
    ? musicSection.focus
    : [];
  const musicFeatured = musicItems[0];
  const musicSupport = musicItems.filter(
    (design) => design.id !== musicFeatured?.id,
  );

  return (
    <section id="design" className="mx-auto mt-28 w-[84%] text-left">
      <SectionTitle id="design-heading" eyebrow="Design" title="Design Work" />

      <div className="packaging-shell relative overflow-hidden rounded-[2.8rem] border border-[#7c5845]/12 px-6 py-8 shadow-[0_35px_120px_rgba(77,41,27,0.18)] sm:px-8 lg:px-10 xl:px-12 xl:py-12">
        <FloatingCrumbs />

        <div className="relative z-10 grid gap-14 xl:grid-cols-[0.34fr_minmax(0,1fr)] xl:gap-16">
          <RevealInView className="xl:sticky xl:top-28 xl:self-start" y={28}>
            <div className="max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#7a5642]">
                {designSection?.label}
              </p>
              <h3 className="packaging-display mt-5 text-6xl leading-[0.88] text-[#4d291b] sm:text-7xl">
                {designSection?.heroTitle || 'Packaging'}
              </h3>
              <p className="packaging-round mt-3 text-lg font-bold uppercase tracking-[0.16em] text-[#6b4432] sm:text-xl">
                {designSection?.heroSubtitle}
              </p>
              {details.length > 0 ? (
                <dl className="mt-8 grid gap-3 sm:grid-cols-2">
                  {details.slice(0, 3).map((item) => (
                    <div
                      key={`${item.label}-${item.value}`}
                      className="rounded-[1.5rem] border border-[#7c5845]/10 bg-white/45 px-4 py-4"
                    >
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8d6a57]">
                        {item.label}
                      </dt>
                      <dd className="mt-2 text-sm font-semibold leading-6 text-[#4d291b]">
                        {shortenText(item.value, 42)}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              {palette.length > 0 ? (
                <div className="mt-8">
                  <div className="flex flex-wrap gap-3">
                    {palette.map((item) => (
                      <div key={item.name} className="flex items-center gap-2">
                        <span
                          className="h-8 w-8 rounded-full border border-white/50 shadow-[0_8px_18px_rgba(77,41,27,0.1)]"
                          style={{ backgroundColor: item.value }}
                        />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#654737]">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {focus.length > 0 ? (
                <div className="mt-8">
                  <div className="mt-4">
                    <DetailPills items={focus} limit={3} />
                  </div>
                </div>
              ) : null}
            </div>
          </RevealInView>

          <div className="space-y-16 lg:space-y-20">
            <RevealInView y={40}>
              <div className="grid gap-8 xl:grid-cols-[0.44fr_minmax(0,1fr)] xl:items-center">
                <div className="rounded-[2rem] border border-[#7c5845]/10 bg-white/40 p-6 shadow-[0_20px_50px_rgba(77,41,27,0.08)]">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-[#7c5845]/15 bg-white/55 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7a5642]">
                      Featured Packaging System
                    </span>
                    {featuredDesign?.year ? (
                      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8d6a57]">
                        {featuredDesign.year}
                      </span>
                    ) : null}
                  </div>
                  <h4 className="packaging-round mt-5 text-4xl font-extrabold leading-tight text-[#4d291b] sm:text-5xl">
                    {featuredDesign?.title}
                  </h4>
                  <p className="mt-4 text-sm leading-7 text-[#654737]">
                    {shortenText(featuredDesign?.subtitle, 96)}
                  </p>
                  <div className="mt-6">
                    <DetailPills
                      items={featuredDesign?.deliverables}
                      limit={3}
                    />
                  </div>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8d6a57]">
                    {(featuredDesign?.tools || []).join(' / ')}
                  </p>
                </div>

                <PackagingHeroStage
                  featuredDesign={featuredDesign}
                  wrapperDesign={wrapperViews[0]}
                  posterDesign={campaignPosters[0]}
                  badges={badges}
                />
              </div>
            </RevealInView>

            {campaignPosters.length > 0 ? (
              <section className="border-t border-[#7c5845]/12 pt-16">
                <RevealInView y={26}>
                  <div className="max-w-2xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7a5642]">
                      Campaign Posters
                    </p>
                    <h4 className="packaging-display mt-4 text-5xl leading-[0.9] text-[#4d291b] sm:text-6xl">
                      Campaign set
                    </h4>
                  </div>
                </RevealInView>

                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                  {campaignPosters.map((design, index) => (
                    <RevealInView key={design.id} delay={index * 0.08} y={36}>
                      <ImageCard
                        design={design}
                        tilt={index % 2 === 0 ? -1.2 : 1.2}
                        compact
                      />
                    </RevealInView>
                  ))}
                </div>
              </section>
            ) : null}

            {wrapperViews.length > 0 ? (
              <section className="border-t border-[#7c5845]/12 pt-16 xl:pt-30">
                <div className="grid gap-10 xl:grid-cols-[0.34fr_minmax(0,1fr)] xl:items-start">
                  <RevealInView y={28}>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7a5642]">
                        Wrapper System
                      </p>
                      <h4 className="packaging-display mt-4 text-5xl leading-[0.9] text-[#4d291b] sm:text-6xl">
                        Front and back views
                      </h4>
                    </div>
                  </RevealInView>

                  <RevealInView y={34}>
                    <WrapperSystemStage
                      frontDesign={wrapperFrontView}
                      backDesign={wrapperBackView}
                    />
                  </RevealInView>
                </div>
              </section>
            ) : null}

            {seasonalVariants.length > 0 ? (
              <section className="packaging-dark-panel relative overflow-hidden rounded-[2.6rem] border border-white/10 px-6 py-8 sm:px-8 sm:py-10">
                <div className="pointer-events-none absolute -left-24 top-0 h-56 w-56 rounded-full bg-[#8a4fff]/16 blur-3xl" />
                <div className="pointer-events-none absolute -right-16 bottom-0 h-60 w-60 rounded-full bg-[#ff9c2b]/12 blur-3xl" />

                <RevealInView y={28}>
                  <div className="max-w-2xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d8bafc]">
                      Seasonal Extension
                    </p>
                    <h4 className="packaging-display mt-4 text-5xl leading-[0.9] text-[#fff7ef] sm:text-6xl">
                      Halloween variants
                    </h4>
                  </div>
                </RevealInView>

                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                  {seasonalVariants.map((design, index) => (
                    <RevealInView key={design.id} delay={index * 0.08} y={36}>
                      <ImageCard
                        design={design}
                        tone="dark"
                        tilt={index % 2 === 0 ? -1.2 : 1.2}
                        className="shadow-[0_30px_80px_rgba(5,2,12,0.35)]"
                        compact
                      />
                    </RevealInView>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </div>

      {skincareItems.length > 0 ? (
        <div className="skincare-shell relative mt-16 overflow-hidden rounded-[2.8rem] border border-[#a8d3d8]/40 px-6 py-8 shadow-[0_35px_120px_rgba(45,89,98,0.14)] sm:px-8 lg:px-10 xl:px-12 xl:py-12">
          <div className="pointer-events-none absolute -left-10 top-12 h-44 w-44 rounded-full bg-[#d8f1f3]/80 blur-3xl" />
          <div className="pointer-events-none absolute right-8 top-20 h-40 w-40 rounded-full bg-white/70 blur-3xl" />
          <div className="pointer-events-none absolute bottom-8 right-12 h-48 w-48 rounded-full bg-[#bde3e8]/35 blur-3xl" />

          <div className="relative z-10 grid gap-14 xl:grid-cols-[0.28fr_minmax(0,1fr)] xl:gap-16">
            <RevealInView className="xl:sticky xl:top-28 xl:self-start" y={28}>
              <div className="max-w-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#5a7982]">
                  {skincareSection?.label}
                </p>
                <h3 className="skincare-editorial mt-5 text-4xl font-semibold leading-[0.92] text-[#102028] sm:text-5xl">
                  {skincareSection?.heroTitle || 'Skincare'}
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#4f6b74]">
                  {skincareSection?.heroSubtitle}
                </p>
                {skincareDetails.length > 0 ? (
                  <dl className="mt-8 grid gap-3">
                    {skincareDetails.slice(0, 3).map((item) => (
                      <div
                        key={`${item.label}-${item.value}`}
                        className="rounded-[1.25rem] border border-[#a8d3d8]/35 bg-white/58 px-4 py-3"
                      >
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6e8d95]">
                          {item.label}
                        </dt>
                        <dd className="mt-1 text-sm font-semibold leading-6 text-[#13232b]">
                          {shortenText(item.value, 28)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                {skincarePalette.length > 0 ? (
                  <div className="mt-8">
                    <div className="flex flex-wrap gap-3">
                      {skincarePalette.map((item) => (
                        <div
                          key={item.name}
                          className="h-9 w-9 rounded-full border border-white/80 shadow-[0_8px_18px_rgba(45,89,98,0.08)]"
                          title={item.name}
                          style={{ backgroundColor: item.value }}
                        ></div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {skincareFocus.length > 0 ? (
                  <div className="mt-8">
                    <div className="mt-4">
                      <DetailPills
                        items={skincareFocus}
                        tone="mint"
                        limit={2}
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            </RevealInView>

            <div className="space-y-16 lg:space-y-20">
              <RevealInView y={40}>
                <div className="grid gap-8 xl:grid-cols-[0.34fr_minmax(0,1fr)] xl:items-center">
                  <div className="rounded-[2rem] border border-[#a8d3d8]/40 bg-white/62 p-6 shadow-[0_18px_40px_rgba(45,89,98,0.08)]">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-[#a8d3d8]/55 bg-white/75 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5a7982]">
                        The Ordinary
                      </span>
                      {skincareFeatured?.year ? (
                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6e8d95]">
                          {skincareFeatured.year}
                        </span>
                      ) : null}
                    </div>
                    <h4 className="skincare-editorial mt-5 text-3xl font-semibold leading-tight text-[#102028] sm:text-4xl">
                      {skincareFeatured?.title}
                    </h4>
                    <p className="mt-4 text-sm leading-7 text-[#25434c]">
                      {shortenText(skincareFeatured?.subtitle, 72)}
                    </p>
                    <div className="mt-6">
                      <DetailPills
                        items={skincareFeatured?.deliverables}
                        tone="mint"
                        limit={3}
                      />
                    </div>
                  </div>

                  <SkincareHeroStage
                    featuredDesign={skincareFeatured}
                    supportDesign={skincareBoards[0]}
                    identityDesigns={skincareIdentity}
                  />
                </div>
              </RevealInView>

              {skincareBoards.length > 0 ? (
                <section className="border-t border-[#a8d3d8]/55 pt-16">
                  <RevealInView y={26}>
                    <div className="max-w-2xl">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5a7982]">
                        Editorial Boards
                      </p>
                      <h4 className="skincare-editorial mt-4 text-4xl font-semibold leading-[0.95] text-[#102028] sm:text-5xl">
                        Boards
                      </h4>
                    </div>
                  </RevealInView>

                  <div className="mt-10 grid gap-8 lg:grid-cols-2">
                    {skincareBoards.map((design, index) => (
                      <RevealInView key={design.id} delay={index * 0.08} y={36}>
                        <ImageCard
                          design={design}
                          tone="mint"
                          tilt={index % 2 === 0 ? -1.1 : 1.1}
                          titleClassName="skincare-editorial"
                          compact
                        />
                      </RevealInView>
                    ))}
                  </div>
                </section>
              ) : null}

              {skincareIdentity.length > 0 ? (
                <section className="border-t border-[#a8d3d8]/55 pt-16">
                  <div className="grid gap-10 xl:grid-cols-[0.34fr_minmax(0,1fr)] xl:items-center">
                    <RevealInView y={28}>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5a7982]">
                          Identity Extension
                        </p>
                        <h4 className="skincare-editorial mt-4 text-4xl font-semibold leading-[0.95] text-[#102028] sm:text-5xl">
                          ID Cards
                        </h4>
                      </div>
                    </RevealInView>

                    <div>
                      <RevealInView y={34}>
                        <SkincareIdentityStage
                          identityDesigns={skincareIdentity}
                        />
                      </RevealInView>
                    </div>
                  </div>
                </section>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {moneyItems.length > 0 ? (
        <div className="currency-shell relative mt-16 overflow-hidden rounded-[2.8rem] border border-[#66d48f]/30 px-6 py-8 shadow-[0_35px_120px_rgba(15,143,80,0.12)] sm:px-8 lg:px-10 xl:px-12 xl:py-12">
          <div className="pointer-events-none absolute -left-10 top-12 h-44 w-44 rounded-full bg-[#b8ffd1]/70 blur-3xl" />
          <div className="pointer-events-none absolute right-10 top-10 h-40 w-40 rounded-full bg-white/65 blur-3xl" />

          <div className="relative z-10 grid gap-14 xl:grid-cols-[0.28fr_minmax(0,1fr)] xl:gap-16">
            <RevealInView className="xl:sticky xl:top-28 xl:self-start" y={28}>
              <div className="max-w-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#188a56]">
                  {moneySection?.label}
                </p>
                <h3 className="packaging-display mt-5 text-5xl leading-[0.88] text-[#0f6d43] sm:text-6xl">
                  {moneySection?.heroTitle || 'Currency'}
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#21915f]">
                  {moneySection?.heroSubtitle}
                </p>

                {moneyDetails.length > 0 ? (
                  <dl className="mt-8 grid gap-3">
                    {moneyDetails.slice(0, 3).map((item) => (
                      <div
                        key={`${item.label}-${item.value}`}
                        className="rounded-[1.25rem] border border-[#66d48f]/25 bg-white/60 px-4 py-3"
                      >
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2d9a69]">
                          {item.label}
                        </dt>
                        <dd className="mt-1 text-sm font-semibold leading-6 text-[#0d3b24]">
                          {shortenText(item.value, 28)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                {moneyPalette.length > 0 ? (
                  <div className="mt-8">
                    <div className="flex flex-wrap gap-3">
                      {moneyPalette.map((item) => (
                        <div
                          key={item.name}
                          className="h-9 w-9 rounded-full border border-white/80 shadow-[0_8px_18px_rgba(15,143,80,0.08)]"
                          title={item.name}
                          style={{ backgroundColor: item.value }}
                        />
                      ))}
                    </div>
                  </div>
                ) : null}

                {moneyFocus.length > 0 ? (
                  <div className="mt-8">
                    <div className="mt-4">
                      <DetailPills items={moneyFocus} limit={3} />
                    </div>
                  </div>
                ) : null}
              </div>
            </RevealInView>

            <div className="space-y-16 lg:space-y-20">
              <RevealInView y={40}>
                <div className="grid gap-8 xl:grid-cols-[0.34fr_minmax(0,1fr)] xl:items-center">
                  <div className="rounded-[2rem] border border-[#66d48f]/25 bg-white/60 p-6 shadow-[0_18px_40px_rgba(15,143,80,0.08)]">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-[#66d48f]/35 bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#188a56]">
                        Currency Concept
                      </span>
                      {moneySection?.year ? (
                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2d9a69]">
                          {moneySection.year}
                        </span>
                      ) : null}
                    </div>
                    <h4 className="packaging-round mt-5 text-3xl font-extrabold leading-tight text-[#0d3b24] sm:text-4xl">
                      Front and Back Views
                    </h4>
                    <p className="mt-4 text-sm leading-7 text-[#156540]">
                      {shortenText(
                        moneySection?.intro || moneyFrontNote?.subtitle,
                        82,
                      )}
                    </p>
                    <div className="mt-6">
                      <DetailPills
                        items={
                          moneyFrontNote?.deliverables ||
                          moneyBackNote?.deliverables
                        }
                        limit={3}
                      />
                    </div>
                  </div>

                  <CurrencyNoteStage
                    frontDesign={moneyFrontNote}
                    backDesign={moneyBackNote}
                  />
                </div>
              </RevealInView>
            </div>
          </div>
        </div>
      ) : null}

      {musicItems.length > 0 ? (
        <div className="music-shell relative mt-16 overflow-hidden rounded-[2.8rem] border border-[#cf5b33]/18 px-6 py-8 shadow-[0_35px_120px_rgba(120,40,21,0.14)] sm:px-8 lg:px-10 xl:px-12 xl:py-12">
          <div className="pointer-events-none absolute -left-12 top-10 h-48 w-48 rounded-full bg-white/55 blur-3xl" />
          <div className="pointer-events-none absolute right-8 top-8 h-40 w-40 rounded-full bg-[#63d0d6]/18 blur-3xl" />
          <div className="pointer-events-none absolute bottom-4 right-24 h-44 w-44 rounded-full bg-[#ea4335]/10 blur-3xl" />

          <div className="relative z-10 grid gap-14 xl:grid-cols-[0.28fr_minmax(0,1fr)] xl:gap-16">
            <RevealInView className="xl:sticky xl:top-28 xl:self-start" y={28}>
              <div className="max-w-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#a04e2e]">
                  {musicSection?.label}
                </p>
                <h3 className="packaging-display mt-5 text-5xl leading-[0.88] text-[#5b2318] sm:text-6xl">
                  {musicSection?.heroTitle || 'Retro Music'}
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#b15632]">
                  {musicSection?.heroSubtitle}
                </p>

                {musicDetails.length > 0 ? (
                  <dl className="mt-8 grid gap-3">
                    {musicDetails.slice(0, 3).map((item) => (
                      <div
                        key={`${item.label}-${item.value}`}
                        className="rounded-[1.25rem] border border-[#cf5b33]/18 bg-white/62 px-4 py-3"
                      >
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b15632]">
                          {item.label}
                        </dt>
                        <dd className="mt-1 text-sm font-semibold leading-6 text-[#5b2318]">
                          {shortenText(item.value, 28)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                {musicPalette.length > 0 ? (
                  <div className="mt-8">
                    <div className="flex flex-wrap gap-3">
                      {musicPalette.map((item) => (
                        <div
                          key={item.name}
                          className="h-9 w-9 rounded-full border border-white/85 shadow-[0_8px_18px_rgba(120,40,21,0.08)]"
                          title={item.name}
                          style={{ backgroundColor: item.value }}
                        />
                      ))}
                    </div>
                  </div>
                ) : null}

                {musicFocus.length > 0 ? (
                  <div className="mt-8">
                    <div className="mt-4">
                      <DetailPills items={musicFocus} tone="retro" limit={3} />
                    </div>
                  </div>
                ) : null}
              </div>
            </RevealInView>

            <div className="space-y-16 lg:space-y-20">
              <RevealInView y={40}>
                <div className="grid gap-8 xl:grid-cols-[0.34fr_minmax(0,1fr)] xl:items-center">
                  <div className="rounded-[2rem] border border-[#cf5b33]/18 bg-white/62 p-6 shadow-[0_18px_40px_rgba(120,40,21,0.08)]">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-[#cf5b33]/24 bg-white/82 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a04e2e]">
                        Retro Music
                      </span>
                      {musicSection?.year ? (
                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b15632]">
                          {musicSection.year}
                        </span>
                      ) : null}
                    </div>
                    <h4 className="packaging-round mt-5 text-3xl font-extrabold leading-tight text-[#5b2318] sm:text-4xl">
                      {musicFeatured?.title || 'Poster Collection'}
                    </h4>
                    <p className="mt-4 text-sm leading-7 text-[#6e3321]">
                      {shortenText(
                        musicFeatured?.subtitle || musicSection?.intro,
                        80,
                      )}
                    </p>
                    <div className="mt-6">
                      <DetailPills
                        items={musicFeatured?.deliverables}
                        tone="retro"
                        limit={3}
                      />
                    </div>
                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a04e2e]">
                      {(musicFeatured?.tools || []).join(' / ')}
                    </p>
                  </div>

                  <RetroMusicStage
                    featuredDesign={musicFeatured}
                    supportDesigns={musicSupport}
                  />
                </div>
              </RevealInView>

              {musicSupport.length > 0 ? (
                <section className="border-t border-[#cf5b33]/16 pt-16">
                  <RevealInView y={26}>
                    <div className="max-w-2xl">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a04e2e]">
                        Poster Series
                      </p>
                      <h4 className="packaging-display mt-4 text-5xl leading-[0.9] text-[#5b2318] sm:text-6xl">
                        More Posters
                      </h4>
                    </div>
                  </RevealInView>

                  <div className="mt-10 grid gap-8 lg:grid-cols-3">
                    {musicSupport.map((design, index) => (
                      <RevealInView key={design.id} delay={index * 0.08} y={36}>
                        <ImageCard
                          design={design}
                          tone="retro"
                          tilt={index % 2 === 0 ? -1 : 1}
                          compact
                        />
                      </RevealInView>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Designs;
