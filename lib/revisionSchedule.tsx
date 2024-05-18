"use client";

import React, { useState } from "react";
import { TableHead } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder";

export default function DashboardContent() {
  const [intervalHours, setIntervalHours] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleScheduleRevision = () => {
    console.log("Revision Scheduled!");
  };

  return (
    <DashboardShell>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <DashboardHeader heading="" text="" />
          <div>
            <EmptyPlaceholder>
              <EmptyPlaceholder.Title>
                No revisions scheduled
              </EmptyPlaceholder.Title>
              <EmptyPlaceholder.Description>
                Please select a time, intervals in hours, and topic to schedule.
              </EmptyPlaceholder.Description>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Paper elevation={3} className="input-panel">
                  <TableContainer style={{ width: "100%" }}>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            {/* Timer picker */}
                            <div className="time-picker-container">
                              <DemoContainer components={["TimePicker"]}>
                                <div className="white-time-picker">
                                  <TimePicker
                                    views={["hours", "minutes"]}
                                    format="hh:mm a"
                                    ampm={true}
                                    label="Timer"
                                  />
                                </div>
                              </DemoContainer>
                            </div>
                          </TableCell>
                          <TableCell>
                            {/* Hour interval */}
                            <div className="interval-input-container">
                              <TextField
                                fullWidth
                                label="interval"
                                type="number"
                                value={intervalHours}
                                onChange={(e) =>
                                  setIntervalHours(e.target.value)
                                }
                              />
                            </div>
                          </TableCell>
                          <TableCell>
                            {/* task revison field */}
                            <div className="topic-input-container">
                              <TextField
                                fullWidth
                                label="Topic"
                                value={selectedTopic}
                                onChange={(e) =>
                                  setSelectedTopic(e.target.value)
                                }
                              />
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell colSpan={3} align="right">
                            <Button
                              variant="contained"
                              color="info"
                              onClick={handleScheduleRevision}
                            >
                              Schedule
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </LocalizationProvider>
            </EmptyPlaceholder>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <EmptyPlaceholder>
            <EmptyPlaceholder.Title>View schedule</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              Your schedules will be displayed here
            </EmptyPlaceholder.Description>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Time</TableCell>
                    <TableCell>Topic</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Placeholder rows for demonstration */}
                  <TableRow>
                    <TableCell>10:00 AM</TableCell>
                    <TableCell>Topic 1</TableCell>
                    <TableCell>{/* Action button */}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>02:30 PM</TableCell>
                    <TableCell>Topic 2</TableCell>
                    <TableCell>{/* Action button */}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>05:45 PM</TableCell>
                    <TableCell>Topic 3</TableCell>
                    <TableCell>{/* Action button */}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </EmptyPlaceholder>
        </Grid>
      </Grid>
    </DashboardShell>
  );
}
