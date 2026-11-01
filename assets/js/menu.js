/* --------------------------------------------------------------------------
   TRIPLE L — MENU DATA
   Edit this section to change products, prices, descriptions, and photos.
   -------------------------------------------------------------------------- */

const imageBank = {
  hero: "https://images.unsplash.com/photo-1542372147193-a7aca54189cd?auto=format&fit=crop&w=1200&q=82",
  latte: "https://images.unsplash.com/photo-1524240485266-07dd6863d4ae?auto=format&fit=crop&w=900&q=82",
  coffeeCroissant: "https://images.unsplash.com/photo-1769138886359-fbfae1967b67?auto=format&fit=crop&w=900&q=82",
  darkCoffee: "https://images.unsplash.com/photo-1769138886284-34d3d68f4ba5?auto=format&fit=crop&w=900&q=82",
  matcha: "https://images.unsplash.com/photo-1751563721808-3b81940b88f7?auto=format&fit=crop&w=900&q=82",
  icedMatcha: "https://images.unsplash.com/photo-1759363580278-058211df7102?auto=format&fit=crop&w=900&q=82",
  pastry: "https://images.unsplash.com/photo-1759566926618-163d14e00fc8?auto=format&fit=crop&w=900&q=82",
  brownie: "https://images.unsplash.com/photo-1723476359253-9a4d0457c82f?auto=format&fit=crop&w=900&q=82",
  cheesecake: "https://images.unsplash.com/photo-1761637604972-070dee14cd32?auto=format&fit=crop&w=900&q=82"
};

const fallbackImages = {
  coffee: "assets/images/fallback-coffee.svg",
  cold: "assets/images/fallback-cold.svg",
  other: "assets/images/fallback-cold.svg",
  bakery: "assets/images/fallback-bakery.svg"
};

