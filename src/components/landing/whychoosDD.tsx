'use client';
import React from 'react';
import Container from '@/components/common/container';
import Image from 'next/image';
import { Clock, Leaf, Truck, TShirt } from 'phosphor-react';
import { InView } from '@/components/ui/in-view';
import { motion } from 'motion/react';

const features = [
    {
        icon: <Clock size={36} weight="regular" />,
        title: "24-Hour Delivery",
        description: "Next-day delivery for laundry and dry cleaning.",
        // number: "01.",
        image: "/Assests/Images/bento_express_delivery.png",
        className: "lg:col-span-8 md:col-span-6 col-span-12 h-[380px] md:h-[420px]"
    },
    {
        icon: <Leaf size={36} weight="regular" />,
        title: "Eco-Friendly Solvents",
        description: "No harsh chemicals. No petrol smell. Safe for skin & fabrics.",
        // number: "02.",
        image: "/Assests/Images/bento_eco_friendly.png",
        className: "lg:col-span-4 md:col-span-6 col-span-12 h-[380px] md:h-[420px]"
    },
    {
        icon: <Truck size={36} weight="regular" />,
        title: "Doorstep Convenience",
        description: "Pickup and delivery anywhere in your city.",
        // number: "03.",
        image: "/Assests/Images/bento_doorstep_service.png",
        className: "lg:col-span-4 md:col-span-6 col-span-12 h-[380px] md:h-[420px]"
    },
    {
        icon: <TShirt size={36} weight="regular" />,
        title: "Premium Fabric Care",
        description: "Delicate, luxury and designer wear handled by specialists.",
        // number: "04.",
        image: "/Assests/Images/bento_fabric_care.png",
        className: "lg:col-span-8 md:col-span-6 col-span-12 h-[380px] md:h-[420px]"
    }
];

const WhychoosDD = () => {
    return (
        <section className="bg-black relative w-full pt-24 pb-24 px-6 overflow-hidden">
            {/* Elegant dark green ambient light blobs */}
            <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#458F83]/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-10 right-[10%] w-[600px] h-[400px] bg-[#143224]/20 blur-[130px] rounded-full pointer-events-none"></div>

            <Container>
                {/* Header */}
                <InView
                    viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
                    }}
                >
                    <div className="flex flex-col items-start justify-start md:items-center md:justify-center text-left md:text-center mb-16 md:mb-20 z-10 relative">
                        <span className="text-lg tracking-wide mb-4 text-[#458F83] font-medium block">
                            / Why Choose drydash
                        </span>
                        <h2 className="2xl:text-5xl md:text-4xl text-3xl font-normal text-white mb-5 tracking-wide">
                            Why Choose drydash?
                        </h2>
                        <p className="2xl:text-[16px] text-[15px] leading-[1.6] text-gray-400 max-w-lg md:mx-auto tracking-wide">
                            Fast. Reliable. Hassle-free dry cleaning and laundry.<br />
                            Fresh, clean, and ready at your doorstep.
                        </p>
                    </div>
                </InView>

                {/* Bento Features Grid */}
                <InView
                    viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 },
                        },
                    }}
                >
                    <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 z-10 relative">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                variants={{
                                    hidden: { opacity: 0, y: 40, scale: 0.98 },
                                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                                }}
                                className={`${feature.className} group relative rounded-[32px] overflow-hidden border border-white/10 shadow-xl`}
                            >
                                {/* Background Image */}
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] -z-10"
                                    priority={idx === 0}
                                />

                                {/* Ambient overlay gradient for typography readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent -z-10"></div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-transparent -z-10"></div>

                                {/* Card Content */}
                                <div className="h-full w-full flex flex-col justify-between p-8 md:p-10 z-10 relative">
                                    {/* Top Row: Icon & Giant Number */}
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-[#458F83] group-hover:bg-[#458F83]/15 group-hover:border-[#458F83]/30 transition-all duration-300">
                                            {feature.icon}
                                        </div>
                                        {/* <div className="text-4xl md:text-5xl font-black text-white/10 group-hover:text-white/20 tracking-tighter transition-colors duration-300">
                                            {feature.number}
                                        </div> */}
                                    </div>

                                    {/* Bottom Row: Text Content */}
                                    <div className="mt-auto">
                                        <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wide mb-2 group-hover:text-[#E2DEC6] transition-colors duration-300">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[14px] leading-relaxed text-gray-300 font-light max-w-md group-hover:text-white transition-colors duration-300">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </InView>
            </Container>
        </section>
    );
};

export default WhychoosDD;