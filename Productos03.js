document.addEventListener('DOMContentLoaded', () => {
    const PHONE_NUMBER = "15551234567"; // Set your WhatsApp Phone Number

    // Extract parameters passed from index.html
    const params = new URLSearchParams(window.location.search);
    const title = params.get('title') || "MLB Hat '47 Clean Up";
    const price = params.get('price') || "€58,00";
    const sku = params.get('sku') || "B-CHCLV17HTH";
    const img1 = params.get('img1') || "images/hat-ny-front.png";
    const img2 = params.get('img2') || "images/hat-ny-side.png";

    // Populate Product Page Elements
    document.getElementById('pdpTitle').textContent = title;
    document.getElementById('pdpPrice').textContent = price;
    document.getElementById('pdpSku').textContent = `SKU: ${sku}`;
    
    const fallback = 'https://via.placeholder.com/600x600/f4f4f2/111111?text=%2747+Hat';
    const elImg1 = document.getElementById('img1');
    const elImg2 = document.getElementById('img2');
    
    elImg1.src = img1;
    elImg1.onerror = () => elImg1.src = fallback;
    elImg2.src = img2;
    elImg2.onerror = () => elImg2.src = fallback;

    // Generate Dynamic WhatsApp Link
    const whatsappBtn = document.getElementById('whatsappBtn');
    const message = `Hello! I would like to order this hat:\n\n*Product:* ${title}\n*Price:* ${price}\n*SKU:* ${sku}`;
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const baseUrl = isMobile ? 'https://api.whatsapp.com/send' : 'https://web.whatsapp.com/send';
    whatsappBtn.href = `${baseUrl}?phone=${PHONE_NUMBER}&text=${encodeURIComponent(message)}`;

    // Gallery Dots Swipe Sync
    const track = document.getElementById('galleryTrack');
    const dots = document.querySelectorAll('.dot');
    track.addEventListener('scroll', () => {
        const index = Math.round(track.scrollLeft / track.clientWidth);
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
    });

    // Accordion Toggle
    const accBtn = document.getElementById('accBtn');
    const accContent = document.getElementById('accContent');
    const accIcon = document.getElementById('accIcon');
    accBtn.addEventListener('click', () => {
        const isHidden = accContent.style.display === 'none' || !accContent.style.display;
        accContent.style.display = isHidden ? 'block' : 'none';
        accIcon.textContent = isHidden ? '−' : '+';
    });
});