"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { fetchAgentes, fetchClientes } from '@/utils/api';
import { initWebSocket } from '@/utils/websocket';

const ContactCenterContext = createContext();

export const ContactCenterProvider = ({ children }) => {
    const [agentes, setAgentes] = useState([]);
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            setAgentes(await fetchAgentes());
            setClientes(await fetchClientes());
        };
        loadData();

        const ws = initWebSocket((data) => {
            if (data.type === 'updateAgente') setAgentes(data.agentes);
            if (data.type === 'updateCliente') setClientes(data.clientes);
        });

        return () => ws.close();
    }, []);

    return (
        <ContactCenterContext.Provider value={{ agentes, clientes }}>
            {children}
        </ContactCenterContext.Provider>
    );
};

export const useContactCenter = () => useContext(ContactCenterContext);