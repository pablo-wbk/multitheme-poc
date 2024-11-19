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
      <section className="flex-[4] flex items-center justify-center bg-primary-50 p-8 rounded-2xl">
        <div className="flex flex-col justify-center gap-4 w-4/5">
          <header className="text-primary-base mb-4">
            <h2 className="text-3xl font-semibold">Crear cuenta</h2>
            <p className="text-xl mt-2">Creá tu usuario y contraseña para ingresar a tu Panel Merchant.</p>
          </header>

          <div className="flex flex-col gap-4">
            <InputField label="Email *" placeholder="ejemplo@gmail.com" type="email" />

            <InputField label="Contraseña *" placeholder="Creá una contraseña" type="password" />

            <InputField label="Repetir contraseña *" placeholder=" Repetir contraseña" type="password" />
          </div>

          <footer className="mt-[10vh]">
            <Button size="large" variant="primary" text="Iniciar" />

            <p className="text-center mt-4">
              ¿Ya tenés una cuenta? <LinkText href="/login">Iniciá sesión</LinkText>
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
