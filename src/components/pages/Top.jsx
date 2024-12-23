import { memo, useCallback, useContext } from 'react';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
import axios from 'axios';

export const Top = memo(() => {
  const navigate = useNavigate();

  // グローバルなstateであるユーザ情報の更新関数を取得
  const { userInfo, setUserInfo } = useContext(UserContext);

  const onClickAdminUser = useCallback(() => {
    // ユーザ情報オブジェクトの一つとして isAdminをセット
    setUserInfo({ isAdmin: true });
    navigate('/users');
  }, [userInfo]);

  const onClickGeneralUser = useCallback(() => {
    setUserInfo({ isAdmin: false });
    navigate('/users');
  }, [userInfo]);

  const onGetUsers = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((result) => console.log(result.data))
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <div>
        <h1>TOP画面</h1>
        <SecondaryButton onClick={onClickAdminUser}>
          管理者ユーザ
        </SecondaryButton>
        <br />
        <br />
        <SecondaryButton onClick={onClickGeneralUser}>
          一般ユーザ
        </SecondaryButton>
      </div>
      <button onClick={onGetUsers}>一覧取得</button>
    </>
  );
});
