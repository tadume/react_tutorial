import { memo } from 'react';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { Input } from '../atoms/Input/Input';
import styled from '@emotion/styled';

export const SearchInput = memo(() => {
  /*
    PrimaryButtonと入力フォームを組み合わせた検索フォームを作成
  */
  return (
    <SContainer>
      <Input placeholder="検索条件を入力して下さい" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

// 検索フォームの位置は、外部で利用する側が決めること!
const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

// ボタンコンポーネントではなく、このコンポーネントを使うときは、ボタンとの間に余白が欲しいので、ここで余白をつける。
// つまり、Moleculesの役割は、スタイルを用途によって、ラップすること!!!
const SButtonWrapper = styled.div`
  margin-left: 5px;
`;
