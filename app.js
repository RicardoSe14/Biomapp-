const seedStores = [
    { name: "La Cumbre Coffee", desc: "Café de especialidad con granos orgánicos y vista a la montaña.", loc: "Sector Alto, Local 4", phone: "+56911111111", category: "Gastronomía", hours: "09:00 - 20:00", distance: "450 mts", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500", products: [
        { name: "Espresso Orgánico", price: "2500", desc: "Grano arábica seleccionado.", image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400" },
        { name: "Muffin de Arándanos", price: "1800", desc: "Horneado hoy con fruta local.", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400" }
    ] },
    { name: "Ruta Verde Trekking", desc: "Guías expertos en senderismo y avistamiento de aves locales.", loc: "Camino al Volcán km 12", phone: "+56922222222", category: "Aventura", hours: "07:00 - 18:00", distance: "2.5 km", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500", products: [
        { name: "Tour Glaciar", price: "45000", desc: "Día completo con equipo incluido.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400" },
        { name: "Arriendo Bastones", price: "5000", desc: "Par de bastones de fibra de carbono.", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=400" }
    ] },
    { name: "Zen Garden Spa", desc: "Masajes terapéuticos y meditación guiada frente al río.", loc: "Pasaje Los Pinos 45", phone: "+56933333333", category: "Descanso", hours: "10:00 - 19:00", distance: "1.2 km", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600", products: [
        { name: "Masaje Descontracturante", price: "25000", desc: "60 min de relajación profunda.", image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400" },
        { name: "Aceite de Lavanda", price: "8500", desc: "Esencia pura para dormir mejor.", image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=400" }
    ] },
    { name: "Museo sobre el mar", desc: "Artesanías con conchitas y tours sobre la historia geológica de la zona.", loc: "Plaza Central 102", phone: "+56944444444", category: "Cultura", hours: "10:00 - 17:00", distance: "800 mts", image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600", products: [
        { name: "Collar de Nácar", price: "12000", desc: "Hecho a mano con conchas recolectadas.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400" },
        { name: "Libro: Historia Costera", price: "15000", desc: "Relatos de los antiguos navegantes.", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400" }
    ] },
    { name: "EcoBici Alquiler", desc: "Arriendo de bicicletas eléctricas y equipo de seguridad.", loc: "Entrada Parque Nacional", phone: "+56955555555", category: "Aventura", hours: "08:00 - 20:00", distance: "3.1 km", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600", products: [
        { name: "Arriendo E-Bike 4h", price: "18000", desc: "Batería cargada y casco incluido.", image: "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=400" }
    ] },
    { name: "Pizzería del Bosque", desc: "Pizzas a la piedra con ingredientes recolectados localmente.", loc: "Av. Principal 560", phone: "+56966666666", category: "Gastronomía", hours: "18:00 - 00:00", distance: "150 mts", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500", products: [
        { name: "Pizza Funghi", price: "9500", desc: "Setas silvestres y queso de campo.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400" },
        { name: "Jugo Natural 500ml", price: "2500", desc: "Fruta de la estación.", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400" }
    ] },
    { name: "Vivero El Brote", desc: "Especies nativas y talleres de huerta orgánica urbana.", loc: "Camino Rural s/n", phone: "+56977777777", category: "Naturaleza", hours: "09:00 - 18:00", distance: "5.4 km", image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500", products: [
        { name: "Pack Suculentas (3)", price: "6000", desc: "Ideales para departamentos.", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400" }
    ] },
    { name: "Té y Calma", desc: "Salón de té especializado en mezclas de hierbas silvestres.", loc: "Callejón Secreto 12", phone: "+56988888888", category: "Descanso", hours: "16:00 - 21:00", distance: "950 mts", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600", products: [
        { name: "Infusión del Bosque", price: "3200", desc: "Mezcla de menta, boldo y cedrón.", image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400" }
    ] },
    { name: "Galpón de los Libros", desc: "Librería de usados y café literario con eventos culturales.", loc: "Antiguo Galpón Ferroviario", phone: "+56999999999", category: "Cultura", hours: "11:00 - 20:00", distance: "2.1 km", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500", products: [
        { name: "Novela Usada", price: "4000", desc: "Títulos clásicos en buen estado.", image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400" }
    ] },
    { name: "Refugio del Cóndor", desc: "Alojamiento sustentable con energía solar y huella cero.", loc: "Mirador del Valle", phone: "+5612345678", category: "Naturaleza", hours: "24/7", distance: "8.7 km", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600", products: [
        { name: "Noche en Cabaña", price: "65000", desc: "Para 2 personas con desayuno.", image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&q=80&w=400" }
    ] }
];
let currentUser = JSON.parse(localStorage.getItem('activeBiomer')) || null;
// Si no hay tiendas guardadas, usa las 10 de ejemplo
let allStores = JSON.parse(localStorage.getItem('biomaStores')) || seedStores;

// Guardar las semillas si es la primera vez que se entra
if (!localStorage.getItem('biomaStores')) {
    localStorage.setItem('biomaStores', JSON.stringify(seedStores));
}

let currentCategory = 'Todas';
let searchQuery = "";

const DEFAULT_AVATAR = "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix";
const DEFAULT_STORE_IMG = "https://via.placeholder.com/600x400?text=Bioma+Tienda";

// --- 2. UTILIDADES ---

// Genera una distancia al azar entre metros y kilómetros
const generarDistanciaAleatoria = () => {
    if (Math.random() > 0.5) {
        const mts = Math.floor(Math.random() * (950 - 50 + 1)) + 50;
        return `${mts} mts`;
    } else {
        const km = (Math.random() * (10 - 1) + 1).toFixed(1);
        return `${km} km`;
    }
};

// Comprime y procesa imágenes a Base64
async function processImage(file) {
    if (!file) return null;
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 800;
                const scale = MAX_WIDTH / img.width;
                canvas.width = MAX_WIDTH;
                canvas.height = img.height * scale;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL('image/jpeg', 0.6));
            };
        };
    });
}

