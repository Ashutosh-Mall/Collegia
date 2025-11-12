const sampleEvents = [
  {
    title: "Tech Innovators Summit 2025",
    description: "A gathering of the brightest minds in technology to discuss AI, IoT, and future innovations.",
    category: "Tech",
    organizer: "TechWorld Inc.",
    date: new Date("2025-11-15"),
    time: "10:00 AM - 5:00 PM",
    location: "Bangalore International Convention Centre",
    image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
    maxParticipants: 300,
    tags: ["AI", "IoT", "Innovation"]
  },
  {
    title: "Cultural Fest - Rhythms of India",
    description: "Celebrate the rich cultural diversity of India with music, dance, and food.",
    category: "Cultural",
    organizer: "National Cultural Council",
    date: new Date("2025-12-05"),
    time: "12:00 PM - 10:00 PM",
    location: "Mumbai Art Park",
    image: "https://images.unsplash.com/photo-1760662018512-e881f06d0fe0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000",
    maxParticipants: 500,
    tags: ["Music", "Dance", "Food"]
  },
  {
    title: "City Marathon 2025",
    description: "Run for a cause! Join thousands of participants in our annual city marathon.",
    category: "Sports",
    organizer: "RunCity Foundation",
    date: new Date("2025-10-25"),
    time: "6:00 AM - 12:00 PM",
    location: "City Central Park",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1174",
    maxParticipants: 1000,
    tags: ["Running", "Health", "Fitness"]
  },
  {
    title: "Photography Workshop",
    description: "Learn the art of photography from professional photographers in this hands-on workshop.",
    category: "Non-Cultural",
    organizer: "SnapPro Academy",
    date: new Date("2025-11-20"),
    time: "2:00 PM - 6:00 PM",
    location: "Delhi Photography Studio",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    maxParticipants: 50,
    tags: ["Photography", "Workshop", "Learning"]
  },
  {
    title: "Startup Pitch Night",
    description: "Pitch your startup idea to investors and get valuable feedback.",
    category: "Tech",
    organizer: "Startup Hub",
    date: new Date("2025-12-10"),
    time: "5:00 PM - 9:00 PM",
    location: "Startup Hub Auditorium",
    image: "https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1204",
    maxParticipants: 150,
    tags: ["Startup", "Investors", "Networking"]
  },



  {
    title: "AI & Robotics Expo 2025",
    description: "Explore the latest in AI and robotics with interactive demos and tech talks.",
    category: "Tech",
    organizer: "RoboTech Labs",
    date: new Date("2025-11-28"),
    time: "9:00 AM - 6:00 PM",
    location: "Hyderabad Convention Center",
    image: "https://images.unsplash.com/photo-1581091870622-6d1f7dbbd7a8?auto=fhttps://unsplash.com/photos/a-computer-generated-image-of-the-letter-a-ZPOoDQc8yMwormat&fit=crop&q=80&w=1170",
    maxParticipants: 400,
    tags: ["AI", "Robotics", "Innovation"]
},
{
    title: "National Football Championship",
    description: "Witness the best teams from across the country battle it out on the field.",
    category: "Sports",
    organizer: "All India Football Federation",
    date: new Date("2025-11-10"),
    time: "10:00 AM - 8:00 PM",
    location: "Kolkata Sports Arena",
    image: "https://images.unsplash.com/photo-1507646227500-0df7c54f9142?auto=formhttps://unsplash.com/photos/white-and-gray-adidas-soccerball-on-lawn-grass-qWs_Wa1JrKMat&fit=crop&q=80&w=1170",
    maxParticipants: 800,
    tags: ["Football", "Competition", "Sports"]
},
{
    title: "Digital Marketing Webinar",
    description: "Learn digital marketing strategies and tools from industry experts.",
    category: "Webinar",
    organizer: "MarketGuru Online",
    date: new Date("2025-10-30"),
    time: "4:00 PM - 6:00 PM",
    location: "Online",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=fhttps://unsplash.com/photos/digital-marketing-artwork-on-brown-wooden-surface-SB0WARG16HIormat&fit=crop&q=80&w=1170",
    maxParticipants: 200,
    tags: ["Marketing", "Online", "Learning"]
},
{
    title: "Creative Writing Workshop",
    description: "Enhance your writing skills with practical exercises and expert guidance.",
    category: "Workshop",
    organizer: "Writers Guild",
    date: new Date("2025-11-12"),
    time: "1:00 PM - 5:00 PM",
    location: "Chennai Literary Club",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&https://unsplash.com/photos/write-ideas-book-on-brown-wooden-board-AXqMy8MSSdkfit=crop&q=80&w=1170",
    maxParticipants: 60,
    tags: ["Writing", "Workshop", "Creative"]
},
{
    title: "Entrepreneurship Summit",
    description: "Connect with startup founders and investors to grow your business ideas.",
    category: "Entrepreneurship",
    organizer: "BizFounders Network",
    date: new Date("2025-12-03"),
    time: "9:00 AM - 7:00 PM",
    location: "Bangalore Startup Hub",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fhttps://unsplash.com/photos/three-men-sitting-while-using-laptops-and-watching-man-beside-whiteboard-wD1LRb9OeEoit=crop&q=80&w=1170",
    maxParticipants: 250,
    tags: ["Startup", "Investors", "Networking"]
},
{
    title: "Classical Dance Night",
    description: "Experience the elegance of Indian classical dances performed by renowned artists.",
    category: "Cultural",
    organizer: "Kala Bharati Society",
    date: new Date("2025-11-22"),
    time: "6:00 PM - 10:00 PM",
    location: "Mumbai Cultural Hall",
    image: "https://images.unsplash.com/photo-1573497165005-6a4bb52f7b82?auto=formahttps://unsplash.com/photos/a-couple-of-women-standing-next-to-each-other-rMylQ_L6bYEt&fit=crop&q=80&w=1170",
    maxParticipants: 300,
    tags: ["Dance", "Cultural", "Performance"]
},
{
    title: "National Coding Competition",
    description: "Test your coding skills and compete with the brightest minds in the nation.",
    category: "Competition",
    organizer: "CodeNation",
    date: new Date("2025-12-08"),
    time: "10:00 AM - 4:00 PM",
    location: "Delhi Tech Arena",
    image: "https://images.unsplash.com/photo-1581090700227-c97ee20f80db?auto=format&fhttps://unsplash.com/photos/man-in-black-shirt-using-laptop-computer-and-flat-screen-monitor--S2-AKdWQoQit=crop&q=80&w=1170",
    maxParticipants: 350,
    tags: ["Coding", "Competition", "Programming"]
},
{
    title: "Green Earth Seminar",
    description: "Learn about sustainable practices and environmental conservation from experts.",
    category: "Seminar",
    organizer: "EcoSave Foundation",
    date: new Date("2025-11-18"),
    time: "11:00 AM - 3:00 PM",
    location: "Pune Eco Center",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=forhttps://unsplash.com/photos/world-map-of-vegetation-and-flowers-with-blue-background-3d-rendering-dZU-__aaE8Mmat&fit=crop&q=80&w=1170",
    maxParticipants: 100,
    tags: ["Environment", "Sustainability", "Education"]
},
{
    title: "Startup Networking Evening",
    description: "Meet like-minded entrepreneurs and expand your professional network.",
    category: "Networking",
    organizer: "ConnectHub",
    date: new Date("2025-12-01"),
    time: "5:00 PM - 9:00 PM",
    location: "Bangalore Business Lounge",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?autohttps://unsplash.com/photos/man-standing-beside-another-sitting-man-using-computer-l90zRbWvCoE=format&fit=crop&q=80&w=1170",
    maxParticipants: 150,
    tags: ["Networking", "Startup", "Business"]
},
{
    title: "Community Social Meet",
    description: "A casual gathering to connect with the local community and share ideas.",
    category: "Other",
    organizer: "Neighborhood Circle",
    date: new Date("2025-12-15"),
    time: "3:00 PM - 7:00 PM",
    location: "Local Community Hall, Jaipur",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fhttps://unsplash.com/photos/diverse-hands-bump-fists-in-solidarity-9yhBvC2ykocit=crop&q=80&w=1170",
    maxParticipants: 120,
    tags: ["Community", "Social", "Meetup"]
},



{
    title: "Blockchain & Crypto Conference",
    description: "Dive deep into blockchain technology and crypto trends with industry leaders.",
    category: "Tech",
    organizer: "CryptoWorld",
    date: new Date("2025-12-12"),
    time: "10:00 AM - 6:00 PM",
    location: "Mumbai International Expo Center",
    image: "https://images.unsplash.com/photo-1611095564981-4d60c0d9c84f?auto=formahttps://unsplash.com/photos/a-group-of-blue-cubes-with-numbers-on-them-JlijbOtSWuwt&fit=crop&q=80&w=1170",
    maxParticipants: 300,
    tags: ["Blockchain", "Crypto", "Innovation"]
},
{
    title: "National Chess Tournament",
    description: "Compete with the best chess players from across the country.",
    category: "Sports",
    organizer: "Chess Federation of India",
    date: new Date("2025-11-29"),
    time: "9:00 AM - 9:00 PM",
    location: "Chennai Chess Arena",
    image: "https://images.unsplash.com/photo-16077468820https://unsplash.com/photos/selective-focus-photography-of-chess-pieces-G1yhU1Ej-9A42-944635dfe10e?auto=format&fit=crop&q=80&w=1170",
    maxParticipants: 200,
    tags: ["Chess", "Competition", "Strategy"]
},
{
    title: "Photography Webinar",
    description: "Learn photography tips and tricks from professional photographers online.",
    category: "Webinar",
    organizer: "PhotoPro Online",
    date: new Date("2025-10-28"),
    time: "5:00 PM - 7:00 PM",
    location: "Online",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafchttps://unsplash.com/photos/person-holding-canon-eos-dslr-camera-L6W9ZIQ5saMde?auto=format&fit=crop&q=80&w=1170",
    maxParticipants: 150,
    tags: ["Photography", "Online", "Learning"]
},
{
    title: "Creative Arts Workshop",
    description: "Hands-on workshop on painting, sketching, and other visual arts.",
    category: "Workshop",
    organizer: "Artista Studio",
    date: new Date("2025-11-25"),
    time: "2:00 PM - 6:00 PM",
    location: "Delhi Art Center",
    image: "https://images.unsplash.com/photo-1558980394-0https://unsplash.com/photos/smiling-asian-girl-having-fun-painting-with-her-mother-at-home-F84-n4hclT0c0370f9e7b8?auto=format&fit=crop&q=80&w=1170",
    maxParticipants: 50,
    tags: ["Art", "Workshop", "Creative"]
},
{
    title: "Women in Entrepreneurship Summit",
    description: "Empowering women entrepreneurs to innovate, lead, and grow.",
    category: "Entrepreneurship",
    organizer: "SheLeads Network",
    date: new Date("2025-12-05"),
    time: "10:00 AM - 6:00 PM",
    location: "Bangalore Business Center",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=fhttps://unsplash.com/photos/group-of-people-sitting-beside-rectangular-wooden-table-with-laptops-34GZCgaVkskormat&fit=crop&q=80&w=1170",
    maxParticipants: 200,
    tags: ["Women", "Startup", "Networking"]
},
{
    title: "Jazz Night Festival",
    description: "A night of mesmerizing jazz performances by top musicians.",
    category: "Cultural",
    organizer: "MusicMakers Society",
    date: new Date("2025-11-20"),
    time: "7:00 PM - 11:00 PM",
    location: "Kolkata Music Hall",
    image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=formathttps://unsplash.com/photos/group-of-friends-having-fun-on-a-party-in-at-the-bar-at-night-focus-is-on-black-woman-holding-microphone-and-singing-0f7zU2voKgE&fit=crop&q=80&w=1170",
    maxParticipants: 400,
    tags: ["Music", "Cultural", "Festival"]
},
{
    title: "Math Olympiad 2025",
    description: "Challenge your problem-solving skills in this national math competition.",
    category: "Competition",
    organizer: "National Math Society",
    date: new Date("2025-12-02"),
    time: "9:00 AM - 5:00 PM",
    location: "Pune Education Center",
    image: "https://images.unsplash.com/photo-1581093458366-5e8c81b9f3f2?auto=format&fit=crop&q=80&https://unsplash.com/photos/a-pair-of-scissors-a-ruler-and-a-ruler-on-a-table-Wq5hLAR8SOww=1170",
    maxParticipants: 250,
    tags: ["Math", "Competition", "Education"]
},
{
    title: "Renewable Energy Seminar",
    description: "Learn about solar, wind, and other renewable energy solutions.",
    category: "Seminar",
    organizer: "GreenTech Foundation",
    date: new Date("2025-11-16"),
    time: "10:00 AM - 2:00 PM",
    location: "Hyderabad Eco Center",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=https://unsplash.com/photos/a-large-field-with-a-bunch-of-windmills-in-the-background-sy4v8aDAjTEformat&fit=crop&q=80&w=1170",
    maxParticipants: 120,
    tags: ["Energy", "Sustainability", "Seminar"]
},
{
    title: "Startup Mixer Night",
    description: "Connect with startup founders and potential investors over drinks.",
    category: "Networking",
    organizer: "Startup Connect",
    date: new Date("2025-12-07"),
    time: "6:00 PM - 10:00 PM",
    location: "Mumbai Business Lounge",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11dhttps://unsplash.com/photos/group-of-people-having-a-meeting-VBLHICVh-lI?auto=format&fit=crop&q=80&w=1170",
    maxParticipants: 180,
    tags: ["Networking", "Startup", "Business"]
},
{
    title: "Community Volunteer Drive",
    description: "Join hands with local volunteers to clean and improve community spaces.",
    category: "Other",
    organizer: "Helping Hands NGO",
    date: new Date("2025-12-20"),
    time: "8:00 AM - 1:00 PM",
    location: "Jaipur Central Park",
    image: "https://images.unsplash.com/photo-1524678606370https://unsplash.com/photos/a-woman-wearing-a-vest-with-a-volunteer-badge-on-it-CCcHkPBhbbo-a47ad25cb82a?auto=format&fit=crop&q=80&w=1170",
    maxParticipants: 100,
    tags: ["Community", "Volunteering", "Social"]
}


];

module.exports = sampleEvents;
