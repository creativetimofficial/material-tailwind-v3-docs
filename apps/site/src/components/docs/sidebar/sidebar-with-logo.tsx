import * as React from "react";
import {
  Card,
  List,
  Typography,
  Chip,
  Collapse,
  Button,
  Avatar,
} from "@material-tailwind/react";
import {
  Archive,
  EmptyPage,
  Folder,
  LogOut,
  Mail,
  MoreHorizCircle,
  NavArrowRight,
  Pin,
  SelectFace3d,
  SendDiagonal,
  Bin,
  UserXmark,
} from "iconoir-react";

const Links = [
  {
    icon: Mail,
    title: "Inbox",
    href: "#",
    badge: 14,
  },
  {
    icon: SendDiagonal,
    title: "Sent",
    href: "#",
  },
  {
    icon: EmptyPage,
    title: "Drafts",
    href: "#",
  },
  {
    icon: Pin,
    title: "Pins",
    href: "#",
  },
  {
    icon: Archive,
    title: "Archive",
    href: "#",
  },
  {
    icon: Bin,
    title: "Trash",
    href: "#",
  },
];

export function SidebarWithLogo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Card className="max-w-[280px]">
      <Card.Header className="mx-3 mb-0 mt-3 flex h-max items-center gap-2">
        <Avatar size="xs" src="/logo.png" alt="brand" />
        <Typography className="font-semibold">Material Tailwind</Typography>
      </Card.Header>
      <Card.Body className="p-3">
        <List>
          {Links.map(({ icon: Icon, title, href, badge }) => (
            <List.Item key={title} href={href}>
              <List.ItemStart>
                <Icon className="h-[18px] w-[18px]" />
              </List.ItemStart>
              {title}
              {badge && (
                <List.ItemEnd>
                  <Chip size="sm" variant="ghost">
                    <Chip.Label>{badge}</Chip.Label>
                  </Chip>
                </List.ItemEnd>
              )}
            </List.Item>
          ))}
          <hr className="-mx-3 my-3 border-secondary" />
          <List.Item onClick={() => setIsOpen((cur) => !cur)}>
            <List.ItemStart>
              <MoreHorizCircle className="h-[18px] w-[18px]" />
            </List.ItemStart>
            More
            <List.ItemEnd>
              <NavArrowRight
                className={`h-4 w-4 ${isOpen ? "rotate-90" : ""}`}
              />
            </List.ItemEnd>
          </List.Item>
          <Collapse open={isOpen}>
            <List>
              <List.Item>
                <List.ItemStart>
                  <Folder className="h-[18px] w-[18px]" />
                </List.ItemStart>
                Spam
              </List.Item>
              <List.Item>
                <List.ItemStart>
                  <UserXmark className="h-[18px] w-[18px]" />
                </List.ItemStart>
                Blocked
              </List.Item>
              <List.Item>
                <List.ItemStart>
                  <Folder className="h-[18px] w-[18px]" />
                </List.ItemStart>
                Important
              </List.Item>
            </List>
          </Collapse>
          <hr className="-mx-3 my-3 border-secondary" />
          <List.Item className="text-error hover:bg-error/10 hover:text-error focus:bg-error/10 focus:text-error">
            <List.ItemStart>
              <LogOut className="h-[18px] w-[18px]" />
            </List.ItemStart>
            Logout
          </List.Item>
        </List>
      </Card.Body>
      <Card.Footer className="mt-8">
        <Card color="primary" className="shadow-none">
          <Card.Header className="m-3">
            <SelectFace3d className="h-10 w-10 text-primary-foreground" />
          </Card.Header>
          <Card.Body>
            <Typography type="h6" className="mb-1 text-white">
              Upgrade to PRO
            </Typography>
            <Typography type="small" className="text-white/80">
              Upgrade to Material Tailwind PRO and get even more components,
              plugins, advanced features and premium.
            </Typography>
          </Card.Body>
          <Card.Footer>
            <Button
              size="sm"
              as="a"
              href="#"
              className="border-white bg-white text-black hover:border-white hover:bg-white hover:text-black"
            >
              Upgrade Now
            </Button>
          </Card.Footer>
        </Card>
      </Card.Footer>
    </Card>
  );
}
