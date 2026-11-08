"use client";

import { useState } from "react";
import Image from "next/image";

const items = ["About me", "Projects", "Experience"];

export default function Home() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return (
      <button
        onClick={() => setEntered(true)}
        className="intro-entry"
      >
        <Image src="/cockatiel.svg" alt="Nicole’s cockatiel logo" width={80} height={80} priority />
        [ intro art: me in the room sitting yuhh] click to enter
      </button>
    );
  }

  return (
    <main className="portfolio-menu">
      <div className="portrait-panel">
        <Image className="menu-logo" src="/cockatiel.svg" alt="Nicole’s cockatiel logo" width={56} height={56} />
        [ portrait ]
      </div>
      <nav className="flex flex-col justify-center gap-6 p-12">
        {items.map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase().replace(/ /g, "-")}`}
            className="text-6xl font-black"
          >
            {label}
          </a>
        ))}
      </nav>
    </main>
  );
}
