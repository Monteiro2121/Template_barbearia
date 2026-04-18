import React from "react";
import { APIProvider, Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { ArrowLeft, Navigation, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Endereco = () => {
  const position = { lat: -10.9392, lng: -37.0627 };
  const API_KEY = "AIzaSyB9YKhw1urVeMV_G2A6oXI70J4NTjlGw54";

  return (
    <div className="w-full h-screen bg-[#080808] relative overflow-hidden">
      
      {/* BOTÃO VOLTAR */}
      <div className="absolute top-6 left-6 z-10">
        <Link to="/" className="bg-black/90 text-amber-600 p-3 rounded-full flex items-center gap-2 border border-amber-600/30 hover:bg-amber-600 hover:text-black transition-all font-black uppercase text-[10px] tracking-widest">
          <ArrowLeft size={18} /> <span className="hidden md:inline">Voltar ao Início</span>
        </Link>
      </div>

      {/* MAPA */}
      <APIProvider apiKey={API_KEY}>
        <div className="w-full h-full grayscale-[0.5] invert-[0.05]">
          <Map
            defaultCenter={position}
            defaultZoom={15}
            mapId="BARBER_MAP_ID"
            disableDefaultUI={false}
          >
            <AdvancedMarker position={position}>
              <Pin background={'#d97706'} glyphColor={'#000'} borderColor={'#000'} />
            </AdvancedMarker>
          </Map>
        </div>
      </APIProvider>

      {/* CARD FLUTUANTE (AJUSTADO PARA MOBILE) */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 w-[92%] md:w-full max-w-md z-10">
        <div className="bg-[#0c0c0c] border-t-4 border-amber-600 p-6 md:p-8 shadow-2xl">
          <div className="mb-4">
            <h3 className="text-2xl md:text-3xl font-black uppercase italic text-white leading-none">
              Barber <span className="text-amber-600">Premium</span>
            </h3>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">Unidade Jardins • Aracaju</p>
          </div>
          
          <div className="space-y-3 mb-6">
            <p className="text-gray-400 text-xs md:text-sm">Rua Juca de Oliveira, 150 - Jardins, Aracaju - SE</p>
            <div className="flex justify-between items-center text-[10px] font-black text-gray-500 uppercase border-y border-white/5 py-3">
              <span className="flex items-center gap-1"><Clock size={12}/> Seg - Sáb: 09h - 20h</span>
              <span className="flex items-center gap-1"><Phone size={12}/> (79) 99999-9999</span>
            </div>
          </div>

          <a 
            href={`http://googleusercontent.com/maps.google.com/3{position.lat},${position.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-amber-600 text-black py-4 font-black uppercase flex items-center justify-center gap-3 hover:bg-amber-500 transition-all text-sm"
          >
            <Navigation size={18} fill="black" /> Iniciar Rota no GPS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Endereco;