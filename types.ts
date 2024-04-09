//test
export interface LoginResponse {
    tokens: {
        access: {
            token: string,
            expires: string // Puedes ajustar el tipo de dato según el formato de fecha y hora que estés utilizando
        },
        refresh: {
            token: string,
            expires: string // Puedes ajustar el tipo de dato según el formato de fecha y hora que estés utilizando
        }
    },
    user: User
}

export interface User {
    id: number,
    name: string,
    lastname: string,
    email: string,
    password: string,
    role: string
}