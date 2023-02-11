const nivel_educacionselect = document.getElementById('nivel_educacion');

fetch('./Data/programas.json')
.then(response => response.json())
.then(data => {
    const nivel = Array.from(new Set(data.map(item => item.Educacion)))
    .map(nivel_educacion => ({name: nivel_educacion}));

    nivel.forEach(nivel_educacion => {
        const option = document.createElement('option');
        option.value = nivel_educacion.name;
        option.textContent = nivel_educacion.name;
        nivel_educacionselect.appendChild(option);
    });
});