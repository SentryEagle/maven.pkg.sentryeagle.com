import classNames from "classnames";

export default function Page() {
  return (
    <div
      className={classNames("divide-y", "divide-gray-400/50", "divide-dashed")}
    >
      <div
        className={classNames(
          "space-y-6",
          "py-8",
          "text-base",
          "leading-7",
          "text-gray-600",
        )}
      >
        <p>Welcome to SentryEagle&apos;s Maven Package Registry.</p>
      </div>
      <div
        className={classNames(
          "py-8",
          "text-base",
          "font-semibold",
          "leading-7",
        )}
      >
        <p className={classNames("text-gray-900")}>
          Want to dig deeper into SentryEagle?
        </p>
        <p>
          <a
            href="https://github.com/sentryeagle"
            target="_blank"
            rel="noopener noreferrer"
            className={classNames("text-red-500", "hover:text-red-600")}
          >
            Visit us on GitHub &rarr;
          </a>
        </p>
      </div>
    </div>
  );
}
