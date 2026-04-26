export const SITE_CONFIG = {
  name: "Gowri Wedding Photography",
  tagline: "Capturing Love Forever",
  phone: "7842506290",
  whatsapp: "7842506290",
  email: "sriashish3226@gmail.com",
  address: "Billumada, Bhamini, Srikakulam, Andhra Pradesh",
  instagram: "photograhy_gp",
  established: 2022,
  mapUrl: "https://maps.app.goo.gl/DikgKNVrskNDjRR49",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.8!2d84.0!3d18.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBillumada%2C+Bhamini%2C+Srikakulam!5e0!3m2!1sen!4v1",
  serviceAreas: ["Andhra Pradesh", "Telangana", "Odisha"],
  stats: [
    { label: "Years Experience", value: "3+", icon: "calendar" },
    { label: "Happy Clients", value: "500+", icon: "heart" },
    { label: "Events Covered", value: "1000+", icon: "camera" },
    { label: "States Covered", value: "3+", icon: "map" },
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Videos", href: "/videos" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = {
  wedding: {
    title: "Wedding Services",
    items: [
      {
        name: "Wedding Photography",
        desc: "Timeless photographs that capture every emotion, every glance, and every joyful tear of your special day.",
        icon: "camera",
      },
      {
        name: "Wedding Videography",
        desc: "Cinematic wedding films that bring your love story to life with stunning visuals and heartfelt moments.",
        icon: "video",
      },
      {
        name: "Cinematic Wedding Films",
        desc: "Hollywood-style wedding films with professional color grading, aerial shots, and emotional storytelling.",
        icon: "film",
      },
      {
        name: "Candid Wedding Photography",
        desc: "Natural, unscripted moments captured beautifully — the laughter, the tears, the stolen glances.",
        icon: "heart",
      },
      {
        name: "Traditional Wedding Photography",
        desc: "Classic posed portraits and ceremonial coverage preserving the grandeur of traditional wedding rituals.",
        icon: "image",
      },
      {
        name: "Drone Wedding Coverage",
        desc: "Breathtaking aerial perspectives of your venue, processions, and celebrations from above.",
        icon: "drone",
      },
      {
        name: "Reception Photography & Videography",
        desc: "Complete coverage of your reception — the dances, speeches, cake cutting, and celebrations.",
        icon: "party",
      },
      {
        name: "Engagement Photography",
        desc: "Beautiful engagement session photography to announce your love story to the world.",
        icon: "ring",
      },
    ],
  },
  preWedding: {
    title: "Pre & Special Events",
    items: [
      {
        name: "Pre-Wedding Shoots",
        desc: "Romantic pre-wedding photography at stunning locations that tell your unique love story.",
        icon: "couple",
      },
      {
        name: "Haldi Ceremony Coverage",
        desc: "Vibrant, colorful coverage of your Haldi ceremony — capturing the joy, laughter, and golden moments.",
        icon: "sun",
      },
      {
        name: "Mehendi Ceremony Coverage",
        desc: "Artistic documentation of intricate mehendi designs and the celebration surrounding this beautiful ritual.",
        icon: "palette",
      },
      {
        name: "Sangeet Coverage",
        desc: "High-energy coverage of your Sangeet night — the dances, performances, and unforgettable moments.",
        icon: "music",
      },
      {
        name: "Couple Portrait Sessions",
        desc: "Intimate couple portraits that showcase the chemistry, love, and connection between you two.",
        icon: "portrait",
      },
    ],
  },
  family: {
    title: "Family & Personal Events",
    items: [
      {
        name: "Baby Shoots",
        desc: "Adorable baby photography sessions capturing the precious early moments of your little one.",
        icon: "baby",
      },
      {
        name: "Birthday Event Coverage",
        desc: "Fun-filled birthday party coverage — from decorations to cake smashing to joyful celebrations.",
        icon: "cake",
      },
      {
        name: "Housewarming Ceremony Coverage",
        desc: "Document the joy of your new home with professional coverage of your Griha Pravesh ceremony.",
        icon: "home",
      },
      {
        name: "Family Celebrations",
        desc: "Professional photography for family reunions, anniversaries, and milestone celebrations.",
        icon: "family",
      },
    ],
  },
  corporate: {
    title: "Corporate & Commercial",
    items: [
      {
        name: "Corporate Event Photography",
        desc: "Professional corporate event coverage — conferences, seminars, award ceremonies, and team events.",
        icon: "building",
      },
      {
        name: "Product Shoots",
        desc: "High-quality product photography for catalogs, e-commerce, and marketing materials.",
        icon: "box",
      },
      {
        name: "Promotional Videos",
        desc: "Engaging promotional video content for businesses, brands, and marketing campaigns.",
        icon: "megaphone",
      },
    ],
  },
  addons: {
    title: "Add-On Services",
    items: [
      {
        name: "Premium Photo Frames",
        desc: "Museum-quality framing options to showcase your favorite wedding moments in your home.",
        icon: "frame",
      },
      {
        name: "Wedding Album Design",
        desc: "Beautifully designed premium wedding albums that become treasured family heirlooms.",
        icon: "book",
      },
      {
        name: "Live Streaming Services",
        desc: "Professional live streaming so distant loved ones can witness your celebration in real-time.",
        icon: "wifi",
      },
      {
        name: "LED Screen Event Coverage",
        desc: "Live photo and video display on LED screens during your event for an immersive experience.",
        icon: "monitor",
      },
      {
        name: "Instant Photo Delivery",
        desc: "Quick turnaround same-day or next-day photo delivery options for social media sharing.",
        icon: "zap",
      },
    ],
  },
};

export const TESTIMONIALS = [
  {
    name: "Priya & Ravi",
    event: "Wedding Photography",
    location: "Srikakulam, AP",
    rating: 5,
    text: "Gowri Wedding Photography made our day truly magical. The team captured every emotion so beautifully that looking at our photos feels like reliving the day all over again. Professional, punctual, and incredibly talented!",
    avatar: "PR",
  },
  {
    name: "Sneha & Arjun",
    event: "Pre-Wedding Shoot",
    location: "Vizag, AP",
    rating: 5,
    text: "Our pre-wedding shoot was an absolute dream. They found the most stunning locations and made us feel so comfortable in front of the camera. The photos turned out like a movie poster! Highly recommended.",
    avatar: "SA",
  },
  {
    name: "Lakshmi & Krishna",
    event: "Reception Coverage",
    location: "Hyderabad, TS",
    rating: 5,
    text: "We cannot thank the Gowri team enough. From the Haldi to the Reception, every moment was captured perfectly. The cinematic video they created brought tears to our eyes. Simply the best!",
    avatar: "LK",
  },
  {
    name: "Divya & Suresh",
    event: "Destination Wedding",
    location: "Puri, Odisha",
    rating: 5,
    text: "They traveled all the way to Puri for our destination wedding and delivered beyond expectations. The drone shots of the beach ceremony were absolutely breathtaking. Worth every penny!",
    avatar: "DS",
  },
  {
    name: "Anitha & Ramesh",
    event: "Baby Shoot",
    location: "Srikakulam, AP",
    rating: 5,
    text: "The baby photoshoot was so adorable! They were incredibly patient with our little one and captured the most precious expressions. The photos are now our most treasured possession.",
    avatar: "AR",
  },
  {
    name: "Kavya & Mahesh",
    event: "Wedding & Reception",
    location: "Rajam, AP",
    rating: 5,
    text: "Professional team and amazing quality. They covered our entire wedding from start to finish. Every photo tells a story. Beautiful memories captured perfectly. Will definitely recommend to everyone!",
    avatar: "KM",
  },
];

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Weddings",
  "Pre-Wedding",
  "Engagement",
  "Reception",
  "Baby Shoots",
  "Birthday Events",
  "Drone Shots",
  "Cinematic Videos",
];

