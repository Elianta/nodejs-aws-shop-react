import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";

type CSVFileImportProps = {
  url: string;
  title: string;
};

export default function CSVFileImport({ url, title }: CSVFileImportProps) {
  const uploadInputRef = React.useRef<HTMLInputElement | null>(null);
  const [file, setFile] = React.useState<File>();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
    }
  };

  const removeFile = () => {
    setFile(undefined);
  };

  const uploadFile = async () => {
    console.log("uploadFile to", url);

    try {
      if (!file) {
        throw new Error("No file selected");
      }

      const authorization_token = localStorage.getItem("authorization_token");
      if (!authorization_token) {
        throw new Error("No authorization token found");
      }

      // Get the presigned URL
      const response = await axios({
        method: "GET",
        url,
        params: {
          name: encodeURIComponent(file.name),
        },
        headers: {
          Authorization: `Basic ${authorization_token}`,
        },
      });

      console.log("File to upload: ", file.name);
      console.log("Uploading to: ", response.data);
      const result = await fetch(response.data, {
        method: "PUT",
        body: file,
      });
      console.log("Result: ", result);
      setFile(undefined);
    } catch (error) {
      console.error("There was an error uploading the file", error);
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {file ? (
        <Stack direction="row" spacing={2}>
          <Button
            size="small"
            color="warning"
            variant="contained"
            onClick={removeFile}
          >
            Remove file
          </Button>
          <Button
            size="small"
            color="secondary"
            variant="contained"
            onClick={uploadFile}
          >
            Upload file
          </Button>
        </Stack>
      ) : (
        <>
          <input
            hidden
            type="file"
            accept=".csv"
            onChange={onFileChange}
            ref={uploadInputRef}
          />
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() =>
              uploadInputRef.current && uploadInputRef.current.click()
            }
          >
            Import CSV File
          </Button>
        </>
      )}
    </Box>
  );
}
