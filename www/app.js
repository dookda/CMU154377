axios
  .post(
    "http://hyd-app.rid.go.th/webservice/HDService.svc/GetDailyStageReportChartFromStationID6Months",
    { hydro: { StationID: 389, TimeCurrent: "01/08/2564" } }
  )
  .then((r) => {
    console.log(r);
  });
