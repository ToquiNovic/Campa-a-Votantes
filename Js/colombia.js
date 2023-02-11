const departmentSelect = document.getElementById('department');
const municipalitySelect = document.getElementById('municipality');

// Carga los departamentos de Colombia
fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json')
  .then(response => response.json())
  .then(data => {
    const departments = Array.from(new Set(data.map(item => item.departamento)))
      .map(department => ({ name: department }));
    departments.forEach(department => {
      const option = document.createElement('option');
      option.value = department.name;
      option.textContent = department.name;
      departmentSelect.appendChild(option);
    });
  });

// Maneja los cambios en la selección de departamento
departmentSelect.addEventListener('change', event => {
  municipalitySelect.innerHTML = '';
  municipalitySelect.disabled = true;

  const departmentName = event.target.value;

  // Carga los municipios del departamento seleccionado
  fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json')
    .then(response => response.json())
    .then(data => {
      const municipalities = data
        .filter(item => item.departamento === departmentName)
        .map(item => ({ name: item.municipio }));
      municipalities.forEach(municipality => {
        const option = document.createElement('option');
        option.value = municipality.name;
        option.textContent = municipality.name;
        municipalitySelect.appendChild(option);
      });

      municipalitySelect.disabled = false;
    });
});