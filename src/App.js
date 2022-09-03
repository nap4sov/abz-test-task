import { useState, useEffect } from 'react';
import { fetchUsers } from './api/usersApi';
import Header from './layout/Header';
import Hero from './layout/Hero';
import Signup from './layout/Signup';
import Users from './layout/Users';
import Backdrop from './layout/Backdrop';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#00BDD3',
        },
        error: {
            main: '#CB3D40;',
        },
    },
    typography: {
        fontFamily: '"Nunito", sans-serif',
    },
});

function App() {
    const [successfulSubmit, setSuccessfulSubmit] = useState(false);
    const [usersList, setUsersList] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchUsers()
            .then(({ users, total_pages, page }) => {
                setUsersList(users);
                setTotalPages(total_pages);
                setCurrentPage(page);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [successfulSubmit]);

    const handleLoadMoreClick = () => {
        setIsLoading(true);
        const nextPage = currentPage + 1;
        fetchUsers(nextPage)
            .then(({ users, total_pages, page }) => {
                setUsersList([...usersList, ...users]);
                setTotalPages(total_pages);
                setCurrentPage(page);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Hero />
            <Users
                usersList={usersList}
                totalPages={totalPages}
                currentPage={currentPage}
                handleLoadMoreClick={handleLoadMoreClick}
            />
            <Signup
                setSuccessfulSubmit={setSuccessfulSubmit}
                successfulSubmit={successfulSubmit}
                setIsLoading={setIsLoading}
            />
            {isLoading && <Backdrop />}
        </ThemeProvider>
    );
}

export default App;
