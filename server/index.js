const data = require('./data');
const express = require('express');
const cors = require('cors');
const server = express();
const PORT = 4000;

server.use(cors());

// GET All Physicians
server.get('/physicians', (req, res) => {
    res.send({ response: data.physiciansData });
});

// GET Appointments by Physician Id
server.get('/physicians/:physicianId/appointments', (req, res) => {
    const filterAppointmentsByPhysicianId = data.appointmentsData.filter(appointment => appointment.physicianId == req.params.physicianId);
    res.send({ response: filterAppointmentsByPhysicianId });
});

server.listen(PORT, function() {
  console.log(`\n=== Web API Listening on http://localhost:${PORT} ===\n`);
});
