"use client";
import { ContactCenterProvider } from '@/context/ContactCenterContext';
import ClienteList from '@/components/ClienteList';
import { useSearchParams } from 'next/navigation';
import FiltroClientes from '@/components/FiltroClientes';

export default function ClientesPage() {
    // Usa el hook para acceder a los parámetros de búsqueda
    const searchParams = useSearchParams();
    // Si esperas que 'tiempo' sea un query param, accede a él con get()
    const tiempoMin = parseInt(searchParams.get('tiempo')) || 0;

    return (
        <ContactCenterProvider>
            <div className="p-8">
                <h1 className="text-2xl font-bold text-rose-600 mb-4">Clientes en Espera</h1>
                <ClienteList tiempoMin={tiempoMin} />
                <FiltroClientes />
            </div>
        </ContactCenterProvider>
    );
}
