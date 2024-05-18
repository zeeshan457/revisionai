"use client";

import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { PDFDocument } from "pdf-lib";

export default function FlashcardGenerator() {
  const [pdfFile, setPdfFile] = useState(null);
  const [flashcards, setFlashcards] = useState([]);

  const handlePdfUpload = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = async (e) => {
      const pdfData = e.target?.result; // Add null check for e.target
      if (pdfData) {
        const pdfDoc = await PDFDocument.load(pdfData);
        // Process PDF to extract data for flashcards
        const extractedData = await extractFlashcardsFromPdf(pdfDoc);
        //setFlashcards();
      }
    };
    reader.readAsArrayBuffer(file);
    setPdfFile(file);
  };

  const extractFlashcardsFromPdf = async (pdfDoc: any) => {
    // Implement your logic to extract data from PDF and convert to flashcards
    // This is a placeholder function and should be customized
    const flashcards: { id: number; content: string }[] = [];
    const pages = pdfDoc.getPages();
    pages.forEach((page, index) => {
      const text: any = page.getTextContent();
      flashcards.push({
        id: index + 1,
        content: text.items.map((item: any) => item.str).join(" "),
      });
    });
    return flashcards;
  };

  return (
    <Grid container spacing={3} style={{ padding: 20 }}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Flashcard Generator
        </Typography>
        <input
          accept="application/pdf"
          style={{ display: "none" }}
          id="pdf-upload"
          type="file"
          onChange={handlePdfUpload}
        />
        <label htmlFor="pdf-upload">
          <Button variant="contained" color="primary" component="span">
            Upload PDF
          </Button>
        </label>
      </Grid>

      {/* const [flashcards, setFlashcards] = useState<{ id: number, content: string }[]>([]); */}
    </Grid>
  );
}
