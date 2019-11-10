import refreshList from './components/menu';
import data from './db/menu.json';
import refs from './utils/refs';
import theme from './utils/themes';

refreshList(data, refs.menu);
