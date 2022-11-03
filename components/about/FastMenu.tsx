import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  className: string;
};

function FastMenu({ className }: Props) {
  const { pathname } = useRouter();

  return (
    <ul className={className}>
      <h3>Fast Menu</h3>
      <Link href="/" className={`${pathname === "/" ? "active" : ""}`}>
        Home
      </Link>
      <Link href="/about" className={`${pathname === "/About" ? "active" : ""}`}>
        About us
      </Link>
      <Link href="/contact" className={`${pathname === "/Contact" ? "active" : ""}`}>
        Contact
      </Link>
    </ul>
  );
}

export default FastMenu;
