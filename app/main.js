/**
 * Created by meathill on 2016/10/21.
 */

window.addEventListener('deviceorientation', function (event) {
  $('#output').html('alpha: ' + event.alpha + '<br>beta: ' + event.beta + '<br>gamma: ' + event.gamma);
}, true);