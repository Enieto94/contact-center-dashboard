"use client";
import AgenteList from '@/components/AgenteList';
import FiltroAgentes from '@/components/FiltroAgentes';
import { ContactCenterProvider } from '@/context/ContactCenterContext';
import { useSearchParams } from 'next/navigation'; // ✅ Importar hook

export default function AgentesPage() {
    const searchParams = useSearchParams(); // ✅ Usar hook para obtener searchParams
    const estado = searchParams.get('estado') || '';

    return (
        <ContactCenterProvider>
            <div className="p-8">
                <h1 className="text-2xl text-rose-600 font-bold mb-4">Lista de Agentes</h1>
                <AgenteList estado={estado} />
                <FiltroAgentes />
            </div>
        </ContactCenterProvider>
    );
}