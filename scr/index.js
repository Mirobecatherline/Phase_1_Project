const title= document.getElementById("title");
const product_image= document.getElementById("image");
const price= document.getElementById("price");
const description= document.getElementById("description");
const textarea= document.getElementById("text_input");
const btn=document.getElementsByTagName("button");
const select=document.querySelector('select');
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{   
                console.log(json);
                
                select.addEventListener('change',()=>{
                    const newArray = json.filter(function (el){return el.category ===select.value;})
                    console.log(newArray);
                    let data="";
                newArray.map((values)=>{
                    data+=`
            <div id="cloth">    
                <h3 id="title">${values.title}</h3>
                <img src="${values.image}" alt="product image" id="image">
                <h3>Price: <span id="price">10.5</span></h3>
                <p class="font">Description: <span id="description" >${values.description}</span></p>
                <p class="font">Category: <span id="category" >${values.category}<p></h3>
                <p>Like <span id="like_emoji">&#x2661</span> </p>

            </div>
                `; 
                
                
                });
                document.getElementById("cloth_collection").innerHTML=data; 
  
                const likeemoj=document.querySelectorAll('#like_emoji');
                like_property(likeemoj);
                
                const enlarge=document.querySelectorAll('#title');
                enlarge_title_property(enlarge);

               /* const product_review=document.querySelectorAll('.class1');
                product_review.forEach((e)=>{    
                   e.addEventListener('submit',box2=>{
                        box2.preventDefault();
                            const exact=box2.target;
                            const text2= exact.getElementsByTagName('textarea');
                            //const result=text2.value;
                            //console.log(result);
                            const review_text=document.querySelector('#review');
                            const list=document.createElement('li'); 
                            
                            list.innerText=text2.value;
                            const created_list=review_text.appendChild(list); 
                     
                              
                        
                    })
                })*/
                
                });
            
                const product_review=document.querySelector('.class1');   
                   product_review.addEventListener('submit',box2=>{
                        box2.preventDefault();
                            
                            const text2=document.getElementById('product_review');
                            const review_text=document.querySelector('#review');
                            const list=document.createElement('li');                 
                            list.innerText=text2.value;
                            const created_list=review_text.appendChild(list); 
                            text2.value=" "
                         
                    }); 
                    
                
 })            
            .catch(err=>console.log(err))

  function like_property(element) {
    element.forEach((eve)=>{  
        eve.addEventListener('click',(box1)=>{
            const box=box1.target;
            
            if (box.innerText===EMPTY_HEART) {
                box.innerText=FULL_HEART;
            }
            else {
                box.innerText=EMPTY_HEART;
            }
        })
    });
  }
 function enlarge_title_property(mouse) {
    mouse.forEach(element => {
        element.addEventListener('mouseover',over=>{
            const over1=over.target;
            over1.style.fontSize = '2rem';
        })
        element.addEventListener('mouseout',over=>{
            const over1=over.target;
            over1.style.fontSize = '1.2rem';
        })
    });
 }      