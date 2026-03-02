const productsData = [

    /* ── PALESTINE ─────────────────────────────────── */
    {
        id: 1,
        name: "Palestine Solidarity Tee",
        price: 39,
        image: "tshirt_white.png",
        category: "palestine",
        badge: "Best Seller",
        badgeType: "hot",
        desc: "Premium heavyweight cotton tee featuring an embroidered crescent & star on the chest. Wear your solidarity loud and proud.",
        features: ["100% organic heavyweight cotton", "Embroidered crescent & star logo", "Unisex relaxed fit", "Sizes XS – 3XL"]
    },
    {
        id: 2,
        name: "Gaza Flag Tee",
        price: 39,
        image: "tshirt_navy.png",
        category: "palestine",
        badge: "New",
        badgeType: "new",
        desc: "Navy blue premium tee with a bold screen-printed Palestinian flag graphic across the chest. Make a statement with every wear.",
        features: ["Ringspun cotton blend", "Bold screen-print flag graphic", "Pre-washed for softness", "Sizes XS – 3XL"]
    },
    {
        id: 3,
        name: "SPEAK Hoodie",
        price: 79,
        image: "hoodie_black.png",
        category: "palestine",
        badge: "Best Seller",
        badgeType: "hot",
        desc: "Oversized black hoodie with a bold 'SPEAK' chest print. Because silence is not an option. Heavyweight fleece for ultimate comfort.",
        features: ["420gsm fleece fabric", "Oversized relaxed silhouette", "Bold 'SPEAK' chest print", "Kangaroo pocket & adjustable drawstring"]
    },
    {
        id: 4,
        name: "Crescent Dad Hat",
        price: 34,
        image: "cap_beige.png",
        category: "palestine",
        badge: null,
        badgeType: null,
        desc: "Unstructured beige dad hat with a subtly embroidered crescent moon on the front panel. Clean, minimal, meaningful.",
        features: ["Washed cotton canvas", "Embroidered crescent logo", "Adjustable brass buckle strap", "One size fits most"]
    },
    {
        id: 5,
        name: "Watermelon Cap",
        price: 34,
        image: "cap_black.png",
        category: "palestine",
        badge: "New",
        badgeType: "new",
        desc: "Black structured 6-panel cap with an embroidered watermelon slice — a global symbol of Palestinian solidarity. Iconic and understated.",
        features: ["Structured 6-panel design", "Embroidered watermelon logo", "Snapback closure", "One size fits most"]
    },

    /* ── SUDAN ────────────────────────────────────── */
    {
        id: 6,
        name: "Sudan Crewneck",
        price: 69,
        image: "crewneck_grey.png",
        category: "sudan",
        badge: "Sale",
        badgeType: "sale",
        desc: "Heather grey crewneck sweatshirt with a bold printed Sudanese flag on the left chest. Show love and solidarity for Sudan.",
        features: ["300gsm fleece crewneck", "Screen-printed flag graphic", "Ribbed cuffs & hem", "Sizes XS – 3XL"]
    },
    {
        id: 7,
        name: "Sudan Flag Tee",
        price: 39,
        image: "tshirt_white.png",
        category: "sudan",
        badge: "New",
        badgeType: "new",
        desc: "Clean white heavyweight tee screen-printed with the Sudanese flag (red, white, black & green). Wear the colours of a people fighting for freedom.",
        features: ["100% ringspun cotton", "Full-colour screen-print", "Unisex relaxed fit", "Sizes XS – 3XL"]
    },
    {
        id: 8,
        name: "Sudan Unity Hoodie",
        price: 79,
        image: "hoodie_sudan.png",
        category: "sudan",
        badge: "New",
        badgeType: "new",
        desc: "Deep red premium hoodie with the Sudanese flag embroidered on the chest. A powerful statement of solidarity with 10 million displaced Sudanese.",
        features: ["420gsm premium fleece", "Embroidered Sudanese flag", "Kangaroo pocket & drawstring", "Sizes XS – 3XL"]
    },
    {
        id: 9,
        name: "Sudan Free Cap",
        price: 34,
        image: "cap_beige.png",
        category: "sudan",
        badge: null,
        badgeType: null,
        desc: "Unstructured beige dad hat embroidered with a small Sudanese flag on the front. Subtle solidarity you carry everywhere.",
        features: ["Washed cotton canvas", "Embroidered flag patch", "Adjustable brass buckle", "One size fits most"]
    },
    {
        id: 10,
        name: "Sudan STAND Tote",
        price: 24,
        image: "accessory_tote.png",
        category: "sudan",
        badge: null,
        badgeType: null,
        desc: "Organic cotton tote boldly printed with the Sudanese flag and 'STAND' in Arabic and English. Carry the cause. Carry the conversation.",
        features: ["GOTS-certified organic cotton", "Dual-language screen print", "Reinforced handles", "Fits A4 & everyday items"]
    },

    /* ── CONGO ────────────────────────────────────── */
    {
        id: 11,
        name: "Congo Flag Tee",
        price: 39,
        image: "tshirt_congo.png",
        category: "congo",
        badge: "New",
        badgeType: "new",
        desc: "Royal blue premium tee screen-printed with the Congolese flag. The DRC is the world's most forgotten crisis — your clothing says: not forgotten.",
        features: ["100% ringspun cotton", "Bold flag screen-print", "Pre-washed for softness", "Sizes XS – 3XL"]
    },
    {
        id: 12,
        name: "Congo Solidarity Hoodie",
        price: 79,
        image: "hoodie_olive.png",
        category: "congo",
        badge: null,
        badgeType: null,
        desc: "Olive toned heavyweight hoodie with 'Congo' and a star emblem printed on the chest. For 6 million displaced and the world that must not look away.",
        features: ["420gsm fleece hoodie", "Star emblem chest print", "Kangaroo pocket", "Sizes XS – 3XL"]
    },
    {
        id: 13,
        name: "Congo Pride Cap",
        price: 34,
        image: "cap_black.png",
        category: "congo",
        badge: null,
        badgeType: null,
        desc: "Black snapback cap with an embroidered Congolese flag star. Subtle and powerful — because Congo's story deserves to be seen.",
        features: ["Structured 6-panel", "Embroidered DRC star", "Snapback closure", "One size fits most"]
    },
    {
        id: 14,
        name: "Congo Justice Crewneck",
        price: 69,
        image: "crewneck_grey.png",
        category: "congo",
        badge: null,
        badgeType: null,
        desc: "Grey medium-weight crewneck with bold 'CONGO' lettering and a flag stripe across the chest. Speak for the people the world ignores.",
        features: ["300gsm fleece", "Bold lettering graphic", "Ribbed cuffs & hem", "Sizes XS – 3XL"]
    },
    {
        id: 15,
        name: "Congo Awareness Tote",
        price: 24,
        image: "accessory_tote.png",
        category: "congo",
        badge: null,
        badgeType: null,
        desc: "Organic cotton tote printed with 'DRC — NEVER FORGOTTEN' and the Congolese flag. Carry the message. Start the conversation.",
        features: ["GOTS-certified cotton", "Screen-printed message", "Reinforced wide handles", "Fits A4 & daily essentials"]
    },

    /* ── UYGHUR ───────────────────────────────────── */
    {
        id: 16,
        name: "Uyghur Solidarity Tee",
        price: 39,
        image: "tshirt_uyghur.png",
        category: "uyghur",
        badge: "New",
        badgeType: "new",
        desc: "White premium tee with an embroidered East Turkestan crescent and star on the chest. Over 1 million Uyghurs detained — wear the symbol that says: we see you.",
        features: ["100% organic heavyweight cotton", "Embroidered crescent & star", "Unisex relaxed fit", "Sizes XS – 3XL"]
    },
    {
        id: 17,
        name: "East Turkestan Hoodie",
        price: 79,
        image: "hoodie_uyghur.png",
        category: "uyghur",
        badge: null,
        badgeType: null,
        desc: "Navy blue premium hoodie with a subtle East Turkestan crescent emblem on the chest. For a people silenced by the world's largest ethnic internment.",
        features: ["420gsm premium fleece", "Embroidered crescent emblem", "Adjustable drawstring hood", "Sizes XS – 3XL"]
    },
    {
        id: 18,
        name: "Free Uyghurs Tee",
        price: 39,
        image: "tshirt_navy.png",
        category: "uyghur",
        badge: null,
        badgeType: null,
        desc: "Navy tee boldly printed with 'FREE UYGHURS' in English and Uyghur script. Say it loud — because the world needs to hear it.",
        features: ["Ringspun cotton blend", "Bilingual screen-print", "Pre-washed for comfort", "Sizes XS – 3XL"]
    },
    {
        id: 19,
        name: "Uyghur Crescent Cap",
        price: 34,
        image: "cap_beige.png",
        category: "uyghur",
        badge: null,
        badgeType: null,
        desc: "Beige unstructured cap with a small East Turkestan crescent moon embroidered on the front. Wear the symbol of a silenced people.",
        features: ["Washed cotton canvas", "East Turkestan crescent embroidery", "Adjustable brass buckle", "One size fits most"]
    },
    {
        id: 20,
        name: "East Turkestan Tote",
        price: 24,
        image: "accessory_tote.png",
        category: "uyghur",
        badge: null,
        badgeType: null,
        desc: "Organic tote printed with 'East Turkestan — Not Forgotten'. Carry the story of 1 million+ detainees into every room you enter.",
        features: ["GOTS-certified organic cotton", "Screen-printed message", "Reinforced handles", "Fits A4 & daily essentials"]
    },

    /* ── CLIMATE ──────────────────────────────────── */
    {
        id: 21,
        name: "Earth Cause Hoodie",
        price: 79,
        image: "hoodie_olive.png",
        category: "climate",
        badge: null,
        badgeType: null,
        desc: "Olive green premium hoodie with an embroidered globe logo. A daily reminder that the planet is a cause worth fighting for.",
        features: ["Organic cotton & recycled polyester", "Embroidered globe logo", "Brushed interior lining", "Sizes XS – 3XL"]
    },
    {
        id: 22,
        name: "STAND Tote",
        price: 24,
        image: "accessory_tote.png",
        category: "climate",
        badge: null,
        badgeType: null,
        desc: "Organic cotton tote screen-printed with a globe and 'STAND' in bold. Carry your values wherever you go.",
        features: ["100% GOTS-certified organic cotton", "Screen-printed design", "Reinforced handles", "Fits A4 & everyday essentials"]
    }
];

