import Link, { LinkProps } from "next/link"

export type DifficultiesButtonProps = LinkProps & {
  children?: React.ReactNode
}

const DifficultiesButton = ({
  children,
  ...props
}: DifficultiesButtonProps) => {
  return (
    <Link
      className={
        "block text-white text-xl font-medium p-2 rounded-md text-center hover:text-primary-400 hover:animate-tiltIn"
      }
      {...props}
    >
      {children}
    </Link>
  )
}

export default DifficultiesButton
