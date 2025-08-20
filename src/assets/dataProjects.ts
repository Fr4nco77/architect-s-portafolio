export interface FeatureProject {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface AditionalWork {
  title: string;
  year: string;
  image: string;
}

export const featuredProjects: FeatureProject[] = [
  {
    title: "Hillside Residence",
    subtitle: "Private Client • 2024 • Los Angeles, CA",
    description:
      "A contemporary family home that embraces its hillside setting through carefully orchestrated views and seamless indoor-outdoor living. The design features sustainable materials and passive cooling strategies.",
    image: "",
  },
  {
    title: "Cultural Center",
    subtitle: "City of Portland • 2023 • Portland, OR",
    description:
      "A community gathering space that celebrates local culture through its architectural form. The building features flexible exhibition spaces, a performance hall, and educational facilities.",
    image: "",
  },
  {
    title: "Sustainable Office Complex",
    subtitle: "Tech Startup • 2023 • San Francisco, CA",
    description:
      "A net-zero energy office building that demonstrates how sustainable design can enhance workplace productivity. Features include natural ventilation, daylight optimization, and integrated renewable energy systems.",
    image: "",
  },
];

export const aditionalWorks: AditionalWork[] = [
  {
    title: "Urban Loft Renovation",
    year: "2024",
    image: "modern loft interior with exposed brick and steel beams",
  },
  {
    title: "Meditation Pavilion",
    year: "2023",
    image: "minimalist wooden pavilion in forest setting",
  },
  {
    title: "Rooftop Garden Design",
    year: "2023",
    image: "urban rooftop garden with modern planters and seating",
  },
  {
    title: "Gallery Extension",
    year: "2022",
    image: "contemporary glass extension to historic gallery building",
  },
  {
    title: "Coastal Retreat",
    year: "2022",
    image: "modern beach house with large windows facing ocean",
  },
  {
    title: "Community Library",
    year: "2021",
    image: "public library with reading gardens and natural light",
  },
];
