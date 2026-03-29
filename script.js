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
