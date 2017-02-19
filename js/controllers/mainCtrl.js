app.controller('mainCtrl', function mainCtrl($scope) {
  this.openMenu = function($mdMenu,$mdMenuIsOpen) {
    console.log("mdMenuIsOpen111=" + $mdMenuIsOpen);
    if(!$mdMenuIsOpen) {
      $mdMenu.open();
    }
    console.log("openMenu....");
  }

  this.closeMenu = function($mdMenu,$mdMenuIsOpen) {
    console.log("mdMenuIsOpen222=" + $mdMenuIsOpen);
    this.count ++;
    if($mdMenuIsOpen) {
      $mdMenu.close();
    }
    console.log("closeMenu....");
  }  
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});