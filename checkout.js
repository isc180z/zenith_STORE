const checkoutItemsContainer = document.getElementById('checkout-items');
const summarySubtotal = document.getElementById('summary-subtotal');
const summaryTotal = document.getElementById('summary-total');
const checkoutForm = document.getElementById('checkout-form');
const successModal = document.getElementById('success-modal');
const themeToggleBtn = document.getElementById('theme-toggle');

// ─── THEME ────────────────────────────────────────────────────────────────────
const isDarkInit = localStorage.getItem('theme') === 'dark';
if (isDarkInit) {
    document.body.classList.add('dark-theme');
    themeToggleBtn.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggleBtn.innerHTML = isDark
        ? '<ion-icon name="sunny-outline"></ion-icon>'
        : '<ion-icon name="moon-outline"></ion-icon>';
});

// ─── LOAD CART ────────────────────────────────────────────────────────────────
let cart = {};
const savedCart = localStorage.getItem('zenith_cart');
if (savedCart) {
    try {
        const parsed = JSON.parse(savedCart);
        // Support old array format (migrate to object) and new object format
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

// ─── RENDER ORDER SUMMARY ─────────────────────────────────────────────────────
function renderOrderSummary() {
    checkoutItemsContainer.innerHTML = '';
    const items = Object.values(cart);
    let total = 0;

    if (items.length === 0) {
        checkoutItemsContainer.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 2rem;">Your cart is empty.</p>';
        const submitBtn = document.getElementById('submit-btn');
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.5';
        submitBtn.style.cursor = 'not-allowed';
    } else {
        items.forEach(({ product, quantity }) => {
            total += product.price * quantity;
            const el = document.createElement('div');
            el.className = 'summary-item';
            el.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="summary-info">
                    <div class="summary-title">${product.name}</div>
                    <div class="summary-qty">Qty: ${quantity}</div>
                    <div class="summary-price">$${(product.price * quantity).toFixed(2)}</div>
                </div>
            `;
            checkoutItemsContainer.appendChild(el);
        });
    }

    summarySubtotal.textContent = '$' + total.toFixed(2);
    summaryTotal.textContent = '$' + total.toFixed(2);
}

renderOrderSummary();

// ─── AUTO-FILL INPUT FORMATTING ───────────────────────────────────────────────
const cardInput = document.getElementById('card');
cardInput.addEventListener('input', () => {
    let val = cardInput.value.replace(/\D/g, '').substring(0, 16);
    cardInput.value = val.replace(/(.{4})/g, '$1 ').trim();
});

const expiryInput = document.getElementById('expiry');
expiryInput.addEventListener('input', () => {
    let val = expiryInput.value.replace(/\D/g, '').substring(0, 4);
    if (val.length >= 3) val = val.substring(0, 2) + '/' + val.substring(2);
    expiryInput.value = val;
});

const cvvInput = document.getElementById('cvv');
cvvInput.addEventListener('input', () => {
    cvvInput.value = cvvInput.value.replace(/\D/g, '').substring(0, 4);
});

// ─── FORM SUBMISSION ──────────────────────────────────────────────────────────
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (Object.keys(cart).length === 0) return;

    const btn = document.getElementById('submit-btn');
    btn.innerHTML = '<ion-icon name="sync-outline" style="animation: spin 1s linear infinite;"></ion-icon> Processing...';
    btn.style.pointerEvents = 'none';

    setTimeout(() => {
        localStorage.removeItem('zenith_cart');
        successModal.classList.add('active');
    }, 1800);
});

// Spin animation
const style = document.createElement('style');
style.innerHTML = `@keyframes spin { 100% { transform: rotate(360deg); } }`;
document.head.appendChild(style);
