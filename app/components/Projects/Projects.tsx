import Image from 'next/image'

const projects = [
  '/projects/project1.svg',
  '/projects/project2.svg',
  '/projects/project3.svg',
  '/projects/project4.svg',
  '/projects/project5.svg',
  '/projects/project6.svg',
]

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20">
      <div className="w-[90%] mx-auto">
        <div className="mb-8 text-center">
          <p className="text-cyan-300 font-medium">Projets</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Quelques réalisations</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((src, i) => (
            <div key={src} className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <Image src={src} alt={`Project ${i+1}`} width={800} height={450} className="object-cover w-full h-full" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">Project {i+1}</h3>
                <p className="text-slate-300 text-sm mt-1">Description courte du projet informatique.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
