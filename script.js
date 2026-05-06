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
    price: '$320',
    description: 'DUROFLEX Orthopaedic mattress. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/duroflex-mattressjpg'],
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
    price: '$10',
    description: 'Two portable tea tables. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Like new',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Blue Wodden Study Table',
    price: '$25',
    description: 'Blue Wodden Study Table. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Pink wooden study table',
    price: '$25',
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
    price: '$25',
    description: 'Spacious wardrobe. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'ExcellentVery good',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Wardrobe',
    price: '$20',
    description: 'Another spacious wardrobe. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Bike: age 9-10',
    price: '$50',
    description: 'Bike suitable for ages 9-10. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Good',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Bike: age 4-5',
    price: '$50',
    description: 'Bike suitable for ages 4-5. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Good',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Samsung TV 55 inch',
    price: '$200',
    description: '55-inch Samsung TV. <a href="https://www.bestbuy.ca/en-ca/product/samsung-55-q8f-series-4k-uhd-hdr-qled-tizen-smart-tv-qn55q8faafxzc-2025/19206116" target="_blank">New product info</a>',
    condition: 'Like new',
    images: ['img/samsung-55-inch.jpg'],
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
    price: '$50',
    description: 'Iron for clothes. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Good',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Christmas tree',
    price: '$20',
    description: 'Christmas tree with lights and decorations. <a href="https://www.canadiantire.ca/en/pdp/noma-pre-lit-dresden-christmas-tree-with-tree-stand-450-colour-changing-led-lights-7-ft-1518568p.html" target="_blank">New product info</a>',
    condition: 'Like new',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Sofa 3 seater',
    price: '$50',
    description: '3-seater sofa.',
    condition: 'Very good',
    images: ['img/sofa-3-seater.jpg'],
  },
  {
    name: 'IKEA Shelf unit',
    price: '$10',
    description: 'Steel rack from IKEA. <a href="https://www.ikea.com/ca/en/p/hyllis-shelf-unit-indoor-outdoor-00278578/" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/hyllis-shelf-unit-indoor-outdoor.avif'],
  },
  {
    name: 'TV rack with storage',
    price: '$100',
    description: 'TV rack with storage space. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'IKEA Table and 4 chairs, antique stain pine',
    price: '$50',
    description: 'Table and 4 chairs, antique stain pine. <a href="https://www.ikea.com/ca/en/p/haegernaes-table-and-4-chairs-antique-stain-pine-70575947/ target="_blank">New product info</a>',
    condition: 'Very good',
    images: ['img/haegernaes-table-and-4-chairs-antique-stain-pine__1350925_pe951817_s5.avif'],
  },
  {
    name: 'Featherlite Slick Executive Table',
    price: '$50',
    description: 'Featherlite Slick Executive Table. <a href="https://featherlitestore.com/product/featherlite-slick-executive-table/" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/featherlight-table.jpg'],
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
    images: ['img/Mixer-Preethi-with-juicer.jpg'],
  },
  {
    name: 'Air Fryer Toaster Oven',
    price: '$25',
    description: 'Air Fryer Toaster Oven. Click for <a href="https://www.walmart.ca/en/ip/Gourmia-Digital-Air-Fryer-Toaster-Oven-with-Single-Pull-French-Doors-GTF7465/6000205136714?classType=REGULAR&athbdg=L1102" target="_blank">New product info</a>',
    condition: 'Good',
    images: ['img/Air-Fryer-Toaster-Oven.avif'],
  },
  {
    name: 'Cashroll: Milton',
    price: '$20',
    description: 'Milton cashroll. <a href="https://www.amazon.ca/Milton-Galaxia-Insulated-Stainless-Serving/dp/B07BWS74MT/ref=sr_1_14?dib=eyJ2IjoiMSJ9.m7dyVrWFUhg4La3VXQEyXiT4nispMG48bsgD1DRqceFQ3-WgQ1ApL23X0nSyUQ3hZKQQs7XSOPKWcYnN-uy8ZYVwn2i1EtOC54JQh6ERmz7ZnmSzT2gzd4aF2E42WpEicNkcQ_FwPgi6Qp0hvm98klVnDMEvZQe21-qiFd717_eKZEiHGGwbG9-0hzH2FTTEUDvYVKoK3Lv_CJHsLsVPnGvWDEl6dWELcgtotG0pO3o.LiYWUzl2uoSr5BaP5p-eyp3pBrUdbJ7tfY9huNtIAMQ&dib_tag=se&qid=1778035939&refinements=p_89%3AMILTON&rnid=5264023011&s=kitchen&sr=1-14&srs=20657279011&th=1" target="_blank">New product info</a>',
    condition: 'Like New',
    images: ['img/milton.jpg'],
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
    images: ['img/Steel-Plate.jpg'],
  },
  {
    name: 'Steel Glass',
    price: '$3',
    description: 'Steel glass. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'New',
    images: ['img/Steel-glass.jpg'],
  },
  {
    name: 'King size bed protector',
    price: '$10',
    description: 'King-size bed protector. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Like new',
    images: ['img/King-size-bed-protector.jpg'],
  },
  {
    name: 'Dining chair (4)',
    price: '$40',
    description: 'Four dining chairs. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Good',
    images: ['img/haegernaes-chair-antique.avif'],
  },
  {
    name: 'Robot vacuum cleaner',
    price: '$40',
    description: 'Robot vacuum cleaner. <a href="https://www.amazon.ca/dp/B0CYGHJHN5?ref=ppx_yo2ov_dt_b_fed_asin_title" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/Robot-vacuum.jpg'],
  },
  {
    name: 'Humidifier',
    price: '$25',
    description: 'Humidifier for home. <a href="https://www.amazon.ca/dp/B0BB3TPQ91?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1" target="_blank">New product info</a>',
    condition: 'Good',
    images: ['img/Homvana-Humidifiers.jpg'],
  },
  {
    name: 'Water filter',
    price: '$25',
    description: 'Water filter system. <a href="https://www.amazon.ca/dp/B07G3LV535?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1" target="_blank">New product info</a>',
    condition: 'Very good',
    images: ['img/Brita-27-Cup-Filter.jpg'],
  },
  {
    name: 'Steamer',
    price: '$25',
    description: 'Clothes steamer. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Like new',
    images: ['img/Facial-Steamer-costco.avif'],
  },
  {
    name: 'Bedsheet king size',
    price: '$10',
    description: 'King-size bedsheet. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'New',
    images: ['img/bedsheet.jpg'],
  },
  {
    name: 'Kitchen Utensils made out of steel',
    price: '$30',
    description: 'Set of steel kitchen utensils. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Good',
    images: ['img/stainless-steel-utensils.webp'],
  },
  {
    name: 'Weight machine',
    price: '$10',
    description: 'Weight machine for exercise. <a href="https://example.com" target="_blank">New product info</a>',
    condition: 'Excellent',
    images: ['img/scales-decathlon.avif'],
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
