"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.05 }
};

const staggerItem = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* ── STRUCTURED DATA (JSON-LD) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Alexius Dubem",
            "jobTitle": "Full Stack Developer",
            "url": "https://yourdomain.com",
            "sameAs": [
              "https://github.com",
              "https://linkedin.com"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Anambra State",
              "addressCountry": "Nigeria"
            },
            "email": "mailto:alexiusdubem7@gmail.com",
            "knowsAbout": [
              "Full Stack Development",
              "AI Integration",
              "Prompt Engineering",
              "React",
              "TypeScript",
              "Node.js",
              "Next.js",
              "Python",
              "AWS",
              "Docker"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Develix Tech Ltd"
            }
          })
        }}
      />
      {/* ── BACKGROUND ACCENTS ── */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />

      {/* ── HERO SECTION ── */}
      <section id="home" className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 py-24">
        <motion.div className="flex-[1.5] flex flex-col items-center md:items-start text-center md:text-left z-10" {...fadeIn}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for enterprise consulting
          </div>

          <h1 className="text-5xl font-black tracking-tight sm:text-7xl md:text-8xl text-foreground">
            Hello, I am <br />
            <span className="text-primary">Alexius Dubem</span>
          </h1>

          <h2 className="mt-6 text-xl md:text-2xl font-bold text-muted-foreground uppercase tracking-wider">
            Full-Stack Developer | AI Systems Engineer | Prompt Engineering Specialist
          </h2>

          <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed text-justify">
            Alexius Dubem is a Nigeria-based Full Stack Developer and AI Systems Engineer specializing in scalable web applications, prompt engineering, and intelligent automation systems.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Button size="lg" className="rounded-xl px-10 font-bold shadow-md hover:shadow-lg transition-all" asChild>
              <a href="#projects">Explore My Work</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl px-10 font-bold border-border bg-card/50 shadow-sm hover:shadow-md transition-all" asChild>
              <Link href="/resume.md" target="_blank">
                <i className="fa-solid fa-file-arrow-down mr-2" /> Download Resume
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div className="flex-1 flex justify-center md:justify-end z-10 w-full" {...fadeIn}>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-secondary overflow-hidden shadow-2xl flex items-center justify-center bg-card ring-1 ring-primary/10 transition-transform hover:scale-105 duration-500">
            {/* User can put their image path here */}
            <div className="flex flex-col items-center opacity-40">
              <i className="fa-solid fa-user-gear text-9xl text-muted-foreground" />
              <span className="text-xs font-bold uppercase mt-2 tracking-widest">Profile Image</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── IMPACT STATS ── */}
      <section className="bg-primary text-primary-foreground py-16 relative z-20 shadow-2xl skew-y-[-1deg]">
        <div className="max-w-6xl mx-auto px-6 skew-y-[1deg]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Hours Worked", val: "15,000+" },
              { label: "Projects Finished", val: "100K+" },
              { label: "Happy Clients", val: "500K+" },
              { label: "Cups of Coffee", val: "10K+" },
            ].map((stat, i) => (
              <motion.div key={i} {...fadeIn}>
                <p className="text-4xl md:text-5xl font-black mb-2">{stat.val}</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section id="about" className="py-32 bg-secondary/30 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <motion.div className="flex-1" {...fadeIn}>
              <div className="mb-4 flex items-center gap-3 text-sm font-black uppercase tracking-widest text-primary">
                <span className="h-1 w-8 rounded bg-primary" />
                About Me
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8">Nigeria-based Full-Stack Developer</h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-medium text-justify">
                <p>
                  I am an ambitious Full-Stack Developer with a deep passion for crafting visually stunning and functional digital experiences. As a <strong>Privacy-bound trusted developer</strong>, I prioritize high-security architectures.
                </p>
                <p>
                  While many of my enterprise-scale works are protected by privacy agreements, I leverage this foundation to build robust, scalable public systems. By utilizing <strong>AI and advanced Prompt Engineering</strong>, I accelerate complex development cycles without compromising on code quality.
                </p>
                <p>
                  Applying these core technical principles, I birthed <strong>DEVELIX TECH LTD</strong>, where I currently serve as Co-Founder and CEO, driving innovation in software delivery.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 bg-card p-8 rounded-2xl border border-border shadow-sm">
                {[
                  { label: "Birthdate", val: "April 30, 2008" },
                  { label: "Email", val: "alexiusdubem7@gmail.com" },
                  { label: "Phone", val: "08107516059" },
                  { label: "Address", val: "Anambra State, Nigeria" },
                ].map((info, i) => (
                  <div key={i}>
                    <p className="text-xs font-black text-muted-foreground uppercase mb-1 tracking-widest leading-none">{info.label}</p>
                    <p className="text-foreground font-bold">{info.val}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="lg:w-1/3 grid grid-cols-1 gap-6" {...fadeIn}>
              <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <i className="fa-solid fa-language text-primary" /> Language Skills
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "English", level: "Fluent", perc: "100%" },
                    { name: "Igbo", level: "Native", perc: "100%" },
                    { name: "Spanish", level: "Learning", perc: "30%" },
                    { name: "Korean", level: "Learning", perc: "25%" },
                  ].map((lang, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-sm">{lang.name}</span>
                        <span className="text-[10px] font-black uppercase text-muted-foreground">{lang.level}</span>
                      </div>
                      <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: lang.perc }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL STACK ── */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="mb-16 text-center flex flex-col items-center" {...fadeIn}>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 pt-12">My Technical Arsenal</h2>
            <div className="h-1.5 w-16 bg-primary rounded-full mb-6" />
            <p className="text-muted-foreground font-medium max-w-2xl">A curated selection of the stacks I utilize most to deliver premium results.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {[
              { cat: "Programming Languages", tags: "JavaScript, TypeScript, Python, PHP, Java, C++, C, SQL, Go, Rust", icon: "fa-terminal" },
              { cat: "Frontend Technologies", tags: "React, Next.js, Tailwind CSS, Zustand, Playwright, Web Vitals, PWA", icon: "fa-palette" },
              { cat: "Backend Ecosystem", tags: "Node.js, Express.js, GraphQL, Redis, WebSockets, gRPC, OAuth 2.0", icon: "fa-server" },
              { cat: "Database Management", tags: "Firebase, Firestore, MongoDB, MySQL, PostgreSQL, Prisma, Supabase", icon: "fa-database" },
              { cat: "AI & Automation", tags: "OpenAI API, Prompt Engineering, LangChain, Pinecone, HuggingFace, Model Optimization", icon: "fa-brain" },
              { cat: "Cloud & DevOps", tags: "AWS, Docker, Kubernetes, Git, CI/CD, Terraform, Netlify, Vercel", icon: "fa-cloud" },
              { cat: "Professional Engineering", tags: "Agile, Scrum, Technical Writing, Performance Optimization, Security Auditing", icon: "fa-shield-halved" },
            ].map((stack, i) => (
              <motion.div key={i} variants={staggerItem} className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <i className={`fa-solid ${stack.icon}`} />
                  </div>
                  <h3 className="font-black text-lg text-foreground leading-none">{stack.cat}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.tags.split(", ").map((tag, j) => (
                    <span key={j} className="text-xs font-bold px-3 py-1.5 bg-secondary/50 rounded-lg border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES SECTION ── */}
      <section className="py-32 bg-secondary/20 relative border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="mb-16 text-center" {...fadeIn}>
            <h2 className="text-4xl font-black text-foreground mb-4">Core Services</h2>
            <div className="h-1.5 w-16 bg-primary rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Web Development", desc: "Expertise in building responsive, scalable websites.", icon: "fa-laptop-code" },
              { title: "Content Creation", desc: "High-quality content for blogs, articles, and social media.", icon: "fa-pen-to-square" },
              { title: "E-commerce Solutions", desc: "Custom online store development for growing businesses.", icon: "fa-cart-shopping" },
              { title: "SEO Optimization", desc: "Improve website visibility and search engine rankings.", icon: "fa-magnifying-glass-chart" },
              { title: "Digital Marketing", desc: "Data-driven marketing strategies that drive growth.", icon: "fa-rocket" },
              { title: "Technical Support", desc: "Expert technical assistance for hardware and software issues.", icon: "fa-screwdriver-wrench" },
            ].map((service, i) => (
              <motion.div key={i} {...fadeIn} className="bg-card p-10 rounded-2xl border border-border shadow-sm hover:border-primary/40 transition-all text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-primary shadow-inner">
                  <i className={`fa-solid ${service.icon} text-2xl`} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground font-medium text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESUME SECTION (TIMELINE) ── */}
      <section id="resume" className="py-32 bg-secondary/10 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Education */}
            <motion.div {...fadeIn}>
              <h3 className="text-3xl font-black mb-12 flex items-center gap-4 text-foreground">
                <i className="fa-solid fa-graduation-cap text-primary" /> My Education
              </h3>
              <div className="space-y-8 relative border-l-2 border-primary/20 pl-8 ml-4">
                {[
                  { date: "2019–2025", title: "Secondary School Diploma", inst: "Bubendorff Memorial Grammar School" },
                  { date: "2020–2024", title: "B.Sc. Mathematics", inst: "Nnamdi Azikiwe University, Awka" },
                  { date: "2022–2023", title: "Python/Java/C++ Specialization", inst: "Coursera" },
                  { date: "2023", title: "Satelite Comms & Networking", inst: "Starlink Technology" },
                  { date: "2021", title: "Robotics and AI Applications", inst: "edX" },
                ].map((edu, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-card border-4 border-primary transition-transform group-hover:scale-110" />
                    <span className="text-xs font-black text-primary uppercase mb-2 block tracking-widest">{edu.date}</span>
                    <h4 className="text-xl font-black text-foreground mb-1">{edu.title}</h4>
                    <p className="text-muted-foreground font-bold">{edu.inst}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div {...fadeIn}>
              <h3 className="text-3xl font-black mb-12 flex items-center gap-4 text-foreground">
                <i className="fa-solid fa-briefcase text-primary" /> Professional Expertise
              </h3>
              <div className="space-y-8 relative border-l-2 border-primary/20 pl-8 ml-4">
                {[
                  { date: "2020–Present", title: "Freelance Software Developer", desc: "Designed and developed multiple secure web applications for global clients." },
                  { date: "2019–2020", title: "Junior Software Developer", inst: "Andela", desc: "Assisted in maintaining and optimizing enterprise-grade business applications." },
                  { date: "2019–2020", title: "Lead Developer", inst: "Curry's Coffee Shop (USA)", desc: "Maintained the full-scale e-commerce and mobile ecosystem." },
                  { date: "2018–2019", title: "Web Developer", inst: "Springboard High School", desc: "Created the official digital institutional portal." },
                ].map((job, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-card border-4 border-primary transition-transform group-hover:scale-110" />
                    <span className="text-xs font-black text-primary uppercase mb-2 block tracking-widest">{job.date}</span>
                    <h4 className="text-xl font-black text-foreground mb-1">{job.title}</h4>
                    {job.inst && <p className="text-primary font-black text-xs uppercase mb-2 tracking-wider">{job.inst}</p>}
                    <p className="text-muted-foreground font-medium text-sm leading-relaxed text-justify">{job.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── NEWS / BLOG SECTION ── */}
      <section id="blog" className="py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="mb-16" {...fadeIn}>
            <h2 className="text-4xl font-black text-foreground mb-4">Latest Insights</h2>
            <div className="h-1.5 w-16 bg-primary rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Getting Started with JS Frameworks", cat: "Development", date: "Admin • 234 Vis" },
              { title: "Optimizing Website Performance", cat: "Engineering", date: "Admin • 456 Vis" },
              { title: "Building Responsive UI Components", cat: "Design", date: "Admin • 431 Vis" },
            ].map((post, i) => (
              <motion.div key={i} {...fadeIn} className="bg-card border border-border rounded-2xl overflow-hidden group hover:shadow-xl transition-all h-full flex flex-col">
                <div className="aspect-[16/10] bg-secondary relative overflow-hidden flex items-center justify-center border-b border-border">
                  <i className="fa-solid fa-code text-5xl text-muted-foreground/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-black uppercase text-primary px-3 py-1 bg-primary/10 rounded-full">{post.cat}</span>
                    <span className="text-[10px] font-bold text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors flex-1">{post.title}</h3>
                  <Link href="#" className="inline-flex items-center gap-2 text-sm font-black text-foreground uppercase tracking-widest mt-auto border-t border-border pt-4 group-hover:gap-4 transition-all">
                    Read More <i className="fa-solid fa-arrow-right-long text-xs" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section id="contact" className="py-32 bg-card border-t border-border relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <motion.div {...fadeIn}>
              <h2 className="text-5xl font-black text-foreground mb-8 text-justify">Get In Touch</h2>
              <p className="text-muted-foreground text-lg mb-12 font-medium text-justify">Available for freelance work and enterprise consulting. Let&apos;s build something intelligent.</p>

              <div className="space-y-8">
                {[
                  { label: "Phone", val: "08107516059", icon: "fa-phone" },
                  { label: "Address", val: "Anambra State, Nigeria", icon: "fa-location-dot" },
                  { label: "Email", val: "alexiusdubem7@gmail.com", icon: "fa-envelope" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center shrink-0">
                      <i className={`fa-solid ${item.icon}`} />
                    </div>
                    <div className="pt-1">
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="font-bold text-foreground">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-12">
                {['linkedin-in', 'github', 'facebook', 'x-twitter'].map((soc, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all shadow-sm border border-border">
                    <i className={`fa-brands fa-${soc}`} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="bg-background border border-border p-10 rounded-2xl shadow-2xl relative">
              <h3 className="text-2xl font-black mb-6">Send a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="text" placeholder="Name *" className="w-full bg-secondary/50 border border-border px-5 py-4 rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-bold text-sm" />
                  <input type="email" placeholder="Email *" className="w-full bg-secondary/50 border border-border px-5 py-4 rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-bold text-sm" />
                </div>
                <textarea placeholder="Message *" className="w-full bg-secondary/50 border border-border px-5 py-4 rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-bold text-sm min-h-[150px] resize-none" />
                <Button className="w-full py-7 rounded-xl font-black text-lg uppercase tracking-widest shadow-lg shadow-primary/20">Send Message</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-24 bg-background border-t border-border mt-auto">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div className="col-span-1">
            <h3 className="text-xl font-black uppercase tracking-widest text-primary mb-6">Get In Touch</h3>
            <div className="space-y-4 text-sm font-bold text-muted-foreground">
              <p>Phone :<br /><span className="text-foreground">08107516059</span></p>
              <p>Address :<br /><span className="text-foreground">Chinedu Mmadubuko Street, Adazi-ani, Anambra State, Nigeria.</span></p>
              <p>Email :<br /><span className="text-foreground">alexiusdubem7@gmail.com</span></p>
            </div>
          </div>
          <div className="md:col-start-3 flex items-end justify-end">
            <p className="font-black text-sm text-foreground uppercase tracking-widest opacity-60 text-right">
              © 2026 Created By Alexius Dubem
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