// Prices and products are concept content. Replace them with approved café data.
const menuItems = [
  { id: 1, name: "Espresso", category: "coffee", categoryLabel: "Espresso bar", price: 75, description: "A short, bold shot with a rich crema and a beautifully balanced finish.", image: imageBank.darkCoffee, label: "THE CLASSIC" },
  { id: 2, name: "Americano", category: "coffee", categoryLabel: "Espresso bar", price: 90, description: "Espresso softened with hot water for a smooth, clean cup.", image: imageBank.darkCoffee, label: "ESPRESSO BASED" },
  { id: 3, name: "Cappuccino", category: "coffee", categoryLabel: "Espresso bar", price: 115, description: "A double espresso with silky steamed milk and a soft layer of foam.", image: imageBank.latte, label: "BARISTA PICK" },
  { id: 4, name: "Flat White", category: "coffee", categoryLabel: "Espresso bar", price: 120, description: "Rich espresso and velvety microfoam in a beautifully balanced cup.", image: imageBank.latte, label: "SMOOTH & BOLD" },
  { id: 5, name: "Spanish Latte", category: "coffee", categoryLabel: "Espresso bar", price: 145, description: "Our espresso blended with creamy milk and a gentle touch of sweetness.", image: imageBank.coffeeCroissant, label: "SIGNATURE" },
  { id: 6, name: "Vanilla Latte", category: "coffee", categoryLabel: "Espresso bar", price: 145, description: "A comforting latte finished with warm, fragrant vanilla notes.", image: imageBank.latte, label: "A LITTLE SWEET" },
  { id: 7, name: "Iced Latte", category: "cold", categoryLabel: "Iced & chilled", price: 125, description: "A chilled espresso poured over fresh milk and plenty of ice.", image: imageBank.latte, label: "COOL & CREAMY" },
  { id: 8, name: "Iced Spanish Latte", category: "cold", categoryLabel: "Iced & chilled", price: 155, description: "Our signature Spanish Latte, served cold for a refreshing finish.", image: imageBank.icedMatcha, label: "SIGNATURE" },
  { id: 9, name: "Salted Caramel Cold Brew", category: "cold", categoryLabel: "Iced & chilled", price: 160, description: "Slow-steeped coffee with mellow caramel and a delicate hint of sea salt.", image: imageBank.darkCoffee, label: "SLOW BREW" },
  { id: 10, name: "Iced Matcha Latte", category: "cold", categoryLabel: "Iced & chilled", price: 155, description: "Earthy matcha shaken smooth with cold milk and ice.", image: imageBank.icedMatcha, label: "MATCHA BAR" },
  { id: 11, name: "Strawberry Matcha", category: "cold", categoryLabel: "Iced & chilled", price: 175, description: "A bright layer of strawberry meets creamy milk and vibrant matcha.", image: imageBank.matcha, label: "A FRESH TWIST" },
  { id: 12, name: "Chocolate Frappe", category: "cold", categoryLabel: "Iced & chilled", price: 150, description: "A cool, blended chocolate treat finished with a smooth coffee note.", image: imageBank.coffeeCroissant, label: "BLENDED" },
  { id: 13, name: "Hot Matcha Latte", category: "other", categoryLabel: "Beyond coffee", price: 140, description: "Fine matcha whisked with steamed milk for a calm, creamy cup.", image: imageBank.matcha, label: "MATCHA BAR" },
  { id: 14, name: "Hot Chocolate", category: "other", categoryLabel: "Beyond coffee", price: 125, description: "Rich cocoa and steamed milk — simple, cosy, and always a good idea.", image: imageBank.darkCoffee, label: "COMFORT CUP" },
  { id: 15, name: "Chai Latte", category: "other", categoryLabel: "Beyond coffee", price: 120, description: "A fragrant blend of warming spices stirred into creamy steamed milk.", image: imageBank.latte, label: "SPICED JUST RIGHT" },
  { id: 16, name: "Hibiscus Iced Tea", category: "other", categoryLabel: "Beyond coffee", price: 95, description: "A refreshing floral tea with a bright, gently tart finish.", image: imageBank.icedMatcha, label: "CAFFEINE FREE" },
  { id: 17, name: "Butter Croissant", category: "bakery", categoryLabel: "Bakery & sweets", price: 95, description: "Golden, flaky layers with a buttery centre. Best enjoyed fresh.", image: imageBank.pastry, label: "BAKED FRESH" },
  { id: 18, name: "Pain au Chocolat", category: "bakery", categoryLabel: "Bakery & sweets", price: 115, description: "A crisp, buttery pastry wrapped around rich dark chocolate.", image: imageBank.coffeeCroissant, label: "BAKERY PICK" },
  { id: 19, name: "Classic Brownie", category: "bakery", categoryLabel: "Bakery & sweets", price: 105, description: "A soft-centred chocolate brownie with a deep cocoa flavour.", image: imageBank.brownie, label: "CHOCOLATE FIX" },
  { id: 20, name: "Basque Cheesecake", category: "bakery", categoryLabel: "Bakery & sweets", price: 145, description: "A creamy baked cheesecake with a caramelised top and soft centre.", image: imageBank.cheesecake, label: "SOMETHING SPECIAL" }
];

/* --------------------------------------------------------------------------
   MENU BEHAVIOUR
   -------------------------------------------------------------------------- */

const menuGrid = document.querySelector("#menu-grid");
const categoryList = document.querySelector("#category-list");
const searchInput = document.querySelector("#menu-search");
const resultsCount = document.querySelector("#results-count");
const emptyState = document.querySelector("#empty-state");
const modal = document.querySelector("#product-modal");
const modalPanel = modal.querySelector(".modal-panel");
const modalImage = document.querySelector("#modal-image");
const modalCategory = document.querySelector("#modal-category");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalPrice = document.querySelector("#modal-price");

let activeCategory = "all";
let lastFocusedElement = null;

function formatPrice(price) {
  return `${new Intl.NumberFormat("en-EG").format(price)} EGP`;
}

function updateCategoryCounts() {
  const counts = {
    all: menuItems.length,
    coffee: menuItems.filter((item) => item.category === "coffee").length,
    cold: menuItems.filter((item) => item.category === "cold").length,
    other: menuItems.filter((item) => item.category === "other").length,
    bakery: menuItems.filter((item) => item.category === "bakery").length
  };

  Object.entries(counts).forEach(([category, count]) => {
    const counter = categoryList.querySelector(`[data-category-count="${category}"]`);
    if (counter) counter.textContent = count;
  });
}

