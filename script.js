
const pictures = [
  "img/bogota.jpg",
  "img/caribe.jpg",
  "img/montana.jpg",
  "img/maya.jpg",
  "img/paisaje-nieve.jpg",
  "img/paisaje-tarde.jpg",
  "img/san blas.jpg",
  "img/sombrillas.jpg"
  ]

  const imageName = [
    "Bogota",
    "Caribe",
    "Montana",
    "Maya",
    "Paisaje nieve",
    "Paisaje tarde",
    "San blas",
    "Sombrillas"
  ]
const dialogRef = document.getElementById("myDialog");
const contadorIMG = pictures.length;
let actualIndex = 0;
           
/*open dialog*/
function opendialog(index) {
  actualIndex = index;
  document.getElementById("fulimg").src = pictures[actualIndex];
  document.getElementById("overlay").style.display = "block";
  document.getElementById("imgName").textContent = imageName[actualIndex];
  document.getElementById("imgCounter").textContent = `${actualIndex + 1} / ${pictures.length}`;
  document.getElementById("myDialog").showModal();
}
/*close dialog*/
 function closeDialog(){
 dialogRef.close()
 document.getElementById("imgName").textContent = imageName[actualIndex];
 document.getElementById("overlay").style.display = "none";
  }
/*Next image*/
 function nextImage() {
  actualIndex  = (actualIndex + 1) % pictures.length;
  document.getElementById("imgName").textContent = imageName[actualIndex];
  document.getElementById("fulimg").src = pictures[actualIndex];
  document.getElementById("imgCounter").textContent = `${actualIndex + 1} / ${pictures.length}`;

}
/*back image*/
function backImge() {
  actualIndex = (actualIndex - 1 + pictures.length) % pictures.length;
  document.getElementById("fulimg").src = pictures[actualIndex];
   document.getElementById("imgName").textContent = imageName[actualIndex];
   document.getElementById("imgCounter").textContent = `${actualIndex + 1} / ${pictures.length}`;
}

/*close without X*/
const dialog = document.getElementById("myDialog");
 // Si el clic fue directamente sobre el fondo del diálogo (no sobre contenido)
dialog.addEventListener("click", (event) => {
  
  if (event.target === dialog) {
    closeDialog();
  }
});
