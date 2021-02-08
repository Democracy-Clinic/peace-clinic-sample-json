

export default (req, res) => {
  res.status(200).json({
    data: [
      {
        id: 1,
        name: "Dr.Myo Naing",
        specializations: {
          id: 1,
          title: "အထွေထွေရောဂါကု",
          description: "",
          priority: 1
        },
        schedules: [
          {
            id: 1,
            day: "Monday",
            fee_status: "FOC",
            from_time: "8:30 AM",
            to_time: "10:00 AM"
          },
          {
            id: 2,
            day: "Tuesday",
            fee_status: "FOC",
            from_time: "10:30 AM",
            to_time: "12:00 PM"
          },
        ],
        phone: "",
        fee_status: "FOC",
        status: "AVAILABLE",
        address: "",
        township: "",
        provience: "",
        facebook_url: "",
        viber: "+959458028999",
        notes: "",
        register_date: "",
        from_date: "",
        to_date: "",
        lat: "",
        lng: "",
      },
      {
        id: 2,
        name: "Dr.Kyaw Myo",
        specialization_id: {
          id: 3,
          title: "အထူးကုသမားတော်",
          description: "",
          priority: 3
        },
        schedules: [
          {
            id: 3,
            day: "Wednesday",
            fee_status: "FOC",
            from_time: "8:30 AM",
            to_time: "10:00 AM"
          },
          {
            id: 4,
            day: "Friday",
            fee_status: "FOC",
            from_time: "10:30 AM",
            to_time: "12:00 PM"
          },
        ],
        phone: "",
        fee_status: "FOC",
        status: "AVAILABLE",
        address: "",
        township: "",
        provience: "",
        facebook_url: "",
        viber: "+959458028100",
        notes: "",
        register_date: "",
        from_date: "",
        to_date: "",
        lat: "",
        lng: "",
      },
    ]  
  })
}
