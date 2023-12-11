import * as Dialog from "@radix-ui/react-dialog"
import type { DialogDescriptionProps } from "@radix-ui/react-dialog"

export const Description = (props: DialogDescriptionProps) => {
  return <Dialog.Description className="m-2" {...props} />
}
