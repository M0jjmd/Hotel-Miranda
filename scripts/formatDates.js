const checkinInput = document.getElementById('checkin');
const checkoutInput = document.getElementById('checkout');
const checkinVisible = document.getElementById('checkin-fecha-visible');
const checkoutVisible = document.getElementById('checkout-fecha-visible');

// Función para formatear la fecha
function formatearFecha(fecha) {
    const opciones = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
    return fecha.toLocaleDateString('en-US', opciones);
}

// Obtener la fecha actual
const fechaActual = new Date();

// Asignar la fecha actual a los inputs y actualizar los spans
checkinInput.valueAsDate = fechaActual;
checkoutInput.valueAsDate = fechaActual;
checkinVisible.textContent = formatearFecha(fechaActual);
checkoutVisible.textContent = formatearFecha(fechaActual);

// Actualizar el texto visible al cambiar la fecha
checkinInput.addEventListener('change', () => {
    const fechaSeleccionada = new Date(checkinInput.value);
    checkinVisible.textContent = formatearFecha(fechaSeleccionada);
});

checkoutInput.addEventListener('change', () => {
    const fechaSeleccionada = new Date(checkoutInput.value);
    checkoutVisible.textContent = formatearFecha(fechaSeleccionada);
});

// const checkinInput = document.getElementById('checkin');
// const checkoutInput = document.getElementById('checkout');
// const checkinVisible = document.getElementById('checkin-fecha-visible');
// const checkoutVisible = document.getElementById('checkout-fecha-visible');

// // Función para formatear la fecha
// function formatearFecha(fecha, formato = 'dd/mm/yyyy') {
//     // Aquí puedes personalizar el formato de la fecha
//     const opciones = {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric'
//     };
//     if (formato === 'día, mes año') {
//         opciones.day = 'numeric';
//         opciones.month = 'long';
//         opciones.year = 'numeric';
//     }
//     return new Intl.DateTimeFormat('es-ES', opciones).format(fecha);
// }

// // Actualizar el texto visible al cambiar la fecha
// checkinInput.addEventListener('change', () => {
//     const fechaSeleccionada = new Date(checkinInput.value);
//     checkinVisible.textContent = formatearFecha(fechaSeleccionada);

//     // Si quieres sincronizar los inputs, puedes agregar una lógica aquí
//     // Por ejemplo, establecer un valor mínimo para el checkoutInput
//     checkoutInput.min = checkinInput.value;
// });

// checkoutInput.addEventListener('change', () => {
//     const fechaSeleccionada = new Date(checkoutInput.value);
//     checkoutVisible.textContent = formatearFecha(fechaSeleccionada);
// });

// // Inicializar las fechas visibles (opcional)
// checkinInput.dispatchEvent(new Event('change'));
// checkoutInput.dispatchEvent(new Event('change'));