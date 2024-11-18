import {RouteProps} from "react-router-dom";
import MainPage from "pages/MainPage/ui/MainPage";
import AboutPage from "pages/AboutPage/ui/AboutPage";


export enum AppRoutes {
    // enum (перечисление) — это специальный тип данных, который позволяет создать набор именованных констант.
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    // Record — это тип, который используется для создания объектов,
    // в которых ключи и значения имеют заранее определённые типы.
    // Record<Keys, Type> позволяет указать типы ключей и значений для объекта.
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    }
}