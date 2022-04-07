// import './App.css';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function Login() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Card
        variant="outlined"
        maxWidth="sm"
        sx={{
          p: 5,
          bgcolor: "info.main",
          display: "flex",
          boxShadow: 24,
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: 250,
          borderRadius: 5,

          m: 1,
        }}
      >
        <Box component="span" sx={{ p: 0, bgcolor: "info.main" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              m: 1,

              borderRadius: 1,
            }}
          >
            <Typography variant="h5" component="legend" sx={{ color: "white" }}>
              Login Form
            </Typography>
          </Box>
          <TextField
            sx={{
              borderRadius: 1,
              boxShadow: 14,
              bgcolor: "white",
            }}
            id="outlined-basic"
            label="UserName"
            fullWidth
            margin="dense"
            required
            variant="filled"
          />
          <TextField
            sx={{
              bgcolor: "white",
              boxShadow: 14,
              borderRadius: 1,
              color: "text.primary",
            }}
            required
            fullWidth
            id="password-input"
            label="Password"
            margin="dense"
            variant="filled"
            type="password"
            autoComplete="current-password"
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              m: 1,

              borderRadius: 1,
            }}
          >
            <Button
              variant="contained"
              margin="dense"
              sx={{
                boxShadow: 20,
                justifyContent: "center",
                bgcolor: "success.main",
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Card>
    </div>
  );
}

export default Login;
