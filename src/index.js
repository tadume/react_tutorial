import { createRoot } from 'react-dom/client';
import { App } from './App';

// index.htmlからID属性rootの要素をDOM操作で取得する
const rootElement = document.getElementById('root');

// 上記の要素をレンダリングすることで、JSとして扱えるようにする
const root = createRoot(rootElement);

root.render(
  <>
    {/* tsx または jsx にしないと、コンポーネントと判断されないので、自動インポートができない!!! */}
    <App color="green">こんにちは!</App>
  </>,
);
