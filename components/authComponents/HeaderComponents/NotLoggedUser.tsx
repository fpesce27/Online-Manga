import { Navbar } from "@nextui-org/react";
import Link from "next/link";

export default function NotLoggedUser() {
  return (
    <Navbar.Content>
      <Navbar.Item>
        <Link href="/login">Iniciar Sesion</Link>
      </Navbar.Item>
      <Navbar.Item>
        <Link href="/register">Registrarse</Link>
      </Navbar.Item>
    </Navbar.Content>
  );
}
