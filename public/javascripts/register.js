console.log(12);

async function renGister(e) {
    
    try {
        let avartar = $('#form-avartar')[0]
        const data = new FormData(avartar)
        let email = $('#eMail').val()
        let passWord = $('#passWord').val()
        let name = $('#userName').val()


        let resAvartar = await $.ajax({
            url: '/api/users/upAvartar',
            type: 'POST',
            data:  data ,
            processData: false,
            contentType:false 
            
        })
        console.log(21, resAvartar.avatar,22);
        let res = await $.ajax({
            url: '/api/users/resgister',
            type: 'POST',
            data: { email, passWord, name, avartar: resAvartar.avatar },
        })
        
        // let resAvartar = await $.ajax({
        //     url: '/api/users/resgister',
        //     type: 'POST',
        //     data: data,
           
            
        // }) 
        // console.log(22, resAvartar);

        console.log(16, res);

        if (res.status === 400) {
            return 'ok'
            alert(res.mesage)
        }


    } catch (error) {
        console.log(24, error);
        try {
            let status = await error.status 
            // if(status === 400){return alert(error.responseJSON.mesage)}
        } catch (er) {
            console.log(er);
        }
    }
}


