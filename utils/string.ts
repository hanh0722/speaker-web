export const classList = (...args: Array<string | undefined | number | null>) => {
    return args.filter(item => !!item).join(' ');
}