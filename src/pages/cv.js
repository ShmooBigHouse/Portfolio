import React from 'react';

const CVPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Samuel Bigus</h1>
        <p className="text-gray-600 mb-2">
          Kredytowa 6, 00-062 Warsaw, Poland | (+48) 791148644 | samuelshmoobigus@yahoo.com
        </p>
        <div className="text-sm text-gray-600">
          Portfolio:
          <div className="space-y-1">
            <a href="https://store.steampowered.com/app/1265300/Broll/" className="text-blue-600 hover:underline block">
              https://store.steampowered.com/app/1265300/Broll/
            </a>
            <a href="https://store.steampowered.com/app/2716030/Poly_Plaza/" className="text-blue-600 hover:underline block">
              https://store.steampowered.com/app/2716030/Poly_Plaza/
            </a>
          </div>
        </div>
      </header>

      {/* Languages */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 mb-3">Languages</h2>
        <p className="text-sm">English: Native<br />Hebrew: Basic</p>
      </section>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 mb-3">Professional Summary</h2>
        <p className="text-sm">
          Product designer with 3+ years of experience creating user-centered digital experiences across games and web platforms. Proven track record in simplifying complex processes through intuitive interfaces and conducting user research to validate design decisions. Experienced in agile environments with cross-functional teams.
        </p>
      </section>

      {/* Professional Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 mb-3">Professional Experience</h2>
        
        <div className="mb-4">
          <div className="mb-1">
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="font-semibold">Make a Friend</h3>
                <p className="text-sm font-medium">Creative Developer & Game Designer</p>
              </div>
              <span className="text-sm">October 2024 - January 2025</span>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm">
            <li>Led end-to-end product design for gaming and software applications using user-centered design principles</li>
            <li>Conducted competitive analysis and user research to inform design decisions</li>
            <li>Collaborated with cross-functional teams to deliver intuitive user interfaces</li>
            <li>Integrated AI technologies to enhance user experience and workflow efficiency</li>
            <li>Created and maintained design documentation for consistent implementation</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="mb-1">
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="font-semibold">Big Art with Sam</h3>
                <p className="text-sm font-medium">Artist and Technical Designer</p>
              </div>
              <span className="text-sm">2023 - 2024</span>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm">
            <li>Researched user needs and market trends to inform product development</li>
            <li>Created user-centered designs based on customer feedback and market analysis</li>
            <li>Managed product lifecycle from concept to launch while maintaining focus on user experience</li>
            <li>Conducted customer interviews to validate product decisions</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="mb-1">
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="font-semibold">Freelance</h3>
                <p className="text-sm font-medium">Product Designer & Developer</p>
              </div>
              <span className="text-sm">2020 - Present</span>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm">
            <li>Design and develop responsive websites using modern UX principles and CMS platforms</li>
            <li>Create high-fidelity prototypes using Figma, incorporating user feedback for iterative improvements</li>
            <li>Lead user research and testing sessions to validate design solutions</li>
            <li>Manage end-to-end design process from discovery to implementation for diverse clients</li>
            <li>Develop and maintain consistent design systems across multiple digital platforms</li>
          </ul>
        </div>
      </section>

      {/* Notable Projects */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 mb-3">Notable Projects</h2>
        
        <div className="mb-4">
          <div className="mb-1">
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold">Poly Plaza | Game Designer</h3>
              <span className="text-sm">2024</span>
            </div>
          </div>
          <p className="text-sm italic mb-2">Open-world entrepreneurial sandbox game</p>
          <ul className="list-disc list-inside text-sm">
            <li>Designed economic systems and progression mechanics</li>
            <li>Implemented resource management and property systems</li>
            <li>Created intuitive UI/UX for complex management systems</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="mb-1">
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold">Broll | Level Designer & Systems Designer</h3>
              <span className="text-sm">2023</span>
            </div>
          </div>
          <p className="text-sm italic mb-2">3D ragdoll-based platformer with open-level design</p>
          <ul className="list-disc list-inside text-sm">
            <li>Designed physics-based gameplay mechanics</li>
            <li>Created intuitive level progression and player guidance systems</li>
            <li>Developed user-friendly control schemes through iterative testing</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="mb-1">
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold">The Zine Bathroom Reader #4</h3>
              <span className="text-sm">2024</span>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm">
            <li>Designed interactive elements to enhance user engagement</li>
            <li>Created intuitive navigation systems for complex information architecture</li>
            <li>Developed user-friendly game mechanics based on user testing</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="mb-1">
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold">A Million Smiles Website</h3>
              <span className="text-sm">2022 - Present</span>
            </div>
          </div>
          <ul className="list-disc list-inside text-sm">
            <li>Conducted user research to improve website accessibility and user experience</li>
            <li>Implemented data-driven design improvements based on user feedback</li>
            <li>Created and maintained design system for consistent user interface</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 mb-3">Education</h2>
        <div className="mb-2">
          <div className="flex justify-between items-baseline">
            <div>
              <h3 className="font-semibold">University of Kansas</h3>
              <p className="text-sm">Bachelor of Arts in Orchestral Instrumentation</p>
            </div>
            <span className="text-sm">2010 - 2015</span>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 mb-3">Technical Skills</h2>
        <div className="text-sm space-y-2">
          <p><span className="font-semibold">Design Tools:</span> Figma (components, auto-layout), Adobe Creative Suite, Miro</p>
          <p><span className="font-semibold">Research:</span> User interviews, usability testing, competitive analysis</p>
          <p><span className="font-semibold">Prototyping:</span> Interactive prototypes, wireframing, user flows</p>
          <p><span className="font-semibold">Development:</span> Basic HTML/CSS, WordPress, responsive design</p>
          <p><span className="font-semibold">Methodologies:</span> Agile, user-centered design, design thinking</p>
          <p><span className="font-semibold">Game Design:</span> Level design, systems design, Unity, playtesting</p>
        </div>
      </section>

      {/* Additional Skills */}
      <section>
        <h2 className="text-xl font-semibold border-b border-gray-300 mb-3">Additional Skills</h2>
        <ul className="list-disc list-inside text-sm">
          <li>Strong communication and presentation abilities</li>
          <li>Experience with agile development processes</li>
          <li>Data-driven decision making</li>
        </ul>
      </section>
    </div>
  );
};

export default CVPage;