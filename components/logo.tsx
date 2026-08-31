import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-10 w-10", priority = false }: LogoProps) {
  return (
    <Image
      src="/gsla-logo.png"
      alt="Global Shapers Los Angeles"
      width={873}
      height={806}
      priority={priority}
      className={`rounded-xl bg-white object-contain ${className}`}
    />
  );
}
