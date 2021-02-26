let navItems=document.querySelectorAll('a')
  navItems.forEach((item)=>{
   let currentWindowLocation=window.location.href
   let linkWindowLocation=item.href
   if(currentWindowLocation===linkWindowLocation){
     item.style.color='black'
   }
  })
  
async function myFunction() {
  try {
    let userData = {
      name: '',
      nationality: '',
      idNumber: '',
      idType: '',
      contact: '',
      assignedRoom:''
      
    }
    const inputData = document.querySelectorAll("input")
  
    inputData.forEach((item) => {
      userData[`${item.name}`]=`${item.value}`;
      item.value = null
    })

    const res = await fetch('http://localhost:8000/api/customer/registerNewCustomer', {
      method: 'POST',
      headers: {
        "Content-Type":'application/json'
      },
      body:JSON.stringify(userData)
    })
  
    const responseData = await res.json()
    if (responseData.status === "success") {
      alert('Customer Checked in successfully')
      window.location.replace('http://localhost:8000/')
    }
  }
  catch(error) {
    console.log(error)
  }
  
}