// Cart: { productId: { product, quantity } }

let cart = {};

// DOM refs
const productsContainer = document.getElementById('products-container');
const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotalAmount = document.getElementById('cart-total-amount');
const themeToggleBtn = document.getElementById('theme-toggle');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
const modalOverlay = document.getElementById('modal-overlay');
const productModal = document.getElementById('product-modal');
const modalInner = document.getElementById('modal-inner');
const modalClose = document.getElementById('modal-close');
const toastContainer = document.getElementById('toast-container');

let currentFilter = window.__initialFilter || 'all';
let searchQuery = '';

// Pre-activate the filter button matching the initial filter
if (currentFilter !== 'all') {
    const preBtn = document.querySelector(`.filter-btn[data-filter="${currentFilter}"]`);
    if (preBtn) {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        preBtn.classList.add('active');
    }
}

// ─── THEME TOGGLE ───────────────────────────────────────────────────────────
const isDarkInit = localStorage.getItem('theme') === 'dark';
if (isDarkInit) {
    document.body.classList.add('dark-theme');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggleBtn.innerHTML = isDark
            ? '<ion-icon name="sunny-outline"></ion-icon>'
            : '<ion-icon name="moon-outline"></ion-icon>';
    });
}

// ─── FILTERS ────────────────────────────────────────────────────────────────
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        updatePageHero();
        renderProducts();
        renderOurProducts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// ─── SEARCH ─────────────────────────────────────────────────────────────────
