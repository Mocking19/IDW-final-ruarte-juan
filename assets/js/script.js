document.addEventListener("DOMContentLoaded", function () {
  // Mostrar / ocultar formulario si hay botón
  const btn = document.getElementById('contratarBtn');
  const form = document.getElementById('contract-form');
  const mensajeExito = document.getElementById('mensaje-exito');

  if (btn && form) {
    btn.addEventListener('click', function () {
      form.style.display = form.style.display === 'none' ? 'block' : 'none';
      this.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita que se recargue la página

      const nombre = document.getElementById('nombre').value.trim();
      const dni = document.getElementById('dni').value.trim();
      const direccion = document.getElementById('direccion').value.trim();
      const telefono = document.getElementById('telefono').value.trim();

      // Expresiones regulares
const nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,}$/.test(nombre);
const dniValido = /^\d{7,8}$/.test(dni);
const direccionValida = direccion.length >= 5;
const telefonoValido = /^\d{10,13}$/.test(telefono);

// Validaciones
if (!nombreValido) {
  alert('Nombre inválido. Ingresá al menos 3 letras sin números.');
  return;
}

if (!dniValido) {
  alert('DNI inválido. Debe contener solo números y tener entre 7 y 8 dígitos.');
  return;
}

if (!direccionValida) {
  alert('Dirección inválida. Debe tener al menos 5 caracteres.');
  return;
}

if (!telefonoValido) {
  alert('Teléfono inválido. Ingresá solo números (10 a 13 cifras).');
  return;
}


      mensajeExito.style.display = 'block';
      this.reset();
    });
  }
});
