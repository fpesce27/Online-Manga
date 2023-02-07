import {
  Navbar,
  Text,
  Avatar,
  Dropdown,
  Input,
  Image,
  Switch,
  useTheme,
  theme,
  Loading,
  Container,
} from "@nextui-org/react";
import { BsSearch, BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useTheme as useNextTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

function Header({reading}) {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const router = useRouter()
  const {q} = router.query
  const [search, setSearch] = React.useState(q);
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    if (search) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        router.push(`/manga/search?q=${search}`);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [search, router]);

  const collapseItems = [
    "Anime",
    "Manga",
    "Clubs",
    "Random",
  ];

  return (
    <>
    <Navbar isBordered variant={reading ? 'static' : 'floating'}>
      <Navbar.Toggle aria-label="toggle navigation" showIn="sm" style={{ marginRight: 10 }} />
      <Navbar.Brand hideIn='xs'>
        <Link href="/" >
          <Logo />
        </Link>
      </Navbar.Brand>
      <Navbar.Brand showIn="xs">
        <Input
          contentLeft={loading ? <Loading /> : <BsSearch />}
          css={{ width: "$40" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search"
          autoFocus={router.query.q ? true : false}
        />
      </Navbar.Brand>
      <Navbar.Content hideIn="sm" enableCursorHighlight variant='underline'>
        <Navbar.Link href="/anime">Anime</Navbar.Link>
        <Navbar.Link href="/manga">Manga</Navbar.Link>
        <Navbar.Link href="/clubs">Clubs</Navbar.Link>
        <Navbar.Link href="/random">Random</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            icon={type === "dark" ? <BsFillMoonFill /> : <BsFillSunFill />}
          />

        <Navbar.Item hideIn='xs'>
          <Input
            contentLeft={loading ? <Loading size="xs" type="gradient"/> : <BsSearch />}
            css={{ width: "$48" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search"
            autoFocus={router.query.q ? true : false}
          />
        </Navbar.Item>
        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              <Avatar
                bordered
                as="button"
                color="primary"
                size="md"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="primary"
            onAction={(actionKey) => console.log({ actionKey })}
          >
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                zoey@example.com
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              My Settings
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
              Analytics
            </Dropdown.Item>
            <Dropdown.Item key="system">System</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error">
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              href={"/" + item.toLowerCase()}
              style={{ color:theme.colors.text }}
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}

const Logo = () => <Image src="/logo.png" alt="Logo" width={180} height={32} />;

export default Header;
