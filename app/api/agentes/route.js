export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const estado = searchParams.get('estado'); // Obtiene el filtro si existe

    // Simulación de datos (reemplaza con tu fuente de datos real)
    const agentes = [
        { id: 1, nombre: 'Carlos López', estado: 'disponible', tiempo_espera: 0 },
        { id: 2, nombre: 'Ana Gómez', estado: 'en llamada', tiempo_espera: 5 },
        { id: 3, nombre: 'Luis Martínez', estado: 'desconectado', tiempo_espera: 0 },
    ];

    // Filtra agentes si se especifica el estado
    const filteredAgentes = estado
        ? agentes.filter((agente) => agente.estado === estado)
        : agentes;

    return Response.json(filteredAgentes, { status: 200 });
}
