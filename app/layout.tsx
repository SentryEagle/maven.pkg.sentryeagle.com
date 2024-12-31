import "./globals.css";

import Image from "next/image";

import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import Logo from "@/public/logo.svg";

import classNames from "classnames";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SentryEagle Maven Package Registry",
  description: "Welcome to the SentryEagle Maven Package Registry.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={classNames("bg-blue-50", "bg-[url('/pattern.svg')]")}
      lang="en"
    >
      <body
        className={classNames(
          "grid",
          "place-items-center",
          "min-h-dvh",
          "antialiased",
        )}
      >
        <div
          className={classNames(
            "bg-white",
            "m-6",
            "px-6",
            "pt-10",
            "pb-8",
            "shadow-xl",
            "ring-1",
            "ring-gray-900/5",
            "sm:max-w-lg",
            "sm:rounded-xl",
            "sm:px-10",
          )}
        >
          <div className={classNames("max-w-md")}>
            <div
              className={classNames(
                "flex",
                "items-center",
                "gap-1",
                manrope.className,
              )}
            >
              <Image
                src={Logo}
                className={classNames("h-6")}
                alt="SentryEagle"
              />
              <p className={classNames("font-bold", "tracking-tighter")}>
                SentryEagle
              </p>
              <p className={classNames("tracking-tighter", "hidden sm:flex")}>
                Maven Package Registry
              </p>
            </div>
          </div>
          {children}
          <div
            className={classNames(
              "grid",
              "space-y-4",
              "text-xs",
              "text-zinc-500",
            )}
          >
            <ul className={classNames("grid", "sm:flex", "gap-4")}>
              <a
                className={classNames(
                  "hover:underline",
                  "hover:underline-offset-2",
                )}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.sentryeagle.com/imprint/"
              >
                Imprint
              </a>
              <a
                className={classNames(
                  "hover:underline",
                  "hover:underline-offset-2",
                )}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.sentryeagle.com/privacy/"
              >
                Privacy Policy
              </a>
            </ul>
            <hr className={classNames("border-dashed")} />
            <p className={classNames("text-xs")}>
              Copying, editing, modifying, distributing, sharing, linking or any
              other use (whether for commercial purposes or otherwise) of this
              material, other than personal viewing, without SentryEagle&apos;s prior
              written permission is strictly prohibited.
            </p>
            <p>
              Copyright &copy; {new Date().getUTCFullYear()}{" "}
              <a
                className={classNames(
                  "hover:underline",
                  "hover:underline-offset-2",
                )}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.sentryeagle.com"
              >
                SentryEagle
              </a>
              , All rights reserved.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
