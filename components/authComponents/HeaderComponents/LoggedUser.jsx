import { User } from "@/constants/user";
import { Avatar, Button, Dropdown, Navbar, Text } from "@nextui-org/react";
import Link from "next/link";
import { auth } from "@/db/firebase";

const actionKeys = {
  logout: "logout()",
}

export default function LoggedUser({ user }) {
  const collapseItems = ["Log Out"];

  function logout(){
    auth.signOut();
    /* reload */
    window.location.reload();
  };

  return (
    <>
      <Navbar.Content>
        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              <Avatar
                bordered
                as="button"
                color="primary"
                size="md"
                src={user.photoURL}
              />
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="primary"
            onAction={(actionKey) => eval(actionKeys[actionKey])}
          >
            <Dropdown.Item
              key="profile"
              css={{
                height: "$18",
              }}
            >
              <Text
                b
                color="inherit"
                css={{
                  d: "flex",
                }}
              >
                Sesion iniciada como
              </Text>
              <Text
                b
                color="inherit"
                css={{
                  d: "flex",
                }}
              >
                {user.email}
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
          <Navbar.CollapseItem
            key={item}
            activeColor="secondary"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
            }}
            isActive={index === 2}
          >
            <Link color="inherit" href="#">
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </>
  );
}
