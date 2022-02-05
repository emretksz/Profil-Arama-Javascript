class Profile{

    constructor(){
        this.clienid='',
        this.clienidSecret=''
    }
    async getProfile(userName){
        const profileRespone = await fetch(`https://jsonplaceholder.typicode.com/users?username=${userName}`);
        const data= await profileRespone.json();

        const todoResponse= await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${data[0].id}`)
        const todo= await todoResponse.json();
        return{
            data,
            todo
        } 
    }
}