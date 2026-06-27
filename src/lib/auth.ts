export interface User {
  id: string
  nickname: string
  email: string
}

interface AuthResponse {
  user: User | null
  error: string | null
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const mockUsers: User[] = [
  {
    id: "1",
    nickname: "void_master",
    email: "master@void.com",
  },
]

export async function signUp(
  nickname: string,
  email: string,
  password: string
): Promise<AuthResponse> {
  await delay(1000)

  if (mockUsers.some(u => u.email === email)) {
    return { user: null, error: "Пользователь с таким email уже существует" }
  }

  const newUser: User = {
    id: Date.now().toString(),
    nickname,
    email,
  }

  mockUsers.push(newUser)
  return { user: newUser, error: null }
}

export async function signIn(
  email: string,
  password: string
): Promise<AuthResponse> {
  await delay(800)

  const user = mockUsers.find(u => u.email === email)
  if (!user) {
    return { user: null, error: "Неверный email или пароль" }
  }
  return { user, error: null }
}

export async function signOut(): Promise<void> {
  await delay(300)
}

export function getStoredUser(): User | null {
  if (typeof window === "undefined") return null
  const stored = localStorage.getItem("void_user")
  return stored ? JSON.parse(stored) : null
}

export function storeUser(user: User | null) {
  if (user) {
    localStorage.setItem("void_user", JSON.stringify(user))
  } else {
    localStorage.removeItem("void_user")
  }
}