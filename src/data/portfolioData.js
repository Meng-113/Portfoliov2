import reactjs from '../assets/reactjs.svg';
import javascript from '../assets/javascript.svg';
import html5 from '../assets/html5.svg';
import css from '../assets/css.svg';
import tailwind from '../assets/tailwind.svg';
import nodejs from '../assets/nodejs.svg';
import express from '../assets/express.svg';
import postgresql from '../assets/postgresql.svg';
import mysql from '../assets/mysql.svg';
import figma from '../assets/figma.svg';
import postman from '../assets/postman.svg';
import github from '../assets/github.svg';
import packagingBoxMockup from '../assets/box_Pakcage-mockup.png';
import packagingWrapperFront from '../assets/Plastic_Pakcage-infront-mockup.png';
import packagingWrapperBack from '../assets/Plastic_Pakcage-Back-mockup.png';
import packagingPosterBox from '../assets/POSTER_BOX_PACKAGE.jpg';
import packagingPosterWrapper from '../assets/POSTER_PLASTIC_PACKAGE.jpg';
import packagingHalloweenBox from '../assets/Box_Package_Poster_Halloween.jpg';
import packagingHalloweenWrapper from '../assets/Plastic_Package_Poster_Halloween.jpg';
import ordinaryPoster from '../assets/Poster.jpg';
import ordinaryBrochureFront from '../assets/Brochure_front.jpg';
import ordinaryBrochureBack from '../assets/Brochure_Back.jpg';
import ordinaryIdFront from '../assets/Name_Card_Infont.jpg';
import ordinaryIdBack from '../assets/Name_Card_Back.jpg';
import moneyFront from '../assets/Money-Infront.jpg';
import moneyBack from '../assets/Money-Back.jpg';
import retroMusicPosterOne from '../assets/Artboard 1.jpg';
import retroMusicPosterTwo from '../assets/Artboard 2.png';
import retroMusicPosterThree from '../assets/Artboard 3.png';
import retroMusicPosterFour from '../assets/Artboard 4.png';

