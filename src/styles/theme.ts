export const Dark = {
    bgColor: '#1e1e1e',
    textColor: '#ffffff',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
    translateFirst: 'translateY(100px)',
    translateSecond: 'translateY(0)',
};

export const Light = {
    bgColor: '#ffffff',
    textColor: '#1e1e1e',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
    translateFirst: 'translateY(0)',
    translateSecond: 'translateY(-100px)',
};
export const deviceSize = {
    mobile: '475px',
    tablet: '768px',
    laptop: '1024px',
};

export const device = {
    mobile: `screen and (max-width: ${deviceSize.mobile})`,
    tablet: `screen and (max-width: ${deviceSize.tablet})`,
    laptop: `scrren and (max-width: ${deviceSize.laptop})`,
};

const theme = { device };
export default theme;
