import { Navbar, Text, Switch, useTheme, Button } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes'
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Searchbar from "./Searchbar";
import styles from '../../app/page.module.css'
import { useRouter } from "next/navigation";

export default function App() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const [search, setSearch] = useState('')
  const router = useRouter()

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (search.length > 0) {
      timer = setTimeout(() => {
        router.push(`/search?q=${search}`);
      }, 1000);
    }

    if (search.length === 0) {
      router.push(`/`);
    }
    
    return () => clearTimeout(timer);
  }, [search, router]);

  return (
    
      <Navbar isBordered variant="sticky">
        <Navbar.Brand css={{ mr: "$4" }}>
          <Link href="/">
            <Text b color="inherit" css={{ mr: "$11" }} hideIn="xs">
              Online Manga
            </Text>
          </Link>
        </Navbar.Brand>
        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Content
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Switch checked={isDark} onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} />
            <Searchbar search={search} setSearch={setSearch} />
          </Navbar.Content>
        </Navbar.Content>
      </Navbar>
    
  );
}
