// Master list of every industry vertical ChatFlo targets.
// Used by: /industries index grid, the demo-form business-type dropdown,
// and blog category tags. Adding a vertical here makes it appear everywhere.
//
// `live: true` means a fully written /industries/[slug] page exists.
// Everything else renders as a "coming soon" stub from the same template.

export type VerticalGroup =
  | "Healthcare"
  | "Beauty & Wellness"
  | "Food & Hospitality"
  | "Retail"
  | "Education"
  | "Home & Local Services"
  | "Professional Services"
  | "Automotive"
  | "Community & Others";

export interface Vertical {
  slug: string;
  name: string;
  group: VerticalGroup;
  /** Short emoji used as a lightweight icon (no image assets needed). */
  icon: string;
  /** true when a fully written industry page exists. */
  live?: boolean;
}

export const verticals: Vertical[] = [
  // Healthcare (LIVE at launch)
  { slug: "clinics", name: "Medical clinics & polyclinics", group: "Healthcare", icon: "🩺", live: true },
  { slug: "dental-clinics", name: "Dental clinics", group: "Healthcare", icon: "🦷" },
  { slug: "diagnostic-labs", name: "Diagnostic labs & scan centres", group: "Healthcare", icon: "🔬" },
  { slug: "pharmacies", name: "Pharmacies", group: "Healthcare", icon: "💊" },
  { slug: "physiotherapy", name: "Physiotherapy & rehab centres", group: "Healthcare", icon: "🦵" },
  { slug: "ayurveda-homeopathy", name: "Ayurveda & homeopathy clinics", group: "Healthcare", icon: "🌿" },
  { slug: "veterinary-clinics", name: "Veterinary clinics", group: "Healthcare", icon: "🐾" },
  { slug: "home-nursing", name: "Home nursing & elder care", group: "Healthcare", icon: "🏠" },

  // Beauty & Wellness
  { slug: "beauty-parlours", name: "Beauty parlours & salons", group: "Beauty & Wellness", icon: "💇", live: true },
  { slug: "spas", name: "Spas & massage centres", group: "Beauty & Wellness", icon: "💆" },
  { slug: "gyms", name: "Gyms & fitness studios", group: "Beauty & Wellness", icon: "🏋️" },
  { slug: "yoga-centres", name: "Yoga & meditation centres", group: "Beauty & Wellness", icon: "🧘" },
  { slug: "skin-hair-clinics", name: "Skin & hair clinics", group: "Beauty & Wellness", icon: "✨" },

  // Food & Hospitality
  { slug: "restaurants", name: "Restaurants & cafés", group: "Food & Hospitality", icon: "🍽️", live: true },
  { slug: "cloud-kitchens", name: "Cloud kitchens", group: "Food & Hospitality", icon: "🍱" },
  { slug: "bakeries", name: "Bakeries & cake shops", group: "Food & Hospitality", icon: "🎂" },
  { slug: "catering", name: "Catering services", group: "Food & Hospitality", icon: "🍲" },
  { slug: "hotels-homestays", name: "Hotels, resorts & homestays", group: "Food & Hospitality", icon: "🏨" },
  { slug: "travel-agencies", name: "Travel agencies & tour operators", group: "Food & Hospitality", icon: "🧳" },

  // Retail
  { slug: "kirana-supermarkets", name: "Kirana & supermarkets", group: "Retail", icon: "🛒" },
  { slug: "boutiques", name: "Boutiques & clothing stores", group: "Retail", icon: "👗" },
  { slug: "jewellery-shops", name: "Jewellery shops", group: "Retail", icon: "💍" },
  { slug: "mobile-electronics", name: "Mobile & electronics stores", group: "Retail", icon: "📱" },
  { slug: "furniture-decor", name: "Furniture & home decor", group: "Retail", icon: "🛋️" },
  { slug: "opticians", name: "Opticians", group: "Retail", icon: "👓" },

  // Education
  { slug: "tuition-centres", name: "Tuition & coaching centres", group: "Education", icon: "📚", live: true },
  { slug: "music-dance-art", name: "Music, dance & art classes", group: "Education", icon: "🎨" },
  { slug: "driving-schools", name: "Driving schools", group: "Education", icon: "🚗" },
  { slug: "skill-training", name: "Skill training institutes", group: "Education", icon: "🎓" },
  { slug: "preschools-daycare", name: "Preschools & daycare", group: "Education", icon: "🧸" },

  // Home & Local Services
  { slug: "tailors", name: "Tailors & boutiques", group: "Home & Local Services", icon: "🧵" },
  { slug: "laundry", name: "Laundry & dry cleaning", group: "Home & Local Services", icon: "👕" },
  { slug: "appliance-repair", name: "AC / appliance repair", group: "Home & Local Services", icon: "🔧" },
  { slug: "home-maintenance", name: "Plumbing, electrical & maintenance", group: "Home & Local Services", icon: "🪛" },
  { slug: "pest-control-cleaning", name: "Pest control & cleaning", group: "Home & Local Services", icon: "🧹" },
  { slug: "photographers", name: "Photographers & videographers", group: "Home & Local Services", icon: "📷" },
  { slug: "event-planners", name: "Event planners & wedding services", group: "Home & Local Services", icon: "🎉" },

  // Professional Services
  { slug: "ca-tax-consultants", name: "CA / tax consultants", group: "Professional Services", icon: "📊" },
  { slug: "lawyers", name: "Lawyers & legal services", group: "Professional Services", icon: "⚖️" },
  { slug: "real-estate", name: "Real estate agents & brokers", group: "Professional Services", icon: "🏘️" },
  { slug: "insurance-loan-agents", name: "Insurance & loan agents", group: "Professional Services", icon: "🛡️" },
  { slug: "architects-interior", name: "Architects & interior designers", group: "Professional Services", icon: "📐" },
  { slug: "recruitment", name: "Recruitment & placement", group: "Professional Services", icon: "💼" },

  // Automotive
  { slug: "car-service-centres", name: "Car/bike service & garages", group: "Automotive", icon: "🔩" },
  { slug: "vehicle-dealerships", name: "Vehicle dealerships", group: "Automotive", icon: "🚙" },
  { slug: "car-rental-taxi", name: "Car rental & taxi services", group: "Automotive", icon: "🚕" },

  // Community & Others
  { slug: "religious-community", name: "Religious & community organisations", group: "Community & Others", icon: "🛕" },
  { slug: "ngos", name: "NGOs & charities", group: "Community & Others", icon: "🤝" },
  { slug: "sports-academies", name: "Sports academies & clubs", group: "Community & Others", icon: "⚽" },
  { slug: "freelancers", name: "Freelancers & solo professionals", group: "Community & Others", icon: "🧑‍💻" },
];

export const verticalGroups: VerticalGroup[] = [
  "Healthcare",
  "Beauty & Wellness",
  "Food & Hospitality",
  "Retail",
  "Education",
  "Home & Local Services",
  "Professional Services",
  "Automotive",
  "Community & Others",
];

export function verticalsByGroup(group: VerticalGroup): Vertical[] {
  return verticals.filter((v) => v.group === group);
}

export function getVertical(slug: string): Vertical | undefined {
  return verticals.find((v) => v.slug === slug);
}
