

const inPayment = document.querySelectorAll('.in-payment__item');

inPayment.forEach(item => {
  item.onclick = function () {
    let clipboard = this.querySelector('.in-payment__clipboard');
    let modal = this.querySelector('.in-payment__modal');

    if(clipboard){    
      navigator.clipboard.writeText(clipboard.textContent.trim());
      modal.style.opacity = '1';
      setTimeout(() =>  modal.style.opacity = '0' , 700);
    }
  }
});

