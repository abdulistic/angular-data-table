  export interface UserViewModel {
    id: number
    email: string
    username: string
    password: string
    phone: string
    isEditing: boolean
  }
  

  export interface ProductViewModel {
    id: number
    title: string
    price: number
    description: string
    category: Category
    images: string[]
    isEditing: boolean
  }
  
  export interface Category {
    id: number
    name: string
    image: string
  }