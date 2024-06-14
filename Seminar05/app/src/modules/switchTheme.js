export const switchTheme = (theme) => {
    switch (theme) {
        case 'dark':
            return 'light';
        case 'light':
            return 'dark';
        default:
            return 'light';
    }
}