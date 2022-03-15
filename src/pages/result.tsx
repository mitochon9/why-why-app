import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { MutableRefObject, useCallback, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { useRecoilState } from 'recoil';
import { Button } from '@/component/atom/Button';
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

  const refAnimationInstance: any = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  useEffect(() => {
    fire();
  }, [fire]);

  return (
    <div className='flex h-screen flex-col items-center justify-between px-2 text-center md:px-0'>
      <ReactCanvasConfetti
        refConfetti={getInstance}
        className='pointer-events-none fixed top-0 left-0 z-10 h-full w-full'
      />
      <Header />
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

      {/* <LinkButton linkHref='/'>トップへ戻る</LinkButton> */}
      <Button buttonType='button' buttonVariant='primary' onClick={onReturnTop}>
        トップへ戻る
      </Button>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};

export default Result;
