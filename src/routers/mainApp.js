import { MainLayout } from '../MainLayout';


export const mainAppRouter = [
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: 'directorio',
                lazy: async () => {
                    const { Directorio } = await import('./../components/Directorio');
                    return { Component: Directorio }
                }
            },
            {
                path: 'transferencia',
                lazy: async () => {
                    const { Tranfe } = await import('./../components/Tranfe');
                    return { Component: Tranfe }
                }
            },
            {
                path: 'prueba',
                lazy: async () => {
                    const { InicioUsuario } = await import('./../components/InicioUsuario');
                    return { Component: InicioUsuario }
                }
            },
            {
                path: 'mi-cuenta',
                lazy: async () => {
                    const { Datos } = await import('./../components/Datos');
                    return { Component: Datos }
                }
            },
            {
                path: 'passwordManager',
                lazy: async () => {
                    const { PasswordManager } = await import('./../components/PasswordManager');
                    return { Component: PasswordManager }
                }
            },
        ],

    }
]   