// --- 3. NAVEGACIÓN Y UI ---

window.onload = () => {
    if (currentUser) syncUserUI();
    renderHomeStores();
    initMap();
};

function toggleElement(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const isOpening = el.classList.contains('hidden');
    if (id === 'login-drawer') document.getElementById('dropdown-menu')?.classList.add('hidden');
    el.classList.toggle('hidden');

    if (isOpening) {
        const closeOnClickOutside = (e) => {
            if (!e.target.closest('#' + id) && !e.target.closest('#btn-login-toggle')) {
                el.classList.add('hidden');
                window.removeEventListener('click', closeOnClickOutside);
            }
        };
        setTimeout(() => window.addEventListener('click', closeOnClickOutside), 1);
    }
}

function toggleDropdown() {
    const drop = document.getElementById('dropdown-menu');
    document.getElementById('login-drawer')?.classList.add('hidden');
    drop.classList.toggle('hidden');
    
    if (!drop.classList.contains('hidden')) {
        const close = (e) => {
            if (!e.target.closest('#menu-logged')) {
                drop.classList.add('hidden');
                window.removeEventListener('click', close);
            }
        };
        setTimeout(() => window.addEventListener('click', close), 1);
    }
}

function showSection(sectionId) {
    const mainSections = document.querySelectorAll('main > section');
    mainSections.forEach(sec => sec.classList.add('hidden'));

    const target = document.getElementById(`sec-${sectionId}`);
    if (target) target.classList.remove('hidden');

    const banner = document.getElementById('hero-banner');
    if (banner) {
        sectionId === 'home' ? banner.classList.remove('hidden') : banner.classList.add('hidden');
    }

    document.getElementById('dropdown-menu')?.classList.add('hidden');
    document.getElementById('login-drawer')?.classList.add('hidden');
    
    if (sectionId === 'home') renderHomeStores();
    if (sectionId === 'profile') renderProfile();
    if (sectionId === 'my-store') renderMyStoreView();

    window.scrollTo(0, 0);
}

// --- 4. GESTIÓN DE USUARIO ---

