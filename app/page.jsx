
import { ContactCenterProvider } from "@/context/ContactCenterContext";
import Menu from "@/components/Menu";
import ClientesPage from "./clientes/page";
import AgentesPage from "./agentes/page";
import FiltroClientes from "@/components/FiltroClientes";
import FiltroAgentes from "@/components/FiltroAgentes";

export default function Home() {
  return (
    <>
      <Menu />
      <ContactCenterProvider />

      <ClientesPage />

      <AgentesPage />
    </>
  );
}
