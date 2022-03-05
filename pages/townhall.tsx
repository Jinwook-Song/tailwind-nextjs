import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Townhall: NextPage = () => {
  const [result, setResult] = useState([
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
  ]);
  const [done, setDone] = useState(false);
  const [bird, setBird] = useState(0);
  const [mammalia, setMammalia] = useState(0);
  const [etc, setEtc] = useState(0);
  const [type, setType] = useState('');

  useEffect(() => {
    if (Math.max(bird, mammalia, etc) === bird) {
      setType('조류');
    } else if (Math.max(bird, mammalia, etc) === mammalia) {
      setType('포유류');
    } else {
      setType('기타');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Math.max(bird, mammalia, etc)]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    result.forEach((i) =>
      i === '1'
        ? setBird((prev) => prev + 1)
        : i === '2'
        ? setMammalia((prev) => prev + 1)
        : setEtc((prev) => prev + 1)
    );

    setDone(true);
  };

  const handleChange = (e: any) => {
    let newResult;
    switch (e.target.name) {
      case 'q1':
        newResult = [...result];
        newResult.splice(0, 1, e.target.value);
        setResult(newResult);
        break;
      case 'q2':
        newResult = [...result];
        newResult.splice(1, 1, e.target.value);
        setResult(newResult);
        break;
      case 'q3':
        newResult = [...result];
        newResult.splice(2, 1, e.target.value);
        setResult(newResult);
        break;
      case 'q4':
        newResult = [...result];
        newResult.splice(3, 1, e.target.value);
        setResult(newResult);
        break;
      case 'q5':
        newResult = [...result];
        newResult.splice(4, 1, e.target.value);
        setResult(newResult);
        break;
      case 'q6':
        newResult = [...result];
        newResult.splice(5, 1, e.target.value);
        setResult(newResult);
        break;
      case 'q7':
        newResult = [...result];
        newResult.splice(6, 1, e.target.value);
        setResult(newResult);
        break;
      case 'q8':
        newResult = [...result];
        newResult.splice(7, 1, e.target.value);
        setResult(newResult);
        break;
      case 'q9':
        newResult = [...result];
        newResult.splice(8, 1, e.target.value);
        setResult(newResult);
        break;
      case 'q10':
        newResult = [...result];
        newResult.splice(9, 1, e.target.value);
        setResult(newResult);
        break;
    }
  };

  const handleBack = () => {
    setBird(0);
    setMammalia(0);
    setEtc(0);
    setDone(false);
  };

  if (done) {
    return (
      <div className='w-full h-screen flex flex-col justify-center items-center text-3xl font-bold space-y-3'>
        <h1>설문이 제출되었습니다.</h1>
        <h3>
          당신은 {Math.max(bird, mammalia, etc)}0% {type} 입니다.
        </h3>
        <span
          onClick={handleBack}
          className='cursor-pointer text-orange-400 hover:text-orange-500'
        >
          돌아가기
        </span>
      </div>
    );
  }

  return (
    <div className='px-2 py-10 lg:px-10 lg:py-24 bg-[url("/s1img.gif")] bg-cover bg-center'>
      <h2 className='mb-10 text-3xl font-bold'>TOWN HALL MEETING 🎉</h2>
      <div>
        <form
          className='flex flex-col space-y-8 max-w-lg justify-center items-start'
          action=''
          onSubmit={handleSubmit}
        >
          {/* Q1 */}
          <div className='flex flex-col space-y-3'>
            <strong>Q1. 나는 출근시</strong>
            <select
              name='q1'
              id=''
              onChange={handleChange}
              className='cursor-pointer rounded-md'
            >
              <option value={1}>지각하는 편이다.</option>
              <option value={2}>출근 시간에 딱 맞춰온다.</option>
              <option value={3}>빨리온다.</option>
            </select>
          </div>
          {/* Q2 */}
          <div className='flex flex-col space-y-3'>
            <strong>
              Q2. 회사에서 말이 많거나 시끄럽다는 소리를 듣는 편이다.
            </strong>
            <select
              name='q2'
              id=''
              onChange={handleChange}
              className='cursor-pointer rounded-md'
            >
              <option value={1}>그렇다.</option>
              <option value={2}>보통이다.</option>
              <option value={3}>아니다.</option>
            </select>
          </div>
          {/* Q3 */}
          <div className='flex flex-col space-y-3'>
            <strong>Q3. 회사에서</strong>
            <select
              name='q3'
              id=''
              onChange={handleChange}
              className='cursor-pointer rounded-md'
            >
              <option value={1}>칼퇴한다.</option>
              <option value={2}>30분 내외로 퇴근한다.</option>
              <option value={3}>야근을 오래하는 편이다.</option>
            </select>
          </div>
          {/* Q4 */}
          <div className='flex flex-col space-y-3'>
            <strong>Q4. 나의 나이대는 ( )이다.</strong>
            <select
              name='q4'
              id=''
              onChange={handleChange}
              className='cursor-pointer rounded-md'
            >
              <option value={1}>20대</option>
              <option value={2}>30대</option>
              <option value={3}>40대 이상</option>
            </select>
          </div>
          {/* Q5 */}
          <div className='flex flex-col space-y-3'>
            <strong>Q5. 나의 키는 ( cm) 이다.</strong>
            <select
              name='q5'
              id=''
              onChange={handleChange}
              className='cursor-pointer rounded-md'
            >
              <option value={1}>~165</option>
              <option value={2}>166~175</option>
              <option value={3}>176~</option>
            </select>
          </div>
          {/* Q6 */}
          <div className='flex flex-col space-y-3'>
            <strong>Q6. 나는 밥을 많이 먹는 편이다.</strong>
            <select
              name='q6'
              id=''
              onChange={handleChange}
              className='cursor-pointer rounded-md'
            >
              <option value={1}>그렇다.</option>
              <option value={2}>보통이다.</option>
              <option value={3}>적게 먹는다.</option>
            </select>
          </div>
          {/* Q7 */}
          <div className='flex flex-col space-y-3'>
            <strong>Q7. 나는 커피를 좋아한다.</strong>
            <select
              name='q7'
              id=''
              onChange={handleChange}
              className='cursor-pointer rounded-md'
            >
              <option value={1}>그렇다.</option>
              <option value={2}>보통이다.</option>
              <option value={3}>아니다.</option>
            </select>
          </div>
          {/* Q8 */}
          <div className='flex flex-col space-y-3'>
            <strong>Q8. 나는 사내에서 내 일 외에도 많이 참여한다.</strong>
            <select
              name='q8'
              id=''
              onChange={handleChange}
              className='cursor-pointer rounded-md'
            >
              <option value={1}>그렇다.</option>
              <option value={2}>보통이다.</option>
              <option value={3}>아니다.</option>
            </select>
          </div>
          {/* Q9 */}
          <div className='flex flex-col space-y-3'>
            <strong>Q9. 내 책상은 깨끗한 편이다. (지금)</strong>
            <select
              name='q9'
              id=''
              onChange={handleChange}
              className='cursor-pointer rounded-md'
            >
              <option value={1}>그렇다.</option>
              <option value={2}>보통이다.</option>
              <option value={3}>아니다.</option>
            </select>
          </div>
          {/* Q10 */}
          <div className='flex flex-col space-y-3'>
            <strong>Q10. 나는 애사심이 많은 편이다.</strong>
            <select
              name='q10'
              id=''
              onChange={handleChange}
              className='cursor-pointer rounded-md'
            >
              <option value={1}>그렇다.</option>
              <option value={2}>보통이다.</option>
              <option value={3}>아니다.</option>
            </select>
          </div>
          <div className='flex justify-end mt-5'>
            <button className='shadow-xl bg-orange-400 hover:bg-orange-500 active:ring-2 ring-orange-400 p-3 rounded-lg text-white'>
              제출하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Townhall;
