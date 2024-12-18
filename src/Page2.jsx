import { memo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export const Page2 = memo(() => {
  console.log('--page2--');
  // const query = useLocation();
  // オブジェクトの分割代入でクエリパラメータが入っている searchを取得する
  const { search } = useLocation();
  // console.dir(query); // コンソールにオブジェクトの中身を表示してくれる
  console.log(`search=${search}`); // クエリは取得できるが、? も入っていて扱いにくい
  // JavaScriptが標準で用意してくれているURLSearchParamsを使う
  const query = new URLSearchParams(search);
  console.log(query);
  // getメソッドが用意されているので、キーを指定してクエリパラメータの値を取得
  // クエリらしく、そのキーがなくてもエラーにならない!
  const name = query.get('name');
  const age = query.get('age');

  const { id } = useParams();

  return (
    <>
      <h1>Page2画面</h1>
      <p>パラメータは{id}です。</p>
      <p>クエリパラメータ name は{name ?? 'なし'}です。</p>
      <p>クエリパラメータ age は{age ?? 'なし'}です。</p>
    </>
  );
});
