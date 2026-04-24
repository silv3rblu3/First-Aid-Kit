// 1. THE DEFAULT BLUEPRINT
const defaultState = {
    activeCategoryId: 'cat_1',
    settingsMode: false,
    activeThemeId: 'theme-winchester',
    editingThemeId: null, 
    themes: [
        { id: 'theme-winchester', name: 'Winchester Lake', colors: { primary: '#2d5a27', primaryHover: '#1e3d1a', surface: '#ffffff', background: '#e9f0eb', textMain: '#1a1a1a', textMuted: '#4a5c48', border: '#b4c7b6', danger: '#d9381e', tabInactive: '#cce0d0', printBtn: '#34a853', printBtnHover: '#2b8c45' } },
        { id: 'theme-ponderosa', name: 'Ponderosa Pine', colors: { primary: '#8b5a2b', primaryHover: '#6b4521', surface: '#fffdf7', background: '#f4eee1', textMain: '#2b1f14', textMuted: '#6b5c4b', border: '#d4c4b4', danger: '#c23b22', tabInactive: '#e4d8c8', printBtn: '#5b8a72', printBtnHover: '#466e5a' } },
        { id: 'theme-craters', name: 'Craters of the Moon', colors: { primary: '#ff4500', primaryHover: '#cc3700', surface: '#2b2b2b', background: '#1a1a1a', textMain: '#f0f0f0', textMuted: '#a0a0a0', border: '#444444', danger: '#ff6b6b', tabInactive: '#3a3a3a', printBtn: '#007acc', printBtnHover: '#005f9e' } }
    ],
    categories: [
        { id: 'cat_1', name: 'Park Vehicles', count: 1, calcMethod: 'direct' },
        { id: 'cat_2', name: 'Maintenance Shop', count: 5, calcMethod: 'per5' },
        { id: 'cat_3', name: 'Admin Office', count: 5, calcMethod: 'per5' }
    ],
    items: [
        // --- VEHICLE KITS (cat_1) ---
        { id: 'v1', categoryId: 'cat_1', name: 'CAT Tourniquet Gen 7', base: 1, onHand: 0 },
        { id: 'v2', categoryId: 'cat_1', name: '4 in Israeli Bandage', base: 1, onHand: 0 },
        { id: 'v3', categoryId: 'cat_1', name: '6 in Israeli Bandage', base: 1, onHand: 0 },
        { id: 'v4', categoryId: 'cat_1', name: 'QuikClot or Celox Rapid Hemostatic Gauze', base: 1, onHand: 0 },
        { id: 'v5', categoryId: 'cat_1', name: 'HyFin Vent Chest Seal Twin Pack', base: 1, onHand: 0 },
        { id: 'v6', categoryId: 'cat_1', name: 'Trauma Shears', base: 1, onHand: 0 },
        { id: 'v7', categoryId: 'cat_1', name: 'Rolled Gauze / Kerlix', base: 5, onHand: 0 },
        { id: 'v8', categoryId: 'cat_1', name: '4 in x 4 in Sterile Gauze Pads', base: 10, onHand: 0 },
        { id: 'v9', categoryId: 'cat_1', name: '2 in x 2 in Sterile Gauze Pads', base: 10, onHand: 0 },
        { id: 'v10', categoryId: 'cat_1', name: 'Medical Tape Roll', base: 1, onHand: 0 },
        { id: 'v11', categoryId: 'cat_1', name: 'Assorted Fabric Bandages', base: 30, onHand: 0 },
        { id: 'v12', categoryId: 'cat_1', name: 'Mylar Emergency Blanket', base: 2, onHand: 0 },
        { id: 'v13', categoryId: 'cat_1', name: '36 in SAM Splint', base: 1, onHand: 0 },
        { id: 'v14', categoryId: 'cat_1', name: 'ACE Wrap', base: 1, onHand: 0 },
        { id: 'v15', categoryId: 'cat_1', name: 'Nitrile Gloves (Pairs)', base: 6, onHand: 0 },
        { id: 'v16', categoryId: 'cat_1', name: 'Headlamp with extra batteries', base: 1, onHand: 0 },
        { id: 'v17', categoryId: 'cat_1', name: 'Seatbelt Cutter / Window Punch', base: 1, onHand: 0 },

        // --- SHOP KIT (cat_2) ---
        { id: 's1', categoryId: 'cat_2', name: 'CAT Tourniquet Gen 7', base: 1, onHand: 0 },
        { id: 's2', categoryId: 'cat_2', name: 'Steri-Strips / Butterfly Closures', base: 10, onHand: 0 },
        { id: 's3', categoryId: 'cat_2', name: 'Super Glue / CA Glue', base: 1, onHand: 0 },
        { id: 's4', categoryId: 'cat_2', name: 'Heavy Duty Fabric Knuckle and Fingertip Bandages', base: 30, onHand: 0 },
        { id: 's5', categoryId: 'cat_2', name: 'Hemostatic Dressing', base: 1, onHand: 0 },
        { id: 's6', categoryId: 'cat_2', name: 'Assorted Ziplock Bags', base: 5, onHand: 0 },
        { id: 's7', categoryId: 'cat_2', name: 'Instant Cold Pack', base: 2, onHand: 0 },
        { id: 's8', categoryId: 'cat_2', name: '16 oz Sterile Saline Eye Wash', base: 2, onHand: 0 },
        { id: 's9', categoryId: 'cat_2', name: 'Burn Gel / Hydrogel Dressing', base: 5, onHand: 0 },
        { id: 's10', categoryId: 'cat_2', name: 'Tegaderm / Transparent Dressing', base: 5, onHand: 0 },
        { id: 's11', categoryId: 'cat_2', name: 'Fine-tipped Stainless Steel Tweezers', base: 1, onHand: 0 },
        { id: 's12', categoryId: 'cat_2', name: 'Magnifying Glass / Loupe', base: 1, onHand: 0 },
        { id: 's13', categoryId: 'cat_2', name: 'Sterile Needles', base: 5, onHand: 0 },

        // --- PARK OFFICE KIT (cat_3) ---
        { id: 'o1', categoryId: 'cat_3', name: 'Adhesive Bandages', base: 16, onHand: 0 },
        { id: 'o2', categoryId: 'cat_3', name: 'Antibiotic Ointment Packets', base: 10, onHand: 0 },
        { id: 'o3', categoryId: 'cat_3', name: 'Antiseptic Wipes / BZK Towelettes', base: 10, onHand: 0 },
        { id: 'o4', categoryId: 'cat_3', name: 'Burn Treatment Gel Packets', base: 10, onHand: 0 },
        { id: 'o5', categoryId: 'cat_3', name: '4 in x 4 in Gel Soaked Burn Dressing', base: 1, onHand: 0 },
        { id: 'o6', categoryId: 'cat_3', name: 'CPR Face Shield', base: 1, onHand: 0 },
        { id: 'o7', categoryId: 'cat_3', name: 'Instant Chemical Cold Pack', base: 1, onHand: 0 },
        { id: 'o8', categoryId: 'cat_3', name: '1 oz Sterile Eye Wash', base: 1, onHand: 0 },
        { id: 'o9', categoryId: 'cat_3', name: 'Sterile Eye Pads', base: 2, onHand: 0 },
        { id: 'o10', categoryId: 'cat_3', name: 'Hand Sanitizer Packets', base: 6, onHand: 0 },
        { id: 'o11', categoryId: 'cat_3', name: 'Nitrile Gloves (Pairs)', base: 2, onHand: 0 },
        { id: 'o12', categoryId: 'cat_3', name: '2 in Roller Bandage', base: 1, onHand: 0 },
        { id: 'o13', categoryId: 'cat_3', name: 'Scissors', base: 1, onHand: 0 },
        { id: 'o14', categoryId: 'cat_3', name: '5 in x 9 in Trauma Pads', base: 2, onHand: 0 },
        { id: 'o15', categoryId: 'cat_3', name: '3 in x 3 in Sterile Gauze Pads', base: 4, onHand: 0 },
        { id: 'o16', categoryId: 'cat_3', name: 'Medical Tape Roll', base: 1, onHand: 0 },
        { id: 'o17', categoryId: 'cat_3', name: 'Triangular Bandage', base: 1, onHand: 0 },
        { id: 'o18', categoryId: 'cat_3', name: 'Ibuprofen Blister Pack Box', base: 1, onHand: 0 },
        { id: 'o19', categoryId: 'cat_3', name: 'Acetaminophen Blister Pack Box', base: 1, onHand: 0 },
        { id: 'o20', categoryId: 'cat_3', name: 'Diphenhydramine / Benadryl Box', base: 1, onHand: 0 },
        { id: 'o21', categoryId: 'cat_3', name: 'Hydrocortisone Cream Packets', base: 10, onHand: 0 }
    ]
};

