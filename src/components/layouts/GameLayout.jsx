import { Alert, Box, Button, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const styleForQuizFailure = {
  backgroundImage: "url('/Hero.png')",
  height: '70%',
  width: "350px",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: "rgba(255,255,255,0.3)",
  backgroundBlendMode: "lighten"
};

const styleForQuizCompleted = {
  backgroundImage: "url('/zannnensou.jpeg')",
  height: '70%',
  width: "350px",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: "rgba(255,255,255,0.3)",
  backgroundBlendMode: "lighten"
};

const styleForQuiz = {
  // backgroundImage: "url('/smile.png')",
  // height: '100%',
  // width: "100%",
  // backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'center',
  // backgroundColor: "rgba(255,255,255,0.3)",
  // backgroundBlendMode: "lighten",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const styleForFooter = {
  backgroundImage: "url('/smile.png')",
  height: '100px',
  width: "100px",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: "rgba(255,255,255,0.3)",
  backgroundBlendMode: "lighten",
}

export function GameLayout() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timer, setTimer] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(null);
  const [ correctCount, setCorrectCount ] = useState(0);
  const [ isCorrect, setIsCorrect ] = useState(false);
  const [ isDisabled, setIsDisabled ] = useState(true);
  const navigate = useNavigate();

  const questions = [
    {
      // Q.1
      imageUrl: "/q1.webp",
      correctOption: 'B',
      optionA: "ヒザ",
      optionB: "ヒジ",
    },
    {
      // Q.2
      imageUrl: "/q3.jpeg",
      correctOption: 'A',
      optionA: "ヒザ",
      optionB: "ヒジ"
    },
    {
      imageUrl: "/q2.jpeg",
      correctOption: 'A',
      optionA: "ピザ",
      optionB: "ヒザ"
    },
    {
      imageUrl: "/q7.jpeg",
      correctOption: 'B',
      optionA: "ピザ",
      optionB: "ビザ",
      credit: "53期ミッツ"
    },
    {
      imageUrl: "/q8.jpeg",
      correctOption: 'A',
      optionA: "キザ",
      optionB: "ヒザ",
      credit: "53期ミッツ"
    },
    {
      imageUrl: "/q4.webp",
      correctOption: 'A',
      optionA: "フリーザ",
      optionB: "ピザーラ",
      credit: "53期ミッツ"
    },
    {
      imageUrl: "/q6.png",
      correctOption: 'B',
      optionA: "ピイザ",
      optionB: "パイザ"
    },
    {
      imageUrl: "/q5.jpeg",
      correctOption: 'A',
      optionA: "ヒダ",
      optionB: "キザ",
      credit: "53期ミッツ"
    },
    {
      imageUrl: "/q9.png",
      correctOption: 'A',
      optionA: "上座",
      optionB: "上野",
      credit: "53期ミッツ"
    },
    {
      // Q.10
      imageUrl: "/q10.jpeg",
      correctOption: 'A',
      optionA: "キンサ",
      optionB: "タイサ"
    },
    {
      imageUrl: "/q11.png",
      correctOption: 'B',
      optionA: "トンザ",
      optionB: "チンザ",
      credit: "52期きょうへい"
    },
    {
      imageUrl: "/q12.jpeg",
      correctOption: 'B',
      optionA: "センサ",
      optionB: "ベンザ"
    },
    {
      imageUrl: "/q13.png",
      correctOption: 'A',
      optionA: "サソリザ",
      optionB: "オウシザ"
    },
    {
      imageUrl: "/q14.jpeg",
      correctOption: 'B',
      optionA: "モリノザ",
      optionB: "モナリザ"
    },
    {
      imageUrl: "/q15.jpeg",
      correctOption: 'A',
      optionA: "ミョウガ",
      optionB: "ショウガ"
    },
    {
      // Q.16
      imageUrl: "/q16.webp",
      correctOption: 'B',
      optionA: "オッカケ",
      optionB: "ファンサ"
    },
    {
      imageUrl: "/q17.jpeg",
      correctOption: 'A',
      optionA: "スピノザ",
      optionB: "パスカル"
    },
    {
      imageUrl: "/q18.jpeg",
      correctOption: 'A',
      optionA: "ファンザ",
      optionB: "ファンサ"
    },
    {
      imageUrl: "/q19.jpeg",
      correctOption: 'B',
      optionA: "ロンドン",
      optionB: "ギンザ",
      credit: "52期きょうへい"

    },
    {
      // Q.20
      imageUrl: "/q20.jpeg",
      correctOption: 'B',
      optionA: "ラクチンベンザ",
      optionB: "ラクイチラクザ"
    },

  ];

  useEffect(() => {
    if (gameCompleted === false || isCorrect === null) {
      if(timer > 0) {
        const id = setTimeout(() => setTimer(timer - 1), 1000);
        return () => clearTimeout(id);
      } else {
        setGameOver(true); // 制限時間超過でゲーム終了
      }
    } else {
      const id = setTimeout(() => setTimer(timer), 1000);
      return () => clearTimeout(id);
    }
  }, [timer, gameCompleted, isCorrect]);

  // ボタンをクリックした時の動作
  const handleOptionClick = (option) => {
    // 正解した時の動作
    if(option === questions[currentQuestion].correctOption) {
      setCorrectCount(correctCount + 1);
      setIsCorrect(true);
      setIsDisabled(true);
      setGameCompleted(null);
      // 残りの問題があれば、次の問題に進む
      if (currentQuestion < questions.length - 1) {
        // 正解不正解の判定を削除し、ボタンをクリック可能にする
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1); // 次の問題に進む
          setIsCorrect(false);
          setTimer(3); // タイマーリセット
        }, 750);
      } else {
        setGameCompleted(true); // 全問正解でゲーム終了
      }
    } else {
      setGameOver(true); // 不正解でゲーム終了
    }
  };

  const startTimer = () => {
    setIsCorrect(null);
    setIsDisabled(false);
    setGameCompleted(false);
  }

  const handleClick = () => {
    if (correctCount < 4) {
      window.open(`https://twitter.com/intent/tweet?url=https://saypizza10times.vercel.app &text=「ピザって10回言って？」${correctCount}問正解！やーいやーいw%0a%0a&hashtags=SayPizza,ミニアプリweek`, '_blank');
    } else if (correctCount < 9) {
      window.open(`https://twitter.com/intent/tweet?url=https://saypizza10times.vercel.app &text=「ピザって10回言って？」${correctCount}問正解！なかなかやるね！😜%0a%0a&hashtags=SayPizza,ミニアプリweek`, '_blank');
    } else if (correctCount < 16) {
      window.open(`https://twitter.com/intent/tweet?url=https://saypizza10times.vercel.app &text=「ピザって10回言って？」${correctCount}問正解！本気出していいんだぞ？🤗%0a%0a&hashtags=SayPizza,ミニアプリweek`, '_blank');
    } else if (correctCount < 20) {
      window.open(`https://twitter.com/intent/tweet?url=https://saypizza10times.vercel.app &text=「ピザって10回言って？」${correctCount}問正解！もうちょっとだったのに残念だなぁ🤷‍♂️%0a%0a&hashtags=SayPizza,ミニアプリweek`, '_blank');
    } else {
      window.open(`https://twitter.com/intent/tweet?url=https://saypizza10times.vercel.app &text=「ピザって10回言って？」${correctCount}問全問正解！やるじゃん、でももっと有益な時間の使い方あったんじゃない？😁%0a%0a&hashtags=SayPizza,ミニアプリweek`, '_blank');
    }
  }

  return (
    <div>
      {gameOver ? (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", pt: 2}} >
          <Typography variant='h5'>やーいひっかかった！</Typography>
          <Box sx={styleForQuizFailure}></Box>
          <Typography variant='h5'>正解数：{correctCount}問</Typography>
          <Box sx={{pt: 1}} >
            <Button onClick={handleClick} >Xにポストする</Button>
            <Button variant="contained" onClick={()=> navigate('/')} sx={{mb: 1}} ><Typography fontSize="22px" >もう一度！</Typography></Button>
          </Box>

        </Box>
      ) : (
        <>
          {gameCompleted ? (
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", pt: 2}} >
              <Typography variant='h5'>全問正解🎉 ({correctCount}問正解)</Typography>
              <Box sx={styleForQuizCompleted}></Box>
              <Typography variant='h5'>やるじゃん</Typography>
              <Box sx={{pt: 1}} >
                <Button onClick={handleClick} >Xにポストする</Button>
                <Button variant="contained" onClick={()=> navigate('/')} sx={{mb: 1}} ><Typography fontSize="22px" >もう一度！</Typography></Button>
              </Box>
            </Box>
          ) : (
            <Box sx={styleForQuiz}>
              <Typography variant='h3' >これは？</Typography>
              <Box width="200px" height="200px" >
                <img
                  src={questions[currentQuestion].imageUrl}
                  alt="問題の画像"
                  style={{
                    width: '100%',
                    height: "200px",
                    objectFit: 'contain'
                  }}
                  onLoad={startTimer}
                />
              </Box>
              <Box >
                {isCorrect === true && <Alert variant="filled" severity="success" >正解！！！</Alert>}
                <Typography variant='h5'>残り時間：{timer}秒</Typography>
                <Typography >正解数：{correctCount}問</Typography>
              </Box>

              <Box sx={{pt: 5, display: 'flex', flexWrap: 'nowrap'}}  >
                <Button
                  variant='contained'
                  onClick={() => handleOptionClick('A')}
                  sx={{mr: 1, width: "150px"}}
                  color='error'
                  disabled={isDisabled}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: '1.5rem', // xsサイズの画面で1remに
                        sm: '1.5rem', // smサイズの画面で1.5remに
                        md: '1.5rem', // mdサイズの画面でh4のデフォルトサイズに
                      }
                    }}
                  >
                    {questions[currentQuestion].optionA}
                  </Typography>
                </Button>
                <Button
                  variant='contained'
                  onClick={() => handleOptionClick('B')}
                  sx={{width: "150px"}}
                  disabled={isDisabled}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: '1.5rem', // xsサイズの画面で1remに
                        sm: '1.5rem', // smサイズの画面で1.5remに
                        md: '1.5rem', // mdサイズの画面でh4のデフォルトサイズに
                      }
                    }}
                  >
                    {questions[currentQuestion].optionB}
                  </Typography>
                </Button>
              </Box>
              {questions[currentQuestion].credit && <Typography sx={{pt: 1}} >提供：{questions[currentQuestion].credit}さん</Typography>}
            </Box>
          )}
        </>
      )}
    </div>
  );
}