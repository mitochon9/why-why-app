import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useCallback, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LinkButton } from '@/component/atom/LinkButton';
import { answerState } from '@/state/answerState';
import { loadingState } from '@/state/loadingState';
import { valueState } from '@/state/valueState';

export interface ResultProps {}

export const defaultProps: ResultProps = {};

export const baseId = 'page-result';

export const Result = (props: ResultProps) => {
  const value = useRecoilValue(valueState);
  const answer = useRecoilValue(answerState);
  const [loading, setLoading] = useRecoilState(loadingState);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

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
    <>
      {loading && (
        <div className='overlay'>
          <Image src='/img/spinner.svg' alt='spinner' width={160} height={160} />
        </div>
      )}

      <ReactCanvasConfetti
        refConfetti={getInstance}
        className='pointer-events-none fixed top-0 left-0 z-10 h-full w-full'
      />

      <div className='w-full'>
        <h2 className='text-lg font-bold'>??????????????????</h2>
        <p>????????????????????????</p>
        <p className='text-lg font-bold'>{answer}</p>

        <h3>????????????????????????????????????</h3>
        <ul>
          {value.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>

      <LinkButton linkHref='/'>??????????????????</LinkButton>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};

export default Result;
