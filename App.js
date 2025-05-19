class Producto {
    constructor(id, title , description, category , price, image , favorito = false) {
        this.id = id
        this.title = title
        this.description = description
        this.category = category
        this.price = price
        this.image = image
        this.favorito = favorito
    }
}

const productos =JSON.parse(localStorage.getItem("productos"))  || [] ;

const inicalizacion = () => {
    const data = [

  {
    id: 1,
    title: "Producto Genérico 1",
    description: "Esta es la descripción del producto genérico número 1.",
    category: "General",
    price: 25.99,
    image: "https://via.placeholder.com/150/FFC107/000000?Text=Producto+1",
    favorito: false
  },
  {
    id: 2,
    title: "Artículo Tecnológico A",
    description: "Descripción detallada del artículo tecnológico de alta calidad A.",
    category: "Tecnología",
    price: 120.50,
    image: "https://via.placeholder.com/150/2196F3/FFFFFF?Text=Tech+A",
    favorito: true
  },
  {
    id: 3,
    title: "Libro de Aventuras Épicas",
    description: "Una emocionante historia de aventuras que te mantendrá al borde del asiento.",
    category: "Libros",
    price: 19.75,
    image: "https://via.placeholder.com/150/4CAF50/FFFFFF?Text=Libro",
    favorito: false
  },
  {
    id: 4,
    title: "Prenda de Vestir Casual",
    description: "Cómoda prenda de vestir para uso diario.",
    category: "Ropa",
    price: 35.00,
    image: "https://via.placeholder.com/150/F44336/FFFFFF?Text=Ropa",
    favorito: true
  },
  {
    id: 5,
    title: "Accesorio para el Hogar Moderno",
    description: "Un elegante accesorio para complementar la decoración de tu hogar.",
    category: "Hogar",
    price: 45.20,
    image: "https://via.placeholder.com/150/9C27B0/FFFFFF?Text=Hogar",
    favorito: false
  }
];

}
data.foreach ((item) => {
    let prod = new Producto(
        item.id, 
        item.title, 
        item.description, 
        item.category, 
        item.price, 
        item.image, 
    );
    productos.push(prod);
});

localstorage.setItem("productos", JSON.stringify(data));


/*   <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card’s content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
 */


let contenedor =document.querySelector("#contenedor");

const listarProductos = () =>{
    productos.forEach ((item) =>{
        let columna = document.createElement("div");
        columna.classList ="col ";
        
        let tarjeta = `<div class="card" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`;

    columna.innerHTML = tarjeta;
    contenedor.appendChild(columna);
    });
}

listarProductos();