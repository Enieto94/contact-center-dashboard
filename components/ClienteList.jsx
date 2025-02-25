"use client";
import { useContactCenter } from '@/context/ContactCenterContext';

const ClienteList = ({ tiempoMin }) => {
    const { clientes } = useContactCenter();
    const filtrados = tiempoMin ? clientes.filter(c => c.tiempo_espera >= tiempoMin) : clientes;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtrados.map(c => (
                <div
                    key={c.id}
                    className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                >
                    <p className="text-xl text-rose-600 font-semibold text-gray-800">{c.nombre}</p>
                    <p className="mt-2 text-gray-600">
                        Tiempo en espera: <span className="font-bold">{c.tiempo_espera}</span> min
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ClienteList;