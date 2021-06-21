import jca_filter from  './../esm/index.js';

example.addEventListener(
    'click',(e)=>content.value="('field1,eq,val1' OR 'field2,eq,val2') AND 'field3,eq,val3'"
);
const validateCopy=(valid)=>{
  const back=copy.style.background;
  copy.style.background=valid?'lightgreen':'red';
  setTimeout(()=>copy.style.background=back,200);
}
copy.addEventListener('click',
  ()=> {
    var text= generated.innerText;
    navigator.clipboard.writeText(text).then(function() {
      validateCopy(true);
    }, function() {
      validateCopy(false);
    });

  }
);
const bold=t=>`<span style="font-weight:bold">${t}</span>`;
generate.addEventListener(
    'click',(e)=>{
        generated.innerHTML='';
        if (content.value) {
            let g=jca_filter(content.value);
            let mm=Object.entries(g).map(
                ([k,v])=>v.map(v=>bold(k+'=')+v).join('&')
            ).join('&');
            generated.innerHTML=mm;
            container.style.display='flex';
        }
    }
)
