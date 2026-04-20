// ============================================================
//  MAPA DE LEITOS — HC UNICAMP
//  app.js — Lógica completa
// ============================================================

// ---------- HOSPITAL LAYOUT (hardcoded) ----------

function range(prefix, letters) {
    return letters.split('').map(l => prefix + l);
}
function seqBeds(postoId, n) {
    return Array.from({ length: n }, (_, i) => postoId + '-' + String(i + 1).padStart(2, '0'));
}

const HOSPITAL = [
    // ---- 2º ANDAR ----
    {
        andar: 2,
        titulo: '2º Andar — UTIs',
        blocos: [
            {
                nome: 'Bloco D — UTI Emergência / Especialidades',
                postos: [
                    { id: 'D2P1', descricao: 'UTI Emergência/Especialidades', leitos: range('201', 'ABCDEF') },
                    { id: 'D2P2', descricao: 'UTI Emergência/Especialidades', leitos: range('203', 'ABCDEFGH') },
                    { id: 'D2P3', descricao: 'UTI Emergência/Especialidades', leitos: range('205', 'ABCDEF') },
                ]
            },
            {
                nome: 'Bloco E — UTIs Especializadas',
                postos: [
                    { id: 'E2P1', descricao: 'UTI Neuro', leitos: range('204', 'ABCDEF') },
                    { id: 'E2P2', descricao: 'UTI Pós-Operatória', leitos: range('206', 'ABCDEFGHIJ') },
                    { id: 'E2P3', descricao: 'UTI Trauma', leitos: range('208', 'ABCDEFGHIJ') },
                    { id: 'E2P4', descricao: 'UTI Cardiologia', leitos: range('214', 'ABCDEF') },
                ]
            }
        ]
    },
    // ---- 3º ANDAR ----
    {
        andar: 3,
        titulo: '3º Andar — UTI Transplantes',
        blocos: [
            {
                nome: 'Bloco D — UTI Transplantes',
                postos: [
                    { id: 'D3P1', descricao: 'UTI Transplantes', leitos: range('301', 'ABCDEFGHIJ') },
                ]
            }
        ]
    },
    // ---- 4º ANDAR ----
    {
        andar: 4,
        titulo: '4º Andar — Pediatria e Enfermarias',
        blocos: [
            {
                nome: 'Bloco C — Pediatria',
                postos: [
                    { id: 'C4P1', descricao: 'UTI Pediatria', leitos: seqBeds('C4P1', 18) },
                    { id: 'C4P2', descricao: 'Enfermaria Pediatria', leitos: seqBeds('C4P2', 18) },
                    { id: 'C4P3', descricao: 'Enfermaria Pediatria', leitos: seqBeds('C4P3', 18) },
                    { id: 'C4P4', descricao: 'Enfermaria', leitos: seqBeds('C4P4', 18) },
                ]
            },
            {
                nome: 'Bloco E — Enfermarias Adulto',
                postos: [
                    { id: 'E4P1', descricao: 'Enfermaria Geral Adultos', leitos: seqBeds('E4P1', 18), layout: 'enfermaria' },
                    { id: 'E4P2', descricao: 'Psiquiatria', leitos: seqBeds('E4P2', 18), layout: 'enfermaria' },
                    { id: 'E4P3', descricao: 'Pediatria', leitos: seqBeds('E4P3', 18), layout: 'enfermaria' },
                    { id: 'E4P4', descricao: 'TMO', leitos: seqBeds('E4P4', 18), layout: 'enfermaria' },
                ]
            }
        ]
    },
    // ---- 5º ANDAR ----
    {
        andar: 5,
        titulo: '5º Andar — Enfermarias',
        blocos: [
            {
                nome: 'Bloco C',
                postos: [
                    { id: 'C5P1', descricao: 'Enfermaria', leitos: seqBeds('C5P1', 18), layout: 'enfermaria' },
                    { id: 'C5P2', descricao: 'Enfermaria', leitos: seqBeds('C5P2', 18), layout: 'enfermaria' },
                    { id: 'C5P3', descricao: 'Enfermaria', leitos: seqBeds('C5P3', 18), layout: 'enfermaria' },
                    { id: 'C5P4', descricao: 'Enfermaria', leitos: seqBeds('C5P4', 18), layout: 'enfermaria' },
                ]
            },
            {
                nome: 'Bloco E',
                postos: [
                    { id: 'E5P1', descricao: 'Enfermaria', leitos: seqBeds('E5P1', 18), layout: 'enfermaria' },
                    { id: 'E5P2', descricao: 'Enfermaria', leitos: seqBeds('E5P2', 18), layout: 'enfermaria' },
                    { id: 'E5P3', descricao: 'Enfermaria', leitos: seqBeds('E5P3', 18), layout: 'enfermaria' },
                    { id: 'E5P4', descricao: 'Enfermaria', leitos: seqBeds('E5P4', 18), layout: 'enfermaria' },
                ]
            }
        ]
    },
    // ---- 6º ANDAR ----
    {
        andar: 6,
        titulo: '6º Andar — Enfermarias',
        blocos: [
            {
                nome: 'Bloco C',
                postos: [
                    { id: 'C6P1', descricao: 'Enfermaria', leitos: seqBeds('C6P1', 18), layout: 'enfermaria' },
                    { id: 'C6P2', descricao: 'Enfermaria', leitos: seqBeds('C6P2', 18), layout: 'enfermaria' },
                    { id: 'C6P3', descricao: 'Enfermaria', leitos: seqBeds('C6P3', 18), layout: 'enfermaria' },
                    { id: 'C6P4', descricao: 'Enfermaria', leitos: seqBeds('C6P4', 18), layout: 'enfermaria' },
                ]
            },
            {
                nome: 'Bloco E',
                postos: [
                    { id: 'E6P1', descricao: 'Enfermaria', leitos: seqBeds('E6P1', 18), layout: 'enfermaria' },
                    { id: 'E6P2', descricao: 'Enfermaria', leitos: seqBeds('E6P2', 18), layout: 'enfermaria' },
                    { id: 'E6P3', descricao: 'Enfermaria', leitos: seqBeds('E6P3', 18), layout: 'enfermaria' },
                    { id: 'E6P4', descricao: 'Enfermaria', leitos: seqBeds('E6P4', 18), layout: 'enfermaria' },
                ]
            }
        ]
    },
];

