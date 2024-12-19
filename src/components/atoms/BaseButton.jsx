import styled from '@emotion/styled';

export const BaseButton = styled.button`
  padding: 6px 24px;
  border: none;
  color: #ffffff;
  border-radius: 9999px;
  outline: none; // ブラウザによってデフォルトでついている線を削除する
  &:hover {
    cursor: pointer;
    opacity: 0.8; // カーソルを合わせた時に、白くなる
  }
`;
