import React from "react";
import { Scissors, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const paginainicial = () => {
  return (
    <div className="w-full min-h-screen bg-[#080808] text-gray-100 font-sans selection:bg-amber-600 overflow-x-hidden">
      
      {/* BACKGROUND COM TEXTURA */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) brightness(0.3)' 
        }}
      ></div>

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-4xl mx-auto text-center z-10"> 
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-amber-600 rounded-full flex items-center justify-center rotate-45 group hover:rotate-0 transition-transform duration-500">
               <Scissors className="text-amber-600 -rotate-45 group-hover:rotate-0 transition-transform" size={40} />
            </div>
          </div>
          
          <span className="text-amber-600 font-bold tracking-[0.3em] uppercase mb-4 block text-[10px] md:text-sm">
            Old School • Estilo • Excelência
          </span>
          
          <h1 className="text-4xl md:text-8xl font-black mb-6 text-white uppercase italic leading-none">
            Corte de <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-800">Respeito</span>
          </h1>
          
          <p className="text-gray-400 text-sm md:text-xl max-w-lg mb-10 mx-auto leading-relaxed px-4 md:px-0">
            Muito mais que um corte. Uma experiência de cavalheiro com toalha quente e navalha afiada.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 px-4 md:px-0">
            <a 
              href="https://wa.me/5579999999999?text=Olá! Gostaria de agendar um horário na Barber Premium." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 text-black px-12 py-4 rounded-sm font-black uppercase transition-all duration-300 hover:bg-amber-500 hover:scale-105 shadow-xl shadow-amber-900/20 text-center"
            >
              Agendar Horário
            </a>

            <Link 
              to="/servicos" 
              className="bg-amber-600 text-black px-12 py-4 rounded-sm font-black uppercase transition-all duration-300 hover:bg-amber-500 hover:scale-105 shadow-xl shadow-amber-900/20 text-center"
            >
              Ver Serviços
            </Link>
            <Link 
              to="/endereco" 
              className="border border-white/20 px-12 py-4 rounded-sm font-black uppercase hover:bg-white hover:text-black transition-all text-center flex items-center justify-center gap-2"
            >
              <MapPin size={18} /> Como Chegar
            </Link>
          </div>
        </div>
      </section>

      {/* RODAPÉ SIMPLES */}
      <footer className="w-full py-10 bg-black text-center border-t border-white/5 px-6">
         <p className="text-gray-500 text-[10px] tracking-[0.3em] uppercase">
            Rua Juca de Oliveira, 150 • Jardins • Aracaju
          </p>
          <p className="text-[9px] text-gray-800 mt-4 uppercase">
            © 2026 BARBER PREMIUM - DESENVOLVIDO POR FELIPE FARIAS
          </p>
      </footer>
    </div>
  );
};

export default paginainicial;