if (searchInput) {
    searchInput.addEventListener('input', () => {
        searchQuery = searchInput.value.toLowerCase().trim();
        renderProducts();
    });
}

// ─── PAGE HERO DYNAMIC UPDATE ─────────────────────────────────────────────────
const causeHero = {
    all: { tag: 'Our Collection', title: 'All Products', desc: 'Every piece you wear carries a cause logo \u2014 your solidarity, made visible.' },
    palestine: { tag: '\ud83c\uddf5\ud83c\uddf8 Palestine', title: 'Palestine Collection', desc: 'Stand with Palestine. Every piece carries their flag, their symbols, their story.' },
    sudan: { tag: '\ud83c\uddf8\ud83c\udde9 Sudan', title: 'Sudan Collection', desc: 'For 10 million displaced Sudanese. Wear the colours. Keep the conversation alive.' },
    congo: { tag: '\ud83c\udde8\ud83c\udde9 DR Congo', title: 'Congo Collection', desc: 'The world\u2019s most forgotten crisis deserves to be seen. Wear their story.' },
    uyghur: { tag: '\u262a\ufe0f Uyghurs', title: 'Uyghur Collection', desc: 'Over 1 million detained. Wear the symbol of East Turkestan. Break the silence.' },
    climate: { tag: '\ud83c\udf0d Climate', title: 'Climate Collection', desc: 'For a planet worth fighting for. Every piece is a daily act of commitment.' },
    education: { tag: '\ud83d\udcda Education', title: 'Education Collection', desc: 'Knowledge is power. Wear the right to education for every child on earth.' }
};

