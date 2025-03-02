import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false)
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal onClose={onToggleModal} isOpen={isAuthModal}>
                auth
            </Modal>
        </div>
    );
};
