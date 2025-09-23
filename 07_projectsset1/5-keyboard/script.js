
const insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
    console.log(e)
    insert.innerHTML= `<div class = 'color'>
    <table border="1">
  <thead>
    <tr>
      <th>Key</th>
      <th>keyCode</th>
      <th>code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${e.key===' '?'Space':e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
   
  </tbody>
</table>

    
    </div>`;
});

// *************** here are my Learning ********************

// 1. Here i learn about 'window' object and properties :
//  * key : this property tell which key is pressed 
//  * keyCode : this property tell what is the key Code of the key,(ASSCI)
//  * code : this property tell what is the code of the key.