document.getElementById('reg-form').onsubmit = async (e) => {
    e.preventDefault();
    const avatar = await processImage(document.getElementById('r-avatar').files[0]);
    const newUser = {
        name: document.getElementById('r-name').value,
        email: document.getElementById('r-email').value,
        pass: document.getElementById('r-pass').value,
        avatar: avatar || DEFAULT_AVATAR,
        store: null
    };
    localStorage.setItem(`userDB_${newUser.email}`, JSON.stringify(newUser));
    alert("¡Registro completo!");
    closeRegisterModal();
};

function handleLogin() {
    const email = document.getElementById('log-email').value;
    const pass = document.getElementById('log-pass').value;
    const user = JSON.parse(localStorage.getItem(`userDB_${email}`));
    if (user && user.pass === pass) {
        currentUser = user;
        saveState();
        syncUserUI();
        showSection('home');
    } else alert("Datos incorrectos");
}

function logout() { 
    localStorage.removeItem('activeBiomer'); 
    location.reload(); 
}

function syncUserUI() {
    document.getElementById('nav-user-greeting').innerText = `Hola, ${currentUser.name.split(' ')[0]}`;
    document.getElementById('drop-user-name').innerText = currentUser.name;
    document.getElementById('nav-avatar-img').src = currentUser.avatar;
    document.getElementById('btn-login-toggle').classList.add('hidden');
    document.getElementById('menu-logged').classList.remove('hidden');
}

// --- 5. PERFIL DE USUARIO ---

function renderProfile() {
    document.getElementById('prof-name-text').innerText = currentUser.name;
    document.getElementById('prof-email-text').innerText = currentUser.email;
    document.getElementById('prof-img-big').src = currentUser.avatar;
    document.getElementById('edit-prof-name').value = currentUser.name;
}

function toggleEditProfile(editing) {
    document.getElementById('profile-display').classList.toggle('hidden', editing);
    document.getElementById('profile-edit').classList.toggle('hidden', !editing);
}

function saveProfile() {
    currentUser.name = document.getElementById('edit-prof-name').value;
    saveState();
    syncUserUI();
    renderProfile();
    toggleEditProfile(false);
}

async function updateProfileAvatar(input) {
    const base64 = await processImage(input.files[0]);
    if(base64) { 
        currentUser.avatar = base64; 
        saveState(); 
        syncUserUI(); 
        renderProfile(); 
    }
}

// --- 6. GESTIÓN DE TIENDA ---

function enableEditStore() {
    const s = currentUser.store;
    document.getElementById('st-name').value = s.name;
    document.getElementById('st-desc').value = s.desc;
    document.getElementById('st-loc').value = s.loc;
    document.getElementById('st-phone').value = s.phone || "";
    document.getElementById('st-category').value = s.category || "";
    document.getElementById('st-hours').value = s.hours;
    
    document.getElementById('store-dashboard').classList.add('hidden');
    document.getElementById('form-store-container').classList.remove('hidden');
}

document.getElementById('store-form').onsubmit = async (e) => {
    e.preventDefault();
    const img = await processImage(document.getElementById('st-img').files[0]);
    const isEdit = !!currentUser.store;
    const oldName = isEdit ? currentUser.store.name : "";

    const storeData = {
        name: document.getElementById('st-name').value,
        desc: document.getElementById('st-desc').value,
        loc: document.getElementById('st-loc').value,
        phone: document.getElementById('st-phone').value,
        category: document.getElementById('st-category').value,
        hours: document.getElementById('st-hours').value,
        // Asigna distancia solo si es nueva
        distance: isEdit ? (currentUser.store.distance || generarDistanciaAleatoria()) : generarDistanciaAleatoria(),
        image: img || (isEdit ? currentUser.store.image : DEFAULT_STORE_IMG),
        products: isEdit ? currentUser.store.products : []
    };

    currentUser.store = storeData;
    const idx = allStores.findIndex(s => s.name === oldName);
    if(idx > -1) allStores[idx] = storeData; else allStores.push(storeData);
    
    saveState();
    renderMyStoreView();
    renderHomeStores();
};