let state = {};

// 2. SAVING AND LOADING LOGIC
function saveState() {
    localStorage.setItem('firstAidProcurementSave', JSON.stringify(state));
}

function loadState() {
    const savedData = localStorage.getItem('firstAidProcurementSave');
    
    if (savedData) {
        state = JSON.parse(savedData);
        state.settingsMode = false;
        state.editingThemeId = null;
    } else {
        state = JSON.parse(JSON.stringify(defaultState));
    }
}

function resetAllData() {
    if (confirm("WARNING: This will delete ALL custom themes, categories, and inventory counts. It will reset the app back to the default setup. Are you absolutely sure?")) {
        localStorage.removeItem('firstAidProcurementSave');
        location.reload(); 
    }
}

function exportData() {
    // Packages the state into a JSON blob and forces a download
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    
    // Generates a clean filename with the current date
    const date = new Date().toISOString().split('T')[0];
    downloadAnchorNode.setAttribute("download", `first_aid_backup_${date}.json`);
    
    document.body.appendChild(downloadAnchorNode); 
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function importData() {
    // Creates an invisible file input, clicks it, and intercepts the uploaded file
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = e => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        
        reader.onload = readerEvent => {
            try {
                const content = readerEvent.target.result;
                const parsedData = JSON.parse(content);
                
                // Very basic validation to make sure they didn't upload a random text file
                if (parsedData && parsedData.categories && parsedData.items) {
                    state = parsedData;
                    state.settingsMode = true; // Keep settings open so they see it worked
                    saveState(); 
                    applyTheme(state.activeThemeId);
                    renderApp();
                    alert("Backup loaded successfully!");
                } else {
                    alert("Error: The file provided does not match the calculator's save format.");
                }
            } catch (err) {
                alert("Error reading file. Make sure it is a valid .json file.");
            }
        }
    };
    
    input.click();
}

