import Link from 'next/link';

export default function Home() {
  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="min-h-[92dvh] flex items-center bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="max-w-screen-2xl mx-auto px-8 pt-12 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-x-2 px-4 py-1.5 rounded-3xl bg-white/5 border border-white/10 text-sm mb-6">
              Dal 2005 • Oltre 4.200 aziende servite
            </div>

            <h1 className="text-6xl md:text-7xl font-display tracking-tighter leading-[1.05] mb-6">
              Server e workstation<br />
              <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">ricondizionati</span><br />
              per la tua azienda.
            </h1>
            
            <p className="max-w-xl text-2xl text-slate-300 mb-10">
              Infrastrutture IT affidabili, performanti e convenienti.<br />
              Qualità enterprise con garanzie fino a 5 anni.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/server" 
                className="inline-flex items-center justify-center gap-x-3 px-8 py-4 bg-white text-slate-950 font-semibold rounded-3xl hover:bg-slate-100 transition"
              >
                Scopri i Server
              </Link>
              <Link 
                href="#contatti" 
                className="inline-flex items-center justify-center gap-x-3 px-8 py-4 border border-white/25 hover:bg-white/5 font-semibold rounded-3xl transition"
              >
                Richiedi Preventivo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links to other pages */}
      <section className="max-w-screen-2xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-6">
        <Link href="/server" className="group block p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-sky-600 transition">
          <h3 className="font-semibold text-2xl mb-2 group-hover:text-sky-400">Server Ricondizionati →</h3>
          <p className="text-slate-400">Catalogo completo con filtri e configuratore.</p>
        </Link>
        <Link href="/servizi" className="group block p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-sky-600 transition">
          <h3 className="font-semibold text-2xl mb-2 group-hover:text-sky-400">Servizi Aziendali →</h3>
          <p className="text-slate-400">Progettazione, assistenza, leasing e migrazioni.</p>
        </Link>
        <Link href="/partner" className="group block p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-sky-600 transition">
          <h3 className="font-semibold text-2xl mb-2 group-hover:text-sky-400">Programma Partner →</h3>
          <p className="text-slate-400">Per system integrator e rivenditori IT.</p>
        </Link>
      </section>

      {/* Contact Form Section */}
      <section id="contatti" className="bg-slate-900 border-t border-slate-800 py-16">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-display tracking-tight mb-4">Parliamo del tuo progetto</h2>
          <p className="text-slate-400 mb-8">Compila il form e ti ricontattiamo entro 24 ore.</p>
          
          <form className="text-left space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" placeholder="Nome Azienda" className="bg-slate-800 border border-slate-700 rounded-2xl px-5 py-3.5" />
              <input type="email" placeholder="Email" className="bg-slate-800 border border-slate-700 rounded-2xl px-5 py-3.5" />
            </div>
            <textarea placeholder="Descrivi le tue esigenze..." rows={5} className="w-full bg-slate-800 border border-slate-700 rounded-3xl px-5 py-4"></textarea>
            <button type="submit" className="w-full py-4 bg-sky-600 hover:bg-sky-500 font-semibold rounded-3xl">Invia Richiesta</button>
          </form>
        </div>
      </section>
    </main>
  );
}
