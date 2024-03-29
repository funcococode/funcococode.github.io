

document.addEventListener('DOMContentLoaded', function() {
  let locationName = location.pathname.toString().split('/')[1].split('.')[0];
  if (locationName == "index" || !locationName) {locationName = "home"};
  document.getElementById('preloader_text').innerHTML = `Turning your browser towards <b class="font-black">${locationName}</b> page...`;
  setTimeout(function(){
    document.getElementById('preloader').classList.add('hide');
    document.body.classList.remove('preloaderActive')
  }, 1000);
 
})

  if(window.location.pathname == '/contact.html') {
    loadMap();
  }


const copyElements = document.querySelectorAll('.copy_able');

copyElements.forEach(element => element.addEventListener('click',function(e){
    const copyText = e.target.parentElement.children[1].innerText;
    const tagName = e.target.parentElement.tagName;
    if(tagName == 'A'){
      return;
    }
    navigator.clipboard.writeText(copyText).then(function() {
        e.target.innerHTML = '<i class="fa-solid fa-check-double col-span-1"></i> Copied!';
        e.target.classList.add('bg-green-500')
        setTimeout(()=>{
            e.target.innerHTML = '<i class="fa-solid fa-clone col-span-1"></i> Click to Copy!';
            e.target.classList.remove('bg-green-500')
        },1000)
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
}));



// AIzaSyAJNAD0UlLmeqMdaB72v1hZm6wgKAmidNA


function loadMap(){
  // position we will use later
  var lat = 22.718251479538928;
  var lon = 75.88473309787932;
  // initialize map
  map = L?.map('mapDiv').setView([lat, lon], 18);
  // set map tiles source
  L?.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
  }).addTo(map);
  // add marker to the map
  marker = L.marker([lat, lon]).addTo(map);
  // add popup to the marker
  marker.bindPopup("<b>Studio HR</b><br />Indore").openPopup()
}

const menuOpenBtn = document.querySelector('#mobileMenuOpenBtn');
const menuCloseBtn = document.querySelector('#mobileMenuCloseBtn');
const menu = document.querySelector('#mobileMenu');
menuOpenBtn.addEventListener('click',()=>{
    menu.classList.remove('-translate-y-full','opacity-0');
    document.body.style.overflow = 'hidden';
});

menuCloseBtn.addEventListener('click',()=>{
    menu.classList.add('-translate-y-full','opacity-0');
    document.body.style.overflow = 'scroll';
});