function renderMyStoreView() {
    if(!currentUser.store) {
        document.getElementById('no-store-view').classList.remove('hidden');
        document.getElementById('store-dashboard').classList.add('hidden');
        return;
    }
    document.getElementById('no-store-view').classList.add('hidden');
    document.getElementById('form-store-container').classList.add('hidden');
    document.getElementById('store-dashboard').classList.remove('hidden');
    const s = currentUser.store;
    document.getElementById('store-info-display').innerHTML = `
        <img src="${s.image}" class="w-32 h-32 md:w-48 md:h-48 object-cover rounded-2xl shadow">
        <div class="flex-1">
            <h3 class="text-3xl font-black text-biomer">${s.name}</h3>
            <p class="text-gray-500 italic">${s.desc}</p>
            <p class="text-sm font-bold mt-2">📍 ${s.loc} | 🕒 ${s.hours}</p>
            <p class="text-xs font-bold text-biomer mt-1">📏 Distancia: ${s.distance}</p>
        </div>
    `;
    renderMyProducts();
}

// --- 7. GESTIÓN DE PRODUCTOS ---

document.getElementById('product-form').onsubmit = async (e) => {
    e.preventDefault();
    const idx = parseInt(document.getElementById('edit-prod-index').value);
    const img = await processImage(document.getElementById('p-img').files[0]);
    
    const prod = {
        name: document.getElementById('p-name').value,
        price: document.getElementById('p-price').value,
        desc: document.getElementById('p-desc').value,
        image: img || (idx > -1 ? currentUser.store.products[idx].image : null)
    };

    if(!prod.image) return alert("Sube una imagen para el producto");

    // 1. Actualizar en el objeto del Usuario actual
    if(idx > -1) {
        currentUser.store.products[idx] = prod;
    } else {
        currentUser.store.products.push(prod);
    }

    // 2. LA CLAVE: Actualizar en la lista global de tiendas (allStores)
    // Buscamos nuestra tienda en la lista global para que los demás la vean
    const storeIdx = allStores.findIndex(s => s.name === currentUser.store.name);
    if (storeIdx > -1) {
        allStores[storeIdx].products = [...currentUser.store.products];
    }

    saveState(); // Esto guarda ambos cambios en LocalStorage
    resetProductForm();
    renderMyProducts();
    toggleProductForm();
    
    alert("¡Producto publicado exitosamente!");
};

function editProduct(i) {
    const p = currentUser.store.products[i];
    document.getElementById('p-name').value = p.name;
    document.getElementById('p-price').value = p.price;
    document.getElementById('p-desc').value = p.desc;
    document.getElementById('edit-prod-index').value = i;
    document.getElementById('prod-form-title').innerText = "Editando Producto";
    document.getElementById('btn-prod-submit').innerText = "Guardar Cambios";
    document.getElementById('btn-prod-cancel').classList.remove('hidden');
}

function resetProductForm() {
    document.getElementById('product-form').reset();
    document.getElementById('edit-prod-index').value = "-1";
    document.getElementById('prod-form-title').innerText = "Agregar Producto / Servicio";
    document.getElementById('btn-prod-submit').innerText = "Añadir Producto";
    document.getElementById('btn-prod-cancel').classList.add('hidden');
}

function renderMyProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = currentUser.store.products.map((p, i) => `
        <div class="bg-white p-3 rounded-2xl border relative group">
            <button onclick="editProduct(${i})" class="absolute top-2 right-2 bg-white p-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition text-xs">✏️</button>
            <img src="${p.image}" class="w-full h-40 object-cover rounded-xl mb-2">
            <h5 class="font-bold text-xs truncate">${p.name}</h5>
            <p class="text-biomer font-black">$${p.price}</p>
        </div>
    `).join('');
}

// --- 8. FILTROS Y BÚSQUEDA ---

function filterByCategory(category) {
    currentCategory = category;
    const buttons = document.querySelectorAll('.category-pill');
    buttons.forEach(btn => {
        const textEl = btn.querySelector('.pill-text');
        if (textEl) {
            const btnText = textEl.innerText.trim();
            if (category.toUpperCase() === btnText.toUpperCase()) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        }
    });
    renderHomeStores();
}

