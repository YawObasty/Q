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