function updatePageHero() {
    const info = causeHero[currentFilter] || causeHero.all;
    const tagEl = document.querySelector('.page-hero .section-tag');
    const titleEl = document.querySelector('.page-hero-title');
    const descEl = document.querySelector('.page-hero-desc');
    if (tagEl) tagEl.textContent = info.tag;
    if (titleEl) titleEl.textContent = info.title;
    if (descEl) descEl.textContent = info.desc;
    document.title = info.title + ' | Zenith';
}

// ─── RENDER PRODUCTS ──────────────────────────────────────────────────────────

function renderProducts() {
    if (!productsContainer) return;

    let filtered = currentFilter === 'all'
        ? productsData
        : productsData.filter(p => p.category === currentFilter);

    if (searchQuery) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchQuery) ||
            p.category.toLowerCase().includes(searchQuery)
        );
    }

    if (filtered.length === 0) {
        productsContainer.innerHTML = `
            <div class="empty-state">
                <ion-icon name="search-outline"></ion-icon>
                No products found. Try a different filter or search.
            </div>`;
        return;
    }

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-id', product.id);
        card.style.cursor = 'pointer';

        const badgeHTML = product.badge
            ? `<span class="product-badge badge-${product.badgeType}">${product.badge}</span>`
            : '';

        card.innerHTML = `
            ${badgeHTML}
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <div class="product-category-tag">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">$${product.price}</div>
                <button class="add-btn" id="add-btn-${product.id}" onclick="event.stopPropagation(); addToCart(${product.id})">
                    <ion-icon name="bag-add-outline"></ion-icon> Add to Cart
                </button>
            </div>
        `;

        // Click card → go to product page
        card.addEventListener('click', () => {
            window.location.href = `product.html?id=${product.id}`;
        });

        productsContainer.appendChild(card);
    });
}

