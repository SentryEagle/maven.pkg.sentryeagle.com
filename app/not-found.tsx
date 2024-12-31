import Link from "next/link";

import classNames from "classnames";

export default function NotFound() {
  return (
    <div
      className={classNames(
        "space-y-3",
        "py-8",
        "text-base",
        "leading-7",
        "text-gray-900",
      )}
    >
      <h2 className={classNames("font-bold")}>Error 404: Not Found</h2>
      <p>We could not find the requested resource.</p>
      <p className={classNames("font-semibold")}>
        <Link
          href="/"
          className={classNames("text-red-500", "hover:text-red-600")}
        >
          Back &rarr;
        </Link>
      </p>
    </div>
  );
}
