"use client";

import Link from "next/link";
import { useId } from "react";

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  const filterId = `brand-${useId().replace(/:/g, "")}`;
  return (
      <svg className="brand__logo" viewBox="0 0 448 164" role="img" aria-label="Arabian Life">
        <defs><filter id={filterId} colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values={inverse ? "0 0 0 0 1  0 0 0 0 .98  0 0 0 0 .94  .2126 .7152 .0722 0 0" : "0 0 0 0 .07  0 0 0 0 .17  0 0 0 0 .13  .2126 .7152 .0722 0 0"} /></filter></defs>
        <image href="/images/arabian-life-logo-reference.png" width="448" height="164" filter={`url(#${filterId})`} />
      </svg>
  );
}

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <Link className={`brand ${inverse ? "brand--inverse" : ""}`} href="/#top" aria-label="Arabian Life home"><BrandMark inverse={inverse} /></Link>;
}
