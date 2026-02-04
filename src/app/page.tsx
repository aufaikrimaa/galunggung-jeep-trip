"use client";

import { Button } from "@/components/ui/button";
import { 
  Mountain, 
  Car, 
  MapPin, 
  Instagram, 
  ArrowRight,
  Shield,
  Clock,
  ChevronRight,
  Camera
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-600/30">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            {/* <div className="bg-yellow-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Mountain className="h-6 w-6 text-black" />
            </div> */}
            <img src={'/images/logo.png'} className="size-10"/>
            <span className="font-syne font-bold text-xl tracking-tight">GALUNGGUNG JEEP TRIP</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 font-medium text-sm tracking-widest uppercase">
            {["Home", "Packages", "About", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-yellow-600 transition-colors">
                {item}
              </a>
            ))}
          </div>

          <Button asChild className="bg-white text-black hover:bg-yellow-600 hover:text-white transition-all rounded-full px-6">
            <a href="https://wa.me/6282120225622">Book Now</a>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-600/10 via-transparent to-transparent opacity-50" />
          <div className="w-full h-full bg-[url('/images/hero-img.jpeg')] bg-cover bg-center grayscale opacity-40 scale-105 animate-pulse-slow" />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-syne text-[3.5rem] sm:text-6xl md:text-9xl font-bold mb-8 leading-[0.9] tracking-tighter">
            THE REAL <br /> 
            <span className="text-yellow-600">ADVENTURE</span>
          </h1>
          <p className="font-outfit text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Unleash the adrenaline. Explore the hidden paths of Gunung Galunggung with our premium offroad fleet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-yellow-600 hover:bg-white text-black font-bold rounded-full px-10 py-7 text-lg group">
              <a href="#packages">
                VIEW PACKAGES <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <a href="#about" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors py-4 px-6">
              Learn More <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 hidden lg:block">
          <div className="flex gap-8 items-center text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1px] bg-yellow-600" />
              SCROLL TO EXPLORE
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Short About */}
      <section id="about" className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-syne text-4xl md:text-6xl font-bold mb-8 leading-tight">
                WE PROVIDE <br />
                THE GEAR, YOU <br />
                <span className="text-zinc-500 italic font-medium underline decoration-yellow-600/50">BRING THE VIBE.</span>
              </h2>
              <p className="font-outfit text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
                Founded in 2021, we've been the pulse of Galunggung offroading. 
                Our team of pro drivers doesn't just drive, they guide you through the soul of the mountain.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-syne font-bold text-yellow-600 mb-1">1K+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Happy Riders</div>
                </div>
                <div>
                  <div className="text-4xl font-syne font-bold text-yellow-600 mb-1">10+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Elite Jeeps</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-[4/5] bg-zinc-900 rounded-2xl overflow-hidden opacity-50 hover:opacity-100 transition-all duration-700">
                <img 
                  src="/images/photo.jpeg" 
                  alt="Jeep Adventure" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-600 p-8 rounded-2xl hidden md:block group-hover:-translate-y-2 transition-transform">
                <Car className="h-10 w-10 text-black mb-4" />
                <div className="text-black font-syne font-black text-2xl uppercase leading-none">
                  Offroad <br /> Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <div className="text-yellow-600 font-bold text-sm tracking-[0.3em] uppercase mb-4">Pricing & Plans</div>
              <h2 className="font-syne text-5xl md:text-7xl font-bold leading-tight">CHOOSE YOUR <br /> ADVENTURE</h2>
            </div>
            <p className="text-gray-500 font-outfit max-w-xs text-right hidden md:block">
              Tailored trips for thrill-seekers. From sunrise views to full-day explorations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Sunrise", price: "350k", duration: "4h", tag: "Early" },
              { name: "Regular", price: "400k", duration: "5h", tag: "Hot", primary: true },
              { name: "Full Day", price: "550k", duration: "7h", tag: "Epic" },
              { name: "Sunset", price: "350k", duration: "4h", tag: "Vibe" },
            ].map((pkg) => (
              <div 
                key={pkg.name} 
                className={`group relative p-8 rounded-3xl transition-all duration-500 ${pkg.primary ? "bg-yellow-600 text-black" : "bg-zinc-900 hover:bg-zinc-800"}`}
              >
                <div className="flex justify-between items-start mb-12">
                  <div className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${pkg.primary ? "bg-black text-white" : "bg-yellow-600/10 text-yellow-600"}`}>
                    {pkg.tag}
                  </div>
                  <div className="text-sm font-medium opacity-60 uppercase tracking-widest">{pkg.duration}</div>
                </div>
                <h3 className="font-syne text-3xl font-bold mb-2 uppercase">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black">{pkg.price}</span>
                  <span className="text-xs uppercase font-bold opacity-60">/ Jeep</span>
                </div>
                <Button asChild className={`w-full rounded-xl py-6 font-bold uppercase tracking-widest text-xs transition-all ${pkg.primary ? "bg-black text-white hover:bg-zinc-800" : "bg-white text-black hover:bg-yellow-600 hover:text-white"}`}>
                  <a href={`https://wa.me/6282120225622?text=I'm interested in ${pkg.name}`}>Book Now</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Highlight */}
      <section className="py-32 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h2 className="font-syne text-5xl font-bold mb-4 uppercase tracking-tighter italic">Captured Moments</h2>
          <p className="text-gray-500">Every corner is a postcard waiting to happen.</p>
        </div>
        
        <div className="flex gap-4 animate-scroll whitespace-nowrap">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <div key={i} className="w-[300px] h-[400px] bg-zinc-900 rounded-3xl overflow-hidden shrink-0 opacity-40 hover:opacity-100 transition-all duration-500 cursor-pointer">
              <img 
                src="/images/photo.jpeg"
                alt="Gallery" 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="font-syne text-6xl md:text-8xl font-bold mb-10 tracking-tighter">GET IN <br /> <span className="text-yellow-600 underline decoration-white/20">TOUCH</span></h2>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="bg-zinc-900 p-4 rounded-2xl group-hover:bg-yellow-600 transition-colors">
                    <MapPin className="h-6 w-6 text-yellow-600 group-hover:text-black" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Basecamp</div>
                    <div className="text-xl font-medium">Gunung Galunggung, Tasikmalaya</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="bg-zinc-900 p-4 rounded-2xl group-hover:bg-yellow-600 transition-colors">
                    <Instagram className="h-6 w-6 text-yellow-600 group-hover:text-black" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Follow Us</div>
                    <a href="https://instagram.com/galunggungjeeptrip" target="_blank" className="text-xl font-medium hover:text-yellow-600 transition-colors">@galunggungjeeptrip</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-900 p-12 rounded-[3rem] flex flex-col justify-center items-center text-center">
              {/* <div className="bg-yellow-600/10 p-6 rounded-full mb-8 animate-bounce">
                <Mountain className="h-12 w-12 text-yellow-600" />
              </div> */}
              <img src={'/images/logo.png'} className="size-20 mb-8 animate-bounce"/>
              <h3 className="font-syne text-3xl font-bold mb-4 uppercase">READY FOR THE RIDE?</h3>
              <p className="text-gray-400 mb-10 max-w-sm">
                Message us on WhatsApp for instant booking and specialized group rates.
              </p>
              <Button asChild size="lg" className="w-full bg-white text-black hover:bg-yellow-600 hover:text-white font-black py-8 rounded-2xl text-lg">
                <a href="https://wa.me/6282120225622">CHAT ON WHATSAPP</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-zinc-900 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            {/* <div className="bg-zinc-900 p-1 rounded">
              <Mountain className="h-4 w-4 text-yellow-600" />
            </div> */}
            <img src={'/images/logo.png'} className="size-7"/>
            <span className="font-syne font-bold text-sm tracking-tight">GALUNGGUNG JEEP TRIP</span>
          </div>
          <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest">
            &copy; 2026 GALUNGGUNG JEEP TRIP &mdash; ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </div>
  );
}
