import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import '.././index.css'


const ScrollSection = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    

    gsap.registerPlugin(ScrollTrigger);
    
    useEffect(() => {
        const pin = gsap.fromTo(sectionRef.current, {
            translateX: '210vw',
        }, {
            translateX: '-210vw',
            ease: 'easInOut',
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end:"2000 top",
                scrub: 0.6,
                pin: true
            }
        })

        const mask = document.querySelector(".mask");

        gsap.to(mask, {
            width: "100%",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top left",
                scrub: 0.6
            }
        });

        return () => pin.kill();
    }, []);

  return (
      <section ref={triggerRef} className='scroll-section-outer'>
          
          <svg viewBox="0 0 900 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9"></path>
              <mask id="mask0_0_1" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="900" height="10">
                    <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9"></path>
                    </mask>
                    <g mask="url(#mask0_0_1)">
                  <rect class="mask" y="-49" height="99" fill="black" style={{ "width": " 0%" }}></rect>
                    </g>
                </svg>
          <div>
              <div ref={sectionRef} className="scroll-section-inner">
                  <div className='scroll-section'>
                      <h3>Section 1</h3>
                  </div>
                  <div className='scroll-section'>
                      <h3>Section 2</h3>
                  </div>
                  <div className='scroll-section'>
                      <h3>Section 3</h3>
                  </div>
                  <div className='scroll-section'>
                      <h3>Section 4</h3>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default ScrollSection