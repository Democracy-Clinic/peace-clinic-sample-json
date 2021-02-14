
export default (req, res) => {
  res.status(200).json({
    data: [
      {
        id: 1,
        name: "",
        name_myan: "ရှင်ပါကူ",
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
        town: {
          id: 1,
          town_pcode: "MMRO13037701",
          town_name_eng: "Ahlone",
          town_name_myan: "အလုံ",
          longitude: 96.127863,
          latitude: 16.782398
        },
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
        name: "",
        name_myan: "တော်၀င်",
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
        town: {
          id: 1,
          town_pcode: "MMRO13037701",
          town_name_eng: "Ahlone",
          town_name_myan: "အလုံ",
          longitude: 96.127863,
          latitude: 16.782398
        },
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
