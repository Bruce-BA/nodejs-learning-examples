

$(document).ready(function () {

    $("#btn_adduser").click(function () {
        // alert('call ajax method success!');
        $.post("/addUser", function (data, status) {
            // alert("Data: " + data + "\nStatus: " + status);

            $("#result").fadeOut(1000)

            var obj = JSON.parse(data);
            console.log(obj);

            var trlist = '';

            $.each(obj, function (i, item) {
                console.log(item.name);
           
             trlist +=  `<tr>
                            <td>${item.name}</td>
                            <td>${item.password}</td>
                            <td>${item.profession}</td>
                            <td>${item.id}</td>
                        </tr>`;

                      //  alert(trlist);

            });


         var table =   `<table style="width:100%">
                <tr  class="table-header"> 
                    <td>name</td>
                    <td>password</td>
                    <td>professional</td>
                    <td>id</td> 
                </tr>
            
                 
                
                ${trlist}
           
             </table>`


             $("#test").fadeOut(1000);
            $('#test').html(table);
            $("#test").fadeIn(1000);

            var jsontext = JSON.stringify(JSON.parse(data), undefined, 2);

            $('#result').text(jsontext);
            $("#result").fadeIn(1000);
        });



        // fetch('/addUser', {
        //   method: 'POST',
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({ "id": 78912 })
        // })
        //   .then(response => response.json())
        //   .then(response => console.log(JSON.stringify(response)))



    });

});
