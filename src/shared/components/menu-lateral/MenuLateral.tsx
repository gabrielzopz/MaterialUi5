import { Drawer, useTheme, Avatar, Divider, List, ListItemButton, ListItemIcon, Icon, ListItemText } from '@mui/material';
import { Box } from '@mui/system';

interface IAppThemeProviderProps {
    children: React.ReactNode
}

export const MenuLateral: React.FC<IAppThemeProviderProps> = ({ children }) => {
    const theme = useTheme();

    return (
        <>
            <Drawer variant='permanent'>
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar 
                            sx={{ width: theme.spacing(12), height: theme.spacing(12)}}
                            alt="Gabriel" 
                            src="/static/images/avatar/1.jpg"
                        />
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>                                    
                                </ListItemIcon>
                                <ListItemText primary="Página inicial" />
                            </ListItemButton>
                        </List>


                    </Box>

                    
                </Box>                
            </Drawer>

            <Box height="100vh" marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};