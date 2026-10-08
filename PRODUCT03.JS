document.addEventListener('DOMContentLoaded', () => {
    // 1. Put your business WhatsApp phone number here (include country code, no '+')
    const PHONE_NUMBER = "=+595994885917";

    // 2. Read URL parameters passed directly from index.html
    const params = new URLSearchParams(window.location.search);
    const title = params.get('title') || "MLB Hat '47 Clean Up";
    const price = params.get('price') || "€58,00";
    const sku = params.get('sku') || "B-CHCLV17HTH";
    const img1 = params.get('img1') || "images/hat-ny-1.png";
    const img2 = params.get('img2') || "images/hat-ny-2.png";
    const img3 = params.get('img3') || "images/hat-ny-3.png";

    // 3. Populate product details
    document.getElementById('pdpTitle').textContent = title;
    document.getElementById('pdpPrice').textContent = price;
    document.getElementById('pdpSku').textContent = `SKU: ${sku}`;

    // 4. Render the 3 photos into the gallery
    const fallback = 'https://via.placeholder.com/600x600/f4f4f2/111111?text=%2747+Hat';
    
    const setImg = (id, src) => {
        const el = document.getElementById(id);
        if (el) {
            el.src = src;
            el.onerror = () => el.src = fallback;
        }
    };

    setImg('img1', img1);
    setImg('img2', img2);
    setImg('img3', img3);

    // 5. Build dynamic WhatsApp URL containing product info for the store owner
    const whatsappBtn = document.getElementById('whatsappBtn');
    if (whatsappBtn) {
        const text = `¡Hola! Me gustaría comprar esta gorra:\n\n🧢 *Product:* ${title}\n💰 *Price:* ${price}\n🏷️ *SKU:* ${sku}`;
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        const baseUrl = isMobile ? 'https://api.whatsapp.com/send' : 'https://web.whatsapp.com/send';

        whatsappBtn.href = `${baseUrl}?phone=${PHONE_NUMBER}&text=${encodeURIComponent(text)}`;
    }

    // Gallery Dots Sync
    const track = document.getElementById('galleryTrack');
    const dots = document.querySelectorAll('.dot');
    if (track) {
        track.addEventListener('scroll', () => {
            const index = Math.round(track.scrollLeft / track.clientWidth);
            dots.forEach((d, i) => d.classList.toggle('active', i === index));
        });
    }

    // Accordion Toggle
    const accBtn = document.getElementById('accBtn');
    const accContent = document.getElementById('accContent');
    const accIcon = document.getElementById('accIcon');
    if (accBtn && accContent) {
        accBtn.addEventListener('click', () => {
            const isHidden = accContent.style.display === 'none' || !accContent.style.display;
            accContent.style.display = isHidden ? 'block' : 'none';
            if (accIcon) accIcon.textContent = isHidden ? '−' : '+';
        });
    }
});