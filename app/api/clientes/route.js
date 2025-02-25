// /app/api/clientes/route.js
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const tiempo = searchParams.get('tiempo'); // Obtiene el filtro si existe

    // Simulación de datos (reemplaza con la fuente de datos real o llamada a DB)
    const clientes = [
        { id: 1, nombre: 'María Torres', tiempo_espera: 3 },
        { id: 2, nombre: 'Juan Pérez', tiempo_espera: 7 },
        { id: 3, nombre: 'Lucía Ramírez', tiempo_espera: 10 },
    ];

    // Filtra clientes si se especifica el tiempo mínimo de espera
    const filteredClientes = tiempo
        ? clientes.filter((cliente) => cliente.tiempo_espera >= parseInt(tiempo, 10))
        : clientes;

    return Response.json(filteredClientes, { status: 200 });
}


