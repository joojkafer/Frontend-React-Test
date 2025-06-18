import { createFileRoute } from '@tanstack/react-router'
import { CharacterList } from '../components/CharactersList'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">    
        <CharacterList/>
    </div>
  )
}