// ─── OUR PRODUCTS (preview grid) ────────────────────────────────────────────
const causeColors = {
    palestine: '#009736',
    sudan: '#D21034',
    congo: '#007fff',
    uyghur: '#2563eb',
    education: '#d97706',
    climate: '#0891b2'
};

function renderOurProducts() {
    const grid = document.getElementById('our-products-grid');
    if (!grid) return;

    // Respect the active cause filter
    const toShow = currentFilter === 'all'
        ? productsData
        : productsData.filter(p => p.category === currentFilter);

    if (toShow.length === 0) {
        grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
            <ion-icon name="search-outline"></ion-icon>
            No products in this collection yet.
        </div>`;
        return;
    }

    grid.innerHTML = toShow.map(p => {
        const color = causeColors[p.category] || 'var(--accent-color)';
        const badgeHTML = p.badge ? `<span class="op-badge" style="background:${color}">${p.badge}</span>` : '';
        return `
        <a href="product.html?id=${p.id}" class="op-card">
            <div class="op-img-wrap">
                ${badgeHTML}
                <img src="${p.image}" alt="${p.name}" onerror="this.src='https://placehold.co/400x300/e2e8f0/64748b?text=Image'">
            </div>
            <div class="op-body">
                <div class="op-cause" style="color:${color}">${p.category.toUpperCase()}</div>
                <div class="op-name">${p.name}</div>
                <p class="op-desc">${p.desc.substring(0, 80)}…</p>
                <div class="op-footer">
                    <div class="op-price" style="color:${color}">$${p.price}</div>
                    <div class="op-cta">View <ion-icon name="arrow-forward-outline"></ion-icon></div>
                </div>
            </div>
        </a>`;
    }).join('');
}

// ─── PRODUCT DETAIL MODAL ────────────────────────────────────────────────────
function openProductModal(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const featuresHTML = product.features
        .map(f => `<li>${f}</li>`)
        .join('');

    modalInner.innerHTML = `
        <div class="modal-img-wrap">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-details">
            <div class="modal-category">${product.category}</div>
            <h2 class="modal-title">${product.name}</h2>
            <div class="modal-price">$${product.price}</div>
            <p class="modal-desc">${product.desc}</p>
            <ul class="modal-features">${featuresHTML}</ul>
            <button class="modal-add-btn" onclick="addToCart(${product.id}); closeModal();">
                <ion-icon name="bag-add-outline"></ion-icon> Add to Cart
            </button>
        </div>
    `;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
}

// ─── CART LOGIC ──────────────────────────────────────────────────────────────
window.addToCart = function (productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    if (cart[productId]) {
        cart[productId].quantity += 1;
    } else {
        cart[productId] = { product, quantity: 1 };
    }

    updateCart();
    persistCart();
    showToast(`${product.name} added to cart`);

    // Micro-animation
    if (cartBtn) {
        cartBtn.style.transform = 'scale(1.25) rotate(-12deg)';
        setTimeout(() => cartBtn.style.transform = 'scale(1) rotate(0deg)', 200);
    }
};

window.changeQty = function (productId, delta) {
    if (!cart[productId]) return;
    cart[productId].quantity += delta;
    if (cart[productId].quantity <= 0) {
        delete cart[productId];
    }
    updateCart();
    persistCart();
};

window.removeFromCart = function (productId) {
    delete cart[productId];
    updateCart();
    persistCart();
};

function updateCart() {
    const items = Object.values(cart);
    const totalQty = items.reduce((sum, e) => sum + e.quantity, 0);
    if (cartCount) cartCount.textContent = totalQty;
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (items.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align:center; color: var(--text-muted); margin-top: 2rem;">Your cart is empty.</p>';
    } else {
        items.forEach(({ product, quantity }) => {
            total += product.price * quantity;
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${product.name}</div>
                    <div class="cart-item-price">$${(product.price * quantity).toFixed(2)}</div>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="changeQty(${product.id}, -1)">−</button>
                        <span class="qty-value">${quantity}</span>
                        <button class="qty-btn" onclick="changeQty(${product.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${product.id})" title="Remove">&times;</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }

    if (cartTotalAmount) cartTotalAmount.textContent = '$' + total.toFixed(2);
}

function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('active');
}

if (cartBtn) cartBtn.addEventListener('click', toggleCart);
if (closeCartBtn) closeCartBtn.addEventListener('click', toggleCart);
if (cartOverlay) cartOverlay.addEventListener('click', toggleCart);

// ─── TOAST NOTIFICATIONS ─────────────────────────────────────────────────────
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<ion-icon name="checkmark-circle-outline"></ion-icon> ${message}`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ─── PERSIST CART ────────────────────────────────────────────────────────────
function persistCart() {
    localStorage.setItem('zenith_cart', JSON.stringify(cart));
}

// Restore cart from localStorage (object format)
const savedCart = localStorage.getItem('zenith_cart');
if (savedCart) {
    try {
        const parsed = JSON.parse(savedCart);
        // Support both old array format and new object format
        if (Array.isArray(parsed)) {
            parsed.forEach(item => {
                if (cart[item.id]) {
                    cart[item.id].quantity += 1;
                } else {
                    cart[item.id] = { product: item, quantity: 1 };
                }
            });
        } else {
            cart = parsed;
        }
    } catch (e) {
        cart = {};
    }
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
updatePageHero();    // set title/tag/desc based on initial filter
renderProducts();
renderOurProducts();
updateCart();

// ─── NAV / HAMBURGER JS ───────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileDrawer = document.getElementById('mobile-drawer');
const navOverlay = document.getElementById('nav-overlay');
const drawerClose = document.getElementById('drawer-close');
const drawerThemeBtn = document.getElementById('drawer-theme-btn');
const drawerThemeIcon = document.getElementById('drawer-theme-icon');

function openDrawer() {
    mobileDrawer.classList.add('open');
    navOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

// ─── CONTACT/REQUEST FORM JS ──────────────────────────────────────────────────
window.handleFormSubmit = function (event) {
    event.preventDefault();
    const btn = document.getElementById('form-submit-btn');
    const successMsg = document.getElementById('form-success');

    // Simulate network request
    btn.innerHTML = '<ion-icon name="hourglass-outline"></ion-icon> Sending...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = '<ion-icon name="send-outline"></ion-icon> Send Message';
        btn.disabled = false;
        successMsg.style.display = 'flex';
        document.getElementById('request-form').reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 5000);

        showToast('Message sent successfully!');
    }, 800);
}


function closeDrawer() {
    mobileDrawer.classList.remove('open');
    navOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', openDrawer);
drawerClose.addEventListener('click', closeDrawer);
navOverlay.addEventListener('click', closeDrawer);

// ESC closes drawer and modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDrawer();
        closeModal();
    }
});

// Drawer theme toggle (mirrors main toggle)
function syncDrawerThemeBtn() {
    const isDark = document.body.classList.contains('dark-theme');
    drawerThemeIcon.setAttribute('name', isDark ? 'sunny-outline' : 'moon-outline');
    drawerThemeBtn.querySelector('ion-icon').nextSibling.textContent = isDark ? ' Light Mode' : ' Dark Mode';
}

// Resync drawer icon whenever main theme is toggled
themeToggleBtn.addEventListener('click', syncDrawerThemeBtn, { capture: false });
drawerThemeBtn.addEventListener('click', () => {
    themeToggleBtn.click(); // triggers the main toggle logic
});

syncDrawerThemeBtn(); // initial sync

// setFilter: used by nav links to jump to a category on the product page
window.setFilter = function (category) {
    // If already on index.html, apply filter directly
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        const btn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
        if (btn) btn.click();
    }
    // If navigating, the href="index.html" handles navigation, filter btn click fires after load (handled via hash if needed)
    closeDrawer();
};

