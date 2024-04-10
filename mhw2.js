function cambiaImmagine(event)
{
  const img_nuova = document.createElement('img');
  img_nuova.src = 'https://www.pianetahobby.it/img/category/57461/Slide_vanguard_image.jpg';
  
  const ContImg = document.querySelector('#ContImg');
  ContImg.innerHTML = '';
  ContImg.appendChild(img_nuova);
}

const immagine = document.querySelector('#ContImg img');
immagine.addEventListener('click', cambiaImmagine);


function paginaSeguente(event)
{
  const button = event.currentTarget;
  
  const prima_vetrina = document.querySelector('#Contenitore2');
  const seconda_vetrina = document.querySelector('#Cont2Nuovo');
  prima_vetrina.classList.add('hidden');
  seconda_vetrina.classList.remove('hidden');
}
const bottone = document.querySelector('#ContenitoreProdotti button');
bottone.addEventListener('click', paginaSeguente);


function paginaPrecedente(event)
{
  const button = event.currentTarget;
  
  const vetrina_attuale = document.querySelector('#Cont2Nuovo');
  const vetrina_succ = document.querySelector('#Contenitore2');
  vetrina_attuale.classList.add('hidden');
  vetrina_succ.classList.remove('hidden');
}
const bottone2 = document.querySelector('#ContProdotti2 button');
bottone2.addEventListener('click', paginaPrecedente);