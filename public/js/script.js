let navItems=document.querySelectorAll('a')
  navItems.forEach((item)=>{
   let currentWindowLocation=window.location.href
   let linkWindowLocation=item.href
   if(currentWindowLocation===linkWindowLocation){
     item.style.color='black'
   }
  })