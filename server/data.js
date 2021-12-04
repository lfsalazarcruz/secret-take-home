const physiciansData = [
    {
        id: 0,
        firstName: "Julius",
        lastName: "Hibbert",
        email: "julius@notablehealth.com"
    },
    {
        id: 1,
        firstName: "Algernop",
        lastName: "Krieger",
        email: "algernop@notablehealth.com"
    },
    {
        id: 2,
        firstName: "Nick",
        lastName: "Riviera",
        email: "nick@notablehealth.com"
    }
]

const appointmentsData = [
    {
        appointmentId: 0,
        firstName: "Sterling",
        lastName: "Archer",
        time: "8:00AM",
        kind: "New Patient",
        physicianId: 0
    },
    {
        appointmentId: 1,
        firstName: "Fernando",
        lastName: "Cruz",
        time: "8:00AM",
        kind: "New Patient",
        physicianId: 0
    },
    {
        appointmentId: 2,
        firstName: "Luis",
        lastName: "Prat",
        time: "8:00AM",
        kind: "Follow-up",
        physicianId: 1
    },
    {
        appointmentId: 3,
        firstName: "Juan",
        lastName: "Reza",
        time: "8:00AM",
        kind: "Follow-up",
        physicianId: 1
    },
    {
        appointmentId: 4,
        firstName: "Emilia",
        lastName: "Archer",
        time: "8:00AM",
        kind: "New Patient",
        physicianId: 2
    }
];

module.exports = {
    physiciansData,
    appointmentsData
};