function createProductCard(item, index) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.style.setProperty("--card-index", Math.min(index, 6));

  const imageWrap = document.createElement("div");
  imageWrap.className = "product-image-wrap";

  const image = document.createElement("img");
  image.className = "product-image";
  image.src = item.image;
  image.alt = item.name;
  image.loading = "lazy";
  image.decoding = "async";
  image.onerror = () => {
    image.onerror = null;
    image.src = fallbackImages[item.category] || fallbackImages.coffee;
  };
  imageWrap.append(image);

  const label = document.createElement("span");
  label.className = "product-label";
  label.textContent = item.label;
  imageWrap.append(label);

  const info = document.createElement("div");
  info.className = "product-info";

  const meta = document.createElement("div");
  meta.className = "product-meta";
  const category = document.createElement("span");
  category.textContent = item.categoryLabel;
  meta.append(category);

  const titleRow = document.createElement("div");
  titleRow.className = "product-title-row";
  const title = document.createElement("h3");
  title.className = "product-title";
  title.textContent = item.name;
  const price = document.createElement("span");
  price.className = "product-price";
  price.textContent = formatPrice(item.price);
  titleRow.append(title, price);

  const description = document.createElement("p");
  description.className = "product-description";
  description.textContent = item.description;

  const detailsButton = document.createElement("button");
  detailsButton.className = "product-more";
  detailsButton.type = "button";
  detailsButton.innerHTML = '<span>View details</span><span aria-hidden="true">↗</span>';
  detailsButton.setAttribute("aria-label", `View details for ${item.name}`);
  detailsButton.addEventListener("click", () => openProductModal(item));

  info.append(meta, titleRow, description, detailsButton);
  card.append(imageWrap, info);
  return card;
}

function renderMenu() {
  const query = searchInput.value.trim().toLowerCase();
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const searchableText = `${item.name} ${item.description} ${item.categoryLabel} ${item.label}`.toLowerCase();
    return matchesCategory && searchableText.includes(query);
  });

  menuGrid.replaceChildren(...filteredItems.map(createProductCard));
  emptyState.hidden = filteredItems.length !== 0;
  resultsCount.textContent = query || activeCategory !== "all"
    ? `${filteredItems.length} ${filteredItems.length === 1 ? "item" : "items"} found.`
    : `${filteredItems.length} items to make your day.`;
}

function setCategory(category) {
  activeCategory = category;
  categoryList.querySelectorAll("[data-category]").forEach((button) => {
    const isActive = button.dataset.category === category;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderMenu();
}

function openProductModal(item) {
  lastFocusedElement = document.activeElement;
  modalImage.src = item.image;
  modalImage.alt = item.name;
  modalImage.onerror = () => {
    modalImage.onerror = null;
    modalImage.src = fallbackImages[item.category] || fallbackImages.coffee;
  };
  modalCategory.textContent = item.categoryLabel;
  modalTitle.textContent = item.name;
  modalDescription.textContent = item.description;
  modalPrice.textContent = formatPrice(item.price);

  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}

function closeProductModal() {
  if (modal.hidden) return;
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
}

function handleModalKeydown(event) {
  if (event.key === "Escape") {
    closeProductModal();
    return;
  }

  if (event.key !== "Tab" || modal.hidden) return;

  const focusableElements = [...modal.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])')];
  if (!focusableElements.length) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
}

categoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (button) setCategory(button.dataset.category);
});

searchInput.addEventListener("input", renderMenu);

document.querySelector("#reset-menu").addEventListener("click", () => {
  searchInput.value = "";
  setCategory("all");
  searchInput.focus();
});

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeProductModal);
});

document.addEventListener("keydown", (event) => {
  handleModalKeydown(event);

  if (event.key === "/" && modal.hidden && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName) && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    searchInput.focus();
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");

function closeMobileNavigation() {
  navigation.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileNavigation);
});

document.addEventListener("click", (event) => {
  if (menuToggle.getAttribute("aria-expanded") === "true" && !event.target.closest(".site-header")) {
    closeMobileNavigation();
  }
});

document.querySelectorAll("[data-jump-category]").forEach((link) => {
  link.addEventListener("click", () => setCategory(link.dataset.jumpCategory));
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
updateCategoryCounts();
renderMenu();
