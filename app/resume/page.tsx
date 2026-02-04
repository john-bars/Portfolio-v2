export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl bg-white px-6 py-10 text-sm text-gray-900 print:px-0 print:py-0">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">John Bars Quipia</h1>
        <p className="mt-1 font-medium text-gray-700">React Developer</p>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-gray-600">
          <span>Makati City</span>
          <span>0998 597 2935</span>
          <a href="mailto:john.barsq@gmail.com" className="underline">
            john.barsq@gmail.com
          </a>
          <a
            href="https://github.com/john-bars"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            github.com/john-bars
          </a>
        </div>
      </header>

      {/* Profile */}
      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold">Profile</h2>
        <p className="leading-relaxed text-gray-700">
          Frontend-focused developer with experience building responsive and
          accessible web applications using React, Next.js, and TypeScript.
          Passionate about creating clean UI, maintainable code, and scalable,
          user-focused solutions.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold">Skills</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="font-medium">Frontend</p>
            <p className="text-gray-700">
              JavaScript, TypeScript, React, Next.js, Tailwind CSS
            </p>
          </div>

          <div>
            <p className="font-medium">State & Data</p>
            <p className="text-gray-700">
              Zustand (basic), Redux Toolkit Query (basic), REST APIs
            </p>
          </div>

          <div>
            <p className="font-medium">Backend & DB</p>
            <p className="text-gray-700">
              Node.js, MongoDB, Mongoose (basic), Prisma (familiar)
            </p>
          </div>

          <div>
            <p className="font-medium">Tools</p>
            <p className="text-gray-700">Git, Postman</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold">Projects</h2>

        <div className="space-y-4">
          <div>
            <p className="font-medium">
              Portfolio Website{" "}
              <a
                href="https://john-bars.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 italic hover:underline hover:text-blue-700 print:text-black"
              >
                (john-bars.vercel.app)
              </a>
            </p>
            <p className="text-gray-700">
              Developed a personal portfolio focused on accessibility,
              responsive layout, and performance using React and Tailwind CSS.
            </p>
          </div>

          <div>
            <p className="font-medium">
              DevFlow{" "}
              {/* <a
                href="https://devflow-bars.vercel.app"
                target="_blank"
                className="text-gray-600 underline"
              >
                (https://devflow-bars.vercel.app)
              </a> */}
              <a
                href="https://john-bars.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 italic hover:underline hover:text-blue-700 print:text-black"
              >
                (devflow-bars.vercel.app)
              </a>
            </p>
            <ul className="ml-4 list-disc text-gray-700">
              <li>
                Built a responsive Q&A platform with authentication, form
                validation, and API integration
              </li>
              <li>
                Implemented global state management using Zustand and
                server-state handling with Redux Toolkit Query
              </li>
              <li>
                Used Mongoose for basic schema modeling and database
                interactions
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold">Work Experience</h2>

        <div className="space-y-4">
          <div>
            <p className="font-medium">
              Associate Software Engineer — Accenture Philippines
            </p>
            <p className="text-gray-600">Jul 2024 &ndash; Oct 2025</p>
            <ul className="ml-4 list-disc text-gray-700">
              <li>
                Completed Workday Integration training and earned Workday Core
                Integration Certification
              </li>
              <li>
                Provided technical support for enterprise clients,
                troubleshooting cloud-based productivity tools
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium">
              Sales Executive — VPD Business Solutions Inc.
            </p>
            <p className="text-gray-600">Feb 2024 &ndash; May 2024</p>
            <p className="text-gray-700">
              Managed client accounts and handled sales operations.
            </p>
          </div>

          <div>
            <p className="font-medium">
              Depot Engineer — Prime @ Technology Specialist Inc.
            </p>
            <p className="text-gray-600">Feb 2020 &ndash; Apr 2022</p>
            <p className="text-gray-700">
              Diagnosed, repaired, and maintained automated teller machines
              (ATMs).
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="mb-2 text-lg font-semibold">Education</h2>

        <p className="font-medium">Bicol University</p>
        <p className="text-gray-700">
          Bachelor of Science in Electrical Engineering (2014 &ndash; 2019)
        </p>
        <p className="text-gray-700">DOST-SEI Scholar</p>
      </section>
    </main>
  );
}
