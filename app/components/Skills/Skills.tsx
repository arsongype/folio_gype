import { FaLightbulb, FaUsers, FaComments, FaBrain, FaClock, FaSmile, FaExchangeAlt, FaHandsHelping, FaUserTie } from 'react-icons/fa'

const skills = [
	{ icon: FaLightbulb, label: 'Créativité', desc: "Génération d'idées originales pour résoudre les problèmes UX/UI." },
	{ icon: FaUsers, label: 'Travail en équipe', desc: "Collaboration fluide avec designers, devs et parties prenantes." },
	{ icon: FaComments, label: 'Communication', desc: "Transmission claire des informations et feedback constructif." },
	{ icon: FaBrain, label: 'Résolution de problèmes', desc: "Analyse rapide et mise en place de solutions efficaces." },
	{ icon: FaClock, label: 'Gestion du temps', desc: "Priorisation et respect des délais de livraison." },
	{ icon: FaSmile, label: 'Attitude positive', desc: "Approche optimiste favorisant la productivité et le moral." },
	{ icon: FaExchangeAlt, label: 'Adaptabilité', desc: "Capacité à s'adapter aux contraintes techniques et changements." },
	{ icon: FaHandsHelping, label: 'Empathie', desc: "Compréhension des besoins utilisateurs et collègues." },
	{ icon: FaUserTie, label: 'Leadership', desc: "Prise d'initiative et accompagnement des équipes vers les objectifs." },
]

export default function Skills() {
	return (
		<section id="skills" className="w-full py-20">
			<div className="w-[90%] mx-auto">
				<div className="mb-8 text-center">
					<p className="text-cyan-300 font-medium">Compétences</p>
					<h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Soft Skills</h2>
					<p className="mt-3 text-slate-300 max-w-2xl mx-auto">Compétences humaines et comportementales présentes dans mon travail quotidien.</p>
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
					{skills.map((s) => {
						const Icon = s.icon
						return (
							<div key={s.label} className="bg-slate-800 rounded-lg p-6 flex flex-col items-center gap-3 text-center">
								<Icon className="w-10 h-10 text-cyan-400" />
								<span className="text-white font-medium">{s.label}</span>
								<p className="text-slate-300 text-sm mt-2">{s.desc}</p>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
