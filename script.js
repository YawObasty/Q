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
        // 1. Remove active styles from ALL buttons
        catButtons.forEach(b => {
            b.classList.remove('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/30');
            b.classList.add('bg-gray-100', 'dark:bg-gray-800', 'dark:text-gray-300');
        });

        // 2. Add active styles to the CLICKED button
        btn.classList.add('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/30');
        btn.classList.remove('bg-gray-100', 'dark:bg-gray-800', 'dark:text-gray-300');
        
        // 3. Optional: Filter products by category here
        filterByCategory(btn.innerText);
    });
});
