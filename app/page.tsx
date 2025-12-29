"use client";

import React, { useEffect, useRef, useState } from 'react';
import {
  Sparkles,
  Droplets,
  Wind,
  Timer,
  ShieldCheck,
  MapPin,
  Star,
  ChevronRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter,
  Check,
  ArrowRight,
  RefreshCcw,
  Zap,
  Shirt,
  ShoppingBag,
  Truck,
  Armchair,
  Gem,
  Sofa,
  Smartphone,
  Calendar,
  Quote
} from 'lucide-react';

// --- Utility for loading scripts (GSAP) ---
const useScript = (src) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, [src]);
};

// --- Components ---

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-xl shadow-sm border-b border-slate-200' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <img
                src="/drydash.png"
                alt="Pong Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#03AE96] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-slate-900 text-white hover:bg-[#03AE96] hover:shadow-lg hover:shadow-[#03AE96]/20 px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5">
              <a
                href="https://wa.me/919717953316?text=Hi%2C%20I%20want%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Pickup
              </a>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-[#03AE96] focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-[#03AE96] hover:bg-slate-50"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
const Hero = () => {
  const message = "Hi, I want to place an order.";
  const phone = "919717953316";
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
        }}>
      </div>

      {/* Soft Gradient Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-teal-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-yellow-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Side: Content */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white shadow-sm mb-6">
              <Star className="w-3 h-3 text-[#E5BD43] fill-[#E5BD43]" />
              <span className="text-slate-600 text-xs font-bold tracking-widest uppercase">Premium Care</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Premium Laundry,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#03AE96] to-[#4EF1BD]">Dry Cleaning</span> &<br />
              <span className="relative inline-block">
                Shoe Spa
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#E5BD43]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-light text-slate-600 mb-2">
              Delivered in <span className="font-bold text-slate-900 bg-teal-50 px-2 rounded">24 Hours</span>.
            </h2>

            <p className="max-w-xl text-lg text-slate-500 mb-8 leading-relaxed">
              DryDash brings expert cleaning with fast pickup, eco-friendly care, and doorstep delivery—crafted for busy professionals and modern families.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-4 bg-slate-900 text-black rounded-full font-bold text-lg shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group bg-gradient-to-r from-[#E5BD43] to-[#F6E05E] text-[#0A121B] hover:shadow-[0_0_20px_rgba(229,189,67,0.4)] rounded-full font-bold text-sm transition-all duration-300 transform">
                  Book Pickup <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-bold text-sm hover:border-slate-400 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                View Pricing
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="w-full pt-6 border-t border-slate-100">
              <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#E5BD43]">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-slate-700">4.9/5 Rated</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
                <span>25,000+ Items Cleaned</span>
                <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
                <span className="flex items-center gap-1"><Droplets className="w-3 h-3 text-[#03AE96]" /> Eco-Friendly</span>
              </div>
            </div>
          </div>

          {/* Right Side: Creative Composition */}
          <div className="relative h-[500px] w-full hidden lg:block perspective-1000">
            {/* Main Card: Shoe */}
            <div className="absolute top-10 right-10 w-72 p-4 bg-white border border-slate-100 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] z-20 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 hover:z-30 group">
              <div className="bg-slate-50 rounded-xl h-48 mb-4 relative overflow-hidden flex items-center justify-center border border-slate-100">
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                <Sparkles className="w-16 h-16 text-[#03AE96] group-hover:scale-110 transition-transform duration-500 relative z-10" />
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-white text-slate-800 text-[10px] font-bold rounded border border-slate-200 shadow-sm uppercase tracking-wide">Spa Mode</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-slate-900 font-bold">Air Jordan 1</p>
                  <p className="text-slate-400 text-xs">Deep Clean + De-yellow</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#E5BD43]/10 flex items-center justify-center text-[#E5BD43] font-bold">
                  <Check className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Secondary Card: Laundry */}
            <div className="absolute top-40 left-10 w-64 p-4 bg-white border border-slate-100 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] z-10 transform rotate-[3deg] hover:rotate-0 transition-transform duration-500 hover:z-30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <Shirt className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold">Premium Laundry</p>
                  <p className="text-slate-400 text-xs">Delicates & Silks</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[80%] bg-blue-500 rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Washing</span>
                  <span className="font-medium text-slate-900">80%</span>
                </div>
              </div>
            </div>

            {/* Tertiary Card: Bag Spa */}
            <div className="absolute bottom-10 right-20 w-64 p-4 bg-white border border-slate-100 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] z-20 transform rotate-[6deg] hover:rotate-0 transition-transform duration-500 hover:z-30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold">Luxury Bag Spa</p>
                  <p className="text-slate-400 text-xs">Leather Restoration</p>
                </div>
              </div>
              <div className="flex -space-x-2 overflow-hidden py-2">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-300">
                  <img
                    src="/avatar2.avif"
                    alt="avatar"
                    className="w-full rounded-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'; // Hides image if it fails to load
                    }}
                  />
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-400">
                  <img
                    src="/avatar2.jpg"
                    alt="avatar"
                    className="w-full rounded-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'; // Hides image if it fails to load
                    }}
                  />
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-200 flex items-center justify-center text-[10px] text-slate-600 font-bold border border-slate-100">
                  <img
                    src="/avatar.jpg"
                    alt="avatar"
                    className="w-full rounded-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'; // Hides image if it fails to load
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge: Delivery */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md border border-slate-200 p-4 rounded-full shadow-[0_10px_40px_-10px_rgba(3,174,150,0.3)] z-30 animate-bounce-slow flex items-center gap-3">
              <div className="w-10 h-10 bg-[#03AE96] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#03AE96]/30">
                <Truck className="w-5 h-5" />
              </div>
              <div className="pr-2">
                <p className="text-slate-900 font-bold text-sm">On the way</p>
                <p className="text-[#03AE96] text-xs font-medium">Arriving in 15 mins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyDryDash = () => {
  const reasons = [
    {
      icon: Timer,
      title: "24-Hour Delivery Promise",
      desc: "Next-day delivery for laundry and dry cleaning."
    },
    {
      icon: Droplets,
      title: "Eco-Friendly Solvents",
      desc: "No harsh chemicals. No petrol smell. Safe for skin & fabrics."
    },
    {
      icon: Truck,
      title: "Doorstep Convenience",
      desc: "Pickup and delivery anywhere in your city."
    },
    {
      icon: Shirt,
      title: "Premium Fabric Care",
      desc: "Delicate, luxury and designer wear handled by specialists."
    },
  ];

  return (
    <section id='why-us' className="py-24 bg-[#0A121B] relative border-t border-[#ffffff]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#E5BD43] font-bold tracking-widest uppercase text-sm mb-3">The DryDash Standard</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Why Choose <span className="text-[#4EF1BD]">DryDash?</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, idx) => (
            <div key={idx} className="bg-[#0F1923] p-8 rounded-2xl border border-[#ffffff]/5 hover:border-[#03AE96]/50 transition-all hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-[#044288]/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#03AE96] transition-colors duration-300">
                <item.icon className="w-7 h-7 text-[#4EF1BD] group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-[#AEAEAF] leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesOverview = () => {
  const overviewServices = [
    {
      title: "Laundry",
      subtitle: "Wash & Fold / Wash & Iron",
      desc: "Daily wear made fresh, sanitized, and neatly packed.",
      icon: Shirt,
      color: "text-teal-600",
      bg: "bg-teal-50",
      border: "hover:border-teal-200"
    },
    {
      title: "Dry Cleaning",
      subtitle: "Suits, Sarees, Gowns",
      desc: "Fabric-safe cleaning for suits, sarees, gowns & luxury items.",
      icon: Wind,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "hover:border-amber-200"
    },
    {
      title: "Shoe Spa",
      subtitle: "Cleaning & Restoration",
      desc: "Deep cleaning, whitening, deodorizing & color restoration.",
      icon: Sparkles,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "hover:border-blue-200"
    },
    {
      title: "Bag & Purse Spa",
      subtitle: "Leather Care",
      desc: "Professional cleaning for leather bags, clutches & designer items.",
      icon: ShoppingBag,
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "hover:border-rose-200"
    },
    {
      title: "Home Upholstery",
      subtitle: "Sofas & Carpets",
      desc: "Sofa, carpet, curtains & mattress—spotless and germ-free.",
      icon: Armchair,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "hover:border-indigo-200"
    },
    {
      title: "Special Care",
      subtitle: "Wedding & Couture",
      desc: "Wedding outfits, woolen coats, expensive fabrics—handled with extra care.",
      icon: Gem,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "hover:border-purple-200"
    },
  ];

  const message = "Hi, I want to place an order.";
  const phone = "919717953316";

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#03AE96] font-bold tracking-widest uppercase text-sm mb-3">Complete Care</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900">Our Premium <span className="text-[#38617e]">Services</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {overviewServices.map((service, idx) => (
            <div key={idx} className={`group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm ${service.border} hover:shadow-lg transition-all duration-300 relative overflow-hidden`}>
              {/* Background Decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${service.bg} rounded-bl-[100px] opacity-50 transition-transform group-hover:scale-110`}></div>

              <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-6 relative z-10`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-1 relative z-10">{service.title}</h4>
              <p className={`text-xs font-bold uppercase tracking-wider ${service.color} mb-4 relative z-10 opacity-80`}>
                {service.subtitle}
              </p>
              <p className="text-slate-500 mb-8 leading-relaxed text-sm min-h-[40px] relative z-10">
                {service.desc}
              </p>

              <a  href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-900 font-bold group-hover:gap-3 transition-all relative z-10 text-sm">
                Book Now <ArrowRight className={`w-4 h-4 ${service.color}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DetailedServices = () => {
  const details = [
    {
      title: "Premium Laundry",
      desc: "Perfect for everyday clothes—washed, sanitized, steam ironed, and packed fresh.",
      image: "/image/premium.jpg",
      icon: Shirt,
      color: "#4EF1BD"
    },
    {
      title: "Dry Cleaning",
      desc: "Advanced solvent cleaning that protects fabric texture, color, and shape.",
      image: "image/dry.jpg",
      icon: Wind,
      color: "#6D96FB"
    },
    {
      title: "Shoe Spa",
      desc: "From casual sneakers to premium leather—cleaning, deodorizing, polishing, renewing.",
      image: "image/shoe.jpg",
      icon: Sparkles,
      color: "#03AE96"
    },
    {
      title: "Bag Spa",
      desc: "Deep cleaning for handbags with premium leather treatment and restoration.",
      image: "image/bag.jpg",
      icon: ShoppingBag,
      color: "#E5BD43"
    },
  ];

  return (
    <section  className="bg-[#0A121B] relative border-t border-[#ffffff]/5">
      {details.map((service, index) => (
        <div key={index} className="flex flex-col md:flex-row group">
          {/* Text Section */}
          <div className={`flex-1 p-12 lg:p-24 flex flex-col justify-center bg-[#0A121B] border-b md:border-b-0 border-[#ffffff]/5 ${index % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2 bg-[#0F1923]'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#ffffff]/5 flex items-center justify-center border border-[#ffffff]/10" style={{ borderColor: `${service.color}40` }}>
                <service.icon className="w-6 h-6" style={{ color: service.color }} />
              </div>
              <span className="text-5xl font-bold text-[#ffffff]/10 font-mono absolute pointer-events-none -ml-4 -mt-12 select-none">0{index + 1}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-[#AEAEAF] text-lg leading-relaxed mb-8 max-w-md">
              {service.desc}
            </p>
            <div>
              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:gap-4 transition-all" style={{ color: service.color }}>
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className={`flex-1 relative overflow-hidden h-[400px] md:h-auto ${index % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
            <div className="absolute inset-0 bg-[#0A121B]/20 group-hover:bg-transparent transition-colors z-10"></div>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A121B] via-transparent to-transparent opacity-50"></div>
          </div>
        </div>
      ))}
    </section>
  );
};

