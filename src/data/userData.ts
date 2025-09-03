import { UserData } from '../types';

export const userData: UserData = {
  name: "Shah Siddh",
  title: "B.Tech - Artificial Intelligence",
  email: "shahsiddhp@gmail.com",
  phone: "+91-9429034907",
  github: "https://github.com/Siddh-2006",
  linkedin: "https://in.linkedin.com/in/siddh-shah-71491832a",
  leetcode: "https://leetcode.com/u/Siddh_0718/",
  education: [
    {
      degree: "IPG, AI",
      institute: "Sardar Vallabhbhai National Institute of Technology, Surat",
      grade: "8.3 (Current)",
      year: "2025-Present"
    },
    {
      degree: "Higher Secondary",
      institute: "GSEB Board",
      grade: "90.2%",
      year: "2024"
    },
    {
      degree: "Secondary",
      institute: "GSEB Board",
      grade: "94.67%",
      year: "2022"
    }
  ],
  experience: [
    {
      company: "Centre for Development of Advanced Computing, India",
      position: "Cyber Security Intern",
      duration: "May 2024 - Jun 2024",
      location: "Remote",
      description: [
        "Collaborated with a team on a digital forensics project focused on data recovery and investigation post-system compromise.",
        "Developed a system using memory dumps to recover deleted files and perform network forensics; utilized tools like Volatility, WireShark, and Autopsy.",
        "Gained hands-on experience with NMAP, Keyloggers, SPARTA, DNSENUM, NESSUS, AMASS and WireShark providing a comprehensive understanding of cyber security."
      ]
    }
  ],
  projects: [
    {
      name: "SportsHub - Empowering Athletes with Digital Identity and AI Coaching",
      description: "Web Wonders - 2025 conducted by Nexus NIT, Surat",
      duration: "Jul. 2025 - Aug. 2025",
      technologies: ["MERN Stack"],
      links: {
        website: "https://sportshub-murex.vercel.app/",
        github: "https://github.com/Siddh-2006/BrightWebXWebWonders"
      },
      highlights: [
        "Developed AIGuru for providing 24/7 coaching with instant guide",
        "Used MediaPipePose Model for Posture Analysis, making athletes",
        "Created Custom Training Plans, ensuring priorities of Athlete",
        "Applied Pose Detection and Feature Extraction to analyze Posture of player"
      ]
    },
    {
      name: "Project B: Weather App",
      description: "Built in Django",
      duration: "Month Year",
      technologies: [],
      links: {
        github: "https://github.com/Siddh-2006/weather_app"
      },
      highlights: []
    },
    // {
    //   name: "Financio - Finance with Financio",
    //   description: "Web Wonders - 2024 conducted by Nexus NIT, Surat",
    //   duration: "Jul 2024 - Aug 2024",
    //   technologies: ["React", "Node.js", "Next.js", "TypeScript"],
    //   links: {
    //     website: "https://financio2.vercel.app/",
    //     github: "https://github.com/Vatsal565/final"
    //   },
    //   highlights: [
    //     "Developed comprehensive financial management system",
    //     "Implemented real-time data visualization features",
    //     "Created responsive user interface with modern design",
    //     "Applied advanced financial algorithms for analysis"
    //   ]
    // }
  ],
  skills: {
    languages: ["Python", "C", "C++", "HTML5", "CSS", "JavaScript", "MySQL", "TypeScript", "VBA"],
    frameworks: ["scikit-learn", "PyTorch", "TensorFlow", "Keras", "OpenCV", "Streamlit", "NextJS", "ThreeJS", "ReactJS", "NodeJS", "Tailwind CSS", "GitHub", "PostgreSQL"]
  },
  certifications: [
    // {
    //   name: "Cyber Security Fundamentals",
    //   issuer: "C-DAC",
    //   date: "June 2024"
    // }
  ],
  achievements: [
    "Secured top position in Web Wonders hackathon",
    "Maintained 9.72 CGPA in B.Tech AI program",
    "Successfully completed cyber security internship"
  ],
  positions: [
    // { title: "Member, Nexus", organization: "Nexus", duration: "August 2025" },
    { title: "CEV", organization: "CLUB", duration: "2025" },
    { title: "ACM", organization: "NIT Surat", duration: "2025" }
  ]
};