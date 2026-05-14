const restaurantConfig = {
  name: "Bistro App",
  logo: "/logo.png",
  currency: "ETB",
  currencySymbol: "Br",
  primaryColor: "#E85D26",
  timezone: "Africa/Addis_Ababa",
  payment: {
    provider: "flutterwave" as "stripe" | "flutterwave" | "chapa",
  },
  ordering: {
    qrTable: true,
    delivery: true,
    pickup: true,
  },
  sms: {
    enabled: false,
    provider: "africastalking",
  },
}

export default restaurantConfig