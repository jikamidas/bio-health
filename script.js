$(document).ready(function(){
   
   
   var infoBlock = false;
    $(".flitskaart").click(function(){
       if (!infoBlock) {
        var div = $(".flitskaart");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '200px', opacity: '0.8'}, "slow");
          $(".ptext").text("Тренировка супергероев… хотя они предпочитают, чтобы мы использовали термин «функциональная тренировка».");
          
          
        
          infoBlock = true;
          
          var div = $(".flitskaart1");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext1").text("");
         $(".ptext1").prepend('<i class="  fa fa-5x fa-wheelchair"></i>');
         
        infoBlock1 = false;
          
          var div = $(".flitskaart2");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext2").text("");
         $(".ptext2").prepend('<i class="fa fa-5x fa-stethoscope"></i>');
         
        infoBlock2 = false;
          
          var div = $(".flitskaart3");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext3").text("");
         $(".ptext3").prepend('<i class="fa fa-5x fa-user-md"></i>');
         
        infoBlock3 = false;
      }
      else {
         var div = $(".flitskaart");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext").text("");
         $(".ptext").prepend('<i class="  fa fa-4x fa-heartbeat"></i>');
         
        infoBlock = false;     
      }
       
    });
       
       var infoBlock1 = false;
    $(".flitskaart1").click(function(){
       if (!infoBlock1) {
        var div = $(".flitskaart1");
        div.animate({height: '450px', opacity: '0.4'}, "slow");
        div.animate({width: '200px', opacity: '0.8'}, "slow");
          $(".ptext1").text("Ортопедическая реабилитация ... Это когда мы даем определенные упражнения людям, страдающим болями в спине, коленях и т. д., чтобы они могли вернуться к своей нормальной жизни и быть великолепными.");
        
          infoBlock1 = true;
          var div = $(".flitskaart2");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext2").text("");
         $(".ptext2").prepend('<i class="fa fa-5x fa-stethoscope"></i>');
         
        infoBlock2 = false;
          
          var div = $(".flitskaart3");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext3").text("");
         $(".ptext3").prepend('<i class="fa fa-5x fa-user-md"></i>');
         
        infoBlock3 = false;
          
         var div = $(".flitskaart");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext").text("");
         $(".ptext").prepend('<i class="  fa fa-4x fa-heartbeat"></i>');
         
        infoBlock = false;  
      }
      else {
         var div = $(".flitskaart1");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext1").text("");
         $(".ptext1").prepend('<i class="  fa fa-5x fa-wheelchair"></i>');
         
        infoBlock1 = false;     
      }
    
    });
   var infoBlock2 = false;
    $(".flitskaart2").click(function(){
       if (!infoBlock2) {
        var div = $(".flitskaart2");
        div.animate({height: '400px', opacity: '0.4'}, "slow");
        div.animate({width: '200px', opacity: '0.8'}, "slow");
          $(".ptext2").text("Хроническая болезнь не означает конец света, это просто означает, что вы играете жизнь в сложном режиме. Мы можем дать вам несколько экспертных упражнений, чтобы вы были готовы к вызову..");
        
          infoBlock2 = true;
          
          var div = $(".flitskaart1");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext1").text("");
         $(".ptext1").prepend('<i class="  fa fa-5x fa-wheelchair"></i>');
         
        infoBlock1 = false;
          
          var div = $(".flitskaart3");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext3").text("");
         $(".ptext3").prepend('<i class="fa fa-5x fa-user-md"></i>');
         
        infoBlock3 = false;
          
          var div = $(".flitskaart");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext").text("");
         $(".ptext").prepend('<i class="  fa fa-4x fa-heartbeat"></i>');
         
        infoBlock = false; 
      }
      else {
         var div = $(".flitskaart2");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext2").text("");
         $(".ptext2").prepend('<i class="fa fa-5x fa-stethoscope"></i>');
         
        infoBlock2 = false;     
      }
    
    });
   
   var infoBlock3 = false;
    $(".flitskaart3").click(function(){
       if (!infoBlock3) {
        var div = $(".flitskaart3");
        div.animate({height: '450px', opacity: '0.4'}, "slow");
        div.animate({width: '200px', opacity: '0.8'}, "slow");
          $(".ptext3").text("Мы изучили осанку, состав тела и стиль бега лучших спортсменов России. Мы используем эту информацию для анализа нашего клиента и предоставления полезных советов и экспертных упражнений.");
        
          infoBlock3 = true;
          
          var div = $(".flitskaart1");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext1").text("");
         $(".ptext1").prepend('<i class="  fa fa-5x fa-wheelchair"></i>');
         
        infoBlock1 = false;
          
          var div = $(".flitskaart2");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext2").text("");
         $(".ptext2").prepend('<i class="fa fa-5x fa-stethoscope"></i>');
         
        infoBlock2 = false;
          
          var div = $(".flitskaart");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext").text("");
         $(".ptext").prepend('<i class="  fa fa-4x fa-heartbeat"></i>');
         
        infoBlock = false; 
      }
      else {
         var div = $(".flitskaart3");
        div.animate({height: '150px', opacity: '0.4'}, "slow");
        div.animate({width: '150px', opacity: '0.8'}, "slow");
         $(".ptext3").text("");
         $(".ptext3").prepend('<i class="fa fa-5x fa-user-md"></i>');
         
        infoBlock3 = false;     
      }
    
    });
});