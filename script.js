

function getRepository(){
    var x= document.getElementById("search1").value;
    console.log(x);
    let url= "https://api.github.com/users/"+x+"/repos";
    // let url="https://api.github.com/repos/sathish13898/task3/contents/PATH"
    let response = fetch(url);
    
    response.then(function(res){
        return res.json();
    })
    .then(function(res){
        repositories = res;
        console.log(repositories);
        createRepositories(repositories);
    })
    response.catch(function (res){
        console.log('404');
    })
    
    
    
}



function createRepositories(res){
    // console.log(res);
    let div=document.createElement('div');
    div.setAttribute('class','container-fluid mt-3');
    let table=document.createElement('table');
    table.setAttribute('class','table table-bordered');
    let thead=document.createElement('thead');
    let tr=document.createElement('tr');
    tr.setAttribute('class','table-info');
    let th1=document.createElement('th');
    th1.setAttribute('scope','col');
    th1.innerHTML='ID';
    let th2=document.createElement('th');
    th2.setAttribute('scope','col');
    th2.innerHTML='Repositorie Name';
    let th3=document.createElement('th');
    th3.setAttribute('scope','col');
    th3.innerHTML='URL';
    let th4=document.createElement('th');
    th4.setAttribute('scope','col');
    th4.innerHTML='Language';
    let tbody=document.createElement('tbody');
    tr.append(th1,th2,th3,th4);
    thead.append(tr);
    table.append(thead,tbody);
    div.append(table);
    document.body.append(div);
    
    res.forEach(element => {
        // console.log(element.id);
        let tr2= document.createElement('tr');
        let td1=document.createElement('td');
        td1.innerHTML=element.id;
        let td2=document.createElement('td');
        // td2.setAttribute('onclick','createfile(elemant.name)');
        let anchor = document.createElement('button');
        let temp=element.name;
        anchor.setAttribute('value',''+temp+'')
        anchor.setAttribute('onclick','createfile(value)');
        // anchor.setAttribute('value','element.name');
        anchor.innerHTML=element.name;
        td2.append(anchor);
        // td2.innerHTML=element.name;
        let td3=document.createElement('td');
        td3.innerHTML=element.html_url;
        let td4=document.createElement('td');
        td4.innerHTML=element.language;
        tr2.append(td1,td2,td3,td4);
        tbody.append(tr2);
    });
    
    
    
}


function createfile(data){
    var x= document.getElementById("search1").value;
    console.log(x);
    var request = new XMLHttpRequest();
request.open('GET','https://api.github.com/repos/'+x+'/'+data+'/contents/',true);

request.send();

request.onload = function(){
    var data1 = JSON.parse(this.response);
    let ul= document.createElement('ul');
    ul.setAttribute('class','list');
    data1.forEach(i=>{

        let li=document.createElement('li');
        li.innerHTML=i.name;
        ul.append(li);
    })
    document.body.append(ul);
    console.log(data1);

}
}
