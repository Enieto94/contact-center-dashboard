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
        const tiempoParam = unwrappedSearchParams.get('tiempo') || '';
        setTiempoEspera(tiempoParam);
    }, [unwrappedSearchParams]);

    const handleChange = (e) => {
        const tiempo = e.target.value;
        setTiempoEspera(tiempo);

        // Reconstruye los parámetros usando el objeto desempaquetado
        const params = new URLSearchParams(Object.fromEntries(unwrappedSearchParams.entries()));
        if (tiempo) {
            params.set('tiempo', tiempo);
        } else {
            params.delete('tiempo');
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
