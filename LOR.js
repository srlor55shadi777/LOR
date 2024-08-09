addEventListener ( "DOMContentLoaded" ،  دالة ( )  {
     الفصول  الثابتة =  [
        {  المعرف : 'F1.html' ,  العنوان : 'الفصل 1'  } ,
        {  المعرف : 'F2.html' ,  العنوان : 'الفصل 2'  } ,
        {  المعرف : 'F3.html' ,  العنوان : 'الفصل 3'  } ,
        // أضف فصولًا جديدة هنا حسب الحاجة
    ] ؛
المستند . getElementById ( "send-btn" ) . addEventListener ( "click" ،  sendMessage ) ;

    const  chapterButtonsContainer  =  document.getElementById ( ' chapter-buttons ' ) ;
دالة  sendMessage ( )  {
    const  userInput  =  document . getElementById ( "إدخال المستخدم" ) ;
    const  message  =  userInput . value . trim ( ) ;

    وظيفة  عرض الفصول ( chaptersToDisplay )  {
        الفصل الأزرارالحاوية . الداخليHTML  =  '' ;
        الفصول لعرضها . لكل ( الفصل  =>  {
            const link = document.createElement('a');
            الرابط . href  =  الفصل . id ؛
            الرابط . textContent  =  الفصل . العنوان ;
            chapterButtonsContainer .appendChild ( رابط ) ؛​
        } ) ;
    إذا  ( الرسالة  !==  "" )  {
        addMessageToChat ( الرسالة ،  "رسالة المستخدم" ) ؛
        userInput . value  =  "" ;
        التمرير إلى الأسفل ( ) ;
    }
}

    // عرض جميع الفصول مبدئيًا
    عرض الفصول ( الفصول ) ؛
} ) ;
وظيفة  handleQuickReply ( الرد )  {
    addMessageToChat ( الرد ،  "رسالة المستخدم" ) ;

    إذا  ( رد  ===  "من هو مطورات لور؟" )  {
        addMessageToChat ( 'مطور تطبيقات لور هو لوفي|لور <a href="https://wa.me/966546999093" target="_blank">+966 54 699 9093</a>' ,  "bot-message" ) ;
    }  else  if  ( رد  ===  "ماذا يقدم التطبيق!" )  {
        addMessageToChat ( 'تطبيقات لور يقدم العديد من المميزات:\n1- عرض الروايات الخاصة به (كتابة الروايات الواضحة من فريق لور)\n2- العاب متنوعةه\n3- تحديثات إضافاته جديده ومختلفه\n4- دردشة للتحدث مع الاخرين' ,  "bot-message " ) ؛
    }

    التمرير إلى الأسفل ( ) ;
}

دالة  addMessageToChat ( الرسالة ،  اسم الفئة )  {
    const  chatBox  =  document . getElementById ( "chat-box" ) ;
    const  messageElement  =  document .createElement ( "div " ) ;
    messageElement . className  =  `message ${ className } ` ;
    عنصر الرسالة . InnerHTML  =  رسالة ;
    chatBox .appendChild ( messageElement ) ;​
}

دالة  scrollToBottom ( )  {
    const  chatBox  =  document . getElementById ( "chat-box" ) ;
    chatBox . scrollTop  =  chatBox . scrollHeight 
