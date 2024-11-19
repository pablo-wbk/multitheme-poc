import Image from "next/image";
import ClientLogo from "./Logo";
import InputField from "./InputField";
import Button from "./Button";
import LinkText from "./Link";
import { ClientConfig } from "../../clientConfig";

const clientName = ClientConfig.clientName

export default function Home() {
  return (
    <main className="flex min-h-screen py-[4vh] px-[4vw]">
      {/* Right Pane */}
      <section className="flex-[5] flex flex-col">
        <ClientLogo />

        <h2 className="text-3xl text-primary-base font-semibold mt-[4vh] mb-[8vh]">¡Te damos la bienvenida a {clientName}!</h2>

        <Image alt="logo" src={"/startimg.png"} width={526} height={440} className="flex-1 w-full object-contain" />
      </section>

      {/* Left Pane */}
      <section className="flex-[4] flex flex-col bg-primary-50 p-8 rounded-2xl">
        <header className="text-primary-base">
          <h2 className="text-3xl font-semibold">Crear cuenta</h2>
          <p className="text-xl">Creá tu usuario y contraseña para ingresar a tu Panel Merchant.</p>
        </header>

        <InputField label="Email *" placeholder="ejemplo@gmail.com" type="email" />

        <InputField label="Contraseña *" placeholder="Creá una contraseña" type="password" />

        <InputField label="Repetir contraseña *" placeholder=" Repetir contraseña" type="password" />


        <footer className="mt-auto">
          <Button size="large" variant="primary" text="Iniciar" />

          <p className="text-center">
            ¿Ya tenés una cuenta? <LinkText href="/login">Iniciá sesión</LinkText>
          </p>
        </footer>
      </section>
    </main>
  );
}
