
export default (req, res) => {
  res.status(200).json({
    data: [
      {
        id: 1,
        name: "ရှင်ပါကူ",
        phone: "",
        fee_status: "အခပေး",
        status: "AVAILABLE",
        address: "",
        schedules: [
          {
            id: 1,
            day: "Monday",
            fee_status: "အခပေး",
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
        township: "",
        provience: "",
        facebook_url: "",
        viber: "+959458028111",
        notes: "",
        register_date: "",
        from_date: "",
        to_date: "",
        lat: "",
        lng: "",
      },
      {
        id: 2,
        name: "တော်၀င်",
        phone: "",
        fee_status: "အခပေး",
        status: "AVAILABLE",
        address: "",
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
        township: "",
        provience: "",
        facebook_url: "",
        viber: "+959458028200",
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
