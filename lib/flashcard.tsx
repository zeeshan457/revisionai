"use client";
"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import { DashboardShell } from "@/components/dashboard/shell";
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder";

interface FlashcardType {
  question: string;
  answer: string;
}

const Flashcard = ({ content }: { content: FlashcardType }) => {
  return (
    <Card style={{ marginBottom: "10px" }}>
      <CardContent>
        <Typography variant="h6">{content.question}</Typography>
        <Typography variant="body1">{content.answer}</Typography>
      </CardContent>
    </Card>
  );
};

export default function FlashcardGenerator() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [flashcards, setFlashcards] = useState<FlashcardType[]>([]);

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setPdfFile(file);
  };

  const generateFlashcards = () => {
    // Implement flashcard generation logic here
    console.log("Flashcards generated!");

    // Example flashcard data
    const generatedFlashcards: FlashcardType[] = [
      { question: "Question 1", answer: "Answer 1" },
      { question: "Question 2", answer: "Answer 2" },
      { question: "Question 3", answer: "Answer 3" },
    ];

    setFlashcards(generatedFlashcards);
  };

  const exportFlashcards = () => {
    // Implement flashcard export logic here
    console.log("Flashcards exported!");
  };

  return (
    <DashboardShell>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <EmptyPlaceholder>
            <EmptyPlaceholder.Title>Flashcards</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              Please select a PDF, then you can generate and export if you'd
              like.
            </EmptyPlaceholder.Description>
            <Paper style={{ padding: 16 }}>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <input
                    accept="application/pdf"
                    style={{ display: "none" }}
                    id="pdf-upload"
                    type="file"
                    onChange={handlePdfUpload}
                  />
                  <label htmlFor="pdf-upload">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                    >
                      Upload PDF
                    </Button>
                  </label>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={generateFlashcards}
                    disabled={!pdfFile}
                  >
                    Generate Flashcards
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={exportFlashcards}
                    disabled={!pdfFile}
                  >
                    Export Flashcards
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </EmptyPlaceholder>
        </Grid>

        <Grid item xs={12} md={6}>
          <EmptyPlaceholder>
            <EmptyPlaceholder.Title>Flashcards</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              {flashcards.length === 0
                ? "Your flashcards will be displayed here after generation."
                : flashcards.map((flashcard, index) => (
                    <Flashcard key={index} content={flashcard} />
                  ))}
            </EmptyPlaceholder.Description>
          </EmptyPlaceholder>
        </Grid>

        {pdfFile && (
          <Grid item xs={12}>
            <EmptyPlaceholder>
              <EmptyPlaceholder.Title>Preview</EmptyPlaceholder.Title>
              <EmptyPlaceholder.Description>
                Preview your PDF content and pages.
              </EmptyPlaceholder.Description>
              <iframe
                title="PDF Viewer"
                src={URL.createObjectURL(pdfFile)}
                width="250%"
                height={500}
                style={{ border: "none" }}
              />
            </EmptyPlaceholder>
          </Grid>
        )}
      </Grid>
    </DashboardShell>
  );
}