export const BLOG_POSTS = [
  {
    slug: "best-wedding-photography-ideas",
    title: "Best Wedding Photography Ideas for 2024",
    excerpt:
      "Discover the most trending wedding photography styles and ideas to make your special day truly memorable. From candid moments to drone shots.",
    date: "2024-12-15",
    readTime: "5 min read",
    category: "Wedding Tips",
  },
  {
    slug: "how-to-plan-pre-wedding-shoot",
    title: "How to Plan the Perfect Pre-Wedding Shoot",
    excerpt:
      "A complete guide to planning your pre-wedding photoshoot — from choosing locations to outfits, timing, and poses that tell your love story.",
    date: "2024-11-20",
    readTime: "7 min read",
    category: "Planning Guide",
  },
  {
    slug: "top-wedding-venues-andhra-pradesh",
    title: "Top Wedding Venues in Andhra Pradesh",
    excerpt:
      "Explore the most beautiful and popular wedding venues across Andhra Pradesh — from beachside resorts to heritage palaces and lush gardens.",
    date: "2024-10-10",
    readTime: "6 min read",
    category: "Venues",
  },
  {
    slug: "wedding-photo-poses-guide",
    title: "Wedding Photo Poses Guide for Couples",
    excerpt:
      "Look your absolute best on camera with our expert guide to the most flattering and romantic wedding photo poses for couples.",
    date: "2024-09-05",
    readTime: "4 min read",
    category: "Photo Tips",
  },
  {
    slug: "candid-vs-traditional-photography",
    title: "Candid vs Traditional Wedding Photography",
    excerpt:
      "Understanding the difference between candid and traditional photography styles to choose the best approach for your wedding day.",
    date: "2024-08-18",
    readTime: "5 min read",
    category: "Wedding Tips",
  },
  {
    slug: "drone-photography-weddings",
    title: "Why Drone Photography is a Must for Modern Weddings",
    excerpt:
      "Discover how aerial drone photography can transform your wedding memories with breathtaking bird's-eye views of your celebration.",
    date: "2024-07-22",
    readTime: "4 min read",
    category: "Technology",
  },
];
