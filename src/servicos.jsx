import React from "react";
import { Scissors, Check, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Servicos = () => {
  const listaServicos = [
    { nome: "Corte Social", preco: "R$ 45", desc: "Corte clássico com acabamento premium." },
    { nome: "Barba Completa", preco: "R$ 40", desc: "Toalha quente e óleos essenciais." },
    { nome: "Combo Premium", preco: "R$ 75", desc: "Cabelo + Barba + Sobrancelha." },
    { nome: "Pigmentação", preco: "R$ 30", desc: "Correção de falhas com naturalidade." },
    { nome: "Luzes / Reflexo", preco: "R$ 90", desc: "Técnicas modernas de clareamento." },
    { nome: "Hidratação", preco: "R$ 25", desc: "Tratamento profundo pós-química." },
  ];

  return (
    <div className="w-full min-h-screen bg-[#080808] text-gray-100 font-sans p-4 md:p-6">
      <div className="max-w-4xl mx-auto pt-6 md:pt-10">
        
        <div className="flex items-center justify-between mb-12">
          <Link to="/" className="text-amber-600 hover:text-amber-500 transition-colors uppercase text-[10px] font-black tracking-widest flex items-center gap-2">
            <ArrowLeft size={14} /> Voltar
          </Link>
          <h2 className="text-2xl md:text-3xl font-black uppercase italic text-white tracking-tighter text-right">
            Nossos <span className="text-amber-600">Serviços</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          {listaServicos.map((s, index) => (
            <div key={index} className="bg-[#0c0c0c] border border-white/5 p-6 rounded-sm hover:border-amber-600/50 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-amber-600/10 rounded-sm">
                  <Scissors className="text-amber-600" size={20} />
                </div>
                <span className="text-xl font-black text-amber-500">{s.preco}</span>
              </div>
              <h3 className="text-lg font-bold uppercase mb-2 group-hover:text-amber-500 transition-colors">
                {s.nome}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-amber-600 to-amber-900 p-6 md:p-8 rounded-sm text-black">
          <div className="flex items-center gap-3 mb-4">
            <Star fill="currentColor" size={24} />
            <h4 className="text-lg md:text-xl font-black uppercase italic text-black">Diferencial Barber Premium</h4>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-bold text-[10px] md:text-xs uppercase">
            <li className="flex items-center gap-2"><Check size={14}/> Cerveja Cortesia</li>
            <li className="flex items-center gap-2"><Check size={14}/> Ambiente Climatizado</li>
            <li className="flex items-center gap-2"><Check size={14}/> Wi-Fi de Alta Velocidade</li>
            <li className="flex items-center gap-2"><Check size={14}/> Som Ambiente</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Servicos;