app.config(['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider',
    function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    // for handling trailing slashes
    $urlMatcherFactoryProvider.strictMode(false);

    // for any unmatched url, redirect to the default.
  // NOTE: I can't adjust this value to fix this issue.
  //       setting this to "/projects/browse" may fix this issue,
  //       but I cant go with that.
    $urlRouterProvider.otherwise("/home");

  $stateProvider
  .state({
      name: "home",
      url: "/home",
      templateUrl: 'template/partial-home.html'
  })
  .state({
      name: "print",
      url: "/print",
      templateUrl: 'template/partial-print.html',
      controller: 'printCtrl',
      params: {
        mode: null
      }          
  })
  .state({
      name: "buy",
      url: "/buy",
      templateUrl: 'template/partial-buy.html'
  })
  .state({
      name: "sell",
      url: "/sell",
      templateUrl: 'template/partial-sell.html'
  })  
  ;     
    }]);