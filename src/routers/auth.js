

export const authRouter = [
    {
        path: "/",
        children: [
            {
                path: 'login',
                lazy: async () => {
                    const { InicioS } = await import('./../components/InicioS');
                    return { Component: InicioS }
                }
            },
            {
                path: 'register',
                lazy: async () => {
                    const { Reguistro } = await import('./../components/Reguistro');
                    return { Component: Reguistro }
                }
            },
        ],

    }
]