// ---------- STATE ----------
let csvData = {}; // keyed by leito id

// ---------- CSV PARSER ----------
function parseCSV(text) {
    const lines = text.trim().split(/\r?\n/);
    if (lines.length < 2) return {};
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    const data = {};
    for (let i = 1; i < lines.length; i++) {
        const vals = lines[i].split(',').map(v => v.trim());
        if (vals.length < headers.length) continue;
        const row = {};
        headers.forEach((h, idx) => row[h] = vals[idx] || '');
        const key = row['leito'] || '';
        if (key) data[key] = row;
    }
    return data;
}

// ---------- RENDER ----------
function buildFloorTabs() {
    const nav = document.getElementById('floor-tabs');
    nav.innerHTML = '';
    HOSPITAL.forEach((floor, i) => {
        const btn = document.createElement('button');
        btn.className = 'floor-tab' + (i === 0 ? ' active' : '');
        btn.textContent = floor.andar + 'º Andar';
        btn.dataset.index = i;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.floor-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.floor-section').forEach(s => s.classList.remove('active'));
            document.getElementById('floor-' + i).classList.add('active');
        });
        nav.appendChild(btn);
    });
}

function buildBedElement(leitoId, postoId) {
    const el = document.createElement('div');
    el.className = 'bed no-data';
    el.textContent = leitoId;
    el.dataset.leito = leitoId;
    el.dataset.posto = postoId;

    const info = csvData[leitoId];
    if (info) {
        const status = (info['status'] || '').toLowerCase();
        const iso = (info['isolamento'] || '').toLowerCase();
        const hasIsolation = iso && iso !== 'nenhum' && iso !== '' && iso !== 'nao' && iso !== 'não';

        if (status === 'desocupado') {
            el.className = 'bed free';
        } else if (hasIsolation) {
            el.className = 'bed isolation';
        } else {
            el.className = 'bed occupied';
        }

        el.dataset.status = status;
        el.dataset.especialidade = info['especialidade'] || '';
        el.dataset.sexo = info['sexo'] || '';
        el.dataset.isolamento = hasIsolation ? 'sim' : 'nao';

        // tooltip
        if (status === 'ocupado') {
            el.addEventListener('mouseenter', (e) => showTooltip(e, info));
            el.addEventListener('mousemove', moveTooltip);
            el.addEventListener('mouseleave', hideTooltip);
        }
    } else {
        el.dataset.status = '';
        el.dataset.especialidade = '';
        el.dataset.sexo = '';
        el.dataset.isolamento = '';
    }

    return el;
}

