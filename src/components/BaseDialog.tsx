import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface DialogProps {
  trigger: string;
  triggerIcon?: React.ReactNode;
  close: string;
  children?: React.ReactNode;

  triggerVariant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  closeVariant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;

  header?: boolean;
  footer?: boolean;

  title?: string;
  description?: string;
  classNameBtn?: string;

  triggerIconPosition?: "left" | "right";
}

const BaseDialog = ({
  trigger,
  triggerIcon,
  triggerIconPosition = "right",
  close,
  children,
  triggerVariant = "default",
  closeVariant = "outline",
  header = false,
  title,
  description,
  footer = true,
  classNameBtn,
}: DialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={triggerVariant} className={`${classNameBtn}`}>
          {triggerIcon && triggerIconPosition === "left" && triggerIcon}
          {trigger}
          {triggerIcon && triggerIconPosition === "right" && triggerIcon}
        </Button>
      </DialogTrigger>

      <DialogContent className="lg:max-w-[60rem] sm:max-w-[40rem] w-full h-[50rem] overflow-auto">
        {header ? (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
        ) : null}

        {/* Dialog Content */}
        {children}
        {/* Dialog Content */}

        {footer ? (
          <DialogFooter>
            <DialogClose asChild>
              <Button variant={closeVariant}>{close}</Button>
            </DialogClose>
          </DialogFooter>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default BaseDialog;
