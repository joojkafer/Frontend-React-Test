// src/contexts/SearchContext.tsx
import { createContext, useContext, useState } from "react"

interface SearchContextType {
  searchValue: string
  setSearchValue: (value: string) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchValue, setSearchValue] = useState("")

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearchContext() {
  const context = useContext(SearchContext)
  if (!context) throw new Error("useSearchContext must be used within SearchProvider")
  return context
}