// 3. MATH LOGIC
function calculateTotal(categoryId, baseQty) {
    const category = state.categories.find(c => c.id === categoryId);
    if (!category || category.count <= 0) return 0;
    return category.calcMethod === 'direct' 
        ? category.count * baseQty 
        : Math.ceil(category.count / 5) * baseQty;
}

// 4. THEME LOGIC
function applyTheme(themeId) {
    state.activeThemeId = themeId;
    const theme = state.themes.find(t => t.id === themeId);
    if (!theme) return;

    const root = document.body;
    root.style.setProperty('--primary', theme.colors.primary);
    root.style.setProperty('--primary-hover', theme.colors.primaryHover);
    root.style.setProperty('--surface', theme.colors.surface);
    root.style.setProperty('--background', theme.colors.background);
    root.style.setProperty('--text-main', theme.colors.textMain);
    root.style.setProperty('--text-muted', theme.colors.textMuted);
    root.style.setProperty('--border', theme.colors.border);
    root.style.setProperty('--danger', theme.colors.danger);
    root.style.setProperty('--tab-inactive', theme.colors.tabInactive);
    root.style.setProperty('--print-btn', theme.colors.printBtn);
    root.style.setProperty('--print-btn-hover', theme.colors.printBtnHover);

    renderThemeDropdown();
    saveState(); 
}

