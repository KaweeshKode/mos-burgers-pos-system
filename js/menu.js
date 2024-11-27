import { allFoodItems } from '/db/database.js';

const menuContainer = document.querySelector(".menu-container");

allFoodItems.forEach(category => {
    // Create a category section
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "menu-category";

    // Add category name
    const categoryName = document.createElement("h1");
    categoryName.className = "category-name";
    categoryName.textContent = category.name;
    categoryDiv.appendChild(categoryName);

    // Create items container
    const itemsContainer = document.createElement("div");
    itemsContainer.className = "category-items";

    // Add items as cards
    category.details.forEach(item => {
        const itemCard = document.createElement("div");
        itemCard.className = "card";

        // Item image
        const itemImage = document.createElement("img");
        itemImage.className = "card-img-top";
        itemImage.src = item.img;
        itemImage.alt = item.name;

        // Card body
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const itemName = document.createElement("h5");
        itemName.className = "card-title";
        itemName.textContent = item.name;

        const itemPrice = document.createElement("p");
        itemPrice.className = "card-text";
        itemPrice.textContent = `Price: Rs. ${item.price.toFixed(2)}`;

        // Append name and price to card body
        cardBody.appendChild(itemName);
        cardBody.appendChild(itemPrice);

        // Append image and body to the card
        itemCard.appendChild(itemImage);
        itemCard.appendChild(cardBody);

        // Append the card to items container
        itemsContainer.appendChild(itemCard);
    });

    // Append items container to category div
    categoryDiv.appendChild(itemsContainer);

    // Append category div to menu container
    menuContainer.appendChild(categoryDiv);
});
