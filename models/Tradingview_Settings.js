const mongoose = require("mongoose");


// !need to finish setting this up 
const TradingviewSettingsSchema = new mongoose.Schema({
  colorTheme: {
    type: String,
    default: "light",
  },
  dateRange: {
    type: String,
    default: "12M",
  },
  showChart: {
    type: Boolean,
    default: true,
  },
  locale: {
    type: String,
    default: "us",
  },
  width: {
    type: String,
    default: "400",
  },
  height: {
    type: String,
    default: "800",
  },
  largeChartUrl: {
    type: String,
    default: "",
  },
  isTransparent: {
    type: Boolean,
    default: false,
  },
  showSymbolLogo: {
    type: Boolean,
    default: true,
  },
  ShowFloatingTooltip: {
    type: Boolean,
    default: false,
  },
  plotLineColorGrowing: {
    type: String,
    default: "rgba(41, 98, 255, 1)",
  },
  plotLineColorFalling: {
    type: String,
    default: "rgba(41, 98, 255, 1)",
  },
  gridLineColor: {
    type: String,
    default: "rgba(240, 243, 250, 0)",
  },
  scaleFontColor: {
    type: String,
    default: "rgba(120, 123, 134, 1)",
  },
  belowLineFillColorGrowing: {
      type: String,
      default: "rgba(41, 98, 255, 0.12)"
  },
  belowLineFillColorFalling: {
      type: String, 
      default: "rgba(41, 98, 255, 0.12)"
  }, 
  belowLineFillColorGrowingBottom: {
      type: String,
      default: "rgba(41, 98, 255, 0)"
  },
  belowLineFillColorFallingBottom: {
      type: String,
      default: "rgba(41, 98, 255, 0)"
  }, 
  symbolActiveColor: {
      type: String,
      default: "rgba(41, 98, 255, 0.12)"
  },
  tabs: {
      type: Array
  }
});
