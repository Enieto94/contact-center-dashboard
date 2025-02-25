"use client";
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function FiltroAgentes() {
    const searchParams = useSearchParams(); // ✅ Correcto uso del hook
    const router = useRouter();
    const [estado, setEstado] = useState('');

    useEffect(() => {
        const estadoParam = searchParams.get('estado') || ''; // ✅ Acceso correcto
        setEstado(estadoParam);
    }, [searchParams]);

    const handleFiltroChange = (e) => {
        const value = e.target.value;
        setEstado(value);

        const params = new URLSearchParams(searchParams.toString()); // 🔄 Asegura manipulación correcta
        if (value) {
            params.set('estado', value);
        } else {
            params.delete('estado');
        }
        router.push(`?${params.toString()}`);
    };

    return (
        <div className="mb-4 flex justify-center align-center">

            <select
                value={estado}
                onChange={handleFiltroChange}
                className="mt-12 p-2 border border-gray-300 text-black rounded-md shadow-sm "
            >
                <option value="">Filtrar por estado</option>
                <option value="disponible">🟢 Disponible</option>
                <option value="en llamada">📞 En llamada</option>
                <option value="desconectado">❌ Desconectado</option>
            </select>
        </div>
    );
}
