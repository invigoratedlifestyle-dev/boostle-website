"use client";

import Link from "next/link";
import { MouseEvent, ReactNode } from "react";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      action: string,
      params: Record<string, string>,
    ) => void;
  }
}

type TrackLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  eventName: string;
  eventLabel: string;
  external?: boolean;
};

export function TrackLink({
  href,
  children,
  className,
  eventName,
  eventLabel,
  external = false,
}: TrackLinkProps) {
  const handleClick = () => {
    window.gtag?.("event", eventName, {
      event_category: "cta",
      event_label: eventLabel,
      value: "1",
    });
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

type TrackButtonProps = {
  children: ReactNode;
  className?: string;
  eventName: string;
  eventLabel: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export function TrackButton({
  children,
  className,
  eventName,
  eventLabel,
  onClick,
}: TrackButtonProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    window.gtag?.("event", eventName, {
      event_category: "cta",
      event_label: eventLabel,
      value: "1",
    });

    onClick?.(event);
  };

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
}