import Link from "next/link";

export default function Links() {
  return (
    <div>
      <div>
        <Link href="/page1">Page1</Link>
      </div>
      <div>
        <Link href="/page2">Page2</Link>
      </div>
      <div>
        <Link href="/page3">Page3</Link>
      </div>
    </div>
  );
}
