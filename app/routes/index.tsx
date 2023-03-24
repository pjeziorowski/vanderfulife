import type { MetaFunction } from "@remix-run/cloudflare";
import { Navbar } from "flowbite-react";
import React from "react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "vanderfulife",
  description: "Living our wonderful lives in a van",
  viewport: "width=device-width,initial-scale=1",
});

export default function Index() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="mx-auto max-w-3xl">
        <Navbar>
          <React.Fragment key=".0">
            {/* Desktop */}
            <Navbar.Collapse className="hidden md:block">
              <Navbar.Link href="/navbars">Blog</Navbar.Link>
              <Navbar.Link href="/navbars">Gallery</Navbar.Link>
            </Navbar.Collapse>

            {/* Logo */}
            <Navbar.Brand href="https://flowbite.com/">
              <img
                alt="vanderfulife logo"
                className="mr-3 h-6 sm:h-9"
                src="/logo.svg"
              />
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
    </div>
  );
}
