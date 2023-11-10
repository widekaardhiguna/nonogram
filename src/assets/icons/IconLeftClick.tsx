type IconLeftClickProps = React.ComponentPropsWithoutRef<"svg"> & {}

const IconLeftClick = (props: IconLeftClickProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_302_61)">
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
        <path d="M2 3C2 1.89543 2.89543 1 4 1H6V5H2V3Z" fill="currentColor" />
      </g>
    </svg>
  )
}

export default IconLeftClick
