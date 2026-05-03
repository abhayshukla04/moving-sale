const items = [
  {
    name: 'Wood Dining Table',
    price: '$120',
    description: 'Solid wood table with seating for 4-6 people.',
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Cozy Sofa',
    price: '$180',
    description: 'Comfortable 3-seat sofa in light grey fabric.',
    condition: 'Very good',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Standing Lamp',
    price: '$35',
    description: 'Modern lamp with adjustable arm and soft lighting.',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Kitchenware Set',
    price: '$45',
    description: 'Complete cookware set including pots, pans, and utensils.',
    condition: 'Like new',
    image: 'https://images.unsplash.com/photo-1494571924674-2a7c478b9aab?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Bookshelf',
    price: '$60',
    description: 'Spacious shelf for books, decor, and storage baskets.',
    condition: 'Great',
    image: 'https://images.unsplash.com/photo-1517511620798-cec17d428bc0?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Queen Mattress',
    price: '$140',
    description: 'Comfortable mattress in clean condition with minimal wear.',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
];

const itemsGrid = document.getElementById('itemsGrid');
const searchInput = document.getElementById('searchInput');

function renderItems(filteredItems) {
  itemsGrid.innerHTML = filteredItems.map(item => `
    <article class="item-card">
      <img src="${item.image}" alt="${item.name}" loading="lazy" />
      <div class="item-card-content">
        <h3 class="item-card-title">${item.name}</h3>
        <p class="item-card-description">${item.description}</p>
        <div class="item-card-footer">
          <span class="item-price">${item.price}</span>
          <span class="item-condition">${item.condition}</span>
        </div>
      </div>
    </article>
  `).join('');
}

function filterItems(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return items;
  }
  return items.filter(item => item.name.toLowerCase().includes(normalized) || item.description.toLowerCase().includes(normalized));
}

searchInput.addEventListener('input', () => {
  renderItems(filterItems(searchInput.value));
});

renderItems(items);
