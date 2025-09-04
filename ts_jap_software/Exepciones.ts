// try - catch - finally
try {
  // bloque de codigo que puede generar error
  console.log("Inicializando...");
  // con throw se puede producir un error
  throw("forzando error");
} catch (error) {
  // manejo del error
  console.log(`Manejo del error: ${error.message}`)
} finally {
  // Si se abre una conexion aca se debe cerrar
  console.log("Se ejecuta siempre")
}
