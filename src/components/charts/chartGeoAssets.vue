<template>
  <div class="our-process-chart mb-4">
    <h3 class="pb-3 text-center">Geographical Allocation</h3>
    <div id="chartgeoAsset"></div>
  </div>
</template>

<script>
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4maps from "@amcharts/amcharts4/maps";
// // import am4geodata_worldHigh from "@amcharts/amcharts4-geodata/worldHigh";
// import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// am4core.useTheme(am4themes_animated);

// export default {
//   name: "Geographic-Allocation",
//   mounted() {
//     // Create map instance
//     let chart = am4core.create("chartgeoAsset", am4maps.MapChart);

//     // Set map definition
//     // chart.geodata = am4geodata_worldHigh;
//     chart.geodata = am4geodata_worldLow;

//     // Set projection
//     chart.projection = new am4maps.projections.Mercator();

//     // Export
//     // chart.exporting.menu = new am4core.ExportMenu();

//     // Zoom control
//     chart.zoomControl = new am4maps.ZoomControl();

//     let groupData = [
//       {
//         name: "US: 50%",
//         color: chart.colors.getIndex(0),
//         data: [{ id: "CA" }, { id: "US" }]
//       },
//       {
//         name: "Europe: 20%",
//         color: chart.colors.getIndex(1),
//         data: [
//           { id: "AL" },
//           { id: "AD" },
//           { id: "AT" },
//           { id: "BY" },
//           { id: "BE" },
//           { id: "BA" },
//           { id: "BG" },
//           { id: "HR" },
//           { id: "CY" },
//           { id: "CZ" },
//           { id: "DK" },
//           { id: "EE" },
//           { id: "FO" },
//           { id: "FI" },
//           { id: "FR" },
//           { id: "DE" },
//           { id: "GI" },
//           { id: "GR" },
//           { id: "HU" },
//           { id: "IS" },
//           { id: "IE" },
//           { id: "IM" },
//           { id: "IT" },
//           { id: "XK" },
//           { id: "LV" },
//           { id: "LI" },
//           { id: "LT" },
//           { id: "LU" },
//           { id: "MK" },
//           { id: "MT" },
//           { id: "MD" },
//           { id: "MC" },
//           { id: "ME" },
//           { id: "NL" },
//           { id: "NO" },
//           { id: "PL" },
//           { id: "PT" },
//           { id: "RO" },
//           { id: "RU" },
//           { id: "SM" },
//           { id: "RS" },
//           { id: "SK" },
//           { id: "SI" },
//           { id: "ES" },
//           { id: "SE" },
//           { id: "CH" },
//           { id: "UA" },
//           { id: "GB" },
//           { id: "VA" }
//         ]
//       },
//       {
//         name: "Asia: 20%",
//         color: chart.colors.getIndex(3),
//         data: [
//           { id: "AF" },
//           { id: "AM" },
//           { id: "AZ" },
//           { id: "BH" },
//           { id: "BD" },
//           { id: "BT" },
//           { id: "BN" },
//           { id: "KH" },
//           { id: "CN" },
//           { id: "GE" },
//           { id: "HK" },
//           { id: "IN" },
//           { id: "ID" },
//           { id: "IR" },
//           { id: "IQ" },
//           { id: "IL" },
//           { id: "JP" },
//           { id: "JO" },
//           { id: "KZ" },
//           { id: "KW" },
//           { id: "KG" },
//           { id: "LA" },
//           { id: "LB" },
//           { id: "MO" },
//           { id: "MY" },
//           { id: "MV" },
//           { id: "MN" },
//           { id: "MM" },
//           { id: "NP" },
//           { id: "KP" },
//           { id: "OM" },
//           { id: "PK" },
//           { id: "PH" },
//           { id: "QA" },
//           { id: "SA" },
//           { id: "SG" },
//           { id: "KR" },
//           { id: "LK" },
//           { id: "SY" },
//           { id: "TW" },
//           { id: "TJ" },
//           { id: "TH" },
//           { id: "TR" },
//           { id: "TM" },
//           { id: "AE" },
//           { id: "UZ" },
//           { id: "VN" },
//           { id: "YE" }
//         ]
//       },
//       {
//         name: "Rest Of World: 10%",
//         color: chart.colors.getIndex(4),
//         data: [
//           // AMERICA extras
//           { id: "AI" },
//           { id: "AR" },
//           { id: "AW" },
//           { id: "BS" },
//           { id: "BB" },
//           { id: "BZ" },
//           { id: "BM" },
//           { id: "BO" },
//           { id: "BR" },
//           { id: "VG" },
//           { id: "KY" },
//           { id: "CL" },
//           { id: "CO" },
//           { id: "CR" },
//           { id: "CU" },
//           { id: "CW" },
//           { id: "DM" },
//           { id: "DO" },
//           { id: "EC" },
//           { id: "SV" },
//           { id: "FK" },
//           { id: "GL" },
//           { id: "GP" },
//           { id: "GF" },
//           { id: "SJ" },
//           { id: "GT" },
//           { id: "GY" },
//           { id: "HT" },
//           { id: "HN" },
//           { id: "JM" },
//           { id: "MX" },
//           { id: "MS" },
//           { id: "NI" },
//           { id: "PA" },
//           { id: "PY" },
//           { id: "PE" },
//           { id: "PR" },
//           { id: "BL" },
//           { id: "KN" },
//           { id: "LC" },
//           { id: "MF" },
//           { id: "PM" },
//           { id: "VC" },
//           { id: "SR" },
//           { id: "TT" },
//           { id: "UY" },
//           { id: "VE" },

