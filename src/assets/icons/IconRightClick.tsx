type IconRightClickProps = React.ComponentPropsWithoutRef<"svg"> & {}

const IconRightClick = (props: IconRightClickProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_303_71)">
        <rect width="12" height="12" />
        <rect
          x="2.5"
          y="1.5"
          width="7"
          height="9"
          rx="1.5"
          stroke="currentColor"
        />
        <path d="M6 2V10M3 5H9" stroke="currentColor" />
        <path d="M6 1H8C9.10457 1 10 1.89543 10 3V5H6V1Z" fill="currentColor" />
      </g>
    </svg>
  )
}

export default IconRightClick
