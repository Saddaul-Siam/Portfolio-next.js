import PhoneSlider from "./subCompo/PhoneSlider";
import WebSlider from "./subCompo/WebSlider";

const Testimonials = () => {
  const data = [
    {
      image: "https://i.ibb.co/SwtGj3b/project1.png",
      name: "Honda CBR",
      testimonials: [
        "This is a single-page website. (only client site)",
        "This is a bike-selling website.",
        "e-commerce Website",
      ],
      technology: ["HTML", "CSS", "Bootstrap"],
    },
    {
      image: "https://i.ibb.co/8PhD1T3/project2.png",
      name: " Responsive Football Website",
      testimonials: [
        "This is a single-page website. (only client site)",
        "Football news sharing website",
        "Sports website",
      ],
      technology: ["HTML", "CSS", "Bootstrap"],
    },
    {
      image: "https://i.ibb.co/5ThXVCY/Untitled-2.png",
      name: " Siam Store (e-commerce Website)",
      testimonials: [
        "This is a single-page website. (only client site)",
        "Simple javascript website",
        "e-commerce Website",
      ],
      technology: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      image: "https://i.ibb.co/WzK9HqM/project5.png",
      name: " Easy School (educational Website)",
      testimonials: [
        " This is a single-page website. (only client site)",
        "   Simple React website",
        "  Online learning website",
      ],
      technology: ["React", "Bootstrap"],
    },
    {
      image: "https://i.ibb.co/XSN7cJz/project8.png",
      name: " Pro medical (healthcare-website.)",
      testimonials: [
        "This is a single-page website. (only client site)",
        "Pro medical is online hospital",
        "Users need to log in via Google (also can create a new account)",
      ],
      technology: ["React", "React Router", "Bootstrap", "Firebase"],
    },
    {
      image: "https://i.ibb.co/VthncpG/project7.png",
      name: "Tour Planners (Tourism Website)",
      testimonials: [
        "This is a full-stack Tour-Planner booking website.",
        "  Users can be booking tours",
        " Users need to log in via Google (also can create a new account)",
        " Have admin and user dashboard. Admin can delete, add, manage services.",
      ],
      technology: [
        "React",
        "React Router",
        "Bootstrap",
        "Firebase",
        "Nodejs",
        "Mongodb",
      ],
    },
    {
      image: "https://i.ibb.co/ChJDNkv/project9.png",
      name: "Bike Buzz (e-commerce Website)",
      testimonials: [
        "This is a full-stack bike-selling website.",
        "Users can order bikes and need to cancel orders",
        "Users need to log in via Google (also can create a new account)",
        "Have admin and user dashboard. Admin can delete, add, manage services.",
      ],
      technology: [
        "React",
        "React Router",
        "MaterialUI",
        "Firebase",
        "Nodejs",
        "Mongodb",
      ],
    },
    {
      image: "https://i.ibb.co/QMh2KVs/project6.png",
      name: "Doctors Portal",
      testimonials: [
        " This is a full-stack Doctors website.",
        "Users can booking a Appointments",
        "Users need to log in via Google (also can create a new account)",
        "Have admin and user dashboard. Admin can delete, add, manage services.",
      ],
      technology: [
        "React",
        "React Router",
        "Material UI",
        "Firebase",
        "Nodejs",
        "Mongodb",
      ],
    },
    {
      image: "https://i.ibb.co/XLHCYMD/project11.png",
      name: " Jerins Parlour",
      testimonials: [
        "  This is a full-stack Parlour website.",
        "Users need to booking a services and cancel services",
        "Users can log in via Google (also can create a new account)",
        " Have admin and user dashboard. Admin can delete, add, manage services.",
      ],
      technology: [
        "React",
        "React Router",
        "Material UI",
        "Firebase",
        "Nodejs",
        "Mongodb",
      ],
    },
  ];

  return (
    <section
      id="portfolio"
      className="h-screen bg-gray-100 dark:bg-gray-800/30 pb-32 pt-[70rem] md:pt-0 md:scroll-mt-20"
    >
      <h2 className="text-3xl md:text-5xl font-bold font-lora text-orange-400 flex justify-center py-20 ">
        My Resent Projects
      </h2>
      <div className="hidden md:block">
        <WebSlider data={data} />
      </div>
      {/* Phone */}
      <div className="md:hidden">
        <PhoneSlider data={data} />
      </div>
    </section>
  );
};

export default Testimonials;
