import { createContext, useState } from 'react'
import { ITestUsers } from '../types/models/ITestUsers'
import { useUserInfo } from '../hooks/useUserInfo'

interface SearchContextType {
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  selectedArtist: ITestUsers | null
  setSelectedArtist: (artist: ITestUsers | null) => void
  userData: ITestUsers[] | null
  filteredResults: ITestUsers[] | null
  setFilteredResults: (results: ITestUsers[] | null) => void
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const { userData } = useUserInfo()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedArtist, setSelectedArtist] = useState<ITestUsers | null>(null)
  const [filteredResults, setFilteredResults] = useState<ITestUsers[] | null>(null)

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        selectedArtist,
        setSelectedArtist,
        userData,
        filteredResults,
        setFilteredResults
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
