"use client"

import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook } from 'react-icons/fa'

export default function Contact() {
	return (
		<section id="contact" className="w-full py-20">
			<div className="w-[90%] mx-auto">
				<div className="mb-8 text-center">
					<p className="text-cyan-300 font-medium">Contact</p>
					<h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Entrons en contact</h2>
					<p className="mt-3 text-slate-300 max-w-2xl mx-auto">Vous pouvez me joindre via les réseaux ou envoyer un message directement ici.</p>
				</div>

				<div className="flex flex-col lg:flex-row gap-8">
					<div className="w-full lg:w-1/3">
						<div className="bg-slate-800 rounded-lg p-6 h-full flex flex-col items-start gap-4">
							<h3 className="text-white font-semibold">Réseaux</h3>
							<p className="text-slate-300 text-sm">Retrouvez-moi sur :</p>

							<div className="flex flex-col gap-3 w-full">
								<a href="#" aria-label="GitHub" className="flex items-center gap-3 p-3 bg-slate-700 rounded hover:bg-slate-600">
									<FaGithub className="w-6 h-6 text-white" />
									<span className="text-white">GitHub</span>
								</a>

								<a href="#" aria-label="LinkedIn" className="flex items-center gap-3 p-3 bg-slate-700 rounded hover:bg-slate-600">
									<FaLinkedin className="w-6 h-6 text-white" />
									<span className="text-white">LinkedIn</span>
								</a>

								<a href="#" aria-label="WhatsApp" className="flex items-center gap-3 p-3 bg-slate-700 rounded hover:bg-slate-600">
									<FaWhatsapp className="w-6 h-6 text-white" />
									<span className="text-white">WhatsApp</span>
								</a>

								<a href="#" aria-label="Facebook" className="flex items-center gap-3 p-3 bg-slate-700 rounded hover:bg-slate-600">
									<FaFacebook className="w-6 h-6 text-white" />
									<span className="text-white">Facebook</span>
								</a>
							</div>
						</div>
					</div>

					<div className="w-full lg:w-2/3">
						<form className="bg-slate-800 rounded-lg p-6 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
							<label className="flex flex-col">
								<span className="text-slate-300 mb-1">Votre email</span>
								<input type="email" name="email" required className="px-3 py-2 rounded bg-slate-700 text-white outline-none focus:ring-2 focus:ring-cyan-400" />
							</label>

							<label className="flex flex-col">
								<span className="text-slate-300 mb-1">Message</span>
								<textarea name="message" rows={6} required className="px-3 py-2 rounded bg-slate-700 text-white outline-none focus:ring-2 focus:ring-cyan-400" />
							</label>

							<button type="submit" className="self-start px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">Envoyer</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
