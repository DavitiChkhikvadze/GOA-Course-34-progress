import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { dark, toggleTheme } = useTheme()

  return (
    <div className="flex justify-end mb-4">
      <button onClick={toggleTheme} className="p-2 border rounded">
        {dark ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  )
}
