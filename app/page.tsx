"use client";

import { useState } from "react";

const items = ["About me", "Projects", "Experience"];

export default function Home() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return (
      <button
        onClick={() => setEntered(true)}
        className="flex h-screen w-full items-center justify-center bg-neutral-900 text-neutral-400"
      >
        [ intro art: me in the room sitting yuhh] click to enter
      </button>
    );
  }

  return (
    <main className="grid h-screen grid-cols-2 bg-neutral-100">
      <div className="flex items-end justify-center bg-neutral-300">
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