
export default (req, res) => {
  res.status(200).json({
    data: [
      {
        id: 1,
        name: "Green Light",
        name_myan: "",
        phone: "",
        town: {
          id: 1,
          town_pcode: "MMRO13037701",
          town_name_eng: "Ahlone",
          town_name_myan: "အလုံ",
          longitude: 96.127863,
          latitude: 16.782398
        },
        note: ""
      },
    ]
  })
}
