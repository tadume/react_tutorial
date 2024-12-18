import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

export const NextPage = memo(() => {
  const navigate = useNavigate();

  // 前画面に戻るためのイベント関数
  const onBack = () => navigate(-1);

  return (
    <>
      <p>Next画面</p>
      <button onClick={onBack}>戻る</button>
    </>
  );
});
