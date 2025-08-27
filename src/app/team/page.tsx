'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const TeamMember = ({ 
  name, 
  title, 
  bio, 
  photo,
  delay = 0 
}: { 
  name: string; 
  title: string; 
  bio: string; 
  photo?: string;
  delay?: number; 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="rounded-2xl bg-slate-950/35 p-8 ring-1 ring-white/10 backdrop-blur-sm"
  >
    <div className="flex flex-col sm:flex-row gap-6 mb-6">
      {photo && (
        <div className="flex-shrink-0">
          <Image
            src={photo}
            alt={name}
            width={120}
            height={120}
            className="rounded-xl object-cover w-24 h-24 sm:w-30 sm:h-30"
          />
        </div>
      )}
      <div className="flex-grow">
        <h3 className="text-xl font-bold mb-2 text-[color:var(--yellow-green)]">
          {name}
        </h3>
        <p className="text-sm font-medium text-[color:var(--asparagus)] mb-4">
          {title}
        </p>
      </div>
    </div>
    <p className="text-white/90 leading-relaxed">
      {bio}
    </p>
  </motion.div>
);

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
      bio: "Don Kennedy is a seasoned technology executive and entrepreneur with over two decades of leadership experience in software development, project delivery, and strategic operations. Prior to launching DDP, Don served in senior leadership roles at DevDigital. He is also a partner at Kernel Equity, a firm focused on strategic investment and development in the tech space. As the Founding Partner and CEO of DDP Development, Don is at the forefront of delivering innovative digital solutions, leveraging his deep expertise in agile methodologies, business analysis, and SaaS development. Throughout his career, Don has led large-scale technology initiatives for both small private companies, startups, and fortune 100 companies. His leadership style is rooted in relationship building, cross-functional team collaboration, and results-driven project execution. Now based in Nashville, Tennessee, Don continues to help businesses scale and modernize through customized digital strategies and dependable execution."
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
      photo: "/Todd",
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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="group inline-flex items-center gap-2">
              <Image src="/header-logo.png" alt="Kernel Equity" width={200} height={48} priority className="h-10 w-auto md:h-12" />
            </Link>
            <nav className="hidden items-center gap-8 md:flex">
              <Link href="/bio" className="text-sm font-medium text-white/80 hover:text-white">
                Bio
              </Link>
              <Link href="/team" className="text-sm font-medium text-[color:var(--yellow-green)] hover:text-white">
                Team
              </Link>
              <Link href="/#sectors" className="text-sm font-medium text-white/80 hover:text-white">
                Solutions
              </Link>
              <Link href="/portfolio" className="text-sm font-medium text-white/80 hover:text-white">
                Portfolio
              </Link>
              <Link href="/#contact" className="text-sm font-medium text-white/80 hover:text-white">
                Contact
              </Link>
            </nav>
          </div>
        </Container>
      </header>

      {/* Team Content */}
      <main className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--yellow-green)] to-[var(--parchment)]">
                Our Team
              </span>
            </h1>
            <p className="text-xl text-white/80 text-center mb-16 max-w-3xl mx-auto">
              Meet the experienced professionals who bring deep expertise in technology, finance, and business development to help founders build successful companies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={member.name}
                  name={member.name}
                  title={member.title}
                  bio={member.bio}
                  photo={member.photo}
                  delay={index * 0.1}
                />
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-16"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-[color:var(--yellow-green)] px-8 py-4 text-lg font-semibold text-slate-900 transition hover:bg-[color:var(--asparagus)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--yellow-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Work With Our Team
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </main>
    </div>
  );
}
