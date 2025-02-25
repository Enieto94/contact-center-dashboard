"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';

const FiltroClientes = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Desenvuelve los parámetros de búsqueda a un objeto plano
    const unwrappedSearchParams = useMemo(
        () => new URLSearchParams(Object.fromEntries(searchParams.entries())),
        [searchParams]
    );

    const [tiempoEspera, setTiempoEspera] = useState('');

    useEffect(() => {
        const tiempoParam = unwrappedSearchParams.get('tiempo_espera') || '';
        setTiempoEspera(tiempoParam);
    }, [unwrappedSearchParams]);

    const handleChange = (e) => {
        const tiempo_espera = e.target.value;
        setTiempoEspera(tiempo_espera);

        // Reconstruye los parámetros usando el objeto desempaquetado
        const params = new URLSearchParams(Object.fromEntries(unwrappedSearchParams.entries()));
        if (tiempo_espera) {
            params.set('tiempo_espera', tiempo_espera);
        } else {
            params.delete('tiempo_espera');
        }
        router.push(`/clientes?${params.toString()}`);
    };

    return (
        <div className="mb-4 flex justify-center">
            <label className="mt-12 block text-sm text-rose-600 font-medium mb-2">
                Filtrar por tiempo mínimo de espera (minutos):
                <input
                    type="number"
                    min="0"
                    placeholder="Ej: 5"
                    value={tiempoEspera}
                    onChange={handleChange}
                    className="p-2 border-black rounded-lg border w-full"
                />
            </label>
        </div>
    );
};

export default FiltroClientes;