function buildEnfermariaRooms(leitos, postoId) {
    // 1 quarto de 4 leitos + 7 quartos de 2 leitos = 18
    const container = document.createDocumentFragment();

    // Quarto compartilhado (4 leitos)
    const shared = document.createElement('div');
    shared.className = 'room-group shared';
    const sharedLabel = document.createElement('div');
    sharedLabel.className = 'room-label';
    sharedLabel.textContent = 'Quarto compartilhado (4 leitos)';
    shared.appendChild(sharedLabel);
    for (let i = 0; i < 4; i++) {
        shared.appendChild(buildBedElement(leitos[i], postoId));
    }
    container.appendChild(shared);

    // 7 quartos duplos
    for (let q = 0; q < 7; q++) {
        const room = document.createElement('div');
        room.className = 'room-group shared';
        const label = document.createElement('div');
        label.className = 'room-label';
        label.textContent = 'Quarto ' + (q + 1);
        room.appendChild(label);
        room.appendChild(buildBedElement(leitos[4 + q * 2], postoId));
        room.appendChild(buildBedElement(leitos[4 + q * 2 + 1], postoId));
        container.appendChild(room);
    }
    return container;
}

function renderFloors() {
    const main = document.getElementById('floor-content');
    main.innerHTML = '';

    HOSPITAL.forEach((floor, fi) => {
        const section = document.createElement('div');
        section.className = 'floor-section' + (fi === 0 ? ' active' : '');
        section.id = 'floor-' + fi;

        const title = document.createElement('div');
        title.className = 'floor-title';
        title.textContent = floor.titulo;
        section.appendChild(title);

        floor.blocos.forEach(bloco => {
            const blocoLabel = document.createElement('div');
            blocoLabel.style.cssText = 'font-weight:600;color:#555;margin-bottom:0.5rem;font-size:0.9rem;';
            blocoLabel.textContent = bloco.nome;
            section.appendChild(blocoLabel);

            const row = document.createElement('div');
            row.className = 'block-row';

            bloco.postos.forEach(posto => {
                const card = document.createElement('div');
                card.className = 'posto-card';

                const header = document.createElement('div');
                header.className = 'posto-header';
                header.textContent = posto.id;
                card.appendChild(header);

                const desc = document.createElement('div');
                desc.className = 'posto-desc';
                desc.textContent = posto.descricao + ' — ' + posto.leitos.length + ' leitos';
                card.appendChild(desc);

                if (posto.layout === 'enfermaria') {
                    card.appendChild(buildEnfermariaRooms(posto.leitos, posto.id));
                } else {
                    const group = document.createElement('div');
                    group.className = 'room-group';
                    posto.leitos.forEach(lid => {
                        group.appendChild(buildBedElement(lid, posto.id));
                    });
                    card.appendChild(group);
                }

                row.appendChild(card);
            });

            section.appendChild(row);
        });

        main.appendChild(section);
    });
}

// ---------- TOOLTIP ----------
const tooltip = document.getElementById('tooltip');

function showTooltip(e, info) {
    const iso = info['isolamento'] || 'Nenhum';
    tooltip.innerHTML =
        '<div class="tt-row"><strong>' + (info['nome_paciente'] || '—') + '</strong></div>' +
        '<div class="tt-row"><span class="tt-label">Registro: </span>' + (info['registro_hospitalar'] || '—') + '</div>' +
        '<div class="tt-row"><span class="tt-label">Especialidade: </span>' + (info['especialidade'] || '—') + '</div>' +
        '<div class="tt-row"><span class="tt-label">Sexo: </span>' + (info['sexo'] === 'M' ? 'Masculino' : info['sexo'] === 'F' ? 'Feminino' : '—') + '</div>' +
        '<div class="tt-row"><span class="tt-label">Isolamento: </span>' + iso + '</div>';
    tooltip.classList.remove('hidden');
    moveTooltip(e);
}
function moveTooltip(e) {
    let x = e.clientX + 16;
    let y = e.clientY + 16;
    if (x + 290 > window.innerWidth) x = e.clientX - 290;
    if (y + 160 > window.innerHeight) y = e.clientY - 160;
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
}
function hideTooltip() {
    tooltip.classList.add('hidden');
}

