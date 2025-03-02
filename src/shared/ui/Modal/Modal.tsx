import { classNames } from "shared/lib/classNames/classNames";
import cls from './Modal.module.scss'
import { ReactNode } from "react";
import { Portal } from "shared/ui/Portal/Portal";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose: () => void;
}
export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    }

    const handleClose = () => {
        if (onClose) {
            onClose()
        }
    }

    const onContentCLick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={() => handleClose()}>
                    <div className={cls.content} onClick={(e)=> onContentCLick(e)}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};