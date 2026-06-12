const app = document.getElementById("app")
const url = "https://picsum.photos/id/"
const size = "/200/200"

const Picture = parametro => {
    const src = url+parametro+size
    return `
        <figure>
            <img src="${src}" alt="" >
            <figcaption></figcaption>
        </figure>
    `
}

console.log(Picture(1))
app.innerHTML = Picture(99)

for (let index = 0; index < 10; index++) {
    app.innerHTML += Picture(index)
    
}

function deformar(e) {
    console.log(e)
    console.log("hola: " + e.target)
    e.target.classList.toggle("redonda")

}

function deformar2(e) {
    classList.toogle("redonda")

}

let imagenes = document.getElementsByTagName("img")

for(const key in imagenes){
    const imagen = imagenes[key];
    imagen.addEventListener("click", deformar)
}