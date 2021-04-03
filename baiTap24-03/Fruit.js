class Fruit {
    constructor(name, image, mass, price) {
        this.name =name;
        this.image = image;
        this.mass = mass;
        this.price;
    }

    display(){
        let str = `<tr>
                        <td>${this.name}</td>
                        <td><img src="${this.image}"></td>
                        <td>${this.mass}</td>
                        <td>${this.price}</td>
                   </tr>`
    }
}