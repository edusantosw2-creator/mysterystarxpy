document.addEventListener('DOMContentLoaded', () => {
    // Products with 3 photos per product
    const products = [
        {
            title: "Richardson 112P  Trucker Hat Snapback Cap - Camo",
            category: "Trucker Cap",
            price: "230.000Gs.",
            sku: "B-CHCLV17HTH-BOS",
            img1: "RICHARDSONCAP01 copy.jpg",
            img2: "RICHARDSONCAP01 copy.jpg",
            img3: "RICHARDSONCAP01 copy.jpg"
        },
        {
            title: "Richardson 112P  Trucker Hat Snapback Cap - Kakhy Camo",
            category: "Trucker Cap",
            price: "230.000Gs.",
            sku: "B-CHCLV17HTH-NY",
            img1: "RICHARDSONCAP02 copy.jpg",
            img2: "RICHARDSONCAP02 copy.jpg",
            img3: "RICHARDSONCAP02 copy.jpg"
        },
        {
            title: "Richardson 112P  Trucker Hat Snapback Cap - Dark Camo",
            category: "Trucker Cap",
            price: "230.000Gs.",
            sku: "B-CHCLV17HTH-LAD",
            img1: "RICHARDSONCAP03 copy.jpg",
            img2: "RICHARDSONCAP03 copy.jpg",
            img3: "RICHARDSONCAP03 copy.jpg"
        },

         {
            title: "Richardson 112P  Trucker Hat Snapback Cap - Olive Camo",
            category: "Trucker Cap",
            price: "230.000Gs.",
            sku: "B-CHCLV17HTH-LAD",
            img1: "RICHARDSONCAP04.jpg",
            img2: "RICHARDSONCAP04.jpg",
            img3: "RICHARDSONCAP04.jpg"
        }
    ];

    const catalogGrid = document.getElementById('catalogGrid');

    // Dynamically render product list (Generates items cleanly)
    for (let i = 0; i < 4; i++) {
        const item = products[i % products.length];
        const card = document.createElement('a');
        card.className = 'product-card';
        
        // Pass item details and all 3 images via URL Parameters
        card.href = `product.html?title=${encodeURIComponent(item.title)}&price=${encodeURIComponent(item.price)}&sku=${encodeURIComponent(item.sku)}&img1=${encodeURIComponent(item.img1)}&img2=${encodeURIComponent(item.img2)}&img3=${encodeURIComponent(item.img3)}`;

        const fallback = 'https://via.placeholder.com/500x500/f4f4f2/111111?text=%2747+Hat';

        card.innerHTML = `
            <div class="card-image-box">
                <img src="${item.img1}" alt="${item.title}" onerror="this.src='${fallback}'">
            </div>
            <div class="card-details">
                <span class="category-tag">${item.category}</span>
                <h3 class="product-title">${item.title}</h3>
                <span class="product-price">${item.price}</span>
            </div>
        `;
        catalogGrid.appendChild(card);
    }
});