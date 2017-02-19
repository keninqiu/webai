app.controller('printCtrl', function printCtrl($scope,$stateParams,$mdDialog) {
  console.log($stateParams.mode);

  $scope.draw = function(ev) {
    console.log('drawing');
    $("canvas").drawPolygon({
      draggable: true,
      fillStyle: "#6c3",
      x: 100, y: 100,
      radius: 50, sides: 5
    });

  }
  $scope.uploadFileDialog = function(ev) {
    console.log("haha");
    $mdDialog.show({
      controller: printCtrl,
      templateUrl: 'template/tmpl/tabDialog.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });    
  }


    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.readImage = function(e) {

      console.log('readImage');
      var tmppath = URL.createObjectURL(e.target.files[0]);

      console.log("tmppath="+tmppath);
      $('#myCanvas').drawImage({
        source: tmppath,
        x: 0, y: 0,
        fromCenter: false
      });

    }
    $scope.upload = function() {
      var f = document.getElementById('file');
      f.addEventListener("change", $scope.readImage, false);
      f.click();
      $mdDialog.cancel();

    };

});