// 5. RENDER FUNCTIONS
function renderApp() {
    renderSettingsPanel();
    renderHeaders();
    renderTabs();
    renderActiveCategory();
    
    const btn = document.getElementById('toggle-settings-btn');
    if (state.settingsMode) {
        btn.classList.add('active');
        btn.innerText = "⚙️ Close Settings";
    } else {
        btn.classList.remove('active');
        btn.innerText = "⚙️ Edit Settings";
    }
}

function renderThemeDropdown() {
    const selector = document.getElementById('theme-selector');
    selector.innerHTML = '';
    state.themes.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t.id;
        opt.innerText = t.name;
        if (t.id === state.activeThemeId) opt.selected = true;
        selector.appendChild(opt);
    });
}

function renderSettingsPanel() {
    const panel = document.getElementById('settings-panel');
    if (!state.settingsMode) {
        panel.style.display = 'none';
        panel.innerHTML = '';
        return;
    }
    
    panel.style.display = 'block';
    
    let html = `
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); margin-bottom: 15px; padding-bottom: 10px; flex-wrap: wrap; gap: 10px;">
            <h3 class="settings-header" style="border: none; margin: 0; padding: 0;">Theme Manager</h3>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button style="background: var(--surface); color: var(--text-main); border: 1px solid var(--border); border-radius: 4px; padding: 6px 12px; cursor: pointer; font-size: 14px;" onclick="importData()">📂 Import JSON</button>
                <button style="background: var(--surface); color: var(--text-main); border: 1px solid var(--border); border-radius: 4px; padding: 6px 12px; cursor: pointer; font-size: 14px;" onclick="exportData()">💾 Save to JSON</button>
                <button class="btn-delete" style="font-size: 14px; border: 1px solid var(--danger); border-radius: 4px; padding: 6px 12px;" onclick="resetAllData()">⚠️ Reset All App Data</button>
            </div>
        </div>
        <div class="theme-list">
    `;
    
    state.themes.forEach(t => {
        html += `
            <div class="theme-item">
                <strong>${t.name}</strong>
                <div class="theme-item-controls">
                    <button class="btn-edit" title="Edit Theme" onclick="openThemeModal('${t.id}')">✏️</button>
                    <button class="btn-delete" title="Delete Theme" onclick="deleteTheme('${t.id}')">🗑️</button>
                </div>
            </div>
        `;
    });

    html += `
        </div>
        <button class="btn-add" onclick="openThemeModal()">+ Build Custom Theme</button>
    `;
    
    panel.innerHTML = html;
}

function renderHeaders() {
    const container = document.getElementById('header-panel');
    container.innerHTML = ''; 
    state.categories.forEach(cat => {
        const div = document.createElement('div');
        div.className = 'input-group';
        let labelText = cat.calcMethod === 'direct' ? `Total ${cat.name} (Units)` : `Total People in ${cat.name}`;
        div.innerHTML = `
            <label>${labelText}</label>
            <input type="number" min="0" value="${cat.count}" 
                   onchange="updateCategoryCount('${cat.id}', this.value)">
        `;
        container.appendChild(div);
    });
}

