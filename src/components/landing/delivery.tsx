'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/common/container';
import { InView } from '@/components/ui/in-view';
import { motion } from 'motion/react';
import { Truck, CaretRight } from 'phosphor-react';
import DownloadBtn from '@/components/DownloadBtn/downloadBtn';
import DeliveryManImg from '@/../public/Assests/Images/deliveryMan.png';

const Delivery = () => {
    return (
        <section className="relative w-full py-20 px-6 overflow-hidden bg-black text-[#E2DEC6]">
            {/* Elegant dark green-teal radial glow effects */}
            <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-[#458F83]/10 blur-[130px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-[#2A524D]/10 blur-[130px] rounded-full pointer-events-none"></div>

            <Container>
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* Left Side: Content */}
                        <div className="lg:col-span-6 flex flex-col justify-center text-left">
                            <InView
                                viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
                                }}
                            >
                                <span className="text-lg tracking-wide mb-4 text-gray-400 font-medium block">
                                    / Doorstep Service
                                </span>

                                <h2 className="2xl:text-6xl md:text-5xl text-4xl font-normal text-white leading-tight mb-6 tracking-wide">
                                    Freshness Delivered <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#458F83] to-[#E2DEC6]">
                                        Right at Your Door
                                    </span>
                                </h2>

                                <p className="2xl:text-lg text-[16px] leading-relaxed text-gray-300 mb-12 max-w-xl font-light">
                                    Why waste your weekend on laundry? drydash brings premium fabric care, expert dry cleaning, and luxurious shoe spa services directly to your doorstep. Schedule a pickup in seconds, and our professional executives will handle the rest—bringing clean, crisp, and fresh clothes right back to you.
                                </p>
                            </InView>

                            <InView
                                viewOptions={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 15 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
                                }}
                            >
                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <a
                                        href="https://api.whatsapp.com/send?phone=919717953316&text=Hi%20Drydash,%20I%20would%20like%20to%20book%20a%20doorstep%20laundry%20pickup."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto px-8 h-14 bg-gradient-to-r from-[#458F83] to-[#3a7c72] hover:from-[#3a7c72] hover:to-[#458F83] text-black font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#458F83]/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        Book Pickup Now <CaretRight size={20} weight="bold" />
                                    </a>
                                    <div className="w-full sm:w-auto flex justify-center">
                                        <DownloadBtn />
                                    </div>
                                </div>
                            </InView>
                        </div>

                        {/* Right Side: Image */}
                        <div className="lg:col-span-6 flex justify-center items-center relative">
                            <InView
                                viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95, y: 40 },
                                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                }}
                            >
                                <div className="w-full h-full relative">
                                    {/* Subtle blur light halo behind image container */}
                                    <div className="absolute inset-0 bg-[#458F83]/10 rounded-3xl blur-2xl -z-10 transform scale-90"></div>

                                    <div className="relative w-full max-w-[620px] mx-auto rounded-[32px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
                                        <Image
                                            src={DeliveryManImg}
                                            alt="Drydash Delivery Executive"
                                            className="w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                            priority
                                        />

                                        {/* Ambient overlay inside image */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-10"></div>

                                        {/* Glassmorphic floating card */}

                                    </div>
                                </div>
                            </InView>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Delivery;