import Link from "next/link";

export default function Toolbar() {

  return (
    <ul>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"blog"}>Blog</Link>
      </li>
      <li>
        <Link href={"about"}>About</Link>
      </li>
    </ul>
  )
}