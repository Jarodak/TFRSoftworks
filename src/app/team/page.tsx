"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

interface TeamMemberProps {
  name: string;
  title: string;
  photo: string;
}

const getLinkedInUrl = (name: string) => {
  const linkedInUrls: Record<string, string> = {
    "Peter Marcum": "https://www.linkedin.com/in/petermarcum/",
    "Don Kennedy": "https://www.linkedin.com/in/donaldgkennedy/",
    "Debby Sapp": "https://www.linkedin.com/in/debby-sapp-b5750666/",
    "Todd McCullough": "https://www.linkedin.com/in/todd-a-mccullough/",
    "Manoj Ginoya": "https://www.linkedin.com/in/manojginoya/",
    "Thomas Ross": "https://www.linkedin.com/in/tomross1/"
  };
  return linkedInUrls[name] || "";
};

function TeamMember({ name, title, photo }: TeamMemberProps) {
  const linkedInUrl = getLinkedInUrl(name);

  const handleLinkedInClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (linkedInUrl) {
      window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Link href={`/team/${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <article
        key={name}
        className="
          group text-center cursor-pointer transition-colors
          bg-slate-950/35 p-8 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm
        "
      >
        {photo && (
          <div className="mb-4 flex justify-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden ring-2 ring-white/20">
              <div className="aspect-square">
                <Image
                  src={photo}
                  alt={`${name} headshot`}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
            </div>
          </div>
        )}
        <h3 className="text-xl font-bold mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--sage-400)] to-[var(--timberwolf-600)]">
            {name}
          </span>
        </h3>
        <p className="text-[color:var(--sage-400)] font-medium mb-3">{title}</p>
        <div className="flex justify-center">
          <button
            onClick={handleLinkedInClick}
            className="p-2 hover:text-[color:var(--sage-400)] transition-colors rounded-full hover:bg-white/5"
            aria-label={`View ${name}'s LinkedIn profile`}
          >
            <svg className="w-5 h-5 text-white/40 hover:text-[color:var(--sage-400)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </button>
        </div>
      </article>
    </Link>
  );
}

export default function Team() {
  const teamMembers = [
    {
      name: "Peter Marcum",
      title: "Founding Partner",
      photo: "/Peter Marcum.jpg",
      bio: "Peter Marcum is the Founding Partner of Kernel Equity. He began his career in the 1980s as a self-taught programmer developing public housing software. He went on to build JML Computers and Nashville Computer Liquidators, which grew to $100 million in sales before being sold in 2000. He later co-founded Essex Technology Group, a major supplier for Bargain Hunt's 90 retail stores, which sold to TH Lee in 2015. Marcum also founded WV Fiber, a wholesale bandwidth network operating across the United States and Europe, which included Usenet Server; that business was sold in 2007. Following that exit, he launched DevDigital, a web and app development firm with over 125 full-time associates. In 2016, he established Kernel Equity through DevDigital to provide technical resources, development expertise, and capital to startups in industries such as education, healthcare, music, and e-commerce, with notable exits including CoreCommerce, OtherLeft, and Maxx Content."
    },
    {
      name: "Don Kennedy",
      title: "Partner & CEO",
      photo: "/Don Kennedy.jpg",
      bio: "Don Kennedy is a seasoned technology executive and entrepreneur with more than two decades of leadership experience spanning software development, project delivery, and strategic operations. As a Partner at Kernel Equity, Don focuses on identifying opportunities where technology and strategic investment intersect, helping founders scale with efficiency and clarity. He is also the Founding Partner and CEO of DDP Development, where he leads teams in building innovative digital solutions grounded in agile methodologies and SaaS expertise.\n\nBefore co-founding Kernel Equity, Don served in senior leadership roles at DevDigital, where he directed large-scale technology initiatives for startups, private enterprises, and Fortune 100 companies. His career has been defined by building strong client relationships, fostering cross-functional collaboration, and delivering measurable results. Based in Nashville, Tennessee, Don continues to guide businesses in modernizing their operations and leveraging technology to drive sustainable growth."
    },
    {
      name: "Debby Sapp",
      title: "Partner & CFO",
      photo: "/Debby Sapp.png",
      bio: "Debby Sapp is a Partner and the Chief Financial Officer of Kernel Equity. She was formerly CFO of DevDigital, where she helped guide its acquisition in 2023. At Kernel, she oversees all financial operations for six portfolio companies and manages compliance and reporting for both U.S. and international entities. She has more than two decades of experience in finance across healthcare and the music industry, where she worked with artists such as Alan Jackson and George Jones. Sapp has been deeply involved in successful exits at Kernel including Maxx Content, CoreCommerce, and Other Left. Outside her professional role, she is active in community service as treasurer for a Christian youth camp, a board member at her church, and a supporter of a special-needs sports foundation."
    },
    {
      name: "Todd McCullough",
      title: "Partner and Advisor",
      photo: "/Todd.png",
      bio: "Todd McCullough serves as Partner and Advisor at Kernel Equity. His career is centered on business growth and innovation. He previously led Growth and Innovation at North Highland and has advised more than 100 Fortune 500 companies across industries including financial services, healthcare, retail, and food service. McCullough also served as a senior partner at Monitor Group after leading Doblin, now part of Deloitte's Innovation Strategy practice. Known as a \"consultant to consultants,\" he has advised five of the six largest global management consulting firms. He holds both a CPA and an MBA, combining strong financial acumen with expertise in design thinking. McCullough has taught business through Vanderbilt and Notre Dame as well as design at the Institute of Design in Chicago, with upcoming courses at O'More College of Design. His representative client base includes Ford, McDonald's, EY, Pfizer, HCA, Subway, Boston Scientific, SC Johnson, Coca-Cola, Target, and GE."
    },
    {
      name: "Manoj Ginoya",
      title: "Head of Technology",
      photo: "/Manoj.jpg",
      bio: "Manoj Ginoya is the Head of Technology at Kernel Equity. With 17 years of experience in software and web application development, Ginoya has risen from Web Developer to technology leader. He has expertise in project management, strategic planning, cross-functional team leadership, and process improvement. He is a certified Scrum Master and a Google Professional Cloud Architect with skills spanning AWS, DevOps, Docker, Docker Swarm, and Kubernetes."
    },
    {
      name: "Thomas Ross",
      title: "Partner",
      photo: "/Tom.jpg",
      bio: "Thomas Ross is a Partner at Kernel Equity and has worked at DevDigital since 2011. His background spans roles as Senior Project Manager, SEO and Social Media Consultant and Trainer, and .NET Developer. Ross specializes in enterprise systems, search engine optimization, and database design, with a focus on healthcare and construction industries. He holds a BBA in Computer Information Systems and a BS in Economics, graduating Magna Cum Laude from Middle Tennessee State University. Before his business career, Ross served 13 years as a Military Police officer in the U.S. Army, including deployment to Iraq where he oversaw network systems at a Combat Support Hospital. His service earned him more than 35 citations, including the Bronze Star and the Iraq Campaign Medal."
    }
    // Commented out for potential future use:
    // {
    //   name: "Dr. Turner Nashe",
    //   title: "Member and President of IDS",
    //   photo: "/Turner.jpg",
    //   bio: "Dr. Turner Nashe is a Member of Kernel Equity and the President of IDS. He is an entrepreneur, inventor, and innovator known for developing digital delivery systems for education and entertainment in security-sensitive industries. He holds a doctorate in Educational Administration and Supervision from Tennessee State University and a bachelor's degree in Psychology from John Carroll University. Nashe has built businesses that provide secure digital content delivery to schools, correctional facilities, and healthcare providers across both private and public sectors, including government entities. His work emphasizes innovative systems for content delivery and performance verification with a focus on human development and social progress."
    // },
    // {
    //   name: "Mitch Ballard",
    //   title: "Member",
    //   photo: "/Mitch.jpg",
    //   bio: "Mitch Ballard is a Member of Kernel Equity."
    // },
    // {
    //   name: "Robert Echols",
    //   title: "Member and Advisor",
    //   photo: "/Robert.jpg",
    //   bio: "Robert Echols is a Member and Advisor at Kernel Equity."
    // }
  ];

  return (
    <div className="min-h-screen">
      {/* Page header removed; using global Header */}

      {/* Team Grid */}
      <main className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--sage-400)] to-[color:var(--timberwolf-600)]">
                Our Team
              </span>
            </h1>
            <p className="text-xl text-[color:var(--timberwolf-600)] text-center mb-16 max-w-3xl mx-auto">
              Meet the experienced professionals who bring deep expertise in technology, finance, and business development to help founders build successful companies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member) => (
              <TeamMember
                key={member.name}
                name={member.name}
                title={member.title}
                photo={member.photo}
              />
            ))}
          </motion.div>
        </Container>
      </main>

      {/* Removed CTA: Work With Our Team */}
    </div>
  );
}
