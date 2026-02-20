import Image from 'next/image'
import LinkButton from '../../Navbar/LinkButton'

export default function Hero() {
  return (
    <section id="home" className="w-full min-h-[70vh] flex items-center">
      <div className="w-[90%] mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 py-20">

        <div className="flex-1 text-center lg:text-left">
          <p className="text-cyan-300 font-medium">Bonjour, je suis</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2">Votre Nom</h1>
          <p className="mt-4 text-slate-300 max-w-xl">
            Je suis développeur web spécialisé en interfaces modernes et performantes. Je crée des expériences utilisateurs claires,
            accessibles et réactives — du design à la production.
          </p>

          <div className="mt-6 flex items-center justify-center lg:justify-start gap-4">
            <LinkButton href="/documents/cv.pdf" text="Download CV" download icon={undefined} />
            <a href="#contact" className="px-6 py-3 bg-transparent border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition">Contact</a>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden ring-2 ring-cyan-400">
            <Image src="/arsong.png" alt="Profile" width={400} height={400} className="object-cover w-full h-full" />
          </div>
        </div>

      </div>
    </section>
  )
}
