"use client";

import Script from "next/script";

export default function Header() {
  return (
    <head>
      <Script
        defer
        src="/script.js"
        data-website-id="3703c958-7698-470e-863f-686da6cb7a81"
      ></Script>
      <Script
        type="module"
        src="https://cdn.jsdelivr.net/npm/@friendlycaptcha/sdk@0.1.9/site.min.js"
        async
        defer
      ></Script>
      <Script
        nomodule
        src="https://cdn.jsdelivr.net/npm/@friendlycaptcha/sdk@0.1.9/site.compat.min.js"
        async
        defer
      ></Script>
    </head>
  );
}