const Process = () => {
  const containerRef = useRef(null);

  useScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js");
  useScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js");

  // Initialize GSAP animations
  useEffect(() => {
    const initGsap = () => {
      if (window.gsap && window.ScrollTrigger) {
        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          gsap.from(".process-step", {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
          });

          gsap.to(".process-line-fill", {
            backgroundPosition: "200% 0",
            duration: 3,
            repeat: -1,
            ease: "linear"
          });
        }, containerRef);

        return () => ctx.revert();
      }
    };

    const timer = setInterval(() => {
      if (window.gsap) {
        clearInterval(timer);
        initGsap();
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      num: "01",
      title: "Schedule Pickup",
      desc: "Book via WhatsApp, call, or website.",
      icon: Smartphone
    },
    {
      num: "02",
      title: "We Collect",
      desc: "Doorstep pickup at your preferred time.",
      icon: Truck
    },
    {
      num: "03",
      title: "Expert Cleaning",
      desc: "Fabric-safe processes, eco cleaning & strict quality checks.",
      icon: Sparkles
    },
    {
      num: "04",
      title: "24h Delivery",
      desc: "Fresh, clean, and neatly packed in 24 hours.",
      icon: Timer
    },
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden" ref={containerRef}>
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#03AE96] font-bold tracking-widest uppercase text-sm mb-3">How DryDash Works</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900">A Seamless Process <span className="text-slate-400">Designed for You</span></h3>
        </div>

        <div className="relative">
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-100 z-0 rounded-full overflow-hidden">
            <div className="process-line-fill w-full h-full bg-gradient-to-r from-transparent via-[#03AE96] to-transparent opacity-30" style={{ backgroundSize: '50% 100%' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="process-step flex flex-col items-center text-center group relative">
                <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-xl shadow-slate-200/50 flex items-center justify-center mb-6 relative z-10 transition-transform duration-300 transform group-hover:scale-110">
                  <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:border-[#03AE96] group-hover:bg-[#03AE96]/5 transition-colors">
                    <step.icon className="w-8 h-8 text-slate-400 group-hover:text-[#03AE96] transition-colors" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#03AE96] rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-md">
                    {step.num}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#03AE96] transition-colors">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>

                {/* Animated Arrow */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-8 z-20 text-slate-300 process-arrow opacity-50">
                    <ArrowRight className="w-full h-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (event) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  return (
    <section id="gallery" className="py-24 bg-[#0A121B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#4EF1BD] font-bold tracking-widest uppercase text-sm mb-3">Real Results</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Before & After</h3>
        </div>

        <div
          className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden border border-[#ffffff]/10 shadow-2xl cursor-col-resize select-none"
          ref={containerRef}
          onMouseDown={() => isDragging.current = true}
          onMouseUp={() => isDragging.current = false}
          onMouseLeave={() => isDragging.current = false}
          onMouseMove={(e) => isDragging.current && handleMove(e)}
          onTouchMove={handleMove}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0 bg-gray-800">
            <img
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=2525&auto=format&fit=crop"
              alt="After"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-[#03AE96] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">AFTER</div>
          </div>

          {/* Before Image (Foreground Clipped) */}
          <div
            className="absolute inset-0 bg-gray-900 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1605812860427-4024433a70fd?q=80&w=2535&auto=format&fit=crop"
              alt="Before"
              className="w-full h-full object-cover grayscale brightness-75 contrast-125"
            />
            <div className="absolute top-4 left-4 bg-[#6A6F76] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">BEFORE</div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="flex gap-0.5">
                <div className="w-0.5 h-3 bg-gray-800"></div>
                <div className="w-0.5 h-3 bg-gray-800"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-[#AEAEAF] text-sm">
          Drag the slider to see the magic
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      text: "DryDash returned my sneakers looking completely new. Worth every rupee.",
      author: "Rahul S.",
      role: "Sneakerhead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
    },
    {
      text: "The pickup and delivery were right on time. My silk sarees came back perfect.",
      author: "Priya M.",
      role: "Homemaker",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
    },
    {
      text: "Excellent service for my business suits. Very professional handling.",
      author: "Aditya K.",
      role: "Corporate Executive",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#03AE96] font-bold tracking-widest uppercase text-sm mb-3">Happy Customers</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900">What They <span className="text-slate-400">Say</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl relative group hover:bg-white hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 border border-transparent hover:border-slate-100">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-200 group-hover:text-[#03AE96]/20 transition-colors" />
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={review.image}
                  alt={review.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <p className="font-bold text-slate-900">{review.author}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">{review.role}</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-[#0A121B] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#03AE96]/20 to-[#044288]/20"></div>

      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#E5BD43]/10 rounded-full filter blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#4EF1BD]/10 rounded-full filter blur-[80px] translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready for a Fresh, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4EF1BD] to-[#03AE96]">Hassle-Free Cleaning</span> Experience?
        </h2>

        <p className="text-xl text-[#AEAEAF] mb-10 max-w-2xl mx-auto">
          Your clothes, shoes, and home deserve premium care. Experience the DryDash difference today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/919717953316?text=Hi%2C%20I%20want%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-[#E5BD43] text-[#0A121B] rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(229,189,67,0.3)] flex items-center justify-center gap-2">
              Book My Pickup <ArrowRight className="w-5 h-5" />
            </button>
          </a>
          {/* <button className="w-full sm:w-auto px-8 py-4 bg-[#0A121B]/50 backdrop-blur-md border border-[#ffffff]/20 text-white rounded-full font-bold text-lg hover:bg-[#ffffff]/10 transition-colors">
            Talk to Support
          </button> */}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#05090e] pt-16 pb-8 border-t border-[#ffffff]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="rounded-lg flex items-left justify-center">
                <img
                  src="/drydash_white.png"
                  alt="Pong Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'; // Hides image if it fails to load
                  }}
                />
              </div>
            </div>
            <p className="text-[#AEAEAF] max-w-sm mb-6">
              The premium destination for sneaker care, restoration, and dry cleaning. We bring life back to your favorite pairs.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-[#ffffff]/5 flex items-center justify-center text-white hover:bg-[#03AE96] hover:text-[#0A121B] transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-[#AEAEAF] hover:text-[#4EF1BD] transition-colors"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#why-us"
                  className="text-[#AEAEAF] hover:text-[#4EF1BD] transition-colors"
                >
                  Why Us
                </a>
              </li>

              <li>
                <a
                  href="#process"
                  className="text-[#AEAEAF] hover:text-[#4EF1BD] transition-colors"
                >
                  Process
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-[#AEAEAF] hover:text-[#4EF1BD] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>

          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-[#AEAEAF]">
              <li>support@drydash.in</li>
              <li>+91-9717953316</li>
              <li>HA-85 Sector 144 Noida</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#ffffff]/5 pt-8 text-center text-[#6A6F76] text-sm">
          © 2025 Guild Solution Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const NewButton = ({
  phone = "1234567890", // replace with your number (country code required)
  message = "Hello! I would like to know more.",
}) => {
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Ping effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping"></span>

      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] transition-all duration-300 hover:-translate-y-1">
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.304-5.298c0-5.45 4.432-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.895 9.884Z" />
        </svg>
      </div>
    </a>
  );
};


export default function Home() {
  // Load GSAP from CDN for the "creative animation" requirement
  useScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js');
  useScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js');

  return (
    <div className="font-sans antialiased bg-[#0A121B] min-h-screen text-[#F0F6FC] selection:bg-[#03AE96] selection:text-[#0A121B]">
      <Navigation />
      <Hero />
      <WhyDryDash />
      <ServicesOverview />
      <DetailedServices />
      <Process />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
      <NewButton
        phone="919717953316"
        message="Hi, I want to place an order. Please share price list and pick-up availability."
      />
    </div>
  );
}