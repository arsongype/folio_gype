import { LuCode, LuMonitor, LuLayers } from 'react-icons/lu'

export default function Services() {
	const services = [
		{
			icon: LuCode,
			title: 'Frontend',
			desc: "Développement d'interfaces modernes et réactives.",
			tech: ['React', 'Next.js', 'Tailwind CSS']
		},
		{
			icon: LuMonitor,
			title: 'Backend',
			desc: "APIs et logique serveur pour applications scalables.",
			tech: ['Node.js / Express', 'Python', 'PHP']
		},
		{
			icon: LuLayers,
			title: 'Bases de données',
			desc: "Conception et intégration de stockages de données.",
			tech: ['MongoDB', 'MySQL', 'PostgreSQL']
		},
	]

	return (
		<section id="services" className="w-full py-20">
			<div className="w-[90%] mx-auto">
				<div className="mb-8 text-center">
					<p className="text-cyan-300 font-medium">Services & Technologies</p>
					<h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Ce que je maîtrise</h2>
					<p className="mt-3 text-slate-300 max-w-2xl mx-auto">Des technologies et stacks choisis pour la performance, la maintenabilité et la rapidité de mise en production.</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map((s) => {
						const Icon = s.icon
						return (
							<article key={s.title} className="bg-slate-800 rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
								<div className="flex items-center justify-center mb-4">
									<Icon className="w-12 h-12 text-cyan-400" />
								</div>
								<h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
								<p className="text-slate-300 mb-4">{s.desc}</p>

								<div className="flex flex-wrap justify-center gap-2">
									{s.tech.map((t) => (
										<span key={t} className="px-3 py-1 text-sm bg-slate-700 text-slate-100 rounded-full">{t}</span>
									))}
								</div>
							</article>
						)
					})}
				</div>
			</div>
		</section>
	)
}
