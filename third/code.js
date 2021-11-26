const xvsetup = function () {
    // setup unit interface
    var vUnit = window.X.getOptions('xunit').toUpperCase();
    var element = null;
    
    if (element) {
        element.prop("checked", true);
    }

    switch(vUnit){
        case 'FIRSTCCY':
            element = $('#tvcc_0');
        break;
        case 'USD':
            element = $('#tvcc_USD');
        break;
        case 'BTC':
            element = $('#tvcc_BTC');
        break;
        case 'ETH':
            element = $('#tvcc_ETH');
        break;
    }

    // override list
    var result = window.X.init()
    return result
}
