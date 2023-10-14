import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { ChannelDetail, VideoDetail, SearchFeed } from './components';
import Home from "./components/Home";
import SearchState from "./context/search/searchState";

const App = () => (
    <SearchState>
        <BrowserRouter>
            <Box sx={{ backgroundColor: '#000' }}>
                {/* <Navbar /> */}
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/video/:id' element={<VideoDetail />} />
                    <Route path='/channel/:id' element={<ChannelDetail />} />
                    <Route path='/search/:searchTerm' element={<SearchFeed />} />
                </Routes>
            </Box>
        </BrowserRouter>
    </SearchState>
);

export default App;