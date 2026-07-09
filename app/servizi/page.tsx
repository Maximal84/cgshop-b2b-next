import Link from 'next/link';

export default function ServiziPage() {
  return (
    <main className="pt-20 bg-slate-950">
      <section className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-screen-2xl mx-auto px-8 pt-12 pb-10">
          <Link href="/" className="text-sm text-sky-400 mb-4 inline-block">← Torna alla Home</Link>
          <h1 className="text-5xl font-display tracking-tighter">Servizi IT per Aziende</h1>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto px-8 py-14 grid md:grid-cols-2 gap-8">
        {[
          { icon: "🛠️", title: "Progettazione Infrastrutture", desc: "Soluzioni complete su misura: server, storage, networking, virtualizzazione e cloud ibrido." },
          { icon: "📞", title: "Assistenza e Managed Services", desc: "Piani personalizzati con SLA, monitoraggio 24/7 e referente dedicato." },
          { icon: "💰", title: "Leasing & Noleggio Operativo", desc: "Diluisci l'investimento e mantieni sempre tecnologia aggiornata." },
          { icon: "🔄", title: "Migrazione e Consolidamento", desc: "Passa da legacy a infrastrutture moderne in modo sicuro e controllato." },
        ].map((service, index) => (
          <div key={index} className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-slate-400">{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center pb-16">
        <Link href="#contatti" className="inline-block px-10 py-4 bg-sky-600 hover:bg-sky-500 font-semibold rounded-3xl">Richiedi una consulenza</Link>
      </div>
    </main>
  );
}
