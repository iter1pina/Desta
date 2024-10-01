"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


function Navbar () {
    
    const [activeLink, SetActiveLink] = useState(null);
    
    const hundleLinkClick = (link: any) => {
      SetActiveLink(link);
    };

  
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 text-slate-300 py-16 sm:py-8 lg:py-16">
        <div className="flex ml-12 space-x-10 bg-transparent text-pretty font-semibold text-2xl">
        <Link href="#" className={activeLink == "Serviços"? 'text-cyan-500':'text-slate-300'} onClick={()=>hundleLinkClick('Serviços')}>Serviços</Link >
        <Link href="#" className={activeLink == "Projetos"? 'text-cyan-500':'text-slate-300'} onClick={()=>hundleLinkClick('Projetos')} >Projetos</Link >
        <Link href="#" className={activeLink == "Sobre"? 'text-cyan-500':'text-slate-300'} onClick={()=>hundleLinkClick('Sobre')} >Sobre</Link >
        <Link href="#" className={activeLink == "Contato"? 'text-cyan-500':'text-slate-300'} onClick={()=>hundleLinkClick('Contato')} >Contato</Link >
        <div className="flex gap-10">
          <input type="text" className="p-2 text-xl font-normal rounded-md ml-36" placeholder="pesquisar"/>
          <button className="bg-lime-500 p-2 rounded-md ">Buscar</button>
        </div>
        <div className="relative w-screen">
          <Link href="#">
          <Image src="/avatar.png" width={50} height={50} alt="avatar" className="rounded-md flex absolute top-0 right-10"/>
          </Link>
        </div>
        </div>
        
  
  
  
       
      </div>
    )
  }


export default Navbar;