function handleSearch() {
    searchQuery = document.getElementById('store-search').value.toLowerCase();
    const clearBtn = document.getElementById('clear-search');
    searchQuery.length > 0 ? clearBtn.classList.remove('hidden') : clearBtn.classList.add('hidden');
    renderHomeStores();
}

function clearSearch() {
    const searchInput = document.getElementById('store-search');
    searchInput.value = "";
    searchQuery = "";
    document.getElementById('clear-search').classList.add('hidden');
    renderHomeStores();
}

// --- 9. RENDERIZADO PRINCIPAL (HOME) ---

function renderHomeStores() {
    const list = document.getElementById('stores-list');
    if (!list) return;

    // 1. Filtrar
    let filteredStores = allStores.filter(s => {
        const isNotMyStore = !currentUser || !currentUser.store || s.name !== currentUser.store.name;
        const matchesCategory = currentCategory === 'Todas' || s.category === currentCategory;
        const matchesSearch = s.name.toLowerCase().includes(searchQuery) || 
                              s.desc.toLowerCase().includes(searchQuery);
        return isNotMyStore && matchesCategory && matchesSearch;
    });

    // 2. Función auxiliar interna para normalizar distancias
    const getMeters = (distStr) => {
        if (!distStr) return Infinity;
        const value = parseFloat(distStr.replace(',', '.')); // Maneja comas por si acaso
        return distStr.toLowerCase().includes('km') ? value * 1000 : value;
    };

    // 3. ORDENAR de menor a mayor distancia
    filteredStores.sort((a, b) => getMeters(a.distance) - getMeters(b.distance));

    // 4. Renderizar
    if (filteredStores.length === 0) {
        list.innerHTML = `<div class="col-span-full text-center py-20 bg-white/50 rounded-3xl border-2 border-dashed border-gray-200">
            <p class="text-gray-400 italic">No hay tiendas que coincidan con los filtros.</p>
        </div>`;
        return;
    }

    list.innerHTML = filteredStores.map((s, index) => `
        <div onclick="viewStoreDetails('${s.name}')" class="bg-white p-4 rounded-3xl border hover:shadow-xl transition-all cursor-pointer group relative">
            ${index === 0 ? '<span class="absolute -top-2 -right-2 z-10 bg-yellow-400 text-black text-[9px] font-black px-3 py-1 rounded-full shadow-sm border border-white animate-bounce">MÁS CERCANO</span>' : ''}
            
            <div class="overflow-hidden rounded-2xl mb-4 relative h-48">
                <img src="${s.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <span class="absolute top-2 right-2 bg-biomer text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm">
                    ${s.category || 'Biomer'}
                </span>
            </div>
            <h4 class="font-bold text-lg italic text-gray-800">${s.name}</h4>
            <p class="text-xs text-gray-500 line-clamp-2 mb-3">${s.desc}</p>
            <div class="flex justify-between items-center border-t pt-3">
                <p class="text-[10px] font-bold text-gray-400 uppercase">📍 ${s.loc}</p>
                <p class="text-[10px] font-bold text-biomer">📏 A ${s.distance || '1.2 km'}</p>
                <span class="text-biomer font-black text-xs uppercase tracking-widest">Ver más +</span>
            </div>
        </div>
    `).join('');
}

// --- 10. VISTA DETALLADA DE TIENDA ---

