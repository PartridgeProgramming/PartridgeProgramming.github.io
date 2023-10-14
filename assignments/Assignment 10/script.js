class Toy {
    constructor(name, price, ageRange, rating, pic) {
        this.name = name;
        this.price = price;
        this.ageRange = ageRange;
        this.rating = rating;
        this.pic = pic;
    }

    get item() {
        const div = document.createElement("div");
        div.classList.add("Toy");

        // Create an image
        const image = this.picture(this.pic);

        // Create a tooltip element
        const tooltip = this.createTooltip();

        // Add the image and tooltip to the container
        div.appendChild(image);
        div.appendChild(tooltip);

        // Add a mouseover event to show/hide the tooltip
        image.addEventListener("mouseover", () => {
            tooltip.style.display = "block";
            image.style.opacity = .3;
        });

        image.addEventListener("mouseout", (event) => {
            if (!div.contains(event.relatedTarget)) {
                 tooltip.style.display = "none";
                 image.style.opacity = 1;
            }            
        });

        return div;
    }

    picture(info) {
        const pic = document.createElement("img");
        pic.src = "images/" + info;
        return pic;
    }

    createTooltip() {
        const tooltip = document.createElement("span");
        tooltip.classList.add("tooltip");
        tooltip.style.display = "none"; // Hide by default

        // Create the tooltip content
        tooltip.innerHTML = `
            <h1>${this.name}</h1>
            <p><b>Price:</b> $${this.price}</p>
            <p><b>Age Range:</b> ${this.ageRange}</p>
            <p><b>Rating:</b> ${this.rating}</p>
        `;

        return tooltip;
    }
}

const showToys = () => {
    const toyList = document.getElementById("toys-block");
    const toys = [];
    toys.push(new Toy("Beatbo", 10.99, "4-6", "5 stars", "Beatbo-Toy.gif"));
    toys.push(new Toy("Block Bus", 5.99, "2-3", "4 stars", "Block-Bus-Toy.gif"));
    toys.push(new Toy("Dinosaur Toy", 9.99, "2-4", "4 stars", "Dinosaur-Toy.gif"));
    toys.push(new Toy("Kitchen Toy", 39.99, "4-7", "3 stars", "Kitchen-Toy.gif"));
    toys.push(new Toy("Remote Car", 29.99, "3-7", "4 stars", "Remote-Car-Toy.gif"));
    toys.push(new Toy("Rocking Motorcycle", 49.99, "3-7", "5 stars", "Rocking-Motorcycle-Toy.gif"));

    toys.forEach(toy => {
        toyList.append(toy.item);
    });
}
window.onload = () => {
    showToys();
};