document.addEventListener('DOMContentLoaded', () => {
    // Products with 3 photos per product
    const products = [
        {
            title: " New York Yankees '47 CLEAN UP Navy Adjustable Hat",
            category: "CLEAN UP",
            price: "350.000Gs.",
            sku: "B-CHCLV17HTH-BOS",
            img1: "vintage.jpg.webp",
            img2: "vintageback.jpg.webp",
            img3: "vintage.jpg.webp"
        },
        {
            title: " Boston Red Sox '47 CLEAN UP Navy Adjustable Hat",
            category: "CLEAN UP",
            price: "350.000Gs.",
            sku: "B-CHCLV17HTH-NY",
            img1: "bostonredsox.jpg.webp",
            img2: "bostonredsoxback.jpg.webp",
            img3: "bostonredsox.jpg.webp"
        },
        {
            title: "Los Angeles Dodgers '47 CLEAN UP Royal Adjustable Hat",
            category: "CLEAN UP",
            price: "350.000Gs.",
            sku: "B-CHCLV17HTH-LAD",
            img1: "lablue.jpg.webp",
            img2: "lablueback.jpg.webp",
            img3: "lablue.jpg.webp"
        },

        {
            title: "Houston Astros '47 CLEAN UP Navy Adjustable Hat",
            category: "CLEAN UP",
            price: "350.000Gs.",
            sku: "B-CHCLV17HTH-HOU",
            img1: "astrosnavy.jpg.webp",
            img2: "huostonastrosback.jpg.webp",
            img3: "astrosnavy.jpg.webp"
        },
        {
            title: " Pittsburgh Pirates '47 CLEAN UP Black Adjustable Hat",
            category: "CLEAN UP",
            price: "350.000Gs.",
            sku: "B-CHCLV17HTH-PIT",
            img1: "piratesoo.jpg.webp",
            img2: "piratesooback.jpg.webp",
            img3: "piratesoo.jpg.webp"
        },
        {
            title: "New York Yankees '47 CLEAN UP Bordo Adjustable Hat",
            category: "CLEAN UP",
            price: "350.000Gs.",
            sku: "B-CHCLV17HTH-NYY",
            img1: "bordo.jpg.webp",
            img2: "bordoback.jpg.webp",
            img3: "bordo.jpg.webp"
        },

        {
            title: "New York Yankees'47 CLEAN UP Beige Adjustable Hat",
            category: "CLEAN UP",
            price: "350.000Gs.",
            sku: "B-CHCLV17HTH-NYY-BEIGE",
            img1: "beige.jpg.webp",
            img2: "beigeback.jpg.webp",
            img3: "beige.jpg.webp"
        },
        {
            title: " New York Yankees'47 CLEAN UP Black Edition Adjustable Hat",
            category: "CLEAN UP",
            price: "350.000Gs.",
            sku: "B-CHCLV17HTH-NYY-BLACK",
            img1: "nynegro.jpg.webp",
            img2: "nynegroback.jpg.webp",
            img3: "nynegro.jpg.webp"
        },
        {
            title: "New York Yankees '47 CLEAN UP Olive Adjustable Hat",
            category: "CLEAN UP",
            price: "350.000Gs.",
            sku: "B-CHCLV17HTH-NYY-OLIVE",
            img1: "nyolive.jpg.webp",
            img2: "nyoliveback.jpg.webp",
            img3: "nyolive.jpg.webp"
        },

        {
            title: "New York Yankees'47 CLEAN UP Black and White Adjustable Hat",
            category: "CLEAN UP",
            price: "350.000Gs.",
            sku: "B-CHCLV17HTH-NYY-BLACK-WHITE",
            img1: "nywhite.jpg.webp",
            img2: "nywhiteback.jpg.webp",
            img3: "nywhite.jpg.webp"
        },
        {
            title: " New York Yankees'47 CLEAN UP Grey Edition Adjustable Hat",
            category: "CLEAN UP",
            price: "350.000Gs.",
            sku: "B-CHCLV17HTH-EDI-GREY",
            img1: "greyny.jpg.webp",
            img2: "greynyback.jpg",
            img3: "greyny.jpg.webp"
        },
        {
            title: "Usa Operation Hat Trick '47 CLEAN UP Green Camo Adjustable Hat",
            category: "CLEAN UP",
            price: "450.000Gs.",
            sku: "B-CHCLV17HTH-GREEN-CAMO",
            img1: "usacamooth.jpg.webp",
            img2: "usacamoback.jpg.webp",
            img3: "usacamoside.jpg.webp"
        },

        {
            title: "Usa Operation Hat Trick'47 CLEAN UP Blue Adjustable Hat",
            category: "CLEAN UP",
            price: "450.000Gs.",
            sku: "B-CHCLV17HTH-BLUE-CAMO",
            img1: "usabluecamo.jpg.webp",
            img2: "usabluecamoback.jpg.webp",
            img3: "usabluecamoside.jpg.webp"
        },
        {
            title: " New York Yankees Crosspatch Mesh'47 CLEAN UP Navy Adjustable Hat",
            category: "CLEAN UP",
            price: "350.000Gs.",
            sku: "B-CHCLV17HTH-CROSSPATCH-NY",
            img1: "CROOSPATCH.jpg.webp",
            img2: "CROOSPATCHBACK.jpg.webp",
            img3: "CROOSPATCH.jpg.webp"
        },
        {
            title: "Usa Operation Hat Trick '47 CLEAN UP Black and White Adjustable Hat",
            category: "CLEAN UP",
            price: "450.000Gs.",
            sku: "B-CHCLV17HTH-USA-GREY",
            img1: "usagreyandblack.jpg.webp",
            img2: "usagreyandblackback.jpg.webp",
            img3: "usagreyandblackside.jpg.webp"
        }
    ];

    const catalogGrid = document.getElementById('catalogGrid');

    // Dynamically render product list (Generates items cleanly)
    for (let i = 0; i < 15; i++) {
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