function viewStoreDetails(storeName) {
    const store = allStores.find(s => s.name === storeName);
    if (!store) return;

    document.querySelectorAll('main > section').forEach(s => s.classList.add('hidden'));
    document.getElementById('sec-store-view').classList.remove('hidden');
    window.scrollTo(0, 0);

    const header = document.getElementById('public-store-header');
    header.innerHTML = `
        <img src="${store.image}" class="w-full md:w-64 h-64 object-cover rounded-2xl shadow-lg">
        <div class="flex-1 space-y-4">
            <div class="bg-gray-100 text-gray-600 text-[10px] font-black px-3 py-1 rounded-full uppercase inline-block">${store.category}</div>
            <h2 class="text-4xl font-black text-gray-800 italic">${store.name}</h2>
            <p class="text-gray-600 leading-relaxed">${store.desc}</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                <p class="text-sm"><strong>📍 Ubicación:</strong> ${store.loc}</p>
                <p class="text-sm"><strong>🕒 Horario:</strong> ${store.hours}</p>
                <p class="text-sm text-biomer"><strong>📏 Distancia:</strong> A ${store.distance}</p>
            </div>
            <button class="bg-biomer text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:brightness-110 transition">
                Contactar por WhatsApp
            </button>
        </div>
    `;

    const grid = document.getElementById('public-products-grid');
    if (store.products.length === 0) {
        grid.innerHTML = "<p class='col-span-full text-center text-gray-400 italic py-10'>Esta tienda aún no tiene productos.</p>";
    } else {
        grid.innerHTML = store.products.map(p => `
            <div class="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-md transition">
                <img src="${p.image}" class="w-full h-40 object-cover">
                <div class="p-4">
                    <h5 class="font-bold text-gray-800 truncate">${p.name}</h5>
                    <p class="text-[10px] text-gray-500 line-clamp-2 mb-2">${p.desc}</p>
                    <span class="text-biomer font-black">$${p.price}</span>
                </div>
            </div>
        `).join('');
    }
}

// --- 11. SISTEMA Y MAPA ---

function saveState() {
    if (currentUser) {
        localStorage.setItem('activeBiomer', JSON.stringify(currentUser));
        localStorage.setItem(`userDB_${currentUser.email}`, JSON.stringify(currentUser));
    }
    localStorage.setItem('biomaStores', JSON.stringify(allStores));
}

function initMap() {
    const mapEl = document.getElementById('map');
    if (mapEl) {
        const map = L.map('map').setView([-33.4489, -70.6693], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    }
}

function openRegisterModal() { 
    document.getElementById('login-drawer').classList.add('hidden'); 
    document.getElementById('modal-reg').classList.remove('hidden'); 
}

function closeRegisterModal() { 
    document.getElementById('modal-reg').classList.add('hidden'); 
}

function toggleProductForm() {
    const body = document.getElementById('product-form-body');
    const chevron = document.getElementById('form-chevron');
    
    const isHidden = body.classList.contains('hidden');
    
    if (isHidden) {
        body.classList.remove('hidden');
        chevron.innerText = '－'; 
    } else {
        body.classList.add('hidden');
        chevron.innerText = '＋';
    }
}

// Convierte "500 mts" o "1.5 km" a un número comparable (metros)
const parseDistanceToMeters = (distStr) => {
    if (!distStr) return Infinity; // Si no tiene distancia, lo manda al final
    const value = parseFloat(distStr);
    return distStr.includes('km') ? value * 1000 : value;
};

function updateRegisterAvatarLabel(input) {
    const textLabel = document.getElementById('reg-avatar-text');
    const previewDiv = document.getElementById('reg-avatar-preview');
    
    if (input.files && input.files[0]) {
        const file = input.files[0];
        textLabel.innerText = "¡Foto seleccionada!";
        textLabel.classList.remove('text-gray-600');
        textLabel.classList.add('text-biomer');
        
        // Opcional: Mostrar previsualización rápida
        const reader = new FileReader();
        reader.onload = function(e) {
            previewDiv.innerHTML = `<img src="${e.target.result}" class="w-full h-full object-cover">`;
        }
        reader.readAsDataURL(file);
    } else {
        textLabel.innerText = "Subir foto de perfil";
        previewDiv.innerHTML = "👤";
    }
}

// Cerrar modal al hacer clic fuera de la tarjeta
window.onclick = function(event) {
    const modal = document.getElementById('modal-store-details');
    const modalContent = modal.querySelector('.bg-white'); // Buscamos la tarjeta blanca

    // Si el modal está visible Y el clic fue en el fondo negro (el modal mismo)
    if (event.target == modal) {
        closeStoreDetails();
    }
}

// Extra: Cerrar con la tecla Escape
window.onkeydown = function(event) {
    if (event.key === "Escape") {
        closeStoreDetails();
    }
}