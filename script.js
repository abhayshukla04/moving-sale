const items = [
  {
    name: 'Air conditioner',
    price: '$50' ,
    category: 'Electronics',
    originalPrice: '$200',
    description: 'Efficient air conditioner in good working condition. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'Good',
    images: ['img/Window Air Conditioner.avif', 'img/Window Air Conditioner-2.avif'],
  },
  {
    name: 'IKEA hybrid mattress',
    price: '$200' ,
    category: 'Bedding',
    originalPrice: '$800',
    description: 'HAUGSVÄR IKEA hybrid mattress. Click here <a href="https://www.ikea.com/ca/en/p/anneland-hybrid-mattress-firm-white-20511910/" target="_blank">for more information</a>',
    condition: 'Excellent',
    images: ['img/hybrid-mattress.avif'],
  },
  {
    name: 'IKEA Drawer unit, white',
    price: '$15' ,
    category: 'Furniture',
    originalPrice: '$25',
    description: 'IKEA Drawer unit, white. Click here <a href="https://www.ikea.com/ca/en/p/lennart-drawer-unit-white-30326177/" target="_blank">for more information</a>',
    condition: 'Good',
    images: ['img/lennart-drawer-unit-white.avif'],
  },
  {
    name: 'DUROFLEX Mattress : Imported',
    price: '$200' ,
    category: 'Bedding',
    originalPrice: '$600',
    description: 'DUROFLEX Orthopaedic mattress. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'Excellent',
    images: ['img/duroflex-mattressjpg'],
  },
  {
    name: 'IKEA King Bed Frame',
    price: '$150' ,
    category: 'Furniture',
    originalPrice: '$379',
    description: 'IKEA Sagstua King Bed Frame, Black. Click here <a href="https://www.ikea.com/ca/en/p/stjaernoe-bed-frame-anthracite-50570192/#content" target="_blank">for more information</a>',
    condition: 'Good',
    images: ['img/ikea-metal-bed.webp','img/ikea-metal-bed-1.webp', 'img/ikea-metal-bed-2.webp'],
  },
    {
    name: 'Hyper Bicycles',
    price: '$100' ,
    category: 'Furniture',
    originalPrice: '$228',
    description: 'Hyper Bicycles Men 27.5 inch, Shocker Mountain Bike, Black. Click here <a href="https://www.walmart.ca/en/ip/Hyper-Bicycles-Men-s-27-5-Shocker-Mountain-Bike-Black/6000207391349?classType=REGULAR&athbdg=L1102&from=/search" target="_blank">for more information</a>',
    condition: 'Good',
    soldOut: true,
    images: ['img/6ec96ed9-2f34-42f8-8f67-c9fa5f06a680.436c96818b3e700ab0fadcbe3e95f2e6.avif'],
  },
    {
    name: 'IKEA Ironing board',
    price: '$25' ,
    category: 'Home',
    originalPrice: '$50',
    description: 'IKEA Ironing board. Click here <a href="https://www.ikea.com/ca/en/p/daenka-ironing-board-20471612/" target="_blank">for more information</a>',
    condition: 'Good',
    images: ['img/daenka-ironing-board.avif'],
  },
  {
    name: 'Portable tea table (2)',
    price: '$10' ,
    category: 'Furniture',
    originalPrice: '$40',
    description: 'Two portable tea tables. Click here <a href="https://www.homedepot.ca/product/stylewell-stylewell-1-4-ft-x-1-4-ft-resin-frame-square-outdoor-side-table-in-red/1000861861" target="_blank">for more information</a>',
    condition: 'Like new',
    images: ['img/Portable-tea-table.png'],
  },
  {
    name: 'Blue Wodden Study Table : Imported',
    price: '$25' ,
    category: 'Furniture',
    originalPrice: '$100',
    description: 'Blue Wodden Study Table. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'Excellent',
    soldOut: true,
    images: ['img/blue-study-table.jpg'],
  },
  {
    name: 'Pink wooden study table: Imported',
    price: '$25' ,
    category: 'Furniture',
    originalPrice: '$100',
    description: 'Pink wooden study table suitable. Made with greenply plywood and laminate. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'Excellent',
    images: ['img/pink-study-table.jpeg'],
  },
  {
    name: 'IKEA Blue study chair',
    price: '$15' ,
    category: 'Furniture',
    originalPrice: '$40',
    description: 'Blue study chair. Click here <a href="https://www.ikea.com/ca/en/p/mammut-childrens-chair-indoor-outdoor-light-blue-30581988/#content" target="_blank">for more information</a>',
    condition: 'Excellent',
    soldOut: true,
    images: ['img/Blue-Chair.avif'],
  },
  {
    name: 'IKEA Pink study chair',
    price: '$15' ,
    category: 'Furniture',
    originalPrice: '$40',
    description: 'Pink study chair. Click here <a href="https://www.ikea.com/ca/en/p/mammut-childrens-chair-indoor-outdoor-light-blue-30581988/#content" target="_blank">for more information</a>',
    condition: 'Excellent',
    images: ['img/Chair-Pink.jpg'],
  },
  {
    name: 'Wardrobe : Imported',
    price: '$25' ,
    category: 'Furniture',
    originalPrice: '$100',
    description: 'Spacious wardrobe. Made with greenply plywood and laminate. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'ExcellentVery good',
    images: ['img/ward-robe-1a.jpg', 'img/ward-robe-1b.jpg'],
  },
  {
    name: 'Wardrobe : Imported',
    price: '$25',
    originalPrice: '$100',
    description: 'Another spacious wardrobe. Made with greenply plywood and laminate. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'Excellent',
    images: ['img/ward-robe-2a.jpg', 'img/ward-robe-2b.jpg'],
  },
  {
    name: 'Bike: age 9-10',
    price: '$50' ,
    category: 'Toys',
    originalPrice: '$200',
    description: 'Bike suitable for ages 9-10. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'Good',
    images: ['img/20250909_220504.jpg'],
  },
  {
    name: 'Bike: age 4-5',
    price: '$50' ,
    category: 'Toys',
    originalPrice: '$200',
    description: 'Bike suitable for ages 4-5. Click here <a href="https://www.amazon.in/SPORTS-Space-Unisex-Single-Assembled/dp/B0BF5Q2J5R" target="_blank">for more information</a>',
    condition: 'Good',
    images: ['img/20260301_185709.jpg'],
  },
  {
    name: 'Samsung TV 55 inch',
    price: '$200' ,
    category: 'Electronics',
    originalPrice: '$800',
    description: '55-inch Samsung TV. Click here <a href="https://www.bestbuy.ca/en-ca/product/samsung-55-q8f-series-4k-uhd-hdr-qled-tizen-smart-tv-qn55q8faafxzc-2025/19206116" target="_blank">for more information</a>',
    condition: 'Like new',
    images: ['img/samsung-55-inch.jpg'],
  },
  {
    name: 'Duroflex-Single Seater Recliner Sofa : Imported',
    price: '$100' ,
    category: 'Furniture',
    originalPrice: '$300',
    description: 'Duroflex Avalon - Single Seater Premium Fabric Recliner Sofa. Click here <a href="https://www.amazon.in/dp/B09CH31YJ3?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1" target="_blank">for more information</a>',
    condition: 'Excellent',
    images: ['img/Recliner-Sofa.jpg'],
  },
  {
    name: 'Floor uplighter',
    price: '$7' ,
    category: 'Lighting',
    originalPrice: '$20',
    description: 'IKEA Floor uplighter, black/white. Click here <a href="https://www.ikea.com/ca/en/p/tagarp-floor-uplighter-black-white-60464049/" target="_blank">for more information</a>',
    condition: 'Excellent',
    images: ['img/tagarp-floor-uplighter.avif'],
  },
  {
    name: 'Christmas tree',
    price: '$25' ,
    category: 'Decor',
    originalPrice: '$150',
    description: 'Christmas tree with lights and decorations. Click here <a href="https://www.canadiantire.ca/en/pdp/noma-pre-lit-dresden-christmas-tree-with-tree-stand-450-colour-changing-led-lights-7-ft-1518568p.html" target="_blank">for more information</a>',
    condition: 'Like new',
    images: ['img/tree-7ft-dresden-130-noma-0bdf330b-e866-45de-bdc7-5475cc744f78-jpgrendition.avif'],
  },
  {
    name: 'Sofa 3 seater',
    price: '$50' ,
    category: 'Furniture',
    originalPrice: '$100',
    description: '3-seater sofa. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'Very good',
    images: ['img/sofa-3-seater.jpg'],
  },
    {
    name: 'Premium air purifier',
    price: '$100' ,
    category: 'Electronics',
    originalPrice: '$399',
    description: 'Ionic Pro Platinum Air Purifier. Click here <a href="https://a.co/d/0i9Yhztg" target="_blank">for more information</a>',
    condition: 'Very good',
    images: ['img/61a3F7mZwsL._AC_SX679_.jpg'],
  },
  {
    name: 'IKEA Shelf unit',
    price: '$20' ,
    category: 'Furniture',
    originalPrice: '$40',
    description: 'Steel rack from IKEA. Click here <a href="https://www.ikea.com/ca/en/p/hyllis-shelf-unit-indoor-outdoor-00278578/" target="_blank">for more information</a>',
    condition: 'Excellent',
    images: ['img/hyllis-shelf-unit-indoor-outdoor.avif'],
  },
  {
    name: 'TV rack with storage',
    price: '$50' ,
    category: 'Furniture',
    originalPrice: '$300',
    description: 'TV rack with storage space. Made with greenply plywood and laminate. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'Excellent',
    images: ['img/20260524_125739.jpg', 'img/20260524_125756.jpg'],
  },
  {
    name: 'IKEA Table and 4 chairs, antique stain pine',
    price: '$50' ,
    category: 'Furniture',
    originalPrice: '$100',
    description: 'Table and 4 chairs, antique stain pine. Click here <a href="https://www.ikea.com/ca/en/p/haegernaes-table-and-4-chairs-antique-stain-pine-70575947/" target="_blank">for more information</a>',
    condition: 'Very good',
    images: ['img/haegernaes-table-and-4-chairs-antique-stain-pine__1350925_pe951817_s5.avif'],
  },
  {
    name: 'Featherlite Slick Executive Table',
    price: '$50' ,
    category: 'Furniture',
    originalPrice: '$100',
    description: 'Featherlite Slick Executive Table. Click here <a href="https://featherlitestore.com/product/featherlite-slick-executive-table/" target="_blank">for more information</a>',
    condition: 'Excellent',
    images: ['img/featherlight-table.jpg'],
  },
  {
    name: 'Blanket: king size (2)',
    price: '$40' ,
    category: 'Bedding',
    originalPrice: '$100',
    description: 'Two king-size blankets. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'Like new',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Mixer Preethi with juicer',
    price: '$80' ,
    category: 'Kitchen',
    originalPrice: '$300',
    description: 'Preethi mixer with juicer. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'Good',
    images: ['img/Mixer-Preethi-with-juicer.jpg'],
  },
  {
    name: 'Air Fryer Toaster Oven',
    price: '$25' ,
    category: 'Kitchen',
    originalPrice: '$180',
    description: 'Air Fryer Toaster Oven. Click here <a href="https://www.walmart.ca/en/ip/Gourmia-Digital-Air-Fryer-Toaster-Oven-with-Single-Pull-French-Doors-GTF7465/6000205136714?classType=REGULAR&athbdg=L1102" target="_blank">for more information</a>',
    condition: 'Good',
    soldOut: true,
    images: ['img/Air-Fryer-Toaster-Oven.avif'],
  },
  {
    name: 'Cashroll: Milton',
    price: '$20' ,
    category: 'Kitchen',
    originalPrice: '$50',
    description: 'Milton cashroll. Click here <a href="https://www.amazon.ca/Milton-Galaxia-Insulated-Stainless-Serving/dp/B07BWS74MT/ref=sr_1_14?dib=eyJ2IjoiMSJ9.m7dyVrWFUhg4La3VXQEyXiT4nispMG48bsgD1DRqceFQ3-WgQ1ApL23X0nSyUQ3hZKQQs7XSOPKWcYnN-uy8ZYVwn2i1EtOC54JQh6ERmz7ZnmSzT2gzd4aF2E42WpEicNkcQ_FwPgi6Qp0hvm98klVnDMEvZQe21-qiFd717_eKZEiHGGwbG9-0hzH2FTTEUDvYVKoK3Lv_CJHsLsVPnGvWDEl6dWELcgtotG0pO3o.LiYWUzl2uoSr5BaP5p-eyp3pBrUdbJ7tfY9huNtIAMQ&dib_tag=se&qid=1778035939&refinements=p_89%3AMILTON&rnid=5264023011&s=kitchen&sr=1-14&srs=20657279011&th=1" target="_blank">for more information</a>',
    condition: 'Like New',
    images: ['img/milton.jpg'],
  },
  {
    name: 'Superhero toys',
    price: '$20' ,
    category: 'Toys',
    originalPrice: '$100',
    description: 'Collection of superhero toys. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'Good',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Soft toys for kids',
    price: '$15' ,
    category: 'Toys',
    originalPrice: '$100',
    description: 'Soft toys for children. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'Like new',
    images: ['img/moving-house-cardboard-boxes.jpg'],
  },
  {
    name: 'Steel Plate',
    price: '$5' ,
    category: 'Kitchen',
    originalPrice: '$20',
    description: 'Steel plate. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'New',
    images: ['img/Steel-Plate.jpg'],
  },
  {
    name: 'Steel Glass',
    price: '$3' ,
    category: 'Kitchen',
    originalPrice: '$10',
    description: 'Steel glass. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'New',
    images: ['img/Steel-glass.jpg'],
  },
  {
    name: 'King size bed protector',
    price: '$10' ,
    category: 'Bedding',
    originalPrice: '$50',
    description: 'King-size bed protector. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'Like new',
    images: ['img/King-size-bed-protector.jpg'],
  },
  {
    name: 'Dining chair (4)',
    price: '$40' ,
    category: 'Furniture',
    originalPrice: '$100',
    description: 'Four dining chairs. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'Good',
    images: ['img/haegernaes-chair-antique.avif'],
  },
  {
    name: 'Robot vacuum cleaner',
    price: '$40' ,
    category: 'Electronics',
    originalPrice: '$200',
    description: 'Robot vacuum cleaner. Click here <a href="https://www.amazon.ca/dp/B0CYGHJHN5?ref=ppx_yo2ov_dt_b_fed_asin_title" target="_blank">for more information</a>',
    condition: 'Excellent',
    soldOut: true,
    images: ['img/Robot-vacuum.jpg'],
  },
  {
    name: 'Humidifier',
    price: '$25' ,
    category: 'Electronics',
    originalPrice: '$100',
    description: 'Humidifier for home. Click here <a href="https://www.amazon.ca/dp/B0BB3TPQ91?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1" target="_blank">for more information</a>',
    condition: 'Good',
    images: ['img/Homvana-Humidifiers.jpg'],
  },
  {
    name: 'Water filter',
    price: '$25' ,
    category: 'Home',
    originalPrice: '$100',
    description: 'Water filter system. Click here <a href="https://www.amazon.ca/dp/B07G3LV535?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1" target="_blank">for more information</a>',
    condition: 'Very good',
    images: ['img/Brita-27-Cup-Filter.jpg'],
  },
  {
    name: 'Steamer',
    price: '$25' ,
    category: 'Electronics',
    originalPrice: '$100',
    description: 'Clothes steamer. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'Like new',
    images: ['img/Facial-Steamer-costco.avif'],
  },
  {
    name: 'Bedsheet king size',
    price: '$10' ,
    category: 'Bedding',
    originalPrice: '$50',
    description: 'King-size bedsheet. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'New',
    images: ['img/bedsheet.jpg'],
  },
  {
    name: 'Kitchen Utensils made out of steel',
    price: '$30' ,
    category: 'Kitchen',
    originalPrice: '$100',
    description: 'Set of steel kitchen utensils. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'Good',
    images: ['img/stainless-steel-utensils.webp'],
  },
  {
    name: 'Weight machine',
    price: '$10' ,
    category: 'Home',
    originalPrice: '$50',
    description: 'Weight machine for exercise. Click here <a href="https://example.com" target="_blank">for more information</a>',
    condition: 'Excellent',
    images: ['img/scales-decathlon.avif'],
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const itemsGrid = document.getElementById('itemsGrid');
  const searchInput = document.getElementById('searchInput');
  const printButton = document.getElementById('printButton');
  const categoryFilters = document.getElementById('categoryFilters');
  const printTableBody = document.querySelector('#printTable tbody');
  const modal = document.getElementById('itemModal');
  const modalImage = document.getElementById('modalImage');
  const modalDetails = document.getElementById('modalDetails');
  const closeBtn = document.querySelector('.close');
  const prevImageBtn = document.getElementById('prevImage');
  const nextImageBtn = document.getElementById('nextImage');

  let currentItem = null;
  let currentImageIndex = 0;
  let selectedCategory = 'All';

  function openModal(item) {
    currentItem = item;
    currentImageIndex = 0;
    updateModalImage();
    modalDetails.innerHTML = `
      <h2>${item.name}</h2>
      ${item.soldOut ? '<div class="sold-out-banner">Sold Out</div>' : ''}
      <p>${item.description}</p>
      <div class="modal-footer">
        <div class="modal-prices">
          ${item.originalPrice ? `<span class="modal-old-price">${item.originalPrice}</span>` : ''}
          <span class="modal-price">${item.price}</span>
        </div>
        <span class="modal-condition">${item.condition}</span>
        <span class="modal-category">${item.category}</span>
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
      <article class="item-card${item.soldOut ? ' sold-out' : ''}" data-index="${index}">
        <div class="item-images">
          ${item.images.length > 0 ? `<img src="${item.images[0]}" alt="${item.name}" loading="lazy" />` : ''}
          ${item.soldOut ? '<div class="sold-out-overlay">Sold Out</div>' : ''}
        </div>
        <div class="item-card-content">
          <h3 class="item-card-title">${item.name}</h3>
          <span class="item-category">${item.category}</span>
          <p class="item-card-description">${item.description}</p>
          <div class="item-card-footer">
            <div class="item-price-row">
              ${item.originalPrice ? `<span class="item-old-price">${item.originalPrice}</span>` : ''}
              <span class="item-price">${item.price}</span>
            </div>
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

  function renderPrintTable(filteredItems) {
    printTableBody.innerHTML = filteredItems.map(item => `
      <tr${item.soldOut ? ' class="sold-out-row"' : ''}>
        <td>${item.name}${item.soldOut ? ' [SOLD OUT]' : ''}</td>
        <td>${item.description}</td>
        <td>${item.price}</td>
        <td>${item.originalPrice || ''}</td>
        <td>${item.category}</td>
        <td>${item.condition}</td>
      </tr>
    `).join('');
  }

  function getCategories(items) {
    return ['All', ...Array.from(new Set(items.map(item => item.category || 'Other')))].filter(Boolean);
  }

  function renderCategoryFilters() {
    const categories = getCategories(items);
    categoryFilters.innerHTML = categories.map(category => `
      <button type="button" class="category-filter-button${category === selectedCategory ? ' active' : ''}" data-category="${category}">${category}</button>
    `).join('');

    categoryFilters.querySelectorAll('.category-filter-button').forEach(button => {
      button.addEventListener('click', () => {
        selectedCategory = button.dataset.category;
        renderCategoryFilters();
        const filtered = filterItems(searchInput.value);
        renderItems(filtered);
        renderPrintTable(filtered);
      });
    });
  }

  function filterItems(query) {
    const normalized = query.trim().toLowerCase();
    return items.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesQuery = !normalized ||
        item.name.toLowerCase().includes(normalized) ||
        item.description.toLowerCase().includes(normalized) ||
        item.category.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }

  searchInput.addEventListener('input', () => {
    const filtered = filterItems(searchInput.value);
    renderItems(filtered);
    renderPrintTable(filtered);
  });

  printButton.addEventListener('click', () => {
    window.print();
  });

  renderCategoryFilters();
  renderItems(items);
  renderPrintTable(items);
});
