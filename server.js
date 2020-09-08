const io=require('socket.io')(5000)
io.on('connection',socket=>{
    const id=socket.handshake.query.id
    socket.join(id)

    socket.on('send-message',({recipients,text})=>{
        recipients.forEach(element => {
            const newRecipients=recipients.filter(r=>r!==element)
            newRecipients.push(id)
            socket.broadcast.to(element).emit('receive-msg',
            {recipients:newRecipients,sender:id,text})
        });
    })
})