//           // AFRICA
//           { id: "DZ" },
//           { id: "AO" },
//           { id: "BJ" },
//           { id: "BW" },
//           { id: "BF" },
//           { id: "BI" },
//           { id: "CM" },
//           { id: "TD" },
//           { id: "TN" },
//           { id: "CV" },
//           { id: "CF" },
//           { id: "KM" },
//           { id: "CD" },
//           { id: "DJ" },
//           { id: "EG" },
//           { id: "GQ" },
//           { id: "ER" },
//           { id: "ET" },
//           { id: "GA" },
//           { id: "GM" },
//           { id: "GH" },
//           { id: "GN" },
//           { id: "GW" },
//           { id: "CI" },
//           { id: "KE" },
//           { id: "LS" },
//           { id: "LR" },
//           { id: "LY" },
//           { id: "MG" },
//           { id: "MW" },
//           { id: "ML" },
//           { id: "MR" },
//           { id: "MU" },
//           { id: "MA" },
//           { id: "MZ" },
//           { id: "NA" },
//           { id: "NE" },
//           { id: "NG" },
//           { id: "CG" },
//           { id: "RE" },
//           { id: "RW" },
//           { id: "SH" },
//           { id: "ST" },
//           { id: "SN" },
//           { id: "SC" },
//           { id: "SL" },
//           { id: "SO" },
//           { id: "ZA" },
//           { id: "SS" },
//           { id: "SD" },
//           { id: "SZ" },
//           { id: "TZ" },
//           { id: "TG" },
//           { id: "UG" },
//           { id: "EH" },
//           { id: "ZM" },
//           { id: "ZW" },

//           // Australia and Oceania
//           { id: "AS" },
//           { id: "AU" },
//           { id: "CK" },
//           { id: "TL" },
//           { id: "FJ" },
//           { id: "PF" },
//           { id: "GU" },
//           { id: "KI" },
//           { id: "MH" },
//           { id: "FM" },
//           { id: "NR" },
//           { id: "NC" },
//           { id: "NZ" },
//           { id: "NU" },
//           { id: "NF" },
//           { id: "MP" },
//           { id: "PW" },
//           { id: "PG" },
//           { id: "PN" },
//           { id: "WS" },
//           { id: "SB" },
//           { id: "TK" },
//           { id: "TV" },
//           { id: "VU" }
//         ]
//       }
//     ];

