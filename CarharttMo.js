document.addEventListener('DOMContentLoaded', () => {
    // Products with 3 photos per product
    const products = [
        {
            title: "Odesa Patch Cap Carhartt Pinch Front Dark Khaki Adjustable Hat",
            category: "Trucker Cap",
            price: "250.000Gs.",
            sku: "B-CHCLV17HTH-BOS",
            img1: "CARTTPRO04.jpg",
            img2: "CARTTPRO04.jpg",
            img3: "CARTTPRO04.jpg"
        },
        {
            title: "Odesa Patch Cap Carhartt Pinch Front Black Adjustable Hat",
            category: "Trucker Cap",
            price: "250.000Gs.",
            sku: "B-CHCLV17HTH-NY",
            img1: "CARTTPRO06.jpg",
            img2: "CARTTPRO06.jpg",
            img3: "CARTTPRO06.jpg"
        },
        {
            title: "Odesa Patch Cap Carhartt Pinch Front Grey Adjustable Hat",
            category: "Trucker Cap",
            price: "250.000Gs.",
            sku: "B-CHCLV17HTH-LAD",
            img1: "CARTTPRO05.jpg",
            img2: "CARTTPRO05.jpg",
            img3: "CARTTPRO05.jpg"
        },

         {
            title: "Odesa Patch Cap Carhartt Pinch Front Green Adjustable Hat",
            category: "Trucker Cap",
            price: "250.000Gs.",
            sku: "B-CHCLV17HTH-BOS",
            img1: "CARTTPRO07.png",
            img2: "CARTTPRO07.png",
            img3: "CARTTPRO07.png"
        },
        {
            title: "Carhartt Canvas Cap - Khaki",
            category: "Canvas Cap",
            price: "250.000Gs.",
            sku: "B-CHCLV17HTH-NY",
            img1: "CARTTPRO02.jpg",
            img2: "CARTTPRO02.jpg",
            img3: "CARTTPRO02.jpg",
        },
        {
            title: "Carhartt Canvas Cap - Green",
            category: "Canvas Cap",
            price: "250.000Gs.",
            sku: "B-CHCLV17HTH-LAD",
            img1: "CARTTPRO03.jpg",
            img2: "CARTTPRO03.jpg",
            img3: "CARTTPRO03.jpg"
        }
    ];

    const catalogGrid = document.getElementById('catalogGrid');

    // Dynamically render product list (Generates items cleanly)
    for (let i = 0; i < 6; i++) {
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