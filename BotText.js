msg.payload.text="";
if(msg.payload.context.webhook_result_1){
    for(var i in msg.payload.context.webhook_result_1.results){
    msg.payload.text=msg.payload.text+'\n'+msg.payload.context.webhook_result_1.results[i].text;
}
    msg.payload=msg.payload.text;
}

else
msg.payload = msg.payload.output.text[0];
return msg;