class UI{
    constructor(){

        this.profileContainer=document.querySelector('#profileContainer');
        this.error= document.querySelector('#error'); 
    }
     showProfile(profile) {
            this.profileContainer.innerHTML=`
            
            <div class="card card-body">
                     <div class="row">
                     <div class="col-md-3">
                    <a href="ttps://placeholder.com"><img src="https://via.placeholder.com/300.png/09f/fff"class="img-thumbnail" /></a>
                     </div>
                     <div class="col-md-9">
                
                        <h4> Contact</h4>
                        <ul class="list-group">
                        <li class="list-group-item">
                        Name: ${profile.name}
                        </li>
                        <li class="list-group-item">
                        Username: ${profile.username}
                        </li>
                        <li class="list-group-item">
                        Mail: ${profile.email}
                        </li>
                        <li class="list-group-item">
                        Adres:
                         ${profile.address.street}
                         ${profile.address.city}
                         ${profile.address.zipcode}
                         ${profile.address.suite}
                        </li>
                        <li class="list-group-item">
                        Phone: ${profile.phone}
                        </li>
                        <li class="list-group-item">
                        Website: ${profile.website}
                        </li>
                        <li class="list-group-item">
                        Company Name: ${profile.company.name}
                        </li>
                        </ul>
                        <h4 class="mt-4">Todo list</<h4>
                        <ul id="todo"class="list-group">

                        </ul>
                     </div>
                     </div>
            </div>
            `;
    }
    showAlert(text){
        this.error.innerHTML=`${text} bulunamadı`
    }

    showTodo(todo){

        let html="";
        todo.forEach(item => {
            
            if (item.completed) {
                
                html+=`<li class=" list-group-item bg-success">
                        ${item.title}
                        </li>
                `;
            }
            else{
       
                html+=`<li class="list-group-item bg-secondary">
                        ${item.title}
                        </li>
                `;
            }

        });

        this.profileContainer.querySelector('#todo').innerHTML=html;

    }
    clear(){
        this.profileContainer.innerHTML="";
        this.error.innerHTML="";
    }

}