import { Box, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

export const EmployeeDetails = ({ employee }) => {
  return (
    <Box>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {employee.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {employee.position}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {employee.department}
        </Typography>
      </Box>
    </Box>
  );
};
