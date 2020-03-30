$(document).ready(function(){
        var data = [10,20,30,40]
        $.ajax({
            url:`/predict_api`,
            method:'post',
            data:{col1:10,col2:20,col3:30,col4:40},
            success: function(result){
                console.log("OK",result)
                return result;
        }});
})