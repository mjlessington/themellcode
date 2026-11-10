import Image from "next/image";

export function Logo({ height = 26 }: { height?: number }) {
  const width = Math.round((height * 1200) / 205);
  return (
    <span className="logo" style={{ height }}>
      <Image src="/img/logo-black.png" alt="TheMellCode" width={width} height={height} className="show-light" priority />
      <Image src="/img/logo-white.png" alt="" width={width} height={height} className="show-dark" priority />
    </span>
  );
}
