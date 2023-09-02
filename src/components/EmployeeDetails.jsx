import { Box, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 500,
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
          {"name : " + employee.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {"position : " + employee.position}
        </Typography>
        <Typography id="modal-modal-department" sx={{ mt: 2 }}>
          {"department : " + employee.department}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {"phone : " + employee.phone}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {"age : " + employee.age}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {"adress : " + employee.address}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {"salary : " + employee.salary}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {"email : " + employee.email}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {"hireDate : " + employee.hireDate}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {"education : " + employee.education}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {"skills :  " + employee.skills}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {"images :  " + employee.image}
        </Typography>
      </Box>
    </Box>
  );
};
