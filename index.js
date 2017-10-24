var i;

function simulateMouseEvents(element, eventName) {
    var mouseEvent = document.createEvent('MouseEvents');
    mouseEvent.initEvent(eventName, true, true);
    element.dispatchEvent(mouseEvent);
}

setTimeout(() => {
    i = setInterval( () => {
        var conversas = document.querySelectorAll( '.chat.unread' );
        conversas.forEach( ( div ) => {
            var group = div.querySelector( '.chat-body .chat-secondary .chat-status span._2_LEW span.sender' )
            if( !group ){
                simulateMouseEvents( div, 'mousedown' )
                setTimeout( () => {
                    var lastMessage = document.querySelector( '#main > .pane-body > .copyable-area > .pane-chat-msgs .msg:last-child > .message' );
                    
                    if ( lastMessage.classList.contains('message-in') ) {
                        var chatUser = document.querySelector( '.pane-chat-header .chat-body .chat-main .chat-title span' ).title
                        var botFrase = `Olá, ${chatUser}. Você está falando com um robô. \nNo momento, a pessoa desejada não está podendo responder, mas em breve ela retornará. \nEnquanto isso, eu visualizarei as mensagens :D`;
                        window.InputEvent = window.Event || window.InputEvent;
                        
                        var event = new InputEvent( 'input', {
                            bubbles: true
                        });

                        var textbox = document.querySelector('#main > footer > div.block-compose > div.input-container > div.pluggable-input.pluggable-input-compose > div.pluggable-input-body.copyable-text.selectable-text');
                        textbox.textContent = botFrase;
                        textbox.dispatchEvent( event );
                        
                        setTimeout( () => {
                            document.querySelector( "button.compose-btn-send" ).click();
                        }, 1000)
                    }
                }, 1800000);
            }
        })
    }, 2000)
}, 10000)
