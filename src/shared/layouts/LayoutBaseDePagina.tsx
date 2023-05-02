import { Box } from '@mui/system';
import { ReactNode } from 'react';
import { Typography, useTheme, IconButton, Icon, useMediaQuery, Theme } from '@mui/material';
import { useDrawerContext } from '../contexts';


interface ILayoutBaseDePaginaProps {
    titulo: string;
    children?: ReactNode;
    barraDeFerramentas?: ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, titulo, barraDeFerramentas }) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const theme = useTheme();

    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Box display="flex" flexDirection="column" height="100%" gap={1}>
            <Box display="flex" height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} alignItems="center" padding={1} gap={1}>
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}

                <Typography                     
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipses"
                    variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
                >                        
                    {titulo}
                </Typography>
            </Box>

            {barraDeFerramentas && (
                <Box>
                    {barraDeFerramentas}
                </Box>
            )}

            <Box flex={1} overflow="auto">
                {children}
            </Box>
        </Box>
    );
};