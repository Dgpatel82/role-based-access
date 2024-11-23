const menu = [
    { id: 0, displayName: 'Home', path: 'dashboard', role: ['USER', 'ADMIN'] },
    { id: 1, displayName: 'Admin Panel', path: 'admin', role: ['ADMIN'] },
    { id: 2, displayName: 'Users', path: 'user', role: ['ADMIN'] },
    { id: 3, displayName: 'User Info', path: 'user-info', role: ['USER'] }
];

export const getMenu = (userRole) => {
    return menu.filter(item => item.role.includes(userRole.toUpperCase()));
};
