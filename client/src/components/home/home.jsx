import React, { useRef, useEffect } from 'react'
import Hero from '../hero/hero.jsx'
import Categories from '../categories/categories.jsx'
import Favouritefoods from '../favouritefoods/favouritefoods.jsx'
import About from '../about/about.jsx'
import Contact from '../contact/contact.jsx'
import './home.css'

const Home = () => {
  const containerRef = useRef(null)
  const sectionRefs = [useRef(null), useRef(null)]
  const currentSection = useRef(0)
  const isScrolling = useRef(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        const ratios = sectionRefs.map(() => 0);
        entries.forEach((entry) => {
          const idx = sectionRefs.findIndex(ref => ref.current === entry.target);
          if(idx !== -1)
          {
            ratios[idx] = entry.intersectionRatio;
          }
        });
        const maxIdx = ratios.indexOf(Math.max(...ratios));
        currentSection.current = maxIdx;
      },
      { threshold: [0, 0.3, 0.6, 1] }
    )
    sectionRefs.forEach((ref) => {
      if(ref.current)
      {
        observer.observe(ref.current)
      }
    })

    const handleWheel = (e) => {
      if(isScrolling.current)
      {
        return;
      }
      
      const heroSection = sectionRefs[0].current;
      const favouritesSection = sectionRefs[1].current;
      
      if(!heroSection || !favouritesSection)
      {
        return;
      }
      
      const heroRect = heroSection.getBoundingClientRect();
      const favouritesRect = favouritesSection.getBoundingClientRect();
      
      const inHero = heroRect.top <= 0 && heroRect.bottom > 0;
      const inFavourites = favouritesRect.top <= 0 && favouritesRect.bottom > 0;
      
      if(inHero && e.deltaY > 0)
      {
        scrollToSection(1);
        e.preventDefault();
      }
      else if(inFavourites && e.deltaY < 0)
      {
        scrollToSection(0);
        e.preventDefault();
      }
    }

    const scrollToSection = (idx) => {
      isScrolling.current = true
      sectionRefs[idx].current.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        isScrolling.current = false
      }, 700)
    }

    const container = containerRef.current
    if(container)
    {
      container.addEventListener('wheel', handleWheel, { passive: false })
    }
    return () => {
      if(container)
      {
        container.removeEventListener('wheel', handleWheel)
      }
      sectionRefs.forEach((ref) => {
        if(ref.current)
        {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

  return (
    <div className="home-snap-container" ref={containerRef}>
      <section className="snap-section" ref={sectionRefs[0]}>
        <Hero />
      </section>
      <section className="snap-section" ref={sectionRefs[1]}>
        <Favouritefoods />
      </section>
      <section id="categories">
        <Categories />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default Home