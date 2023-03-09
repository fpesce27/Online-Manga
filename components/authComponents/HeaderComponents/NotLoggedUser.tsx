import { Button, Navbar } from "@nextui-org/react";
import Link from "next/link";

export default function NotLoggedUser() {
  return (
    <Navbar.Content>
      <Navbar.Item>
        <Button auto flat>
        <Link href="/login">Iniciar Sesion</Link>
        </Button>
      </Navbar.Item>
      <Navbar.Item>
        <Button auto ghost>
        <Link href="/register" style={{color: 'var(--text-color)'}}>
          Registrarse</Link>
        </Button>
      </Navbar.Item>
    </Navbar.Content>
  );
}
