import IconLeftClick from "@/assets/icons/IconLeftClick"
import IconRightClick from "@/assets/icons/IconRightClick"
import { cx } from "class-variance-authority"

type HowToPlayProps = {}

const HowToPlay = ({}: HowToPlayProps) => {
  return (
    <div className={cx("hidden mb-4", "xl:block")}>
      <div className={hintClass}>
        <IconLeftClick height="1.2rem" width="1.2rem" />
        <p>Left click: to fill the square</p>
      </div>
      <div className={hintClass}>
        <IconRightClick height="1.2rem" width="1.2rem" />
        <p>
          Right click: to mark the square with
          <span className="text-red-600"> X</span>
        </p>
      </div>
    </div>
  )
}

export default HowToPlay

const hintClass = cx("flex gap-1 items-center text-md text-secondary-200 mb-2")
