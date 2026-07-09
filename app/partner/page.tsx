'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PartnerPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-20 bg-slate-950">
      <section className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-screen-2xl mx-auto px-8 pt-12 pb-10">
          <Link href="/" className="text-sm text-sky-400 mb-4 inline-block">← Torna alla Home</Link>
          <h1 className="text-5xl font-display tracking-tighter">Programma Partner</h1>
          <p className="mt-3 text-xl text-slate-300 max-w-lg">Per system integrator e rivenditori che vogliono offrire soluzioni enterprise di qualità.</p>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto px-8 py-14">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {["Listini riservati e sconti volume", "Supporto tecnico prioritario", "Formazione gratuita", "Lead generation", "Stock dedicato", "Garanzia trasferibile"].map((benefit, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center">
              <div className="text-sky-400 mb-3">✓</div>
              <p className="font-medium">{benefit}</p>
            </div>
          ))}
        </div>

        {!submitted ? (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-8">Candidati al Programma Partner</h2>
            <form onSubmit={handleSubmit} className="space-y-5 bg-slate-900 border border-slate-700 rounded-3xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" placeholder="Nome Azienda" required className="bg-slate-800 border border-slate-700 rounded-2xl px-5 py-3.5" />
                <input type="text" placeholder="Partita IVA" className="bg-slate-800 border border-slate-700 rounded-2xl px-5 py-3.5" />
              </div>
              <input type="email" placeholder="Email aziendale" required className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-3.5" />
              <textarea placeholder="Descrivi la tua attività..." rows={4} required className="w-full bg-slate-800 border border-slate-700 rounded-3xl px-5 py-4"></textarea>
              <button type="submit" className="w-full py-4 bg-sky-600 hover:bg-sky-500 font-semibold rounded-3xl">Invia Candidatura</button>
            </form>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-emerald-400 text-6xl mb-4">✓</div>
            <h3 className="text-2xl font-semibold">Candidatura inviata!</h3>
            <p className="text-slate-400 mt-2">Ti ricontatteremo entro 48 ore.</p>
          </div>
        )}
      </div>
    </main>
  );
}
