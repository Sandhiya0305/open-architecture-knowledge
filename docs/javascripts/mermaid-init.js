(() => {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mermaid@12.3.0/dist/mermaid.min.js";
  script.integrity =
    "sha384-HHW54r639fK42Ip0coGF3mz8oSiGn0eEoWNTLs75X7H63pLSDBa0Tqs0RwGmLlXE";
  script.crossOrigin = "anonymous";
  script.referrerPolicy = "no-referrer";
  script.onload = () => {
    if (!window.mermaid) return;
    window.mermaid.initialize({ startOnLoad: false, securityLevel: "strict" });
    const render = () => window.mermaid.run({ querySelector: ".mermaid" });
    if (window.document$ && typeof window.document$.subscribe === "function") {
      window.document$.subscribe(render);
    } else {
      render();
    }
  };
  document.head.appendChild(script);
})();
