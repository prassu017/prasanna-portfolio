/**
 * Prasanna Jain Portfolio — Scroll animations & interactions
 * Squarespace-style reveal on scroll
 */

(function () {
  "use strict";

  // ----- Scroll-triggered animations -----
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -80px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  function initScrollAnimations() {
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  }

  // ----- Mobile nav toggle -----
  function initNav() {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");

    if (!toggle || !links) return;

    toggle.addEventListener("click", () => {
      toggle.classList.toggle("is-open");
      links.classList.toggle("is-open");
      document.body.style.overflow = links.classList.contains("is-open")
        ? "hidden"
        : "";
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.classList.remove("is-open");
        links.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });
  }

  // ----- Header background on scroll -----
  function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const onScroll = () => {
      if (window.scrollY > 40) {
        header.style.background = "rgba(10, 10, 10, 0.95)";
      } else {
        header.style.background = "rgba(10, 10, 10, 0.8)";
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ----- Footer year -----
  function initFooterYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  // ----- Respect reduced motion -----
  function initReducedMotion() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.body.classList.add("reduce-motion");
    }
  }

  // ----- Image cycling on hover for project galleries -----
  function initImageCycling() {
    document.querySelectorAll(".project-gallery.esg-gallery, .project-gallery.sage-gallery, .project-gallery.salary-gallery").forEach((gallery) => {
      const images = Array.from(gallery.querySelectorAll(".project-img-cycle"));
      if (images.length < 2) return;

      let cycleInterval = null;
      let currentIndex = 0;

      function showImage(index) {
        images.forEach((img, i) => {
          img.style.opacity = i === index ? "1" : "0";
          img.style.zIndex = i === index ? "2" : "1";
        });
      }

      function startCycling() {
        currentIndex = 0;
        showImage(currentIndex);
        cycleInterval = setInterval(() => {
          currentIndex = (currentIndex + 1) % images.length;
          showImage(currentIndex);
        }, 2000); // Change image every 2 seconds
      }

      function stopCycling() {
        if (cycleInterval) {
          clearInterval(cycleInterval);
          cycleInterval = null;
        }
        // Reset to first image
        showImage(0);
      }

      gallery.addEventListener("mouseenter", startCycling);
      gallery.addEventListener("mouseleave", stopCycling);
    });
  }

  // ----- Project image lightbox with horizontal scroll -----
  function initLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const backdrop = lightbox && lightbox.querySelector(".lightbox-backdrop");
    const closeBtn = lightbox && lightbox.querySelector(".lightbox-close");
    const prevBtn = lightbox && lightbox.querySelector(".lightbox-prev");
    const nextBtn = lightbox && lightbox.querySelector(".lightbox-next");

    if (!lightbox || !lightboxImg) return;

    let images = [];
    let currentIndex = 0;

    function showImage(index) {
      if (images.length === 0) return;
      currentIndex = (index + images.length) % images.length;
      lightboxImg.src = images[currentIndex].src;
      lightboxImg.alt = images[currentIndex].alt || "Project screenshot";
      if (prevBtn) prevBtn.style.visibility = images.length > 1 ? "visible" : "hidden";
      if (nextBtn) nextBtn.style.visibility = images.length > 1 ? "visible" : "hidden";
    }

    function openLightbox(imagesList, index) {
      images = imagesList;
      currentIndex = index == null ? 0 : index;
      showImage(currentIndex);
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    function goPrev() {
      showImage(currentIndex - 1);
    }

    function goNext() {
      showImage(currentIndex + 1);
    }

    document.querySelectorAll(".project-gallery").forEach((gallery) => {
      const imgs = Array.from(gallery.querySelectorAll(".project-img"));
      const imagesList = imgs.map((img) => ({ src: img.src, alt: img.alt || "" }));
      
      // Make the entire gallery clickable, not just individual images
      gallery.addEventListener("click", (e) => {
        e.preventDefault();
        // Find which image was clicked, or default to first
        const clickedImg = e.target.closest(".project-img");
        const clickedIndex = clickedImg ? imgs.indexOf(clickedImg) : 0;
        openLightbox(imagesList, clickedIndex >= 0 ? clickedIndex : 0);
      });
      
      // Also make individual images clickable
      imgs.forEach((img, index) => {
        img.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          openLightbox(imagesList, index);
        });
      });
    });

    if (backdrop) backdrop.addEventListener("click", closeLightbox);
    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); goPrev(); });
    if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); goNext(); });

    lightbox.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    });
  }

  // ----- Smooth scroll for anchor links -----
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      const href = anchor.getAttribute("href");
      if (href === "#") return;

      anchor.addEventListener("click", (e) => {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  // ----- Init on DOM ready -----
  function init() {
    initReducedMotion();
    initScrollAnimations();
    initNav();
    initHeaderScroll();
    initImageCycling();
    initLightbox();
    initFooterYear();
    initSmoothScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
