"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const Section = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: ReactNode | string;
}) => {
  const pathname = usePathname();

  const scrollMarginClass = pathname.includes("ehs")
    ? "scroll-mt-24"
    : "scroll-mt-32";

  return (
    <div
      className={`flex flex-col p-1 border border-border-secondary rounded-xl gap-3 ${scrollMarginClass}`}
      id={title}
    >
      <div
        className="flex items-center gap-2 bg-background-tertiary py-2.5 px-3 rounded-lg z-10"
        data-title={`summary_section_${title}`}
      >
        <div className="flex items-center p-1 border rounded-lg w-7 h-7">
          <Image alt="section icon" src={icon} width={16} height={16} />
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Section;
