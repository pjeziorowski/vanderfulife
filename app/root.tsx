import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Navbar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import stylesheet from "~/tailwind.css";
import { classNames } from "./utils";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "vanderfulife",
  description: "Living our wonderful lives in a van",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  // for the header hide/show
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // catches scrolling up so that we show the header again
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <html className="snap-y snap-mandatory scroll-smooth" lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen relative">
        {/* can we get rid of this div and just use nav? */}
        <div
          className={classNames(
            "sticky mx-auto w-full z-10 bg-transparent h-0 transition top-0",
            !visible && "-translate-y-16"
          )}
        >
          <Navbar>
            {/* not sure about this key */}
            <React.Fragment key=".0">
              {/* Desktop */}
              <Navbar.Collapse className="hidden md:block">
                <Navbar.Link href="/navbars">Blog</Navbar.Link>
                <Navbar.Link href="/navbars">Gallery</Navbar.Link>
              </Navbar.Collapse>

              {/* Logo */}
              <Navbar.Brand href="https://vanderfulife.com/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                  vanderfulife
                </span>
              </Navbar.Brand>

              {/* Mobile Hamburger */}
              <Navbar.Toggle />

              {/* Desktop */}
              <Navbar.Collapse className="hidden md:block">
                <Navbar.Link href="/navbars">O nas</Navbar.Link>
                <Navbar.Link href="/navbars">Contact</Navbar.Link>
              </Navbar.Collapse>

              {/* Mobile Menu Items */}
              <Navbar.Collapse className="block md:hidden">
                <Navbar.Link href="/navbars">Blog</Navbar.Link>
                <Navbar.Link href="/navbars">Gallery</Navbar.Link>
                <Navbar.Link href="/navbars">O nas</Navbar.Link>
                <Navbar.Link href="/navbars">Contact</Navbar.Link>
              </Navbar.Collapse>
            </React.Fragment>
          </Navbar>
        </div>

        <Outlet />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
