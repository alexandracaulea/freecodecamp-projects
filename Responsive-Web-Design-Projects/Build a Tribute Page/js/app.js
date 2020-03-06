const lazyImages = document.querySelectorAll("[data-lazy]");

function obCallback(entries) {
  entries.forEach(function(entry) {
    if (!entry.isIntersecting) return;
    const img = entry.target;
    const src = img.getAttribute("data-lazy");
    if (!src) return;
    img.src = src;
    img.classList.add("fade-in");
    observer.unobserve(img);
  });
}

const observer = new IntersectionObserver(obCallback, { threshold: 0 });

lazyImages.forEach(lazyImg => observer.observe(lazyImg));
