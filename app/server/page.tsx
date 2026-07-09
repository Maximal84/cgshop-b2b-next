'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Server {
  id: number;
  brand: string;
  model: string;
  form: string;
  price: number;
  cpu: string;
  ram: string;
  storage: string;
  warranty: string;
  stock: boolean;
  use: string;
}

const servers: Server[] = [
  { id: 1, brand: "Dell", model: "PowerEdge R650", form: "rack", price: 2190, cpu: "2x Xeon Silver 4314 (32c)", ram: "fino a 1 TB", storage: "8x 2.5\"", warranty: "36 mesi", stock: true, use: "Virtualizzazione" },
  { id: 2, brand: "HPE", model: "ProLiant DL380 Gen10 Plus", form: "rack", price: 2650, cpu: "2x Xeon Gold 6248R (48c)", ram: "fino a 3 TB", storage: "24x SFF", warranty: "60 mesi", stock: true, use: "HCI & Database" },
  { id: 3, brand: "Lenovo", model: "ThinkSystem SR650 V2", form: "rack", price: 2980, cpu: "2x EPYC 7452 (64c)", ram: "fino a 4 TB", storage: "24x NVMe", warranty: "48 mesi", stock: true, use: "AI & Big Data" },
  { id: 4, brand: "Dell", model: "PowerEdge R750", form: "rack", price: 3450, cpu: "2x Xeon Gold 6348 (56c)", ram: "fino a 2 TB DDR5", storage: "16x 2.5\" + GPU", warranty: "60 mesi", stock: true, use: "AI/ML Ready" },
  { id: 5, brand: "HPE", model: "ProLiant DL360 Gen11", form: "rack", price: 1890, cpu: "2x Xeon Silver 4510", ram: "fino a 2 TB", storage: "8x SFF", warranty: "36 mesi", stock: true, use: "Edge & ROBO" },
  { id: 6, brand: "Lenovo", model: "ThinkSystem SR630 V3", form: "rack", price: 2450, cpu: "2x Xeon Gold 6430", ram: "fino a 2 TB", storage: "10x 2.5\"", warranty: "48 mesi", stock: false, use: "Virtualizzazione" },
];

export default function ServerPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'Dell' | 'HPE' | 'Lenovo' | 'rack' | 'tower'>('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedServer, setSelectedServer] = useState<Server | null>(null);
  const [showConfigModal, setShowConfigModal] = useState(false);

  const filteredServers = servers.filter(server => {
    if (activeFilter === 'all') return true;
    if (['Dell', 'HPE', 'Lenovo'].includes(activeFilter)) return server.brand === activeFilter;
    if (activeFilter === 'rack' || activeFilter === 'tower') return server.form === activeFilter;
    return true;
  });

  const openQuote = (server: Server) => {
    setSelectedServer(server);
    setShowModal(true);
  };

  return (
    <main className="pt-20 bg-slate-950">
      {/* Hero */}
      <section className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-screen-2xl mx-auto px-8 pt-12 pb-10">
          <Link href="/" className="text-sm text-sky-400 flex items-center gap-x-2 mb-4 hover:text-sky-300">
            ← Torna alla Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-display tracking-tighter">Server Ricondizionati Enterprise</h1>
          <p className="mt-3 text-xl text-slate-300 max-w-lg">Configurazioni testate per carichi reali. Garanzia fino a 5 anni.</p>
        </div>
      </section>

      {/* Filters */}
      <div className="max-w-screen-2xl mx-auto px-8 pt-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {['all', 'Dell', 'HPE', 'Lenovo', 'rack'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter as any)}
              className={`px-5 py-2 text-sm rounded-2xl border transition ${activeFilter === filter 
                ? 'bg-sky-600 text-white border-sky-600' 
                : 'border-slate-700 hover:bg-slate-800'}`}
            >
              {filter === 'all' ? 'Tutti' : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
          <button 
            onClick={() => setShowConfigModal(true)}
            className="ml-auto px-6 py-2 bg-white text-slate-950 font-semibold rounded-2xl hover:bg-slate-100 text-sm"
          >
            Configuratore Rapido
          </button>
        </div>

        {/* Server Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServers.map((server) => (
            <div key={server.id} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col">
              <div className="h-44 bg-slate-800 relative">
                <img src={`https://picsum.photos/id/${100 + server.id}/600/320`} alt={server.model} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-3 py-0.5 text-xs bg-slate-950/80 rounded-full">{server.brand}</span>
                  {server.stock && <span className="px-3 py-0.5 text-xs bg-emerald-600 rounded-full">In Stock</span>}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold text-xl">{server.model}</h3>
                    <p className="text-sm text-slate-400">{server.form.toUpperCase()} • {server.use}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">da</div>
                    <div className="font-semibold text-2xl">€{server.price}</div>
                  </div>
                </div>

                <div className="mt-6 text-sm space-y-1 text-slate-400 flex-1">
                  <p><span className="text-slate-300">CPU:</span> {server.cpu}</p>
                  <p><span className="text-slate-300">RAM:</span> {server.ram}</p>
                  <p><span className="text-slate-300">Storage:</span> {server.storage}</p>
                </div>

                <div className="mt-auto pt-6 flex justify-between items-center">
                  <span className="text-emerald-400 text-sm font-medium">Garanzia {server.warranty}</span>
                  <button 
                    onClick={() => openQuote(server)}
                    className="px-5 py-2 text-sm font-semibold bg-slate-800 hover:bg-sky-600 hover:text-white rounded-2xl transition"
                  >
                    Richiedi Offerta
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Modal */}
      {showModal && selectedServer && (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-md p-8" onClick={e => e.stopPropagation()}>
            <h3 className="text-xl font-semibold mb-1">Richiedi preventivo per</h3>
            <p className="text-sky-400 font-medium mb-6">{selectedServer.model}</p>

            <form onSubmit={(e) => { e.preventDefault(); alert('Richiesta inviata! Ti contatteremo presto.'); setShowModal(false); }}>
              <div className="space-y-4">
                <input type="text" placeholder="Nome Azienda" required className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-3" />
                <input type="email" placeholder="Email" required className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-3" />
                <input type="number" placeholder="Quantità" defaultValue={1} className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-3" />
              </div>
              <button type="submit" className="mt-6 w-full py-3.5 bg-sky-600 hover:bg-sky-500 font-semibold rounded-2xl">Invia Richiesta</button>
            </form>
          </div>
        </div>
      )}

      {/* Configurator Modal */}
      {showConfigModal && (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4" onClick={() => setShowConfigModal(false)}>
          <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-xl p-8" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-semibold mb-6">Configuratore Server</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm text-slate-400">Brand</label>
                <select className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-2xl px-4 py-3">
                  <option>Dell</option><option>HPE</option><option>Lenovo</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-400">Form Factor</label>
                <select className="w-full mt-1 bg-slate-800 border border-slate-700 rounded-2xl px-4 py-3">
                  <option>Rack 1U</option><option>Rack 2U</option><option>Tower</option>
                </select>
              </div>
            </div>

            <button 
              onClick={() => { setShowConfigModal(false); alert('Richiesta di configurazione inviata!'); }} 
              className="mt-8 w-full py-4 bg-sky-600 hover:bg-sky-500 font-semibold rounded-3xl"
            >
              Invia richiesta di configurazione personalizzata
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
