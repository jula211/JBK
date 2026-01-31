(function(){
  // highlight active page
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".menu a").forEach(a=>{
    const href = (a.getAttribute("href") || "").toLowerCase();
    if(href === path) a.classList.add("active");
  });

  // blob cursor
  const blob = document.querySelector(".blob");
  if(blob){
    let x = innerWidth/2, y = innerHeight/2;
    addEventListener("pointermove", (e)=>{
      x = e.clientX; y = e.clientY;
      blob.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    }, {passive:true});
  }

  // copy
  document.querySelectorAll("[data-copy]").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const val = btn.getAttribute("data-copy");
      try{
        await navigator.clipboard.writeText(val);
        const old = btn.textContent;
        btn.textContent = "Скопировано";
        setTimeout(()=>btn.textContent = old, 900);
      }catch(e){}
    });
  });

  // year
  const y = document.getElementById("y");
  if(y) y.textContent = new Date().getFullYear();
})();
