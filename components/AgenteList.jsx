"use client"
import { useContactCenter } from '@/context/ContactCenterContext';

const AgenteList = ({ estado }) => {
    const { agentes } = useContactCenter();
    const filtrados = estado ? agentes.filter(a => a.estado === estado) : agentes;

    return (
        <div className="grid gap-4">
            {filtrados.map(a => (
                <div key={a.id} className="p-4 rounded-2xl shadow bg-white">
                    <p className="text-lg font-semibold text-rose-600">{a.nombre}</p>
                    <p className='text-black'>Estado: {a.estado}</p>
                    <p className='text-black'>⌚Tiempo en espera: {a.tiempo_espera} min</p>
                </div>
            ))}
        </div>
    );
};

export default AgenteList;