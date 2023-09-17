import { createBoard } from '@wixc3/react-board';
import MenuBar from '../../../MenuBar';

export default createBoard({
    name: 'MenuBar',
    Board: () => <MenuBar />,
    isSnippet: true,
});
