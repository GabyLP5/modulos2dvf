document.getElementById("boton").addEventListener("click", function () {
  let alias = document.getElementById("usser").value
  let pass = document.getElementById("contraseña").value

  validador(alias, pass)
})
var usuario = [
  { nombre: "Noah", password: "N01", dinero: 370 },
  { nombre: "Lina", password: "L02", dinero: 860 },
  { nombre: "Bastian", password: "B03", dinero: 516 },
  { nombre: "Mary", password: "M04", dinero: 120 },
  { nombre: "Danae", password: "D05", dinero: 465 },
  { nombre: "Gabriela", password: "G06", dinero: 696 },
  { nombre: "Javiera", password: "J07", dinero: 705 },
  { nombre: "Alejo", password: "A08", dinero: 213 },
  { nombre: "Cristian", password: "C09", dinero: 989 },
  { nombre: "David", password: "P10", dinero: 11 }
]
let usuarioSelecionado
let saldousario = document.getElementById("saldoActual")

function validador(nombre, password) {
  for (let index = 0; index < usuario.length; index++) {
    if (nombre === usuario[index].nombre && password === usuario[index].password) {
      alert("Bienvenido")
      usuarioSelecionado = usuario[index]
      document.getElementById("alias").textContent = usuarioSelecionado.nombre
      document.getElementById("form").style.display = "none"
      document.getElementById("navbar").style.display = "block"
      document.getElementById("imglc").style.display = "block"
      document.getElementById("letterus").style.display = "block"
    } else if (usuario[index].nombre === nombre) {
      alert("Uno de los campos es incorrecto, intente denuevo")
    }
    else if (nombre === "" && password === "") {
      alert("Cuenta inexistente o formulario vacio, presione aceptar diez veces para intentarlo nuevamente 😅")
    }
  }
}

document.getElementById("buttonA").addEventListener("click", function () {
  let aumentoCapital = document.getElementById("capital").value
  aumentoC(aumentoCapital)
})
function aumentoC(capital) {
  if (usuarioSelecionado.dinero + Number(capital) > 990) {
    alert("El deposito excede el limite de saldo permitido")
  } else {
    usuarioSelecionado.dinero += Number(capital)
    document.getElementById("ingresa").textContent = "Depositaste  $" + capital
    document.getElementById("saldoActual").textContent = usuarioSelecionado.dinero
  }
}

document.getElementById("buttonB").addEventListener("click", function () {
  let disminuyeCapital = document.getElementById("capital").value
  bajaCapital(disminuyeCapital)
})
function bajaCapital(capital) {
  if (usuarioSelecionado.dinero - Number(capital) < 10) {
    alert("El retiro excede el minimo de saldo permitido")
  } else {
    usuarioSelecionado.dinero -= Number(capital)
    document.getElementById("ingresa").textContent = "Haz retirado  $" + capital
    document.getElementById("saldoActual").textContent = usuarioSelecionado.dinero
  }

}
document.getElementById("nuevoSaldo").addEventListener("click", function () {

  dineroActualizado()
})
function dineroActualizado() {
  document.getElementById("saldo").textContent = "Tu saldo es de : " + usuarioSelecionado.dinero
}