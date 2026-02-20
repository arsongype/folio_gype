export default function Competances() {
	return (
		<section id="competances" className="w-full py-20">
			<div className="w-[90%] mx-auto">
				<div className="mb-8 text-center">
					<p className="text-cyan-300 font-medium">Compétences & Expériences</p>
					<h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Parcours</h2>
					<p className="mt-3 text-slate-300 max-w-2xl mx-auto">Quelques rôles et expériences représentatifs.</p>
				</div>

				<div className="flex flex-col lg:flex-row gap-8">
					<div className="flex-1 space-y-6">
						<article className="bg-slate-800 rounded-lg p-6">
							<h3 className="text-xl font-semibold text-white">Développeur Front-end</h3>
							<p className="text-slate-300 mt-2">Conception et implémentation d'interfaces utilisateur avec React / Next.js et Tailwind CSS. Optimisation des performances et accessibilité, intégration d'APIs et composants réutilisables.</p>
						</article>

						<article className="bg-slate-800 rounded-lg p-6">
							<h3 className="text-xl font-semibold text-white">Stage — Développement web</h3>
							<p className="text-slate-300 mt-2">Participation au cycle de développement : maquettes, développement frontend, tests et déploiement. Collaboration avec l'équipe produit pour livrer des fonctionnalités utiles.</p>
						</article>
					</div>

					<div className="w-full lg:w-1/3">
						<div className="relative pl-6">
							<div className="absolute left-2 top-2 bottom-2 w-0.5 bg-slate-700"></div>

							<ul className="space-y-6">
								<li className="relative">
									<div className="absolute -left-3 top-1 w-3 h-3 rounded-full bg-cyan-400"></div>
									<div className="pl-4">
										<div className="text-white font-medium">Frontend Developer — Company A</div>
										<div className="text-slate-300 text-sm">Jan 2023 - Présent</div>
									</div>
								</li>

								<li className="relative">
									<div className="absolute -left-3 top-1 w-3 h-3 rounded-full bg-cyan-400"></div>
									<div className="pl-4">
										<div className="text-white font-medium">UI Engineer — Company B</div>
										<div className="text-slate-300 text-sm">Mai 2021 - Déc 2022</div>
									</div>
								</li>

								<li className="relative">
									<div className="absolute -left-3 top-1 w-3 h-3 rounded-full bg-cyan-400"></div>
									<div className="pl-4">
										<div className="text-white font-medium">Stage Développement Web — Startup X</div>
										<div className="text-slate-300 text-sm">Juin 2020 - Août 2020</div>
									</div>
								</li>

								<li className="relative">
									<div className="absolute -left-3 top-1 w-3 h-3 rounded-full bg-cyan-400"></div>
									<div className="pl-4">
										<div className="text-white font-medium">Freelance — Projets personnels</div>
										<div className="text-slate-300 text-sm">2019 - Présent</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
