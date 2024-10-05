const checkinInput = document.getElementById('checkin')
const checkoutInput = document.getElementById('checkout')
const checkinVisible = document.getElementById('checkin-fecha-visible')
const checkoutVisible = document.getElementById('checkout-fecha-visible')

function formatearFecha(fecha) {
    const opciones = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' }
    return fecha.toLocaleDateString('en-US', opciones)
}

const fechaActual = new Date()

checkinInput.valueAsDate = fechaActual
checkoutInput.valueAsDate = fechaActual
checkinVisible.textContent = formatearFecha(fechaActual)
checkoutVisible.textContent = formatearFecha(fechaActual)

checkinInput.addEventListener('change', () => {
    const fechaSeleccionada = new Date(checkinInput.value)
    checkinVisible.textContent = formatearFecha(fechaSeleccionada)
})

checkoutInput.addEventListener('change', () => {
    const fechaSeleccionada = new Date(checkoutInput.value)
    checkoutVisible.textContent = formatearFecha(fechaSeleccionada)
})