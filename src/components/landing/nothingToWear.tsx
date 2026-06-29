'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/common/container';
import { InView } from '@/components/ui/in-view';
import { motion } from 'motion/react';
import { CaretRight, Sparkle } from 'phosphor-react';
import NothingToWearBg from '@/../public/Assests/Images/nothingToWear.png';

const NothingToWear = () => {
    return (
        <section className="relative w-[92%] max-w-[1200px] mx-auto min-h-[500px] md:min-h-[560px] flex items-center overflow-hidden py-12 md:py-16 px-6 md:px-12 text-[#E2DEC6] mb-20 rounded-[32px] md:rounded-[48px] border border-white/10 shadow-2xl">
            {/* Background Image - Bright and Fully Visible */}
            <Image
                src={NothingToWearBg}
                alt="Nothing to wear background"
                fill
                priority
                sizes="(max-w-1200px) 100vw, 1200px"
                className="object-cover object-center md:object-right z-0 opacity-100"
            />

            {/* Faint ambient light overlay just to blend the edges naturally */}
            <div className="absolute inset-0 bg-black/15 z-10 pointer-events-none"></div>

            <Container className="relative z-20 px-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 w-full">

                    {/* Left Column: Glassmorphic Content Card */}
                    <div className="lg:col-span-7 bg-black/20 backdrop-blur-lg border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl">
                        <InView
                            viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
                            }}
                        >
                            <span className="text-sm md:text-base tracking-wide mb-4 text-[#03D391] font-medium flex items-center gap-2">
                                <Sparkle size={16} weight="fill" className="animate-pulse" /> / Wardrobe Rescue
                            </span>

                            <h2 className="2xl:text-5xl md:text-4xl text-3xl font-normal text-white leading-tight mb-4 tracking-wide">
                                Have nothing <br className="hidden sm:block" />
                                to wear?
                            </h2>

                            <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-300 mb-8 font-light">
                                Don’t panic. Our overnight express service picks up, dry-cleans, and returns your clothes by morning—fresh and ready to wear.
                            </p>
                        </InView>

                        <InView
                            viewOptions={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 15 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
                            }}
                        >
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                <a
                                    href="https://api.whatsapp.com/send?phone=919717953316&text=Hi%20Drydash,%20I%20have%20nothing%20to%20wear!%20I%20need%20overnight%20apparel%20restoration."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-6 h-12 bg-gradient-to-r from-[#03D391] to-[#03D391] text-black font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#458F83]/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
                                >
                                    Restore By Morning <CaretRight size={18} weight="bold" />
                                </a>
                                <div className="text-left">
                                    <span className="text-xs uppercase tracking-widest text-[#03D391] font-bold block">Overnight Service</span>
                                    <span className="text-[11px] text-gray-400 font-light block">Get it back in as fast as 8 hours</span>
                                </div>
                            </div>
                        </InView>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default NothingToWear;