//     // This array will be populated with country IDs to exclude from the world series
//     let excludedCountries = ["AQ"];

//     // Create a series for each group, and populate the above array
//     groupData.forEach(function(group) {
//       let series = chart.series.push(new am4maps.MapPolygonSeries());
//       series.name = group.name;
//       series.useGeodata = true;
//       let includedCountries = [];
//       group.data.forEach(function(country) {
//         includedCountries.push(country.id);
//         excludedCountries.push(country.id);
//       });
//       series.include = includedCountries;

//       series.fill = am4core.color(group.color);

//       // By creating a hover state and setting setStateOnChildren to true, when we
//       // hover over the series itself, it will trigger the hover SpriteState of all
//       // its countries (provided those countries have a hover SpriteState, too!).
//       series.setStateOnChildren = true;
//       series.calculateVisualCenter = true;

//       // Country shape properties & behaviors
//       let mapPolygonTemplate = series.mapPolygons.template;
//       // Instead of our custom title, we could also use {name} which comes from geodata
//       mapPolygonTemplate.fill = am4core.color(group.color);
//       mapPolygonTemplate.fillOpacity = 0.8;
//       mapPolygonTemplate.nonScalingStroke = true;
//       mapPolygonTemplate.tooltipPosition = "fixed";

//       mapPolygonTemplate.events.on("over", function(event) {
//         series.mapPolygons.each(function(mapPolygon) {
//           mapPolygon.isHover = true;
//         });
//         event.target.isHover = false;
//         event.target.isHover = true;
//       });

//       mapPolygonTemplate.events.on("out", function(event) {
//         series.mapPolygons.each(function(mapPolygon) {
//           mapPolygon.isHover = false;
//         });
//       });

//       // States
//       let hoverState = mapPolygonTemplate.states.create("hover");
//       hoverState.properties.fill = am4core.color("#586f7c");

//       // Tooltip
//       // mapPolygonTemplate.tooltipText = "{title} joined EU at {customData}"; // enables tooltip
//       mapPolygonTemplate.tooltipText = "{series.name}"; // enables tooltip
//       // series.tooltip.getFillFromObject = false; // prevents default colorization, which would make all tooltips red on hover
//       // series.tooltip.background.fill = am4core.color(group.color);

//       // MapPolygonSeries will mutate the data assigned to it,
//       // we make and provide a copy of the original data array to leave it untouched.
//       // (This method of copying works only for simple objects, e.g. it will not work
//       //  as predictably for deep copying custom Classes.)
//       series.data = JSON.parse(JSON.stringify(group.data));
//     });

//     // The rest of the world.
//     let worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
//     let worldSeriesName = "world";
//     worldSeries.name = worldSeriesName;
//     worldSeries.useGeodata = true;
//     worldSeries.exclude = excludedCountries;
//     worldSeries.fillOpacity = 0.8;
//     worldSeries.hiddenInLegend = true;
//     worldSeries.mapPolygons.template.nonScalingStroke = true;

//     // This auto-generates a legend according to each series' name and fill
//     chart.legend = new am4maps.Legend();

//     // Legend styles
//     chart.legend.paddingLeft = 27;
//     chart.legend.paddingRight = 27;
//     chart.legend.marginBottom = 15;
//     chart.legend.width = am4core.percent(90);
//     chart.legend.valign = "bottom";
//     chart.legend.contentAlign = "left";

//     // Legend items
//     chart.legend.itemContainers.template.interactionsEnabled = false;
//   }
// };
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.our-process-chart {
  h3 {
    color: $brand-color-primary;
  }
}
#chartgeoAsset {
  width: 100%;
  height: 500px;
}
</style>