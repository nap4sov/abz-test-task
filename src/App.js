import { useState, useEffect } from 'react';
import { fetchUsers } from './api/usersApi';
import Header from './layout/Header';
import Hero from './layout/Hero';
import Signup from './layout/Signup';
import Users from './layout/Users';

function App() {
    const [successfulSubmit, setSuccessfulSubmit] = useState(false);
    const [usersList, setUsersList] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchUsers().then(({ users, total_pages, page }) => {
            setUsersList(users);
            setTotalPages(total_pages);
            setCurrentPage(page);
        });
    }, [successfulSubmit]);

    const handleLoadMoreClick = () => {
        const nextPage = currentPage + 1;
        fetchUsers(nextPage).then(({ users, total_pages, page }) => {
            setUsersList([...usersList, ...users]);
            setTotalPages(total_pages);
            setCurrentPage(page);
        });
    };

    return (
        <>
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
            />
        </>
    );
}

export default App;
