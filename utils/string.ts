export const classList = (...args: Array<string | undefined | number | null | boolean>) => {
    return args.filter(item => !!item).join(' ');
}