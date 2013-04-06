describe("Function State - ", function() {
  var cmds;
  

  
  beforeEach(function(){
    $('#output').css('background','white');
    $('#output').html('');
    
    clearItems();
    clearCommands();
    init();
    cmds = getCommands();
  })

 

  it('declare i = 10 and check if i < 0 then echo(i)', function(){
    expect($('#item0').html()).toBe("10");
  });

  it('while and add i--', function(){
    expect($('#item1').html()).toBe("10");
    expect($('#item2').html()).toBe("9");
    expect($('#item3').html()).toBe("8");
    expect($('#item4').html()).toBe("7");
    expect($('#item5').html()).toBe("6");
    expect($('#item6').html()).toBe("5");
    expect($('#item7').html()).toBe("4");
    expect($('#item8').html()).toBe("3");
    expect($('#item9').html()).toBe("2");
    expect($('#item10').html()).toBe("1");

    
  });

  it('for(var i = 0; i < 20 ; i++)', function(){
    expect($('#item11').html()).toBe("0");
    expect($('#item12').html()).toBe("1");
    expect($('#item13').html()).toBe("2");
    expect($('#item14').html()).toBe("3");
    expect($('#item15').html()).toBe("4");
    expect($('#item16').html()).toBe("5");
    expect($('#item17').html()).toBe("6");
    expect($('#item18').html()).toBe("7");
    expect($('#item19').html()).toBe("8");
    expect($('#item20').html()).toBe("9");
    expect($('#item21').html()).toBe("10");
    expect($('#item22').html()).toBe("11");
    expect($('#item23').html()).toBe("12");
    expect($('#item24').html()).toBe("13");
    expect($('#item25').html()).toBe("14");
    expect($('#item26').html()).toBe("15");
    expect($('#item27').html()).toBe("16");
    expect($('#item28').html()).toBe("17");
    expect($('#item29').html()).toBe("18");
    expect($('#item30').html()).toBe("19");
  });

});