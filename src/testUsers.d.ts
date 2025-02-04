interface TestUser {
  id: number
  name: string
  state: string
  streams: string
}

declare module '../../testUsers' {
  const testUsers: TestUser[]
  export { testUsers }
}
