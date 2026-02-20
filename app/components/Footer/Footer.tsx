export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-700 bg-slate-900 py-8">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-300">© {new Date().getFullYear()} Votre Nom. Tous droits réservés.</div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-slate-300 hover:text-cyan-300">Mentions</a>
          <a href="#contact" className="text-slate-300 hover:text-cyan-300">Contact</a>
          <a href="/documents/cv.pdf" className="text-slate-300 hover:text-cyan-300">CV</a>
        </div>
      </div>
    </footer>
  )
}
