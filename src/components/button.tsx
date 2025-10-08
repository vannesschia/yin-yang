// Button.tsx
import * as React from "react";

type Scheme = "auto" | "light" | "dark";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function Button({
  scheme = "auto",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { scheme?: Scheme }) {
  const skin =
    scheme === "light" ? "btn-light" :
    scheme === "dark"  ? "btn-dark"  :
                          "btn-auto";

  return (
    <button className={cx("group btn", skin, className)} {...props}>
      <span className="btn-label">
        {children}
      </span>
    </button>
  );
}
