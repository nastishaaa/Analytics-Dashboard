import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Grid } from "@mui/material"; 

import Header from "../components/Header/Header";
import Loader from '../components/Loader/Loader';
import Footer from '../components/Footer/Footer';
import Drawer from "../components/Drawer/Drawer";

export default function RootLayout() {

    const [isOpen, setIsOpen] = useState(() => {
        const saved = localStorage.getItem('isOpened');

        return saved ? JSON.parse(saved) : false;
    });

    const handleClick = () => setIsOpen(!isOpen);

    useEffect(() => {
        localStorage.setItem("isOpened", JSON.stringify(isOpen));
    }, [isOpen]);

    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header handleClick={handleClick} isOpen={isOpen} />

            <Box component="main" sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
                <Grid container sx={{ flexGrow: 1 }}>

                    <Grid
                        sx={{
                            width: isOpen ? { md: '250px', lg: '300px' } : '0px',
                            opacity: isOpen ? 1 : 0,
                            overflow: 'hidden',
                            transition: 'all 0.3s ease-in-out',
                            borderRight: isOpen ? '1px solid #eee' : 'none',
                            display: { xs: isOpen ? 'block' : 'none', md: 'block' }
                        }}
                    >
                        <Box sx={{ width: { md: '250px', lg: '300px' }, p: 2 }}>
                            <Drawer />
                        </Box>
                    </Grid>

                    <Grid
                        sx={{
                            flexGrow: 1,
                            p: 3,
                            transition: 'all 0.3s ease-in-out',
                            borderLeft: isOpen ? '1px solid #1976d2' : 'none'
                        }}
                    >
                        <Suspense fallback={<Loader />}>
                            <Outlet />
                        </Suspense>
                    </Grid>

                </Grid>
            </Box>

            <Footer />
        </Box>
    );
}