function renderTabs() {
    const container = document.getElementById('tabs-container');
    container.innerHTML = ''; 
    state.categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${cat.id === state.activeCategoryId ? 'active' : ''}`;
        btn.innerText = cat.name;
        btn.onclick = () => { 
            state.activeCategoryId = cat.id; 
            saveState(); 
            renderApp(); 
        };
        container.appendChild(btn);
    });

    const addBtn = document.createElement('button');
    addBtn.className = 'tab-btn tab-add';
    addBtn.innerText = '+ New Category';
    addBtn.onclick = addNewCategory;
    container.appendChild(addBtn);
}

function renderActiveCategory() {
    const container = document.getElementById('active-content');
    const category = state.categories.find(c => c.id === state.activeCategoryId);
    
    if (!category) { container.innerHTML = '<p>No category selected.</p>'; return; }

    const categoryItems = state.items.filter(i => i.categoryId === category.id);
    let html = '';

    if (state.settingsMode) {
        html += `
            <div class="category-header">
                <input type="text" value="${category.name}" onchange="updateCategoryName('${category.id}', this.value)">
                <div class="category-controls">
                    <div class="calculation-rule">
                        <label>Scale By:</label>
                        <select onchange="updateCalcMethod('${category.id}', this.value)">
                            <option value="direct" ${category.calcMethod === 'direct' ? 'selected' : ''}>1:1 Ratio (Per Unit)</option>
                            <option value="per5" ${category.calcMethod === 'per5' ? 'selected' : ''}>Per 5 People</option>
                        </select>
                    </div>
                    <button class="btn-delete" onclick="deleteCategory('${category.id}')">🗑️ Delete Category</button>
                </div>
            </div>
        `;
    } else {
        html += `<div class="category-header"><h3 style="margin:0; font-size:24px; color:var(--primary);">${category.name}</h3></div>`;
    }

    html += `
        <div class="item-grid-header">
            <div>Supply Name</div>
            <div>${state.settingsMode ? 'Base Qty (Edit)' : 'Total Needed'}</div>
            <div>${state.settingsMode ? '' : 'On Hand'}</div>
            <div>${state.settingsMode ? '' : 'To Order'}</div>
            <div>${state.settingsMode ? 'Delete' : ''}</div>
        </div>
        <div id="item-list"></div>
    `;
    container.innerHTML = html;
    
    const listContainer = document.getElementById('item-list');
    categoryItems.forEach(item => {
        const totalNeeded = calculateTotal(category.id, item.base);
        const toOrder = Math.max(0, totalNeeded - (item.onHand || 0));
        const row = document.createElement('div');
        row.className = 'item-row';
        
        if (state.settingsMode) {
            row.innerHTML = `
                <div class="item-name">${item.name}</div>
                <div><input type="number" class="base-input" value="${item.base}" min="1" onchange="updateItemBase('${item.id}', this.value)"></div>
                <div></div><div></div>
                <div><button class="btn-delete" onclick="deleteItem('${item.id}')">×</button></div>
            `;
        } else {
            row.innerHTML = `
                <div class="item-name">${item.name}</div>
                <div class="calc-total">${totalNeeded}</div>
                <div><input type="number" class="on-hand-input" value="${item.onHand || 0}" min="0" onchange="updateItemOnHand('${item.id}', this.value)"></div>
                <div class="to-order">${toOrder}</div>
                <div></div>
            `;
        }
        listContainer.appendChild(row);
    });

    const addForm = document.createElement('div');
    addForm.className = 'add-item-form';
    addForm.innerHTML = `
        <input type="text" id="new-item-name" placeholder="Enter new supply name...">
        <input type="number" id="new-item-base" placeholder="Base Qty" class="base-input" min="1" value="1" style="width: 100px;">
        <button class="btn-add" onclick="addItem()">Add Item</button>
    `;
    container.appendChild(addForm);
}

// 6. ACTION FUNCTIONS
function toggleSettings() { 
    state.settingsMode = !state.settingsMode; 
    renderApp(); 
}
function updateCategoryCount(id, newCount) { 
    const cat = state.categories.find(c => c.id === id); 
    if (cat) cat.count = parseInt(newCount) || 0; 
    saveState();
    renderApp(); 
}
function updateCategoryName(id, newName) { 
    const cat = state.categories.find(c => c.id === id); 
    if (cat && newName.trim() !== '') cat.name = newName.trim(); 
    saveState();
    renderApp(); 
}
function updateCalcMethod(id, newMethod) { 
    const cat = state.categories.find(c => c.id === id); 
    if (cat) cat.calcMethod = newMethod; 
    saveState();
    renderApp(); 
}
function addNewCategory() {
    const newId = 'cat_' + Date.now();
    state.categories.push({ id: newId, name: 'New Category', count: 1, calcMethod: 'direct' });
    state.activeCategoryId = newId; 
    saveState();
    renderApp();
}
function deleteCategory(id) {
    if (confirm("Delete this category?")) {
        state.categories = state.categories.filter(c => c.id !== id);
        state.items = state.items.filter(i => i.categoryId !== id);
        state.activeCategoryId = state.categories.length > 0 ? state.categories[0].id : null;
        saveState();
        renderApp();
    }
}
function updateItemBase(id, newBase) { 
    const item = state.items.find(i => i.id === id); 
    if (item) item.base = parseInt(newBase) || 1; 
    saveState();
    renderActiveCategory(); 
}
function updateItemOnHand(id, newOnHand) { 
    const item = state.items.find(i => i.id === id); 
    if (item) item.onHand = parseInt(newOnHand) || 0; 
    saveState();
    renderActiveCategory(); 
}
function deleteItem(id) { 
    state.items = state.items.filter(i => i.id !== id); 
    saveState();
    renderActiveCategory(); 
}
function addItem() {
    const nameVal = document.getElementById('new-item-name').value.trim();
    const baseVal = parseInt(document.getElementById('new-item-base').value) || 1;
    if (nameVal === '') return;
    state.items.push({ id: 'item_' + Date.now(), categoryId: state.activeCategoryId, name: nameVal, base: baseVal, onHand: 0 });
    
    document.getElementById('new-item-name').value = '';
    document.getElementById('new-item-base').value = '1';
    
    saveState();
    renderActiveCategory();
}

// 7. THEME EDITOR UI
function openThemeModal(themeId = null) {
    const title = document.getElementById('theme-modal-title');
    const saveBtn = document.getElementById('btn-save-theme');

    if (themeId) {
        state.editingThemeId = themeId;
        const theme = state.themes.find(t => t.id === themeId);
        
        document.getElementById('new-theme-name').value = theme.name;
        document.getElementById('c-primary').value = theme.colors.primary;
        document.getElementById('c-primary-hover').value = theme.colors.primaryHover;
        document.getElementById('c-surface').value = theme.colors.surface;
        document.getElementById('c-background').value = theme.colors.background;
        document.getElementById('c-text-main').value = theme.colors.textMain;
        document.getElementById('c-text-muted').value = theme.colors.textMuted;
        document.getElementById('c-border').value = theme.colors.border;
        document.getElementById('c-danger').value = theme.colors.danger;
        document.getElementById('c-print').value = theme.colors.printBtn;
        document.getElementById('c-print-hover').value = theme.colors.printBtnHover;
        document.getElementById('c-tab-inactive').value = theme.colors.tabInactive;
        
        title.innerText = 'Edit Custom Theme';
        saveBtn.innerText = 'Update Theme';
    } else {
        state.editingThemeId = null;
        document.getElementById('new-theme-name').value = '';
        
        document.getElementById('c-primary').value = '#1a73e8';
        document.getElementById('c-primary-hover').value = '#1557b0';
        document.getElementById('c-surface').value = '#ffffff';
        document.getElementById('c-background').value = '#f8f9fa';
        document.getElementById('c-text-main').value = '#202124';
        document.getElementById('c-text-muted').value = '#5f6368';
        document.getElementById('c-border').value = '#dadce0';
        document.getElementById('c-danger').value = '#ea4335';
        document.getElementById('c-print').value = '#34a853';
        document.getElementById('c-print-hover').value = '#2b8c45';
        document.getElementById('c-tab-inactive').value = '#e8eaed';

        title.innerText = 'Create Custom Theme';
        saveBtn.innerText = 'Save Theme';
    }

    document.getElementById('theme-modal').style.display = 'flex';
}

function closeThemeModal() { 
    document.getElementById('theme-modal').style.display = 'none'; 
    state.editingThemeId = null;
}

function saveTheme() {
    const name = document.getElementById('new-theme-name').value.trim();
    if (!name) { alert("Give your theme a name first."); return; }

    const updatedColors = {
        primary: document.getElementById('c-primary').value,
        primaryHover: document.getElementById('c-primary-hover').value,
        surface: document.getElementById('c-surface').value,
        background: document.getElementById('c-background').value,
        textMain: document.getElementById('c-text-main').value,
        textMuted: document.getElementById('c-text-muted').value,
        border: document.getElementById('c-border').value,
        danger: document.getElementById('c-danger').value,
        printBtn: document.getElementById('c-print').value,
        printBtnHover: document.getElementById('c-print-hover').value,
        tabInactive: document.getElementById('c-tab-inactive').value
    };

    if (state.editingThemeId) {
        const themeIndex = state.themes.findIndex(t => t.id === state.editingThemeId);
        if (themeIndex !== -1) {
            state.themes[themeIndex].name = name;
            state.themes[themeIndex].colors = updatedColors;
        }
    } else {
        const newTheme = {
            id: 'theme_' + Date.now(),
            name: name,
            colors: updatedColors
        };
        state.themes.push(newTheme);
        state.editingThemeId = newTheme.id; 
    }

    const themeToApply = state.editingThemeId;
    closeThemeModal();
    saveState(); 
    applyTheme(themeToApply);
    renderApp();
}

function deleteTheme(themeId) {
    if (state.themes.length <= 1) { alert("You can't delete the last remaining theme."); return; }
    if (confirm("Are you sure you want to delete this theme?")) {
        state.themes = state.themes.filter(t => t.id !== themeId);
        if (state.activeThemeId === themeId) applyTheme(state.themes[0].id);
        saveState();
        renderApp();
    }
}

// 8. PRINT / PDF LOGIC
function openPrintModal() {
    const list = document.getElementById('print-category-list');
    list.innerHTML = `<div class="print-checkbox-row"><input type="checkbox" id="print_all" onchange="toggleAllPrint(this.checked)" checked><label for="print_all"><b>Select All Categories</b></label></div><hr style="border:0; border-top:1px solid var(--border); margin:10px 0;">`;
    state.categories.forEach(cat => {
        list.innerHTML += `<div class="print-checkbox-row"><input type="checkbox" class="print-cat-checkbox" value="${cat.id}" checked><label>${cat.name}</label></div>`;
    });
    document.getElementById('print-modal').style.display = 'flex';
}
function toggleAllPrint(isChecked) { document.querySelectorAll('.print-cat-checkbox').forEach(cb => cb.checked = isChecked); }
function closePrintModal() { document.getElementById('print-modal').style.display = 'none'; }
function executePrint() {
    const selectedIds = Array.from(document.querySelectorAll('.print-cat-checkbox:checked')).map(cb => cb.value);
    if (selectedIds.length === 0) { alert("Please select at least one category to print."); return; }

    const printArea = document.getElementById('print-area');
    let printHtml = '<h2>Reorder Checklist</h2>';
    let grandTotalItems = 0;

    selectedIds.forEach(catId => {
        const cat = state.categories.find(c => c.id === catId);
        const itemsToOrder = state.items.filter(i => i.categoryId === catId).map(item => {
            const toOrder = Math.max(0, calculateTotal(cat.id, item.base) - (item.onHand || 0));
            return { name: item.name, toOrder: toOrder };
        }).filter(item => item.toOrder > 0);

        if (itemsToOrder.length > 0) {
            printHtml += `<h3>${cat.name}</h3><table class="print-table"><thead><tr><th>Supply Name</th><th style="width: 100px; text-align: center;">Qty to Order</th></tr></thead><tbody>`;
            itemsToOrder.forEach(item => { printHtml += `<tr><td>${item.name}</td><td style="text-align: center; font-weight: bold;">${item.toOrder}</td></tr>`; grandTotalItems += item.toOrder; });
            printHtml += `</tbody></table>`;
        }
    });

    if (grandTotalItems === 0) { alert("Nothing to order! All selected categories are fully stocked."); return; }
    printArea.innerHTML = printHtml;
    closePrintModal();
    window.print();
}

// 9. INITIALIZATION
loadState(); 
applyTheme(state.activeThemeId); 
renderApp();