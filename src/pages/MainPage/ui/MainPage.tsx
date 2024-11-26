import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageLoader } from "widgets/PageLoader/PageLoader";
import { BugButton } from "app/providers/ErrorBoundary";

const MainPage = () => {
    const { t } = useTranslation('home');

    return (
        <div>
            <h1>
                {
                    t('Главная страница')
                }
            </h1>
            <BugButton/>
        </div>
    );
};

export default MainPage;
