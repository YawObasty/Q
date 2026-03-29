// 1. PRICE FILTER LOGIC
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

if (priceRange) {
    priceRange.addEventListener('input', (e) => {
        const maxPrice = parseInt(e.target.value);
        priceValue.innerText = maxPrice;

        // Select the actual product cards (adjust the selector to match your HTML)
        const cards = document.querySelectorAll('.bg-gray-50'); 

        cards.forEach(card => {
            const priceLabel = card.querySelector('.text-blue-600');
            if (priceLabel) {
                // Strip all non-numeric characters (GH₵, spaces, etc)
                const price = parseInt(priceLabel.innerText.replace(/\D/g, ''));
                
                if (price <= maxPrice) {
                    card.style.display = "block";
                    card.style.opacity = "1";
                } else {
                    card.style.display = "none";
                }
            }
        });
    });
}

// 2. CATEGORY BUTTON TOGGLE
const catButtons = document.querySelectorAll('.category-btn');
catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        catButtons.forEach(b => {
            b.classList.add('text-gray-400');
            const iconBox = b.querySelector('div');
            iconBox.classList.remove('bg-blue-600', 'text-white', 'shadow-lg');
            iconBox.classList.add('bg-gray-100', 'dark:bg-gray-800');
        });
        btn.classList.remove('text-gray-400');
        const activeBox = btn.querySelector('div');
        activeBox.classList.add('bg-blue-600', 'text-white', 'shadow-lg');
        activeBox.classList.remove('bg-gray-100', 'dark:bg-gray-800');
    });
});

// 3. CART LOGIC (Fixed the :contains error)
let cartCount = 0;
const cartBadge = document.getElementById('cartBadge');
const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
    // Only target buttons that mention "Order" or have the class 'action-btn'
    if (button.innerText.includes("Order") || button.classList.contains('action-btn')) {
        button.addEventListener('click', () => {
            cartCount++;
            cartBadge.classList.remove('hidden');
            cartBadge.innerText = cartCount;
            cartBadge.classList.add('scale-125');
            setTimeout(() => cartBadge.classList.remove('scale-125'), 200);
        });
    }
});

// 4. WHATSAPP DYNAMIC MESSAGE (Use your real number here)
const contactButtons = document.querySelectorAll('.whatsapp-btn');
contactButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const productTitle = btn.closest('.bg-gray-50').querySelector('h3').innerText;
        const myNumber = "233539547368"; 
        const message = encodeURIComponent(`Hello Obasty! I'm interested in: ${productTitle}. Is it available?`);
        btn.href = `https://wa.me/${myNumber}?text=${message}`;
    });
});

// 5. WISHLIST HEART TOGGLE
const wishlistBtns = document.querySelectorAll('.wishlist-btn');
wishlistBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const icon = btn.querySelector('i');
        icon.classList.toggle('fas');
        icon.classList.toggle('far');
        icon.classList.toggle('text-red-500');
        btn.classList.add('scale-125');
        setTimeout(() => btn.classList.remove('scale-125'), 200);
    });
});

// 6. BOTTOM SHEET CONTROLS
const sheet = document.getElementById('bottomSheet');
const overlay = document.getElementById('sheetOverlay');

function openSheet(title, desc) {
    document.getElementById('sheetTitle').innerText = title;
    document.getElementById('sheetDescription').innerText = desc;
    overlay.classList.remove('hidden');
    setTimeout(() => {
        overlay.classList.add('opacity-100');
        sheet.classList.remove('translate-y-full');
    }, 10);
}

function hideSheet() {
    sheet.classList.add('translate-y-full');
    overlay.classList.remove('opacity-100');
    setTimeout(() => overlay.classList.add('hidden'), 500);
}

// 7. SKELETON LOADER
window.addEventListener('DOMContentLoaded', () => {
    const skeleton = document.getElementById('skeletonFeed');
    const realContent = document.getElementById('realFeed');
    setTimeout(() => {
        if(skeleton) skeleton.classList.add('hidden');
        if(realContent) realContent.classList.remove('hidden');
    }, 2000);
});
