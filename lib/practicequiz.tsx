"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { DashboardShell } from "@/components/dashboard/shell";
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

const QuizCard = ({
  content,
  onAnswer,
}: {
  content: QuizQuestion;
  onAnswer: (answer: string) => void;
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    onAnswer(event.target.value);
  };

  return (
    <Card style={{ marginBottom: "10px" }}>
      <CardContent>
        <Typography variant="h6">{content.question}</Typography>
        {content.options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <label>{option}</label>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default function PracticeQuizGenerator() {
  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>("");

  const handleTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(event.target.value);
  };

  const generateQuiz = () => {
    // Implement quiz generation logic here based on the topic
    console.log("Quiz generated!");

    // Example quiz data
    const generatedQuestions: QuizQuestion[] = [
      {
        question: "Question 1",
        options: ["Option 1", "Option 2", "Option 3"],
        correctAnswer: "Option 1",
      },
      {
        question: "Question 2",
        options: ["Option A", "Option B", "Option C"],
        correctAnswer: "Option B",
      },
      {
        question: "Question 3",
        options: ["Choice X", "Choice Y", "Choice Z"],
        correctAnswer: "Choice Z",
      },
    ];

    setQuestions(generatedQuestions);
    setAnswers(Array(generatedQuestions.length).fill(""));
    setScore(null);
    setFeedback("");
  };

  const handleAnswer = (index: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    const correctCount = questions.reduce((count, question, index) => {
      return count + (answers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
    setScore(correctCount);
  };

  const generateFeedback = () => {
    const correctCount = questions.reduce((count, question, index) => {
      return count + (answers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
    setFeedback(`You got ${correctCount} out of ${questions.length} correct!`);
  };

  return (
    <DashboardShell>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <EmptyPlaceholder>
            <EmptyPlaceholder.Title>Practice Quizzes</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              Enter a topic to generate a practice quiz.
            </EmptyPlaceholder.Description>
            <Paper style={{ padding: 16 }}>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <TextField
                    label="Quiz Topic"
                    variant="outlined"
                    fullWidth
                    value={topic}
                    onChange={handleTopicChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={generateQuiz}
                    disabled={!topic}
                  >
                    Generate Quiz
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </EmptyPlaceholder>
        </Grid>

        <Grid item xs={12} md={6}>
          <EmptyPlaceholder>
            <EmptyPlaceholder.Title>Quiz Questions</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              {questions.length === 0 ? (
                "Your quiz questions will be displayed here after generation."
              ) : (
                <Grid container spacing={2}>
                  {questions.map((question, index) => (
                    <Grid item xs={6} key={index}>
                      <QuizCard
                        content={question}
                        onAnswer={(answer) => handleAnswer(index, answer)}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </EmptyPlaceholder.Description>
            <Button
              variant="contained"
              color="primary"
              onClick={calculateScore}
            >
              Submit Quiz
            </Button>
          </EmptyPlaceholder>
        </Grid>

        {questions.length > 0 && <Grid item xs={12}></Grid>}

        {score !== null && (
          <Grid item xs={12}>
            <EmptyPlaceholder>
              <EmptyPlaceholder.Title>Score</EmptyPlaceholder.Title>
              <EmptyPlaceholder.Description>
                <Typography variant="h6">
                  Your Score: {score} / {questions.length}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={generateFeedback}
                >
                  Get Feedback
                </Button>
                {feedback && (
                  <Typography variant="body1" style={{ marginTop: "10px" }}>
                    {feedback}
                  </Typography>
                )}
              </EmptyPlaceholder.Description>
            </EmptyPlaceholder>
          </Grid>
        )}
      </Grid>
    </DashboardShell>
  );
}
