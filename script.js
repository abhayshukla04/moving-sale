const items = [
  {
    name: 'Air conditioner',
    price: '$80',
    description: 'Efficient air conditioner in good working condition. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Good',
    images: ['img/Window Air Conditioner.avif', 'img/Window Air Conditioner-2.avif'],
  },
  {
    name: 'IKEA hybrid mattress',
    price: '$300',
    description: 'HAUGSVÄR IKEA hybrid mattress. Click for <a href="https://www.ikea.com/ca/en/p/anneland-hybrid-mattress-firm-white-20511910/" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/hybrid-mattress.avif'],
  },
  {
    name: 'Mattress: DUROFLEX',
    price: '$120',
    description: 'Durable DUROFLEX mattress. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Very good',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'IKEA King Bed Frame',
    price: '$150',
    description: 'IKEA Sagstua King Bed Frame, Black. Click for <a href="https://www.ikea.com/ca/en/p/stjaernoe-bed-frame-anthracite-50570192/#content" target="_blank">New product info</a>',
    condition: 'Good',
    images: ['img/ikea-metal-bed.webp','img/ikea-metal-bed-1.webp', 'img/ikea-metal-bed-2.webp'],
  },
  {
    name: 'Portable tea table (2)',
    price: '$50',
    description: 'Two portable tea tables. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Like new',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Study Table for boy',
    price: '$80',
    description: 'Study table suitable for a boy. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Pink wooden study table',
    price: '$80',
    description: 'Pink wooden study table suitable. Click for <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Blue study chair',
    price: '$10',
    description: 'Blue study chair. Click for <a href="https://www.ikea.com/ca/en/p/mammut-childrens-chair-indoor-outdoor-light-blue-30581988/#content" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/Blue-Chair.avif'],
  },
  {
    name: 'Pink study chair',
    price: '$10',
    description: 'Pink study chair. Click for <a href="https://www.ikea.com/ca/en/p/mammut-childrens-chair-indoor-outdoor-light-blue-30581988/#content" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/Chair-Pink.jpg'],
  },
  {
    name: 'Wardrobe',
    price: '$250',
    description: 'Spacious wardrobe. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Very good',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Wardrobe',
    price: '$250',
    description: 'Another spacious wardrobe. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Very good',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Bike: age 9-10',
    price: '$100',
    description: 'Bike suitable for ages 9-10. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Good',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Bike: age 4-5',
    price: '$80',
    description: 'Bike suitable for ages 4-5. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Samsung TV 55 inch',
    price: '$400',
    description: '55-inch Samsung TV. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Like new',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Duroflex-Single Seater Recliner Sofa',
    price: '$100',
    description: 'Duroflex Avalon - Single Seater Premium Fabric Recliner Sofa. Click for <a href="https://www.amazon.in/dp/B09CH31YJ3?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/Recliner-Sofa.jpg'],
  },
  {
    name: 'Floor uplighter',
    price: '$7',
    description: 'IKEA Floor uplighter, black/white. Click for<a href="https://www.ikea.com/ca/en/p/tagarp-floor-uplighter-black-white-60464049/" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/tagarp-floor-uplighter.avif'],
  },
  {
    name: 'IRON Stand',
    price: '$20',
    description: 'Stand for iron. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'IRON',
    price: '$25',
    description: 'Iron for clothes. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Good',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Christmas tree',
    price: '$50',
    description: 'Christmas tree decoration. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Like new',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Sofa 3 seater',
    price: '$300',
    description: '3-seater sofa. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Very good',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'IKEA Steel rack',
    price: '$100',
    description: 'Steel rack from IKEA. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'TV rack with storage',
    price: '$120',
    description: 'TV rack with storage space. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Good',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'IKEA TABLE (count 2)',
    price: '$150',
    description: 'Two IKEA tables. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Very good',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Office table (1)',
    price: '$100',
    description: 'Office table. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Blanket: king size (2)',
    price: '$40',
    description: 'Two king-size blankets. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Like new',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Mixer Preethi with juicer',
    price: '$80',
    description: 'Preethi mixer with juicer. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Good',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Air fryer with Oven',
    price: '$150',
    description: 'Air fryer with oven function. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Cashroll: Milton',
    price: '$10',
    description: 'Milton cashroll. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'New',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Superhero toys',
    price: '$20',
    description: 'Collection of superhero toys. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Good',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Soft toys for kids',
    price: '$15',
    description: 'Soft toys for children. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Like new',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Steel Plate',
    price: '$5',
    description: 'Steel plate. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'New',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Steel Glass',
    price: '$3',
    description: 'Steel glass. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'New',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'King size bed protector',
    price: '$30',
    description: 'King-size bed protector. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Like new',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Dining chair (4)',
    price: '$100',
    description: 'Four dining chairs. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Good',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Robot vacuum cleaner',
    price: '$200',
    description: 'Robot vacuum cleaner. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Humidifier',
    price: '$50',
    description: 'Humidifier for home. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Good',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Water filter',
    price: '$40',
    description: 'Water filter system. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Very good',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Steamer',
    price: '$25',
    description: 'Clothes steamer. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Like new',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Bedsheet king size',
    price: '$20',
    description: 'King-size bedsheet. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'New',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Kitchen Utensils made out of steel',
    price: '$30',
    description: 'Set of steel kitchen utensils. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Good',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Weight machine',
    price: '$100',
    description: 'Weight machine for exercise. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const itemsGrid = document.getElementById('itemsGrid');
  const searchInput = document.getElementById('searchInput');
  const modal = document.getElementById('itemModal');
  const modalImage = document.getElementById('modalImage');
  const modalDetails = document.getElementById('modalDetails');
  const closeBtn = document.querySelector('.close');
  const prevImageBtn = document.getElementById('prevImage');
  const nextImageBtn = document.getElementById('nextImage');

  let currentItem = null;
  let currentImageIndex = 0;

  function openModal(item) {
    currentItem = item;
    currentImageIndex = 0;
    updateModalImage();
    modalDetails.innerHTML = `
      <h2>${item.name}</h2>
      <p>${item.description}</p>
      <div class="modal-footer">
        <span class="modal-price">${item.price}</span>
        <span class="modal-condition">${item.condition}</span>
      </div>
    `;
    modal.style.display = 'block';
    updateArrowVisibility();
  }

  function updateModalImage() {
    if (currentItem && currentItem.images.length > 0) {
      modalImage.src = currentItem.images[currentImageIndex];
      modalImage.alt = currentItem.name;
    }
  }

  function updateArrowVisibility() {
    if (currentItem) {
      prevImageBtn.style.display = currentItem.images.length > 1 ? 'flex' : 'none';
      nextImageBtn.style.display = currentItem.images.length > 1 ? 'flex' : 'none';
    }
  }

  function closeModal() {
    modal.style.display = 'none';
    currentItem = null;
    currentImageIndex = 0;
  }

  function nextImage() {
    if (currentItem && currentImageIndex < currentItem.images.length - 1) {
      currentImageIndex++;
      updateModalImage();
    }
  }

  function prevImage() {
    if (currentItem && currentImageIndex > 0) {
      currentImageIndex--;
      updateModalImage();
    }
  }

  closeBtn.addEventListener('click', closeModal);

  prevImageBtn.addEventListener('click', prevImage);
  nextImageBtn.addEventListener('click', nextImage);

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  function renderItems(filteredItems) {
    itemsGrid.innerHTML = filteredItems.map((item, index) => `
      <article class="item-card" data-index="${index}">
        <div class="item-images">
          ${item.images.length > 0 ? `<img src="${item.images[0]}" alt="${item.name}" loading="lazy" />` : ''}
        </div>
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
    // Add click event listeners
    document.querySelectorAll('.item-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const index = parseInt(card.dataset.index);
        openModal(filteredItems[index]);
      });
    });
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
});
