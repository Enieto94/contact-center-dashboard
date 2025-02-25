export const fetchAgentes = async (estado) => {
    const url = estado ? `/api/agentes?estado=${estado}` : '/api/agentes';
    const response = await fetch(url);
    if (!response.ok) throw new Error('Error al obtener los agentes');
    return response.json();
};


export const fetchClientes = async (tiempo) => {
    const url = tiempo ? `/api/clientes?tiempo=${tiempo}` : '/api/clientes';
    const response = await fetch(url);
    if (!response.ok) throw new Error('Error al obtener los clientes');
    return response.json();
};
