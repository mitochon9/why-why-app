import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Button } from '@/component/atom/Button';
import { LinkButton } from '@/component/atom/LinkButton';
import { Footer } from '@/component/organism/Footer';
import { Header } from '@/component/organism/Header';
import { answerState } from '@/state/answerState';
import { valueState } from '@/state/valueState';

export interface ResultProps {}

export const defaultProps: ResultProps = {};

export const baseId = 'page-result';

export const Result = (props: ResultProps) => {
  const router = useRouter();
  const [value, setValue] = useRecoilState(valueState);
  const [answer, setAnswer] = useRecoilState(answerState);

  const onReturnTop = useCallback(() => {
    setValue([]);
    setAnswer('');
    router.push('/');
  }, [setValue, setAnswer, router]);

  return (
    <>
      <div className='w-full'>
        <h2 className='text-lg font-bold'>おめでとう！</h2>
        <p>導き出した答えは</p>
        <p className='text-lg font-bold'>{answer}</p>

        <h3>導き出した答えまでの経緯</h3>
        <ul>
          {value.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>

      <Button buttonType='button' buttonVariant='primary' onClick={onReturnTop}>
        トップへ戻る
      </Button>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};

export default Result;
