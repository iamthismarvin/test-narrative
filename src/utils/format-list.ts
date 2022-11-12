export default (list: string[]) => list.join(list.length === 2 ? ' & ' : ', ')