const portfolioData = {
  name: 'Chea Kimeng',
  title: 'Student Software Developer',
  location: 'Phnom Penh, Cambodia',
  heroLines: [
    "Hi, I'm Chea Kimeng.",
    'I build database-driven web apps.',
    'I combine code with UI design.',
  ],
  intro:
    'Motivated Information Technology student with hands-on experience in web development, database systems, and UI design. Skilled in JavaScript, React, SQL databases, and modern design tools such as Figma and Adobe Creative Suite.',
  aboutTitle: 'Web Development & UI Design',
  about:
    'I am currently studying Management Information Systems at SETEC Institute while also following a software development program at TUX Global Institute. I enjoy building practical systems, responsive interfaces, and design-led user experiences that connect technical structure with clear visual communication.',
  contactDetail:
    'I am open to internships, student collaborations, and entry-level opportunities in web development, UI design, and software support.',
  contactEmail: 'mailto:cheakimeng0@gmail.com',
  contactPoints: [
    {
      id: 1,
      label: 'Phone',
      value: '017-720-929',
      href: 'tel:+85517720929',
    },
    {
      id: 2,
      label: 'Email',
      value: 'cheakimeng0@gmail.com',
      href: 'mailto:cheakimeng0@gmail.com',
    },
    {
      id: 3,
      label: 'Location',
      value: 'Phnom Penh, Cambodia',
    },
  ],
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Design', href: '#design' },
    { label: 'Contact', href: '#contact' },
  ],
  quickInfo: [
    { id: 1, label: 'Education', value: 'SETEC Institute' },
    { id: 2, label: 'Program', value: 'MIS + Software Development' },
    { id: 3, label: 'Languages', value: 'Khmer, English' },
    { id: 4, label: 'Location', value: 'Phnom Penh, Cambodia' },
  ],
  skillImages: [
    reactjs,
    javascript,
    html5,
    css,
    tailwind,
    nodejs,
    express,
    postgresql,
    mysql,
    figma,
    postman,
    github,
  ],
  skillGroups: [
    {
      id: 1,
      title: 'Programming',
      items: ['C#', 'JavaScript', 'SQL'],
    },
    {
      id: 2,
      title: 'Frontend',
      items: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      id: 3,
      title: 'Backend',
      items: ['Node.js', 'Express'],
    },
    {
      id: 4,
      title: 'Database',
      items: ['SQL Server', 'MySQL', 'PostgreSQL'],
    },
    {
      id: 5,
      title: 'Tools',
      items: ['Git', 'GitHub', 'Postman'],
    },
    {
      id: 6,
      title: 'Design Tools',
      items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'InDesign'],
    },
  ],
  projects: [
    {
      id: 1,
      category: 'Desktop Application',
      title: 'Hotel Management System',
      description:
        'A desktop-based hotel operations system focused on customer handling, booking flow, and core management reporting.',
      techStack: ['C#', 'WinForms', 'SQL Server'],
      highlights: [
        'Customer and booking CRUD system',
        'Login authentication',
        'Revenue dashboard calculation',
        'Database schema design',
      ],
    },
    {
      id: 2,
      category: 'Full-Stack Web Application',
      title: 'Bus Booking Management',
      description:
        'A full-stack booking platform that combines frontend interaction, backend logic, and structured data for transport reservations.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
      highlights: [
        'Admin dashboard',
        'Seat booking system',
        'REST API integration',
        'Responsive UI',
      ],
    },
    {
      id: 3,
      category: 'Frontend Web Application',
      title: 'Obsidian Threads',
      description:
        'A thread-style discussion interface built with semantic structure, responsive layout, and client-side interactivity.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      highlights: [
        'Thread-style discussion interface',
        'Interactive UI using JavaScript',
        'Responsive HTML/CSS layout',
        'Client-side interactions',
      ],
    },
  ],
  designProjects: [
    {
      id: 1,
      category: 'Packaging System',
      title: 'High Protein Bar Retail Box',
      subtitle:
        'The hero retail carton introduces the cookies-and-cream product line with strong flavor cues and a playful, shelf-ready layout.',
      description:
        'The front-facing packaging combines a cream-and-cocoa palette, rounded typography, illustrated crumb details, and a cutaway product visual to make the box feel energetic and premium.',
      tools: ['Adobe Photoshop'],
      year: 'System 01',
      deliverables: ['Retail Box', 'Front Panel', 'Shelf Mockup'],
      frame: 'portrait',
      image: packagingBoxMockup,
      placeholderLabel: 'Add your box mockup later',
    },
    {
      id: 2,
      category: 'Campaign Poster',
      title: 'Packaging Launch Poster',
      subtitle:
        'A campaign poster built to launch the boxed product with bold nutrition claims and a floating retail composition.',
      description:
        'This layout extends the packaging language into a full poster format, using spacious beige backgrounds, strong headline typography, and suspended crumb details to keep the focus on the product.',
      tools: ['Adobe Photoshop'],
      year: 'Poster 02',
      deliverables: ['Campaign Poster', 'Launch Visual', 'Retail Promotion'],
      frame: 'portrait',
      image: packagingPosterBox,
      placeholderLabel: 'Add your launch poster later',
    },
    {
      id: 3,
      category: 'Campaign Promotion',
      title: 'Flavor Spotlight Poster',
      subtitle:
        'A close-up promotional board that zooms into the cookies-and-cream flavor story and wrapper design.',
      description:
        'Chocolate splash framing, cream contrast, and an angled wrapper presentation create a more dynamic advertising direction for the same product line.',
      tools: ['Adobe Photoshop'],
      year: 'Poster 03',
      deliverables: ['Flavor Poster', 'Product Ad', 'Campaign Visual'],
      frame: 'portrait',
      image: packagingPosterWrapper,
      placeholderLabel: 'Add your flavor poster later',
    },
    {
      id: 4,
      category: 'Wrapper Mockup',
      title: 'Wrapper Front Mockup',
      subtitle:
        'The single-bar wrapper carries the same rounded visual language while compressing the flavor story into a smaller format.',
      description:
        'Large product naming, simplified benefits, and a bite-shot on the edge help the individual wrapper stand out quickly in a grab-and-go retail context.',
      tools: ['Adobe Photoshop'],
      year: 'Mockup 04',
      deliverables: ['Wrapper Front', 'Single SKU', 'Pack Front'],
      frame: 'portrait',
      image: packagingWrapperFront,
      placeholderLabel: 'Add your wrapper front later',
    },
    {
      id: 5,
      category: 'Wrapper Mockup',
      title: 'Wrapper Back Mockup',
      subtitle:
        'The reverse side supports the concept with ingredients, nutrition facts, and barcode details in a realistic pack format.',
      description:
        'This mockup balances required packaging information with the same cream-and-cocoa system, keeping the back panel believable and brand-consistent.',
      tools: ['Adobe Photoshop'],
      year: 'Mockup 05',
      deliverables: ['Wrapper Back', 'Nutrition Label', 'Pack Details'],
      frame: 'landscape',
      image: packagingWrapperBack,
      placeholderLabel: 'Add your wrapper back later',
    },
    {
      id: 6,
      category: 'Seasonal Campaign',
      title: 'Halloween Box Poster',
      subtitle:
        'A seasonal campaign extension that drops the box into a foggy Halloween scene without losing the main packaging identity.',
      description:
        'Purple atmosphere, moonlight, pumpkins, and creepy silhouettes transform the concept into a themed special edition poster while preserving the same core product visuals.',
      tools: ['Adobe Photoshop'],
      year: 'Seasonal 06',
      deliverables: ['Halloween Poster', 'Seasonal Promotion', 'Event Variant'],
      frame: 'portrait',
      image: packagingHalloweenBox,
      placeholderLabel: 'Add your seasonal box poster later',
    },
    {
      id: 7,
      category: 'Seasonal Campaign',
      title: 'Halloween Wrapper Poster',
      subtitle:
        'A second seasonal board that spotlights the single-bar wrapper with glowing pumpkins and a haunted landscape.',
      description:
        'The composition pushes the wrapper into a festive storytelling scene, showing how the packaging system can flex into seasonal marketing without needing a redesign.',
      tools: ['Adobe Photoshop'],
      year: 'Seasonal 07',
      deliverables: ['Halloween Ad', 'Wrapper Promotion', 'Seasonal Visual'],
      frame: 'portrait',
      image: packagingHalloweenWrapper,
      placeholderLabel: 'Add your seasonal wrapper poster later',
    },
  ],
  designSection: {
    label: 'Packaging Concept',
    client: 'Student Packaging Study',
    role: 'Graphic Designer',
    tool: 'Adobe Photoshop',
    year: '2025',
    deliverables:
      'Retail Box Mockup, Wrapper Front, Wrapper Back, Launch Posters, Seasonal Posters',
    intro:
      'A packaging-led concept for a cookies-and-cream high protein bar, combining retail box design, single-bar wrapper mockups, launch posters, and seasonal campaign variations. The system uses creamy neutrals, deep cocoa tones, rounded lettering, and energetic product staging to make the packaging feel fun, clear, and shelf-ready.',
    focus: [
      'Adobe Photoshop',
      'Packaging Mockup Design',
      'Poster Campaign Layout',
      'Seasonal Visual Adaptation',
    ],
    palette: [
      { name: 'Soft Cream', value: '#efe3d6' },
      { name: 'Milk White', value: '#fbf4ee' },
      { name: 'Cocoa', value: '#4d291b' },
      { name: 'Roasted Brown', value: '#7a5642' },
    ],
    highlights: [
      { label: 'Flavor', value: 'Cookies and Cream' },
      { label: 'Format', value: 'Box + Individual Wrapper' },
      { label: 'Status', value: 'Packaging Campaign Concept' },
    ],
    badges: ['20g Protein', 'Low Sugar', 'High Fiber'],
    heroTitle: 'Fuel Your Gain',
    heroSubtitle: 'Deliciously powerful protein packaging',
  },
  skincareProjects: [
    {
      id: 101,
      category: 'Product Education',
      title: 'Skincare Routine Poster',
      subtitle:
        'A tall educational poster that highlights three hero products in one clean skincare story.',
      description:
        'Built around bold product naming, soft aqua circles, and a minimal editorial composition that keeps the skincare products as the main focus.',
      tools: ['Adobe Photoshop'],
      year: 'Poster 01',
      deliverables: ['Poster Design', 'Product Callout', 'Print Layout'],
      frame: 'portrait',
      image: ordinaryPoster,
      placeholderLabel: 'Add your poster export later',
    },
    {
      id: 102,
      category: 'Brand Presentation',
      title: 'About & Contact Board',
      subtitle:
        'A brand information board that combines product framing, contact messaging, and skincare storytelling.',
      description:
        'Designed to communicate brand trust, visual consistency, and campaign personality using monochrome type and soft blue shape accents.',
      tools: ['Adobe Photoshop'],
      year: 'Board 02',
      deliverables: ['Brand Board', 'Contact Layout', 'Campaign Support'],
      frame: 'landscape',
      image: ordinaryBrochureFront,
      placeholderLabel: 'Add your board export later',
    },
    {
      id: 103,
      category: 'Campaign Promotion',
      title: 'Summer Special Promotion',
      subtitle:
        'A promotional board built for seasonal skincare packaging and best-seller spotlight content.',
      description:
        'This layout uses large serif messaging, black product panels, and balanced negative space to create a premium skincare campaign look.',
      tools: ['Adobe Photoshop'],
      year: 'Board 03',
      deliverables: [
        'Promotion Layout',
        'Best Seller Feature',
        'Campaign Visual',
      ],
      frame: 'landscape',
      image: ordinaryBrochureBack,
      placeholderLabel: 'Add your promotion export later',
    },
    {
      id: 104,
      category: 'Identity Design',
      title: 'Employee ID Card Front',
      subtitle:
        'The front face of the staff identity card, adapted from the campaign visual system.',
      description:
        'Created as a clean branded card with soft aqua organic shapes, strong black dividers, and a clear employee information hierarchy.',
      tools: ['Adobe Photoshop'],
      year: 'Card 04',
      deliverables: ['ID Front', 'Identity Layout', 'Brand System Extension'],
      frame: 'landscape',
      image: ordinaryIdFront,
      placeholderLabel: 'Add your ID front export later',
    },
    {
      id: 105,
      category: 'Identity Design',
      title: 'Employee ID Card Back',
      subtitle:
        'The back face of the staff identity card with contact details and company branding.',
      description:
        'Designed to keep the same The Ordinary campaign language while presenting contact details in a direct, easy-to-read format.',
      tools: ['Adobe Photoshop'],
      year: 'Card 05',
      deliverables: ['ID Back', 'Contact Details', 'Brand Extension'],
      frame: 'landscape',
      image: ordinaryIdBack,
      placeholderLabel: 'Add your ID back export later',
    },
  ],
  skincareSection: {
    label: 'Skincare Campaign',
    client: 'The Ordinary',
    role: 'Graphic Designer',
    tool: 'Adobe Photoshop',
    year: '2025',
    deliverables:
      'Poster, Contact Board, Promotion Board, ID Card Front, ID Card Back',
    intro:
      'A Photoshop-based skincare campaign concept for The Ordinary, designed with a clean editorial system: soft aqua organic shapes, neutral cream backgrounds, sharp black framing, and structured product storytelling across poster, brochure, and identity pieces.',
    focus: [
      'Adobe Photoshop',
      'Poster Layout',
      'Campaign Design',
      'Brand Presentation',
    ],
    palette: [
      { name: 'Cream', value: '#ece9e1' },
      { name: 'Soft Aqua', value: '#b9dde2' },
      { name: 'Ink Black', value: '#111111' },
    ],
    highlights: [
      { label: 'Style', value: 'Minimal Editorial Skincare' },
      { label: 'Client', value: 'The Ordinary' },
      { label: 'Status', value: 'Photoshop Campaign Concept' },
    ],
    heroTitle: 'The Ordinary',
    heroSubtitle: 'Minimal editorial skincare campaign',
  },
  moneyProjects: [
    {
      id: 201,
      category: 'Currency Concept',
      title: '50,000 Riel Front Note',
      subtitle:
        'Front-side banknote concept built with Khmer landmark imagery, ornamental framing, and layered mint security tones.',
      description:
        'A student-made currency concept focused on monument structure, value clarity, and a clean national bank layout system.',
      tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
      year: 'Concept 01',
      deliverables: ['Front Note', 'Currency Layout', 'Print Concept'],
      frame: 'wide',
      image: moneyFront,
      placeholderLabel: 'Add your front note later',
    },
    {
      id: 202,
      category: 'Currency Concept',
      title: '50,000 Riel Back Note',
      subtitle:
        'Back-side note concept using sculpture forms, serial details, and decorative pattern layers for a richer visual field.',
      description:
        'This side explores hierarchy, security-inspired texture, and cultural imagery inside one consistent note system.',
      tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
      year: 'Concept 02',
      deliverables: ['Back Note', 'Security Pattern', 'Currency Detail'],
      frame: 'wide',
      image: moneyBack,
      placeholderLabel: 'Add your back note later',
    },
  ],
  moneySection: {
    label: 'Currency Concept',
    client: 'National Bank of Cambodia',
    role: 'Graphic Designer',
    tool: 'Adobe Illustrator / Photoshop / InDesign',
    year: '2026',
    deliverables: 'Front Note, Back Note, Currency Concept',
    intro:
      'A student-made 50,000 riel concept that combines Khmer landmarks, sculptural imagery, ornamental pattern work, and security-inspired layout details.',
    focus: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
    palette: [
      { name: 'Mint', value: '#7dffb0' },
      { name: 'Jade', value: '#c9f6da' },
      { name: 'Deep Green', value: '#0f8f50' },
    ],
    heroTitle: '50,000 Riel',
    heroSubtitle: 'Money design concept',
  },
  musicProjects: [
    {
      id: 301,
      category: 'Hero Poster',
      title: 'Retro Baramey Poster',
      subtitle:
        'A bold retro music poster with comic rays, distressed texture, and a cutout artist portrait.',
      description:
        'Built to feel loud and vintage through grain overlays, strong red contrast, and playful Illustrator-driven shapes.',
      tools: ['Adobe Photoshop', 'Adobe Illustrator'],
      year: 'Poster 01',
      deliverables: ['Hero Poster', 'Retro Texture', 'Print Layout'],
      frame: 'portrait',
      image: retroMusicPosterOne,
      placeholderLabel: 'Add your retro poster later',
    },
    {
      id: 302,
      category: 'Music Tribute',
      title: 'Classic Melody Tribute',
      subtitle:
        'A vintage-inspired poster using faded paper tone, music staff lines, and portrait framing.',
      description:
        'This piece pushes a softer archival look while keeping the typography large and poster-led.',
      tools: ['Adobe Photoshop', 'Adobe Illustrator'],
      year: 'Poster 02',
      deliverables: ['Tribute Poster', 'Typography Study', 'Print Visual'],
      frame: 'portrait',
      image: retroMusicPosterTwo,
      placeholderLabel: 'Add your tribute poster later',
    },
    {
      id: 303,
      category: 'Cassette Poster',
      title: 'Cassette Era Collage',
      subtitle:
        'A layered composition mixing cassette iconography, portrait cutouts, and vintage paper noise.',
      description:
        'The layout combines retro blocks, worn print texture, and Khmer display type for a poster-style music collage.',
      tools: ['Adobe Photoshop', 'Adobe Illustrator'],
      year: 'Poster 03',
      deliverables: ['Cassette Poster', 'Retro Collage', 'Music Visual'],
      frame: 'portrait',
      image: retroMusicPosterThree,
      placeholderLabel: 'Add your collage poster later',
    },
    {
      id: 304,
      category: 'Artist Poster',
      title: 'Vintage Vocal Poster',
      subtitle:
        'A bright turquoise portrait poster balanced with sunburst shapes and handwritten note accents.',
      description:
        'This variation focuses on a cleaner focal portrait while preserving the same worn retro music mood.',
      tools: ['Adobe Photoshop', 'Adobe Illustrator'],
      year: 'Poster 04',
      deliverables: ['Artist Poster', 'Portrait Layout', 'Poster Visual'],
      frame: 'portrait',
      image: retroMusicPosterFour,
      placeholderLabel: 'Add your vocal poster later',
    },
  ],
  musicSection: {
    label: 'Retro Music Series',
    client: 'Vintage Music Poster Study',
    role: 'Graphic Designer',
    tool: 'Adobe Photoshop / Adobe Illustrator',
    year: '2025',
    deliverables: 'Poster Series, Retro Typography, Music Visuals',
    intro:
      'A retro vintage music poster series built with worn textures, collage portraits, bold color blocking, and expressive Khmer typography.',
    focus: ['Adobe Photoshop', 'Adobe Illustrator', 'Retro Poster Layout'],
    palette: [
      { name: 'Cream', value: '#fff4de' },
      { name: 'Retro Red', value: '#ea4335' },
      { name: 'Mustard', value: '#f2c84b' },
      { name: 'Aqua', value: '#63d0d6' },
    ],
    heroTitle: 'Retro Music',
    heroSubtitle: 'Vintage poster series',
  },
  socials: [
    {
      id: 1,
      name: 'GitHub',
      url: 'https://github.com/Meng-113',
    },
    {
      id: 2,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/meng-113',
    },
    {
      id: 3,
      name: 'Facebook',
      url: '',
    },
  ],
};

export default portfolioData;
