import { useState, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import searchContext from '../context/search/searchContext'

const SearchBar = () => {
    const { setGlobalSearchTerm, searchFromPage } = useContext(searchContext)
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()
    const { pathname } = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault()
        if (pathname === "/") {
            navigate(`/search/${searchTerm}`)
            setGlobalSearchTerm(searchTerm)
        } else {
            setGlobalSearchTerm(searchTerm)
        }
    }

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '2px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                // mr: { sm: 5 }
                // width: "40%",
                // margin: "5% 0"
            }}
        >
            <input
                className="search-bar"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value) }}
            />
            {/* <IconButton type="submit" sx={{ p: '10px', color: "red", marginLeft: "28%" }}> */}
            <IconButton type="submit" sx={{ p: '10px', color: "red" }}>
                <Search />
            </IconButton>
        </Paper >
    )
}
export default SearchBar