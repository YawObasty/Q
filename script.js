const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

priceRange.addEventListener('input', (e) => {
    const maxPrice = e.target.value;
    priceValue.innerText = maxPrice; // Update the GH₵ display

    // Get all product cards
    const cards = document.querySelectorAll('main > div');

    cards.forEach(card => {
        // Find the price text (e.g., "GH₵ 400") and turn it into a number (400)
        const priceText = card.querySelector('.text-blue-600').innerText;
        const price = parseInt(priceText.replace('GH₵ ', ''));

        if (price <= maxPrice) {
            card.style.display = "block";
            card.style.opacity = "1";
        } else {
            card.style.display = "none";
        }
    });
});
const catButtons = document.querySelectorAll('.category-btn');

catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Reset all buttons to gray
        catButtons.forEach(b => {
            b.classList.add('text-gray-400');
            const iconBox = b.querySelector('div');
            iconBox.classList.remove('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/30');
            iconBox.classList.add('bg-gray-100', 'dark:bg-gray-800');
        });

        // Make clicked button Blue
        btn.classList.remove('text-gray-400');
        const activeBox = btn.querySelector('div');
        activeBox.classList.add('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/30');
        activeBox.classList.remove('bg-gray-100', 'dark:bg-gray-800');
    });
});
let cartCount = 0;
const cartBadge = document.getElementById('cartBadge');

// Select all "Order" or "Action" buttons
const actionButtons = document.querySelectorAll('.action-btn, button:contains("Order Now")');

actionButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        
        // Show the badge if it was hidden
        cartBadge.classList.remove('hidden');
        cartBadge.innerText = cartCount;

        // "Pop" animation to show something happened
        cartBadge.classList.add('scale-125');
        setTimeout(() => cartBadge.classList.remove('scale-125'), 200);
        
        alert("Item added to your selection!");
    });
});
const profileImg = document.querySelector('.group');
profileImg.addEventListener('click', () => {
    alert("Profile Settings Coming Soon!");
    // Later, you can toggle a 'hidden' div here for a Logout menu
});
const contactButtons = document.querySelectorAll('.whatsapp-btn');

contactButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Find the title of the card this button is inside
        const productTitle = btn.closest('.bg-gray-50').querySelector('h3').innerText;
        const myNumber = "233XXXXXXXXX";
        
        // Encode the text so the spaces don't break the link
        const message = encodeURIComponent(`Hello! I'm interested in: ${productTitle}. Is it still available?`);
        
        // Change the link dynamically
        btn.href = `https://wa.me/${myNumber}?text=${message}`;
    });
});
const wishlistBtns = document.querySelectorAll('.wishlist-btn');

wishlistBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Prevent the click from opening the product (if you add that later)
        e.stopPropagation();

        const icon = btn.querySelector('i');
        
        // Toggle Classes
        icon.classList.toggle('fas'); // Solid heart
        icon.classList.toggle('far'); // Outline heart
        icon.classList.toggle('text-red-500'); // Red color
        
        // Add a "Pulse" animation when clicked
        if (icon.classList.contains('fas')) {
            btn.classList.add('scale-125');
            setTimeout(() => btn.classList.remove('scale-125'), 200);
            console.log("Item saved to favorites!");
        }
    });
});
const sheet = document.getElementById('bottomSheet');
const overlay = document.getElementById('sheetOverlay');
const closeBtn = document.getElementById('closeSheet');

// Function to Open
function openSheet(title, desc) {
    document.getElementById('sheetTitle').innerText = title;
    document.getElementById('sheetDescription').innerText = desc;
    
    overlay.classList.remove('hidden');
    setTimeout(() => {
        overlay.classList.add('opacity-100');
        sheet.classList.remove('translate-y-full');
    }, 10);
}

// Function to Close
function hideSheet() {
    sheet.classList.add('translate-y-full');
    overlay.classList.remove('opacity-100');
    setTimeout(() => overlay.classList.add('hidden'), 500);
}

// Event Listeners
closeBtn.addEventListener('click', hideSheet);
overlay.addEventListener('click', hideSheet);

// Attach to your "View Details" buttons
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const title = btn.closest('.bg-gray-50').querySelector('h3').innerText;
        const desc = "This is a premium service provided by Obasty. Fast delivery within 24 hours in Winneba and Accra regions.";
        openSheet(title, desc);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const skeleton = document.getElementById('skeletonFeed');
    const realContent = document.getElementById('realFeed');

    // Wait 2 seconds, then swap the skeleton for the real products
    setTimeout(() => {
        skeleton.classList.add('hidden');
        realContent.classList.remove('hidden');
        // Optional: Add a fade-in animation
        realContent.classList.add('animate-in', 'fade-in', 'duration-500');
    }, 2000);
});
function handleSplashScreen() {
    const splash = document.getElementById('splashScreen');
    const enterAction = document.getElementById('enterAction');
    const btnEnter = document.getElementById('btnEnter');
    
    document.body.classList.add('splash-active');

    // 1. Show the button after the name finishes typing (around 1.5s)
    setTimeout(() => {
        enterAction.classList.remove('opacity-0', 'translate-y-4');
        enterAction.classList.add('opacity-100', 'translate-y-0');
    }, 1500);

    // 2. The "Manual Entry" Click
    btnEnter.addEventListener('click', () => {
        // Play a quick vibrate/shake on the button for feedback
        btnEnter.classList.add('vibrate-active');
        
        setTimeout(() => {
            // Fade out the splash screen
            splash.classList.add('splash-hide');
            
            // Cleanup: remove from screen after 0.8s animation
            setTimeout(() => {
                splash.style.display = 'none';
                document.body.classList.remove('splash-active');
            }, 800);
        }, 200);
    });
}
