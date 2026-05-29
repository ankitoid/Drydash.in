'use client'

import React, { useState, useEffect, useMemo } from 'react';
import Container from '@/components/common/container';
import Link from 'next/link';
import { motion } from 'motion/react';
import { InView } from '@/components/ui/in-view';
import { CalendarBlankIcon, ShareNetworkIcon, CaretLeftIcon } from '@phosphor-icons/react';
import { BLOGS_DATA } from '@/data/blogs';

export default function ClientBlogPage({ slug }: { slug: string }) {
    const [activeSection, setActiveSection] = useState("");

    // Detect if this is a dynamic blog post from our data folder
    const blog = useMemo(() => {
        return BLOGS_DATA.find(b => b.slug === slug);
    }, [slug]);

    // Populate TOC sections
    const sections = useMemo(() => {
        if (!blog) return [];
        const list = blog.sections.map(s => ({
            id: s.id,
            title: s.title
        }));
        if (blog.conclusion) {
            list.push({
                id: "final-thought",
                title: "Final thought"
            });
        }
        return list;
    }, [blog]);

    const activeIndex = useMemo(() =>
        sections.findIndex(s => s.id === activeSection),
        [activeSection, sections]);

    useEffect(() => {
        if (sections.length === 0) return;

        const observerOptions = {
            root: null,
            rootMargin: '-15% 0px -75% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sections]);

    if (!blog) {
        return (
            <main className="bg-[url('/Assests/Images/background_gradiant.jpg')] bg-cover bg-center bg-fixed min-h-screen text-white pt-24 pb-20 relative overflow-x-hidden flex items-center justify-center">
                <Container className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
                    <Link href="/blogs" className="text-[#03D391] hover:underline">
                        Back to Blogs
                    </Link>
                </Container>
            </main>
        );
    }

    return (
        <main className="bg-[url('/Assests/Images/background_gradiant.jpg')] bg-cover bg-center bg-fixed min-h-screen text-white pt-24 pb-20 relative overflow-x-hidden">
            {/* Scrollspy Sidebar */}
            <aside className="hidden lg:block fixed top-32 right-8 xl:right-16 2xl:right-24 w-[280px] 2xl:w-[320px] z-20">
                <div className="flex flex-col gap-8">
                    <h4 className="text-[14px] 2xl:text-[16px] font-bold text-white tracking-wide">On this page</h4>
                    <div className="relative flex gap-6">
                        <div className="relative w-[1.5px] bg-white/10 shrink-0 h-full min-h-[300px]">
                            {activeIndex !== -1 && (
                                <motion.div
                                    className="absolute left-0 w-full bg-white z-10"
                                    initial={false}
                                    animate={{
                                        top: `${(activeIndex / sections.length) * 100}%`,
                                        height: `${100 / sections.length}%`
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </div>
                        <nav className="flex flex-col gap-6 py-0">
                            {sections.map((section) => {
                                const isActive = activeSection === section.id;
                                return (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className={`block text-[13px] 2xl:text-[14px] transition-all duration-500 transform ${isActive
                                            ? "text-white font-semibold translate-x-1"
                                            : "text-[#8a928e] font-medium hover:text-white/60"
                                            }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.getElementById(section.id);
                                            if (element) {
                                                const offset = 120;
                                                const bodyRect = document.body.getBoundingClientRect().top;
                                                const elementRect = element.getBoundingClientRect().top;
                                                const elementPosition = elementRect - bodyRect;
                                                const offsetPosition = elementPosition - offset;
                                                window.scrollTo({
                                                    top: offsetPosition,
                                                    behavior: "smooth"
                                                });
                                            }
                                        }}
                                    >
                                        <div className="py-0.5">{section.title}</div>
                                    </a>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </aside>

            <Container className="relative">
                <div className="w-full max-w-[800px] 2xl:max-w-[950px] mx-auto px-4 md:px-0">
                    {/* Back Arrow Link */}
                    <div className="mb-12">
                        <Link
                            href="/blogs"
                            className="group inline-flex items-center gap-2 text-[#8a928e] hover:text-[#03D391] transition-colors text-sm 2xl:text-base font-medium"
                        >
                            <CaretLeftIcon size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Blogs
                        </Link>
                    </div>

                    <article className="space-y-16 md:space-y-20 2xl:space-y-24">
                        <header className="space-y-8">
                            <h1 className="text-3xl md:text-3xl 2xl:text-5xl font-black leading-tight tracking-tight w-[80%]">
                                {blog.title}
                            </h1>
                            <div className="space-y-6">
                                <p className="text-sm md:text-md 2xl:text-xl text-white/90 font-medium leading-relaxed md:w-[70%] w-full">
                                    {blog.intro}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between py-8 border-y border-white/5 md:w-[80%] w-full">
                                <div className="flex items-center gap-4 text-[#8a928e] text-xs md:text-sm font-medium">
                                    <div className="flex items-center gap-2">
                                        <CalendarBlankIcon size={20} className="text-[#03D391]" />
                                        <span>{blog.date}</span>
                                    </div>
                                    <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                                    <span>{blog.readTime}</span>
                                </div>
                                <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-2.5 rounded-full text-xs font-semibold transition-all active:scale-95">
                                    <ShareNetworkIcon size={18} />
                                    Share Post
                                </button>
                            </div>
                        </header>

                        {blog.sections.map((section) => (
                            <InView key={section.id} viewOptions={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}>
                                <section id={section.id} className="space-y-8 pt-8 border-t border-white/5 scroll-mt-32">
                                    <h2 className="text-2xl 2xl:text-3xl font-bold">{section.title}</h2>
                                    {section.paragraphs.map((p, idx) => (
                                        <p key={idx} className="text-sm md:text-md 2xl:text-lg w-[80%] text-[#8a928e] leading-relaxed">
                                            {p}
                                        </p>
                                    ))}

                                    {section.listTitle && (
                                        <div className="space-y-6 pt-6">
                                            <p className="text-md md:text-lg text-[#03D391] font-medium italic border-l-2 border-[#03D391]/30 pl-6 py-1 md:w-[80%] w-full">
                                                {section.listTitle}
                                            </p>
                                            <ul className="space-y-4">
                                                {section.listItems?.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-4 text-white/80">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#03D391] mt-2.5 shrink-0"></div>
                                                        <span className="text-sm md:text-base 2xl:text-lg">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </section>
                            </InView>
                        ))}

                        {blog.conclusion && (
                            <InView viewOptions={{ once: true }} variants={{ hidden: { opacity: 0, scale: 0.98 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}>
                                <section id="final-thought" className="bg-[#111111] p-12 md:p-16 2xl:p-20 rounded-[48px] border border-white/10 text-center shadow-2xl relative overflow-hidden scroll-mt-32 md:w-[80%] w-full">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent to-transparent opacity-30"></div>
                                    <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-black mb-6 tracking-tight">Final thought</h2>
                                    <p className="text-lg md:text-xl text-white/90 max-w-xl 2xl:max-w-3xl mx-auto leading-relaxed font-medium">
                                        {blog.conclusion}
                                    </p>
                                </section>
                            </InView>
                        )}
                    </article>
                </div>
            </Container>
        </main>
    );
}