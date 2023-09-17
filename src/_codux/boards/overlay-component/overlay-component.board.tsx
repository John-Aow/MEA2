import { createBoard } from '@wixc3/react-board';
import OverlayComponent from '../../../OverlayComponent';

export default createBoard({
    name: 'OverlayComponent',
    Board: () => <OverlayComponent />,
    isSnippet: true,
});
