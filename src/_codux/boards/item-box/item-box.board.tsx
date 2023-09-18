import { createBoard } from '@wixc3/react-board';
import ItemBox from '../../../ItemBox';

export default createBoard({
    name: 'ItemBox',
    Board: () => <ItemBox />,
    isSnippet: true,
});
