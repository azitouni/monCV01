$(function() {
  //CSS
  var $css = $("#css").percentageLoader({width: 256, height: 256, controllable : true, progress : 0.5, onProgressUpdate : function(val) {
    $css.setValue(Math.round(val * 100.0));
  }});
  $css.setValue('CSS');
  //JS
  var $js = $("#js").percentageLoader({width: 256, height: 256, controllable : true, progress : 0.5, onProgressUpdate : function(val) {
    $js.setValue(Math.round(val * 100.0));
  }});
  $js.setValue('Javascript');
  //PHP
  var $php = $("#php").percentageLoader({width: 256, height: 256, controllable : true, progress : 0.5, onProgressUpdate : function(val) {
    $php.setValue(Math.round(val * 100.0));
  }});
  $php.setValue('PHP');
  //Bootstrap
  var $bt = $("#bootstrap").percentageLoader({width: 256, height: 256, controllable : true, progress : 0.5, onProgressUpdate : function(val) {
    $bt.setValue(Math.round(val * 100.0));
  }});
  $bt.setValue('Bootstrap');
  //JQuery
  var $jq = $("#JQuery").percentageLoader({width: 256, height: 256, controllable : true, progress : 0.5, onProgressUpdate : function(val) {
    $jq.setValue(Math.round(val * 100.0));
  }});
  $jq.setValue('JQUERY');
  //ng
  var $ng = $("#ng").percentageLoader({width: 256, height: 256, controllable : true, progress : 0.5, onProgressUpdate : function(val) {
    $ng.setValue(Math.round(val * 100.0));
  }});
  $ng.setValue('Angular');
  //MySql
  var $ms = $("#MySQL").percentageLoader({width: 256, height: 256, controllable : true, progress : 0.5, onProgressUpdate : function(val) {
    $ms.setValue(Math.round(val * 100.0));
  }});
  $ms.setValue('MySQL');
  //SqlServer
  var $ss = $("#SqlServer").percentageLoader({width: 256, height: 256, controllable : true, progress : 0.5, onProgressUpdate : function(val) {
    $ss.setValue(Math.round(val * 100.0));
  }});
  $ss.setValue('SqlServer');
  //CSHARP
  var $ss = $("#CSharp").percentageLoader({width: 256, height: 256, controllable : true, progress : 0.5, onProgressUpdate : function(val) {
    $ss.setValue(Math.round(val * 100.0));
  }});
  $ss.setValue('CSharp');
  //ASPNET
  var $ss = $("#AspNet").percentageLoader({width: 256, height: 256, controllable : true, progress : 0.5, onProgressUpdate : function(val) {
    $ss.setValue(Math.round(val * 100.0));
  }});
  $ss.setValue('ASP NET');


  // var topLoaderRunning = false;
  // $("#cssBtn").click(function() {
  //   if (topLoaderRunning) {
  //     return;
  //   }
  //   topLoaderRunning = true;
  //   $css.setProgress(20);
  //   //$css.setValue('CSS');
  //   var kb = 20;
  //   var totalKb = 70;
  //
  //   var animateFunc = function() {
  //     kb += 10;
  //     if (kb <= totalKb) {
  //       $css.setProgress(kb / totalKb);
  //
  //       // if (kb < totalKb) {
  //       //   setTimeout(animateFunc, 25);
  //       // } else {
  //       //   topLoaderRunning = false;
  //       // }
  //     }
  //   }
  //   $css.setValue('CSS');
  //   setTimeout(animateFunc, 25);
  //
  // });

});
