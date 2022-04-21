export interface IAddressUser {
    street: string
    city: string
    zipcode: string
}
export interface ICompany {
    name: string
}

export interface ICuretnUser {
    id: number
    name: string
    username: string
    email: string
    address: IAddressUser
    company: ICompany
    phone: string
    website: string
}