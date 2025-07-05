// "use client";

// import gsap from "gsap";
// import { useEffect, useRef } from "react";

// export const CustomCursor = () => {
//   const cursorRef = useRef<HTMLDivElement>(null);
//   const cursorBorderRef = useRef<HTMLDivElement>(null);

//   const isMobile =
//     typeof window !== "undefined" &&
//     window.matchMedia("(max-width: 768px)").matches;

//   if (isMobile) {
//     return null;
//   }

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     const cursorBorder = cursorBorderRef.current;

//     gsap.set([cursor, cursorBorder], {
//       xPercent: -50,
//       yPercent: -50,
//     });

//     const xTo = gsap.quickTo(cursor, "x", {
//       duration: 0.2,
//       ease: "power3.out",
//     });

//     const yTo = gsap.quickTo(cursor, "y", {
//       duration: 0.2,
//       ease: "power3.out",
//     });

//     const xBorderTo = gsap.quickTo(cursorBorder, "x", {
//       duration: 0.5,
//       ease: "power.out",
//     });

//     const yBorderTo = gsap.quickTo(cursorBorder, "y", {
//       duration: 0.5,
//       ease: "power3.out",
//     });

//     const handleMouseMove = (event: MouseEvent) => {
//       if (cursor && cursorBorder) {
//         xTo(event.clientX);
//         yTo(event.clientY);
//         xBorderTo(event.clientX);
//         yBorderTo(event.clientY);
//       }
//     };

//     const handleMouseDown = () => {
//       gsap.to(cursorRef.current, {
//         scale: 0.7,
//         duration: 0.3,
//         ease: "back.out(1.7)",
//       });
//       gsap.to(cursorBorderRef.current, {
//         scale: 1.3,
//         duration: 0.3,
//         ease: "back.out(1.7)",
//       });
//     };

//     const handleMouseUp = () => {
//       gsap.to(cursorRef.current, {
//         scale: 1,
//         duration: 0.4,
//         ease: "elastic.out(1, 0.3)",
//       });
//       gsap.to(cursorBorderRef.current, {
//         scale: 1,
//         duration: 0.4,
//         ease: "elastic.out(1, 0.3)",
//       });
//     };

//     const handleMouseEnter = () => {
//       gsap.to(cursorRef.current, {
//         scale: 1.2,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//       gsap.to(cursorBorderRef.current, {
//         scale: 1.5,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(cursorRef.current, {
//         scale: 1,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//       gsap.to(cursorBorderRef.current, {
//         scale: 1,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     };

//     // Add hover effects for interactive elements
//     const interactiveElements = document.querySelectorAll(
//       'a, button, [role="button"], .cursor-pointer'
//     );

//     interactiveElements.forEach((element) => {
//       element.addEventListener("mouseenter", handleMouseEnter);
//       element.addEventListener("mouseleave", handleMouseLeave);
//     });

//     window.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mousedown", handleMouseDown);
//     document.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mousedown", handleMouseDown);
//       document.removeEventListener("mouseup", handleMouseUp);

//       // Clean up hover event listeners
//       const interactiveElements = document.querySelectorAll(
//         'a, button, [role="button"], .cursor-pointer'
//       );
//       interactiveElements.forEach((element) => {
//         element.removeEventListener("mouseenter", handleMouseEnter);
//         element.removeEventListener("mouseleave", handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <>
//       {/* Main Cursor Dot */}
//       <div
//         className="fixed top-0 left-0 w-[25px] h-[25px] bg-purple rounded-full pointer-events-none z-[999] mix-blend-difference"
//         ref={cursorRef}
//       ></div>

//       <div
//         className="fixed top-0 left-0 w-[60px] h-[60px] border-2 border-white/70 rounded-full pointer-events-none z-[998] mix-blend-difference opacity-50"
//         ref={cursorBorderRef}
//       ></div>
//     </>
//   );
// };
