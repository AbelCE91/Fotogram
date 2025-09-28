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
    "Caribean",
    "Mountain",
    "Maya",
    "Snow landscape",
    "Sunset",
    "San blas",
    "Umbrella"
]

let dialogRef = document.getElementById("myDialog");

if (!document.getElementById("myDialog")) {
  const dialogHTML = myDialogHTML()

  document.body.insertAdjacentHTML("beforeend", dialogHTML);
  dialogRef = document.getElementById("myDialog");

  dialogRef.addEventListener("click", (event) => {
    if (event.target === dialogRef) {
      closeDialog();
    }
  });
}

function myDialogHTML() {
  return `
    <dialog class="dialog" id="myDialog">
      <header>
        <img class="delete-img" onclick="closeDialog()" src="./img/delete.png" alt="Cerrar diálogo" />
      </header>
      <section>
        <h2 class="img-name" id="imgName"></h2>
        <img class="bigImage" id="fulimg" src="" alt="Imagen ampliada" />
        <p class="counter" id="imgCounter"></p>
      </section>
      <footer class="button-container">
        <img class="buttons" onclick="backImge()" src="./img/izquierda.png" alt="Anterior" />
        <img class="buttons" onclick="nextImage()" src="./img/derecha.png" alt="Siguiente" />
      </footer>
    </dialog>
    <div id="overlay" class="overlay"></div>
  `;   
}

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
  document.body.classList.add("no-scroll");
}

/*close dialog*/
function closeDialog(){
  document.getElementById("imgName").textContent = imageName[actualIndex];
  document.getElementById("overlay").style.display = "none";
  document.body.classList.remove("no-scroll");
  dialogRef.close()
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



