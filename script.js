const inputfield=document.querySelector('.input');
const output=document.querySelector('.output');
let show=true;
function toggle(){
    if(show)
        {
            inputfield.style.display = "none";
            show=false;

            output.innerHTML=`
            <div class="personal">
             <div class="main">
             <h3>Name:-${inputfield["Name"].value}</h3>
             <h3>Age:-${inputfield["age"].value}</h3>
             <h3>Phone:-${inputfield["phone"].value}</h3>
             <h3>E-mail:-${inputfield["Email"].value}</h3>
             <h3>Address:-${inputfield["address"].value}</h3>
             </div>
             <div class="again">
             <h3>GITHUB</h3>
             <p>${inputfield["git"].value}</p>
             <h3>LINKED-IN</h3>
             <p>${inputfield["link"].value}</p>
             <h2>SKILLS:-</h2>
             <p>${inputfield["skills"].value}</p>
             <h2>Work Experience:-</h2>
             <p>${inputfield["wex"].value}</p>
             <h2>Education:-</h2>
             <p>${inputfield["ed"].value}</p>
             </div>
            </div>
             <div class="btn">
             <button onclick="print()">Print Resume</button>
             </div>
             `
             let imgage=document.getElementById('personal');
             const files= profilePicture.files;
             if(!files|| files.length===0)
                {
                    imgage.textContent="no image";
                    return;
                }
            const file=files[0];
            const reader = new FileReader();
            reader.onload=function (){
                const Img = reader.result;
                displayImage(Img);
            };
            reader.readAsDataURL(file);
            function displayImage(Img){
                const img = document.createElement('img');
                img.src = Img;
                img.alt = "uploaded image";
                img.style.width = "150px";
                img.style.height = "150px";
                img.style.borderRadius="50%";

                output.appendChild(img);
                const existing = output.firstChild;
                output.insertBefore(img, existing);
            }
            }
        
    else
        {
            inputfield.style.display = "block";
            show=true;
            output.innerHTML="";
        }
    }
