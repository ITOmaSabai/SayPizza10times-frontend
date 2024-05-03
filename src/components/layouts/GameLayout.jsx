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
  const [timer, setTimer] = useState(3); // 5秒制限
  const [gameOver, setGameOver] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [ correctCount, setCorrectCount ] = useState(0);
  const [ isCorrect, setIsCorrect ] = useState(null);
  const [ isDisabled, setIsDisabled ] = useState(false);
  const navigate = useNavigate();

  const questions = [
    {
      imageUrl: "/q1.webp",
      correctOption: 'B',
      optionA: "ヒザ",
      optionB: "ヒジ"
    },
    {
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
      optionB: "ビザ"
    },
    {
      imageUrl: "/q8.jpeg",
      correctOption: 'A',
      optionA: "キザ",
      optionB: "ヒザ"
    },
    {
      imageUrl: "/q4.webp",
      correctOption: 'A',
      optionA: "フリーザ",
      optionB: "ピザーラ"
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
      optionB: "キザ"
    },
    {
      imageUrl: "/q9.png",
      correctOption: 'A',
      optionA: "上座",
      optionB: "上野"
    },

  ];

  useEffect(() => {
    if (!gameCompleted || !isCorrect) {
      if(timer > 0) {
        const id = setTimeout(() => setTimer(timer - 1), 1000);
        return () => clearTimeout(id);
      } else {
        setGameOver(true); // 制限時間超過でゲーム終了
      }
    }
  }, [timer, gameCompleted, isCorrect]);

  // ボタンをクリックした時の動作
  const handleOptionClick = (option) => {
    // 正解した時の動作
    if(option === questions[currentQuestion].correctOption) {
      setCorrectCount(correctCount + 1);
      setIsCorrect(true);
      setIsDisabled(true);
      // 残りの問題があれば、次の問題に進む
      if (currentQuestion < questions.length - 1) {
        // 正解不正解の判定を削除し、ボタンをクリック可能にする
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1); // 次の問題に進む
          setTimer(3); // タイマーリセット
          setIsCorrect(null);
          setIsDisabled(false);
        }, 750);
      } else {
        setGameCompleted(true); // 全問正解でゲーム終了
      }
    } else {
      setGameOver(true); // 不正解でゲーム終了
    }
  };

  const handleClick = () => {
    if (correctCount < 4) {
      window.open(`https://twitter.com/share?url=https://saypizza10times.vercel.app &text=「ピザって10回言って？」${correctCount}問正解！やーいやーいw%0a%0a&hashtags=SayPizza,ミニアプリweek`, '_blank');
    } else if (correctCount < 9) {
      window.open(`https://twitter.com/share?url=https://saypizza10times.vercel.app &text=「ピザって10回言って？」${correctCount}問正解！なかなかやるね！😜%0a%0a&hashtags=SayPizza,ミニアプリweek`, '_blank');
    } else {
      window.open(`https://twitter.com/share?url=https://saypizza10times.vercel.app &text=「ピザって10回言って？」${correctCount}問全問正解！天才かよ！？👀%0a%0a&hashtags=SayPizza,ミニアプリweek`, '_blank');
    }
  }

  return (
    <div>
      {gameOver ? (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", pt: 2}} >
          <Typography variant='h5'>やーいひっかかった！</Typography>
          <Box sx={styleForQuizFailure}></Box>
          <Typography variant='h5'>正解数：{correctCount}問</Typography>
          <Button variant="contained" onClick={()=> navigate('/')} >もう一度！</Button>
          <Button onClick={handleClick} >Xにポストする</Button>

        </Box>
      ) : (
        <>
          {gameCompleted ? (
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", pt: 2}} >
              <Typography variant='h5'>全問正解🎉 ({correctCount}問正解)</Typography>
              <Box sx={styleForQuizCompleted}></Box>
              <Typography variant='h5'>やるじゃん</Typography>
              <Button variant="contained" onClick={()=> navigate('/')} >もう一度！</Button>
              <Button onClick={handleClick} >Xにポストする</Button>
            </Box>
          ) : (
            // <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", backgroundImage: "url('/smile.png')"}}>
            <Box sx={styleForQuiz}>
              <Typography variant='h3' >これは？</Typography>
              <Box width="200px" height="200px" >
                <img src={questions[currentQuestion].imageUrl} alt="問題の画像" style={{ width: '100%', objectFit: 'cover' }} />
              </Box>
              <Box >
                {isCorrect === true && <Alert variant="filled" severity="success" >正解！！！</Alert>}
                <Typography variant='h5'>残り時間：{timer}秒</Typography>
                <Typography >正解数：{correctCount}問</Typography>
              </Box>

              <Box sx={{pt: 5}} >
                <Button
                  variant='contained'
                  onClick={() => handleOptionClick('A')}
                  sx={{mr: 1}}
                  color='error'
                  disabled={isDisabled}
                >
                  <Typography variant='h4' >{questions[currentQuestion].optionA}</Typography>
                </Button>
                <Button
                  variant='contained'
                  onClick={() => handleOptionClick('B')}
                  disabled={isDisabled}
                >
                  <Typography variant='h4' >{questions[currentQuestion].optionB}</Typography>
                </Button>
              </Box>
              {/* <Box sx={styleForFooter} ></Box> */}
                {/* <img src='/smile.png' height="100px" /> */}
            </Box>
          )}
        </>
      )}
    </div>
  );
}