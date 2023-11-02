$(document).ready(function(){
  function skill(id, percent){
      var bar = new ProgressBar.Line(id, {
          strobeWidth: 4,
          trailWidth: 4,
          color: "white",
          duration: 2400,
          trailColor: '#28cf75',
          step : (state, bar) => {
              bar.setText(Math.round(bar.value() * 100) + ' %');
          }
      });
      bar.animate(percent)
  }
  skill("#ae",0.9)
  skill("#pp",0.9)
  skill("#ps",0.7)
  skill("#ai",0.7)
  skill("#ca",0.8)
  skill("#html",0.8);


  
})

