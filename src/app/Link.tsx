// create a Link component that receives href as prop and returns a next/link component
import Link from "next/link";

const LinkText = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href} className="font-bold text-primary-base">
      {children}
    </Link>
  )
}

export default LinkText;