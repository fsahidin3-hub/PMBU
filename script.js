
// script.js - kontrol audio & smooth scroll sederhana
document.addEventListener('DOMContentLoaded', function(){
  const audio = document.getElementById('bg-audio');
  const btn = document.getElementById('audio-toggle');

  // Karena browser sering nge-block autoplay, tombol play untuk start audio
  let playing = false;
  btn.addEventListener('click', function(){
    if(!playing){
      audio.play().catch(()=>{
        // autoplay blocked
      });
      btn.textContent = 'Pause Shalawat';
      playing = true;
    } else {
      audio.pause();
      btn.textContent = 'Play Shalawat';
      playing = false;
    }
  });

  // Jika browser mengizinkan autoplay tanpa interaksi, update tombol
  audio.addEventListener('play', ()=>{ btn.textContent = 'Pause Shalawat'; playing=true; });
  audio.addEventListener('pause', ()=>{ btn.textContent = 'Play Shalawat'; playing=false; });

  // Smooth scroll behavior handled by CSS scroll-behavior but ensure older browsers
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });
});
