import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('translation');
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to="/"
                    className={cls.mainLink}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('Главная страница')}
                </AppLink>
                <AppLink
                    to="/about"
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
