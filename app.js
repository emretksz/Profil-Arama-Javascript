const profile= new Profile();
const ui = new  UI();
const searchProfile= document.querySelector('#searchProfile');
let sayac=0;

searchProfile.addEventListener('keyup',(event)=>{
    ui.clear();
    let text= event.target.value;
if (text!=='') {
    profile.getProfile(text)
    .then(response=>{
        
        if (response.data.length===0) {
            ui.showAlert(text);
        }
        else{
        
               ui.showProfile(response.data[0]);
               ui.showTodo(response.todo);
        }

    }).catch(err=>{
        ui.showAlert(text);
    })
}

})