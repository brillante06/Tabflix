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

export type Theme = typeof Light;