// ---------- FILTERS ----------
function populateFilters() {
    const andares = new Set();
    const postos = new Set();
    const especialidades = new Set();

    HOSPITAL.forEach(f => {
        andares.add(f.andar);
        f.blocos.forEach(b => b.postos.forEach(p => {
            postos.add(p.id);
        }));
    });

    Object.values(csvData).forEach(row => {
        if (row['especialidade']) especialidades.add(row['especialidade']);
    });

    fillSelect('filter-andar', [...andares].sort(), v => v + 'º', 'Todos');
    fillSelect('filter-posto', [...postos].sort(), v => v, 'Todos');
    fillSelect('filter-especialidade', [...especialidades].sort(), v => v, 'Todas');
}

function fillSelect(id, values, labelFn, allLabel) {
    const sel = document.getElementById(id);
    const current = sel.value;
    sel.innerHTML = '<option value="">' + allLabel + '</option>';
    values.forEach(v => {
        const opt = document.createElement('option');
        opt.value = v;
        opt.textContent = labelFn(v);
        sel.appendChild(opt);
    });
    sel.value = current;
}

function applyFilters() {
    const fAndar = document.getElementById('filter-andar').value;
    const fPosto = document.getElementById('filter-posto').value;
    const fEsp = document.getElementById('filter-especialidade').value;
    const fSexo = document.getElementById('filter-sexo').value;
    const fIso = document.getElementById('filter-isolamento').value;
    const fStatus = document.getElementById('filter-status').value;

    // If filtering by floor, switch tab
    if (fAndar) {
        const idx = HOSPITAL.findIndex(f => f.andar == fAndar);
        if (idx >= 0) {
            document.querySelectorAll('.floor-tab').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.floor-section').forEach(s => s.classList.remove('active'));
            const tab = document.querySelector('.floor-tab[data-index="' + idx + '"]');
            if (tab) tab.classList.add('active');
            const sec = document.getElementById('floor-' + idx);
            if (sec) sec.classList.add('active');
        }
    }

    document.querySelectorAll('.bed').forEach(bed => {
        let show = true;

        if (fPosto && bed.dataset.posto !== fPosto) show = false;
        if (fStatus) {
            if (bed.dataset.status === '') {
                // no CSV data
                show = fStatus === '' ;
            } else if (bed.dataset.status !== fStatus) {
                show = false;
            }
        }
        if (fEsp && bed.dataset.especialidade !== fEsp) show = false;
        if (fSexo && bed.dataset.sexo !== fSexo) show = false;
        if (fIso && bed.dataset.isolamento !== fIso) show = false;

        bed.classList.toggle('hidden', !show);
    });

    updateStats();
}

function updateStats() {
    const visible = document.querySelectorAll('.bed:not(.hidden)');
    let total = 0, occupied = 0, free = 0, isolation = 0;
    visible.forEach(b => {
        total++;
        if (b.classList.contains('occupied')) occupied++;
        else if (b.classList.contains('free')) free++;
        if (b.classList.contains('isolation')) { occupied++; isolation++; }
    });
    document.getElementById('stat-total').textContent = total;
    document.getElementById('stat-occupied').textContent = occupied;
    document.getElementById('stat-free').textContent = free;
    document.getElementById('stat-isolation').textContent = isolation;
}

// ---------- INIT ----------
function init() {
    buildFloorTabs();
    renderFloors();
    populateFilters();
    updateStats();

    // Filters
    ['filter-andar', 'filter-posto', 'filter-especialidade', 'filter-sexo', 'filter-isolamento', 'filter-status'].forEach(id => {
        document.getElementById(id).addEventListener('change', applyFilters);
    });

    // CSV upload
    document.getElementById('csv-upload').addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (!file) return;
        document.getElementById('file-name').textContent = file.name;
        const reader = new FileReader();
        reader.onload = function (ev) {
            csvData = parseCSV(ev.target.result);
            renderFloors();
            populateFilters();
            applyFilters();
        };
        reader.readAsText(file, 'UTF-8');
    });
}

document.addEventListener('DOMContentLoaded', init);