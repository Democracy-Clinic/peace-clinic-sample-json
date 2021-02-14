

export default (req, res) => {
  res.status(200).json({
    data: [
      {
        id: 1,
        name: "",
        name_myan: "Dr.Myo Naing",
        specialization: {
          id: 1,
          title: "အထွေထွေရောဂါကု",
          description: "",
          priority: 1
        },
        accounts: [
          {
            id: 3,
            channel: 'BANK',
            name: 'AYA',
            account_no: '0123325153244',
            note: ''
          },
          {
            id: 4,
            channel: 'AGENT',
            name: 'Wave Money',
            account_no: '09250353325',
            note: ''
          },
        ],
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
        town: {
          id: 1,
          town_pcode: "MMRO13037701",
          town_name_eng: "Ahlone",
          town_name_myan: "အလုံ",
          longitude: 96.127863,
          latitude: 16.782398
        },
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
        name_myan: "",
        specialization: {
          id: 3,
          title: "အထူးကုသမားတော်",
          description: "",
          priority: 3
        },
        accounts: [
          {
            id: 1,
            channel: 'BANK',
            name: 'AYA',
            account_no: '0123232153244',
            note: ''
          },
          {
            id: 2,
            channel: 'AGENT',
            name: 'Wave Money',
            account_no: '09250369325',
            note: ''
          },
        ],
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
        town: {
          id: 1,
          town_pcode: "MMRO13037701",
          town_name_eng: "Ahlone",
          town_name_myan: "အလုံ",
          longitude: 96.127863,
          latitude: 16.782398
        },
        town_id: 2,
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
